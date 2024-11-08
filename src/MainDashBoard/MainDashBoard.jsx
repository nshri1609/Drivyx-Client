import React, { useState } from 'react';
import { FaLocationDot } from "react-icons/fa6";
import { IoIosCreate } from "react-icons/io";
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import { useLocation } from 'react-router-dom';

import "./MainDashBoard.css";

const MainDashBoard = () => {

  const location = useLocation();
  const { user } = location.state || {};  // Assuming you pass `user` in location.state

  const [selectedSection, setSelectedSection] = useState('profile');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const renderContent = () => {
    switch (selectedSection) {
      case 'Imparts Projects':
        return <div>All Imparts Projects</div>;
      case 'Services':
        return <div>Services currently not available</div>;
      case 'Jobs':
        return <div>Jobs currently not available</div>;
      case 'Products':
        return <div>Products currently not available</div>;
      default:
        return null;
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className='MainDashBoard'>
      <Navbar />
      <div className='MainDashBoard-header'>
        <div className='UserSettings-headers'>
          <div className='UserSettings-users'>
            <div className='UserSettings-users-conetent'>
              <h1>Welcome {user?.username || 'User'}</h1>  {/* Displaying username */}
              <p>Join the movement. Inspire support. Create a better future.</p>
              <p>Create and launch your first ESG project today to drive positive change</p>
            </div>
            <button className='UserSettings-users-conetent-button' onClick={openModal}>
              <IoIosCreate size={20}/> Create
            </button>
          </div>
          <div className='UserSettings-sections'>
            {['Imparts Projects', 'Services', 'Jobs', 'Products'].map((section) => (
              <h3
                key={section}
                onClick={() => setSelectedSection(section)}
                className={selectedSection === section ? 'selected' : ''}
              >
                {section.charAt(0).toUpperCase() + section.slice(1).replace(/([A-Z])/g, ' $1')}
              </h3>
            ))}
          </div>
          <hr />
          {renderContent()}
        </div>
      </div>

      {/* Conditionally render Product section */}
      {selectedSection === 'Imparts Projects' && (
        <div className='ProductFilter-header-product MainDashBoard-New'>
          <div className='ProductFilter-header-productOne'>
            <img src="https://img.freepik.com/free-vector/hand-drawn-web-developers_23-2148819604.jpg" alt="" />
            <h2>Drivyz Product</h2>
            <h3>Project Description</h3>
            <p>Lorem ipsum dolor sit amet , ipsam hic, quia psum atque voluptates autem, molestiae architecto laboriosam, doloremque qui error illo maiores sequi! Repellat eligendi modi commodi, eius aut dolorem.</p>
            <div className='ProductFilter-header-location'>
              <h2><FaLocationDot /></h2>
              <h2>Australia</h2>
            </div>
            <button>Support Now</button>
          </div>

            {/* two */}

          <div className='ProductFilter-header-productOne'>
            <img src="https://img.freepik.com/free-vector/hand-drawn-web-developers_23-2148819604.jpg" alt="" />
            <h2>Drivyz Product</h2>
            <h3>Project Description</h3>
            <p>Lorem ipsum dolor sit amet , ipsam hic, quia psum atque voluptates autem, molestiae architecto laboriosam, doloremque qui error illo maiores sequi! Repellat eligendi modi commodi, eius aut dolorem.</p>
            <div className='ProductFilter-header-location'>
              <h2><FaLocationDot /></h2>
              <h2>Australia</h2>
            </div>
            <button>Support Now</button>
          </div>

          {/* three */}

          <div className='ProductFilter-header-productOne'>
            <img src="https://img.freepik.com/free-vector/hand-drawn-web-developers_23-2148819604.jpg" alt="" />
            <h2>Drivyz Product</h2>
            <h3>Project Description</h3>
            <p>Lorem ipsum dolor sit amet , ipsam hic, quia psum atque voluptates autem, molestiae architecto laboriosam, doloremque qui error illo maiores sequi! Repellat eligendi modi commodi, eius aut dolorem.</p>
            <div className='ProductFilter-header-location'>
              <h2><FaLocationDot /></h2>
              <h2>Australia</h2>
            </div>
            <button>Support Now</button>
          </div>

          {/* Additional Product items here... */}
        </div>
      )}
      
      {/* Modal for creating items */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>Create {selectedSection}</h2>
            <p>Fill out the form to create a new {selectedSection}.</p>
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      )}

      <Footer/>
    </div>
  );
};

export default MainDashBoard;






