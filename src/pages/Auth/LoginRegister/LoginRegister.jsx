import React, { useState } from 'react';
import './LoginRegister.css'; 
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaEnvelope } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { FaLock } from "react-icons/fa";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginRegister = () => {
  const [isSignUpMode, setIsSignUpMode] = useState(false);
  const [formData, setFormData] = useState({ username: '', email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [user, setUser] = useState(null); 
  const navigate = useNavigate();

  const toggleSignUpMode = () => {
    setIsSignUpMode(!isSignUpMode);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage(''); 

    try {
      const response = await axios.post('https://drivyxdatabase-6q2j.onrender.com/api/auth/register', formData);
      // console.log('User registered:', response.data);
      toggleSignUpMode(); 
    } catch (error) {
      // console.error('Registration error:', error.response?.data || error.message);
      setErrorMessage('Registration failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage(''); 

    try {
      const loginResponse = await axios.post('https://drivyxdatabase-6q2j.onrender.com/api/auth/login', {
        email: formData.email,
        password: formData.password,
      });
      // console.log('User logged in:', loginResponse.data);

      
      const userResponse = await axios.get('https://drivyxdatabase-6q2j.onrender.com/api/auth/user', {
        headers: { Authorization: `Bearer ${loginResponse.data.token}` }
      });

      // console.log('User data fetched:', userResponse.data);

      setUser(userResponse.data);

      navigate('/mainDashboard', { state: { user: userResponse.data } });
    } catch (error) {
      console.error('Login error:', error.response?.data || error.message);
      setErrorMessage(error.response?.data?.message || 'Login failed. Please check your credentials.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`container ${isSignUpMode ? 'sign-up-mode' : ''}`}>
      <div className="forms-container">
        <div className="signin-signup">
          {/* Sign In Form */}
          <form className="sign-in-form" onSubmit={handleLogin}>
            <h2 className="title">Sign in</h2>
            <div className="input-field">
              <i className="fas fa-envelope"><FaEnvelope /></i>
              <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"><FaLock /></i>
              <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
            </div>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            <input type="submit" value={loading ? "Logging in..." : "Login"} className="btn solid" disabled={loading} />
            <p className="social-text">Or Sign in with social platforms</p>
            <div className="social-media">
              <a href="#" className="social-icon"><FaXTwitter /></a>
              <a href="#" className="social-icon"><FaGithub /></a>
              <a href="#" className="social-icon"><FaLinkedin /></a>
              <a href="#" className="social-icon"><FcGoogle /></a>
            </div>
          </form>

          {/* Sign Up Form */}
          <form className="sign-up-form" onSubmit={handleSignUp}>
            <h2 className="title">Sign up</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="text" name="username" placeholder="Username" onChange={handleChange} required />
            </div>
            <div className="input-field">
              <i className="fas fa-envelope"><FaEnvelope /></i>
              <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"><FaLock /></i>
              <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
            </div>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            <input type="submit" className="btn" value={loading ? "Signing up..." : "Sign Up"} disabled={loading} />
            <p className="social-text">Or Sign up with social platforms</p>
            <div className="social-media">
              <a href="#" className="social-icon"><FaXTwitter /></a>
              <a href="#" className="social-icon"><FaGithub /></a>
              <a href="#" className="social-icon"><FaLinkedin /></a>
              <a href="#" className="social-icon"><FcGoogle /></a>
            </div>
          </form>
        </div>
      </div>
      {/* Panels */}
      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>Welcome to Drivyx</h3>
            <p>Drivyx: Where Businesses Grow Responsibly</p>
            <button className="btn transparent" onClick={toggleSignUpMode}>Sign up</button>
          </div>
          <img src="https://i.ibb.co/6HXL6q1/Privacy-policy-rafiki.png" className="image" alt="" />
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3>Welcome to Drivyx</h3>
            <p>Drivyx: Where Businesses Grow Responsibly</p>
            <button className="btn transparent" onClick={toggleSignUpMode}>Sign in</button>
          </div>
          <img src="https://i.ibb.co/nP8H853/Mobile-login-rafiki.png" className="image" alt="" />
        </div>
      </div>
    </div>
  );
};

export default LoginRegister;
