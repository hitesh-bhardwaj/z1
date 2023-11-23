import React from 'react';
import styles from '@/styles/TermModal.module.css';

const TermModal = ({ term, onClose }) => {
  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalContentHead}>
          <div className={styles.modalImage}>
            <img src='/assets/blogs/blog-detail/ux-glossary/icon.png' alt='glossary image' title='glossary image'/>
          </div>
          <h3>{term.name}</h3>
        </div>
        <div className={styles.modalContentPara}>
          {term.description.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
        <div className={styles.modalClose}>
          <button onClick={onClose}>
            <img src='/assets/icons/form-close.svg' alt='Modal Close Icon' title='Modal'/>
          </button>
        </div>
      </div>
    </div>
    
  );
};

export default TermModal;