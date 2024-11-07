import React from 'react'
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoWordpress } from "react-icons/io";
import { FaInstagramSquare } from "react-icons/fa";
import "./Footer.css"

const Footer = () => {
  return (
    <div className='Footer'>
      <div className='Footer-header'>
        <div>
          <h1>Product</h1>
          <h3>How to</h3>
          <h3>Pricing</h3>
        </div>

        {/* two */}

        <div>
          <h1>Company</h1>
          <h3>About</h3>
          <h3>Careers</h3>
          <h3>Contacts</h3>
          <h3>Partners</h3>
        </div>

        {/* three */}

        <div>
          <h1>Support</h1>
          <h3>Terms and Condition</h3>
          <h3>Privacy Policy</h3>
        </div>
      </div>
      <hr />
      <div className='Footer-icons'>
          <h2><FaXTwitter color='black' /></h2>
          <h2><FaGithub color='black' /></h2>
          <h2><FaInstagramSquare color='red' /></h2>
          <h2><FaLinkedin color='black' /></h2>
          <h2><IoLogoWordpress color='indigo' /></h2>
      </div>
      {/* <div>
        <p>�� 2024 Drivyx ESG Platform. All rights reserved.</p>
        <p>Made with <span>��</span> by Drivyx Team</p>
      </div> */}
    </div>
  )
}

export default Footer