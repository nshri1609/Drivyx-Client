import React, { useState } from 'react';
import DrivyxLogo from "../../assets/Drivyx-Logo.png";
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className='Navbar'>
      <div className='Navbar-header'>
        <div className='Navbar-header-contentOne'>
          <img src={DrivyxLogo} alt="Drivyx Logo" />
          <h2>Drivyx</h2>
        </div>

        {/* Hamburger icon for mobile */}
        <div className="Navbar-hamburger" onClick={toggleMenu}>
          {menuOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>

        {/* Navbar Links */}
        <div className={`Navbar-header-contentTwo ${menuOpen ? 'active' : ''}`}>
          <h2>Home</h2>
          <h2>Resources</h2>
          <h2>Clients</h2>
        </div>

        <div className='Navbar-header-contentThree'>
          <Link to="/loginRegister">
            <button>Sign In</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
