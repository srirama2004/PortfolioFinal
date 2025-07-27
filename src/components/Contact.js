import React, { useState } from 'react';
import './Contact.css';
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    suggestion: ''
  });

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thanks for your message! 💌');
    setFormData({ name: '', email: '', message: '', suggestion: '' });
  };

  return (
    <div className="contact-container glass-card">
      <h1 className="contact-title">Contact Me</h1>
      <p className="contact-description">Share your thoughts, suggestions, or just say hi 👋</p>

      <form onSubmit={handleSubmit} className="contact-form">
        {['name', 'email', 'message', 'suggestion'].map((field) => (
          <div key={field} className="form-group">
            <input
              type={field === 'email' ? 'email' : field === 'name' ? 'text' : 'text'}
              name={field}
              id={field}
              className="styled-input"
              required={field !== 'suggestion'}
              value={formData[field]}
              onChange={handleChange}
            />
            <label htmlFor={field} className="floating-label">
              {field.charAt(0).toUpperCase() + field.slice(1)}
            </label>
          </div>
        ))}
        <button type="submit" className="contact-button">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
