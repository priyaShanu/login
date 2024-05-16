import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from 'react-i18next';
import i18n from '../Languages/i18n'
import "./Login.css";
import logoImg from "../../assets/images/logo.jpg";

const LoginPage = () => {
    const navigate = useNavigate();
    const { t } = useTranslation();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [language, setLanguage] = useState("en");
    const [submitClicked, setSubmitClicked] = useState(false);

    useEffect(() => {
        i18n.changeLanguage('en');
      }, []);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        if (name === "email") {
            setEmail(value);
        } else if (name === "password") {
            setPassword(value);
        } else if (name === "language") {
            setLanguage(value);
            i18n.changeLanguage(value); 
        }
    };

    const handleLogin = () => {
        if (isEmailValid(email)) {
            navigate("/dashboard");
        }
        setSubmitClicked(true);
    };

    const isEmailValid = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    return (
        <div className="container vh-100 d-flex justify-content-center align-items-center">
            <div className="position-absolute top-0 end-0 p-4">
                    <label htmlFor="language" className="py-1">
                        Language
                    </label>
                    <select
                        name="language"
                        value={language}
                        onChange={handleInputChange}
                        className="form-control"
                    >
                        <option value="en">English</option>
                        <option value="ta">Tamil</option>
                    </select>
                    </div>
            <div className="row">
                <div className="col-lg-12">
                    <div className="shadow-lg">
                        <div className="card flex-grow-1 p-4">
                            <div className="p-4 d-flex justify-content-center align-items-center">
                                <img
                                    src={logoImg}
                                    alt="logo"
                                    className="img-fluid"
                                    width="30%"
                                    height="30%"
                                />
                            </div>
                            <div className="login-page">
                                <h1 className="text-center">
                                {t('login')}
                                </h1>

                                <div className="custom-input p-4">
                                    <div className="icon">
                                        <FontAwesomeIcon icon={faUser} />
                                    </div>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={email}
                                        placeholder={t('emailAddr')}
                                        onChange={handleInputChange}
                                        required
                                    />
                                   
                                    {submitClicked && !isEmailValid(email) && (
                                        <p className="error text-danger">
                                            {t('emailErr')}
                                        </p>
                                    )}
                                </div>
                                <div className="custom-input p-4">
                                <div className="icon">
                                        <FontAwesomeIcon icon={faLock} />
                                    </div>
                                    <input
                                        type="password"
                                        id="password"
                                        name="password"
                                        value={password}
                                        placeholder={t('password')}
                                        onChange={handleInputChange}
                                        required
                                    />
                                    
                                </div>
                                <button
                                    className="btn btn-outline-info rounded-pill px-5 py-1 d-block mx-auto"
                                    onClick={handleLogin}
                                >
                                    {t('login')}
                                </button>
                            </div>
                            <span className="text-secondary text-center py-2 pt-4"> {t('fPassword')} </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
