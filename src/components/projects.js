import React from 'react';
import './projects.css';
import resortManagementImage from './pic/img1.jpeg'; // Adjust the filename to match your actual image
import icuAdmissionImage from './pic/img2.jpeg'; // Adjust the filename to match your actual image
import hosimage from './pic/hos.jpg'; // Adjust the filename to match your actual image
import textimage from './pic/text.png';
const Projects = () => {
  const projects = [
    {
      title: 'Resort Management',
      description: 'A website built with React.js for the frontend, Express.js for the backend, and PostgreSQL as the database that allows users to book rooms, hire taxis, and order utilities.',
      technologies: 'React.js, Express.js, PostgreSQL',
      link: 'https://github.com/srirama2004/SriHomeRepo/tree/main/Projects_sri/Resort_web', // Replace with your actual project link
      image: resortManagementImage, // Use the imported image
    },
    {
      title: 'ICU Admission Prediction',
      description: 'Built a project that predicts ICU admission of pediatric respiratory illness patients using machine learning algorithms.',
      technologies: 'Machine Learning, Python, TensorFlow',
      link: 'https://github.com/srirama2004/SriHomeRepo/tree/main/Projects_sri/Ml_projects/ICUadmissionPredictor', // Placeholder if not live yet
      image: icuAdmissionImage, // Use the imported image
    },
    {
        title: 'Secure Text Drive',
        description: 'A Secure Text Storage System, where users can store and retreive text files safely. Rsa encryption, Hashing and digital signatures are used to ensure safety.',
        technologies: 'Flask, PostgreSQL, RSA encryption',
        link: 'https://github.com/srirama2004/SriHomeRepo/tree/main/Projects_sri/Ml_projects/ICUadmissionPredictor', // Placeholder if not live yet
        image: textimage, // Use the imported image
      },
      {
        title: 'Beta Medical Service ',
        description: 'Web app integrated with ML models to predict blood donations. Features include patient appointments, test results, and blood donation predictions.',
        technologies: 'Machine Learning, Python, TensorFlow',
        link: 'https://github.com/srirama2004/SriHomeRepo/tree/main/Projects_sri/Ml_projects/ICUadmissionPredictor', // Placeholder if not live yet
        image: hosimage, // Use the imported image
      },
  ];

  return (
    <div className="parent1-container">
      {/* 3D Carousel Section */}
      <div className="carousel-containerp">
        <div className="carouselp">
        <div className="carouselpp">
  {projects.map((project, index) => (
    <div className="card-containerp" key={index}>
      <div className="cardp">
        <div className="card-contentp">
          <div className="card-imagep">
            <img src={project.image} alt={project.title} />
          </div>
          <div className="card-descriptionp">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p><strong>Technologies Used:</strong> {project.technologies}</p>
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                View
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  ))}
</div>
</div>
</div>
</div>
  );
};

export default Projects;
