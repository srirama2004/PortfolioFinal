import React from 'react';
import './expe.css';
import './exedu.css';
import { Link } from 'react-router-dom';
const Experience = () => {
  return (
    <div className="experience-container">
      <div className="experience-section">
      <h3>Experience</h3>
        <h4> Invengor Technologies </h4>
        <p>
          Working as a Machine Learning intern creating a medical service system using Python, Flask, ScikitLearn, and other ML tools.
        </p>
        <p>
          <strong>Projects:</strong>
          <ul>
            <li>
              Beta Medical Services - A Medical service provider integrated with ML models and many other features. To see more, please visit the projects section.
            </li>
          </ul>
        </p>
        <p>
          <strong>Skills:</strong>
          <ul>
            <li>Programming Languages: Python, HTML, JavaScript</li>
            <li>Technologies: Flask, PostgreSQL, TensorFlow, ScikitLearn</li>
          </ul>
        </p>
      </div>
      <div className="experience-education">
      
      {/* Education Section */}
      <div className="section education-section">
        <h1 className="section-title">Education</h1>
        <div className="timeline">
          <div className="timeline-item left">
            <h4>Higher Secondary</h4>
            <p className="timeline-date"> Christian High School (2019 – 2020)</p>
            <p>Completed with a grade of 98.5%.</p>
          </div>

          <div className="timeline-line"></div>

          <div className="timeline-item right">
            <h4>Pre University </h4>
            <p className="timeline-date">Mahatma Gandhi Memorial College (2020-2022)</p>
            <p>Grade 95%(Physics Maths Chemistry & ComputerScienece) .</p>
          </div>

          <div className="timeline-line"></div>

          <div className="timeline-item left">
            <h4>Under Graduate</h4>
            <p className="timeline-date">Manipal Institute of Technology (2022 - 2026)</p>
            <p>Pursuing B-tech in Information Technology with cgpa of 8.55.</p>
          </div>
        </div>
      </div>
    </div>
    </div>
    
  );
};

export default Experience;
