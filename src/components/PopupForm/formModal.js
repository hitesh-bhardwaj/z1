import React, { useState } from 'react';
import ContactUs from './contactUs';
import { easeInOut, motion } from "framer-motion";

export default function Modal() {
  // Define a state variable to track the modal's display state
  const [modalOpen, setModalOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  }

  const handleMouseLeave = () => {
    setIsHovered(false);
  }

  // Function to open the modal
  const openModal = () => {
    setModalOpen(true);
  }

  // Function to close the modal
  const closeModal = () => {
    setModalOpen(false);
  }

  // Function to close the modal when clicking outside of it
  const handleOutsideClick = (event) => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  }

  return (
    <>
    {/* Your HTML content here */}
    <motion.div 
        className='popUpButton-div'
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 6.2, duration: 0.5, transition: easeInOut }}
        >
    <button 
      aria-label='open popup form'
      id="popUpButton" 
      onClick={openModal}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
      <img alt="Image" className='popUpImg'
        src={isHovered ? '/assets/icons/form-pen.gif' : '/assets/icons/form-pen.png'}
      />
    </button>
    </motion.div>
    {/* Modal */}
    <div
      id="PopUpMyModal"
      className={`PopUpmodal ${modalOpen ? 'visible' : ''}`}
    >
    <div className='PopUpContainer' onClick={handleOutsideClick}>
    <div className="PopUpmodal-content">
        {/* Your modal content here */}
        <div 
          data-cursor-size="60px"
          data-cursor-exclusion>
          <button
            aria-label='close popup form'
            onClick={closeModal}
            className="PopUpClose">
            <img loading='lazy' alt='close form' src='/assets/icons/form-close.svg' />
          </button>
        </div>
        <ContactUs />
      </div>
    </div>
    </div>
    </>
  );
}
