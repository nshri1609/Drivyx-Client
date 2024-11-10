import React, { useState, useEffect } from 'react';
import { FaLocationDot } from "react-icons/fa6";
import { IoIosCreate } from "react-icons/io";
import Footer from '../components/Footer/Footer';
import { useLocation } from 'react-router-dom';
import { fetchItemsByType, createItem } from '../api/Service';
import "./MainDashBoard.css";
import UserNav from '../components/Navbar/UserNav';
import "./Modal.css";



const Modal = ({ isOpen, onClose, item }) => {
  if (!isOpen || !item) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>X</button>
        <img src={item.imageUrl} alt={item.name} />
        <h2>{item.name}</h2>
        <p>{item.description}</p>
        <h3>Location</h3>
        <p>{item.location}</p>
        {item.additionalFields && (
          <>
            <h3>Years in Operation</h3>
            <p>{item.additionalFields.yearsInOperation || 'N/A'} years</p>
            <h3>Price</h3>
            <p>${item.additionalFields.price || 'N/A'}</p>
          </>
        )}
      </div>
    </div>
  );
}; 


const MainDashBoard = () => {
  const location = useLocation();
  const { user } = location.state || {};
  const [selectedSection, setSelectedSection] = useState('profile');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getItems = async () => {
      try {
        const items = await fetchItemsByType(selectedSection);
        setItems(items);
      } catch (error) {
        console.error('Error fetching items:', error);
      }
    };

    if (selectedSection !== 'profile') {
      getItems();
    }
  }, [selectedSection]);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleCreate = async (event) => {
    event.preventDefault();
    setLoading(true); // Start loading state

    const newItem = {
      type: selectedSection,
      name: event.target.elements.name.value,
      description: event.target.elements.description.value,
      location: event.target.elements.location.value,
      imageUrl: event.target.elements.imageUrl.value,
      additionalFields: {
        yearsInOperation: event.target.elements.yearsInOperation?.value,
        price: event.target.elements.price?.value,
        jobLocation: event.target.elements.jobLocation?.value,
      },
    };

    try {
      await createItem(newItem);
      closeModal();
      setSelectedSection(selectedSection); 
    } catch (error) {
      console.error('Error creating item:', error);
    } finally {
      setLoading(false); 
    }
  };

  const renderContent = () => {
    if (items.length === 0) {
      return (
        <div className="no-content">
          {/* <p>Content is not yet available.</p> */}
        </div>
      );
    }
  
    return (
      <div className='new'>
        {items.map((item) => (
          <div key={item._id} className='ProductFilter-header-productOne'>
            <img src={item.imageUrl} alt={item.name} />
            <h2>{item.name}</h2>
            <p className='ProductFilter-p'>{item.description}</p>
            <h3>Location</h3>
            <p>{item.location}</p>
            {selectedSection === 'Services' && (
              <>
                <h3>Years in Operation</h3>
                <p>{item.additionalFields?.yearsInOperation || 'N/A'} years</p>
                <h3>Price: ${item.additionalFields?.price || 'N/A'}</h3>
              </>
            )}
            <button onClick={() => openModal(item)}>View More</button>
           </div>
        ))}
      </div>
    );
  };


  
  return (
    <div className='MainDashBoard'>
      <UserNav />
      <div className='MainDashBoard-header'>
        <div className='UserSettings-headers'>
          <div className='UserSettings-users'>
            <div className='UserSettings-users-conetent'>
              <h1>Welcome {user?.username || 'User'}</h1>
              <p>Join the movement. Inspire support. Create a better future.</p>
              <p>Create and launch your first ESG project today to drive positive change</p>
            </div>
            <button className='UserSettings-users-conetent-button' onClick={openModal}>
              <IoIosCreate size={20} /> Create
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

      {/* Modal for creating items */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>Create {selectedSection}</h2>
            <form onSubmit={handleCreate} className='modal-overlay-form'>
              <input name="name" placeholder={`${selectedSection} Name`} required />
              <input name="description" placeholder={`${selectedSection} Description`} required />
              <input name="location" placeholder="Location" required />
              <input name="imageUrl" placeholder="Image URL" required />
              {selectedSection === 'Services' && (
                <>
                  <input name="yearsInOperation" placeholder="Years in Operation" type="number" />
                  <input name="price" placeholder="Price" type="number" />
                </>
              )}
              {selectedSection === 'Jobs' && <input name="jobLocation" placeholder="Job Location" />}
              <button type="submit" disabled={loading}>
                {loading ? 'Creating...' : 'Submit'}
              </button>
            </form>
            <button className='modal-content-button' onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
        <Modal isOpen={isModalOpen} onClose={closeModal} item={selectedItem} />

      <Footer />
    </div>
  );
};

export default MainDashBoard;
