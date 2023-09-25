import React, { useState } from 'react';
import ContactUs from './contactUs';
import { easeInOut, motion } from "framer-motion";
import Image from 'next/image';
import { Cursor } from "./../../../cursor/index";
import "react-creative-cursor/dist/styles.css";

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

  const resetFormCallback = () => {
    // Implement the logic to reset the form fields in this function
    // You can also call closeModal if needed
    // Example:
    closeModal(); // Close the modal when resetting the form
  };

  // Function to close the modal when clicking outside of it
  const handleOutsideClick = (event) => {
    if (event.target === event.currentTarget) {
      closeModal();
      resetForm();
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
      <Image 
        data-cursor-size='80px'
        data-cursor-exclusion
        width={100}
        height={100}
        className='popUpRotate'
        alt='Hire Us Image'
        src="/assets/icons/hire-us.svg"
      />
      <Image 
        height={50}
        width={50}
        alt="Image" className='popUpImg'
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
            <Image
              height={50}
              width={50} 
              priority={false} 
              alt='close form' 
              src='/assets/icons/form-close.svg' 
            />
          </button>
        </div>
        <ContactUs resetFormCallback={resetFormCallback} />
      </div>
    </div>
    </div>
    </>
  );
}
