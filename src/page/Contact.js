import React from 'react'
import './ContactDetails.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <div className="contact-info">
        <div className="contact-card">
          <h2>Address</h2>
          <p>123 Main Street</p>
          <p>New York, NY 10001</p>
        </div>
        <div className="contact-card">
          <h2>Phone</h2>
          <p>(123) 456-7890</p>
        </div>
        <div className="contact-card">
          <h2>Email</h2>
          <p>info@foodapp.com</p>
        </div>
      </div>
    </div>
  );
}

export default Contact