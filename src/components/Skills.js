import React, { useState, useEffect } from 'react';
import './Skills.css';
import CertificateFlipBook from './CertificateFlipBook';
const categories = [
  {
    key: 'All',
    label: 'All Skills',
    icon: (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
        <path d="M12 2L15.09 8H21L16.18 12.26L18.27 18L12 14.27L5.73 18L7.82 12.26L3 8H8.91L12 2Z" />
      </svg>
    ),
  },
  {
    key: 'cs',
    label: 'Computer Science',
    icon: (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
        <path d="M4 6H20V18H4V6ZM2 4V20H22V4H2ZM10 8H14V10H10V8ZM10 12H14V14H10V12Z" />
      </svg>
    ),
  },
  {
    key: 'lang',
    label: 'Languages',
    icon: (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 
                10-4.48 10-10S17.52 2 12 2zm0 18
                c-4.41 0-8-3.59-8-8s3.59-8 
                8-8 8 3.59 8 8-3.59 8-8 8z"/>
      </svg>
    ),
  },
  {
    key: 'web',
    label: 'Web Tech',
    icon: (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
        <path d="M12 4C7.03 4 2.73 7.11 1 11.5
          C2.73 15.89 7.03 19 12 19s9.27-3.11 11-7.5
          C21.27 7.11 16.97 4 12 4zM6.76 16.24L4.5 12
          l2.26-4.24L12 13.5l-5.24 2.74zM17.24 16.24L12 13.5
          l5.24-5.74L19.5 12l-2.26 4.24z" />
      </svg>
    ),
  },
  {
    key: 'others',
    label: 'Design Tools',
    icon: (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
        <path d="M6 2v6h2v4h2v4h4v-4h2v-4h2V2H6zM4 22h16v-2H4v2z" />
      </svg>
    ),
  },
];

const skills = {
  cs: ['DSA', 'OOP','DBMS','Operating System','Machine Learning','Computer Networks', 'Embedded Systems'],
  lang: ['Java', 'Python', 'C++','C','JavaScript','SQL'],
  web: ['HTML', 'CSS','MongoDB','PostgreySql', 'React', 'Node.js','Express'],
  others: ['Github','Figma','Canva','Jamovi'],
};

const getAllSkills = () => Object.values(skills).flat();

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [visibleSkills, setVisibleSkills] = useState(getAllSkills());

  useEffect(() => {
    if (activeCategory === 'All') {
      setVisibleSkills(getAllSkills());
    } else {
      setVisibleSkills(skills[activeCategory]);
    }
  }, [activeCategory]);

  return (
    <div className="skills-gamified-container">
      <h1 className="skills-gamified-title">Skills</h1>

      <div className="category-buttons">
        {categories.map(({ key, label, icon }) => (
          <button
            key={key}
            className={`category-btn ${activeCategory === key ? 'active' : ''}`}
            onMouseEnter={() => setActiveCategory(key)}
            title={label}
          >
            {icon}
          </button>
        ))}
      </div>

      <div className="skills-display">
        {visibleSkills.map((skill, idx) => (
          <div
            key={idx}
            className="skill-card fade-in"
            style={{ animationDelay: `${idx * 100}ms` }}
          >
            <span>{skill}</span>
          </div>
        ))}
      </div>
    </div>
    
  );
};

export default Skills;
