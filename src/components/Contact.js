import React from 'react';
import linkedInImage from './pic/linkedin.jpg';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <h1 className="contact-title">Let's Connect</h1>
      <p className="contact-description">I'm always open to collaboration, feedback, or a simple hello 😊</p>

      <div className="contact-buttons">
        <a
          href="https://www.linkedin.com/in/srirama-v-b5bb32293/"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-button"
        >
          <img src={linkedInImage} alt="LinkedIn" className="linkedin-icon" />
          Message on LinkedIn
        </a>

        <a
          href="mailto:sriramavate2@gmail.com"
          className="contact-button email"
        >
          📧 Send an Email
        </a>
      </div>
    </div>
  );
};

export default Contact;
