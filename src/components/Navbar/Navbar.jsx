import React, { useState } from 'react';
import DrivyxLogo from "../../assets/Drivyx-Logo.png";
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle the menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='Navbar'>
      <div className='Navbar-header'>
        <div className='Navbar-header-contentOne'>
          <img src={DrivyxLogo} alt="Drivyx Logo" />
          <h2>Drivyx</h2>
        </div>
        <div className={`Navbar-header-contentTwo ${isMenuOpen ? 'active' : ''}`}>
          <h2>Home</h2>
          <h2>Resources</h2>
          <h2>Clients</h2>
        </div>
        <div className='Navbar-header-contentThree'>
          <Link to="/loginRegister">
            <button>Sign In</button>
          </Link>
        </div>

        <div className='Navbar-hamburger' onClick={toggleMenu}>
          {isMenuOpen ? (
            <FaTimes size={30} color="black" /> 
          ) : (
            <FaBars size={30} color="black" />  
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
