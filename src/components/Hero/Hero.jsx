import React from 'react';
import './Hero.css';

const Hero = () => {
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
          <button className='btnOne'>Marketplace</button>
          <button className='btnTwo'>Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
