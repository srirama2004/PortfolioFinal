import React, { useState } from 'react';
import './CertificateFlipBook.css';

const certificates = [
  {
    title: 'React Developer Certificate',
    description: 'Certified in advanced React.js concepts and performance optimization.',
    image: '/certificates/react-cert.jpg'
  },
  {
    title: 'Python for Data Science',
    description: 'Completed Python for data analysis and visualization.',
    image: '/certificates/python-cert.jpg'
  },
  {
    title: 'UI/UX Design Mastery',
    description: 'Certified from Figma Bootcamp covering UI systems and usability.',
    image: '/certificates/uiux-cert.jpg'
  }
];

const CertificateFlipBook = () => {
  const [flippedIndex, setFlippedIndex] = useState(null);

  const toggleFlip = (index) => {
    setFlippedIndex(index === flippedIndex ? null : index);
  };

  return (
    <div className="flipbook-section">
      <h2 className="flipbook-title">📜 Certificates</h2>
      <div className="flipbook-container">
        {certificates.map((cert, index) => (
          <div
            key={index}
            className={`flip-card ${flippedIndex === index ? 'flipped' : ''}`}
            onClick={() => toggleFlip(index)}
          >
            <div className="flip-inner">
              <div className="flip-front">
                <img src={cert.image} alt={cert.title} className="certificate-img" />
              </div>
              <div className="flip-back">
                <h3>{cert.title}</h3>
                <p>{cert.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CertificateFlipBook;
