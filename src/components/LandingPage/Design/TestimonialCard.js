// components/TestimonialCard.js
import React from 'react';

const TestimonialCard = ({ name, text }) => {
  return (
    <div className="testimonial-card">
      <p className="testimonial-text">{text}</p>
      <p className="testimonial-name">{name}</p>
      <style jsx>{`
        /* Add your CSS styles for the testimonial card here */
      `}</style>
    </div>
  );
};

export default TestimonialCard;