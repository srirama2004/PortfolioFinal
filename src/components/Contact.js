import React, { useState } from 'react';
import emailjs from 'emailjs-com';
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

  const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

  if (!emailRegex.test(formData.email)) {
    alert('❌ Please enter a valid Gmail address like: yourname@gmail.com');
    return;
  }

  emailjs.send('service_n76h4lx', 'template_o92b3mz', formData, '1tViiiCAuxPPFSRof')
    .then(() => {
      alert('📩 Message sent! Thanks for your feedback 💬');
      setFormData({ name: '', email: '', message: '', suggestion: '' });
    })
    .catch((error) => {
      console.error('FAILED...', error);
      alert('❌ Failed to send message. Please try again later.');
    });
};


  return (
    <div className="contact-container glass-card">
      <h1 className="contact-title">Contact Me</h1>
      <p className="contact-description">Share your thoughts, suggestions, or just say hi 👋</p>

      <form onSubmit={handleSubmit} className="contact-form">
        {['name', 'email', 'message', 'suggestion'].map((field) => (
          <div key={field} className="form-group">
            <input
              type={field === 'email' ? 'email' : 'text'}
              name={field}
              id={field}
              className="styled-input"
              required={field !== 'suggestion'}
              value={formData[field]}
              onChange={handleChange}
              placeholder=" "
            />
            <label htmlFor={field} className="floating-label">
              {field.charAt(0).toUpperCase() + field.slice(1)}
            </label>
          </div>
        ))}
        <button type="submit" className="contact-button">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
