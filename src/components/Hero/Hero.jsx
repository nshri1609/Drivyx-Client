import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {

  const marketplace = () => {
    alert("Kindly login to explore our Services!");
  }

  return (
    <div className='Hero'>
      <div className="leaf leaf1"></div>
      <div className="leaf leaf2"></div>
      <div className="leaf leaf3"></div>
      <div className="leaf leaf4"></div>
      <div className="leaf leaf5"></div>
      <div className="leaf leaf6"></div>
      <div className="leaf leaf7"></div>
      <div className="leaf leaf8"></div>

      <div className='Hero-header'>
        <h1>Empowering Businesses to Lead Regeneration</h1>
        <p>
          Drivyx is where visionary businesses connect with regenerative practices that <br /> truly make a difference. We provide the tools to assess impact, optimize <br /> operations, and achieve 
          meaningful certification, helping you transition from <br /> sustainability to regeneration.
        </p>

        <div className='Hero-header-button'>
          <button className='btnOne' onClick={marketplace}>Marketplace</button>
          <Link to="/loginRegister">
            <button className='btnTwo'>Get Started</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
