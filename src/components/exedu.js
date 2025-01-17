import React from 'react';
import './exedu.css';

const ExperienceEducation = () => {
  return (
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
  );
};

export default ExperienceEducation;
