
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import Link and useNavigate
import './Header.css';

const Header = () => {
  const navigate = useNavigate(); // Get the navigate function

  const handleSkillsClick = () => {
    navigate('/skills'); // Programmatically navigate to the Skills page
  };
  const handleContactClick = () => {
    navigate('/contact'); // Programmatically navigate to the Contact page
  };
  const handleHomeClick = () => {
    navigate('/'); // Programmatically navigate to the Skills page
  };
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // Adjust the threshold if needed
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
     <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <ul className="nav-links">
        <li className="nav-item home">
        <span onClick={handleHomeClick} style={{ cursor: 'pointer', color: '#ffffff' }}>
            Home
          </span>
        </li>
        <li className="nav-item skills">
          <span onClick={handleSkillsClick} style={{ cursor: 'pointer', color: '#ffffff' }}>
            Certifications
          </span>
        </li>
        <li className="nav-item">
          {/* Opens resume.pdf directly when clicked */}
          <a 
            href="/resume.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ textDecoration: 'none', color: '#ffffff' }}
          >
            Resume
          </a>
        </li>
        <li className="nav-item contact">
          <span onClick={handleContactClick} style={{ cursor: 'pointer', color: '#ffffff' }}>
            Contact
          </span>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
