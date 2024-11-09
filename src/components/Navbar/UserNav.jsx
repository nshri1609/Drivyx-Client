import React, { useState, useEffect, useRef, useContext } from "react";
import DrivyxLogo from "../../assets/Drivyx-Logo.png";
import UserContext from '../../UserContext/UserContext';
import { Link, useNavigate } from 'react-router-dom';
import "./Navbar.css";

const UserNav = () => {
  const navigate = useNavigate();
  const { user, logout } = useContext(UserContext);

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className='Navbar'>
      <div className='Navbar-header'>
        <div className='Navbar-header-contentOne'>
          <img src={DrivyxLogo} alt="Drivyx Logo" />
          <h2>Drivyx</h2>
        </div>
        <div className='Navbar-header-contentTwo'>
          <h2>Home</h2>
          <h2>Resources</h2>
          <h2>Clients</h2>
        </div>
        <div className='Navbar-header-contentThree'>
          <button onClick={handleLogout}>Logout</button>
        </div>
      </div>
    </div>
  );
};

export default UserNav;
