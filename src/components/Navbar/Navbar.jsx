import React from 'react'
import DrivyxLogo from "../../assets/Drivyx-Logo.png"
import { Link } from 'react-router-dom'
import "./Navbar.css"

const Navbar = () => {
  return (
    <div className='Navbar'>
      <div className='Navbar-header'>
        <div className='Navbar-header-contentOne'>
          <img src={DrivyxLogo} alt="" />
          <h2>Drivyx</h2>
        </div>
        <div className='Navbar-header-contentTwo'>
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
  )
}

export default Navbar