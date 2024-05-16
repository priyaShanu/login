import React, { useEffect, useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import './Dashboard.css'

const Dashboard = () => {
  const navigate = useNavigate();
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    axios.get('https://dog.ceo/api/breeds/image/random')
      .then(response => {
        setImageUrl(response.data.message);
      })
      .catch(error => {
        console.error('Error fetching image:', error);
      });
  }, []);

  const logout = () => {
    console.log('Logging out...');
    navigate("/");
  };

  return (
    <div className="dashboard">
      <div className="position-absolute top-0 end-0 p-4">
                <div className="custom-input">
                   <button className='btn btn-default' onClick={logout}> Logout </button>
                </div>
            </div>
    <img src={imageUrl} alt="DashboardImg" className="img-fluid" />
  </div>
  );
};

export default Dashboard;
