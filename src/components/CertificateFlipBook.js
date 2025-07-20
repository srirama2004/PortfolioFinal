import React, { useState } from 'react';
import './CertificateFlipBook.css';

const certificates = [
  {
  title: 'IBM Machine Learning Professional Certificate',
  description: `Completed all 6 courses in IBM's ML specialization on Coursera, covering EDA, Regression, Classification, Unsupervised ML, Deep Learning, Reinforcement Learning, and a Capstone project.`,
  image: '/certi/Ml.png',
  link: 'https://www.coursera.org/account/accomplishments/specialization/T1ZOUH6M8F9X'
  },
  {
  title: 'Introduction to Big Data',
  description: `Certified by University of California San Diego. Covered topics like Hadoop, Data Storage, Distributed Computing, and Big Data Analytics.`,
  image: '/certi/IntroBd.png', 
  link: 'https://www.coursera.org/account/accomplishments/verify/NPVCP40N36LT'
  },
  {
  title: 'Big Data Integration and Processing',
  description: `Certified by University of California San Diego. Covered Apache Hadoop, Spark, SQL/NoSQL, Data Pipelines, and Integration strategies.`,
  image: '/certi/BDIntegration.png', 
  link: 'https://www.coursera.org/account/accomplishments/verify/L3O8UYFEPABJ'

  },
    {
  title: 'Big Data Modeling and Management Systems',
  description: `Certified by University of California San Diego. Covered NoSQL, Hadoop, Database Design, Real-Time Data, and Data Modeling techniques.`,
  image: '/certi/BDModeling.png',
  link: 'https://www.coursera.org/account/accomplishments/certificate/YOUR_CERTIFICATE_ID'

  },
   {
  title: 'Introduction to TensorFlow for AI/ML/DL',
  description: `Certified by DeepLearning.AI. Built neural networks using TensorFlow and Keras for computer vision and deep learning applications.`,
  image: '/certi/Ten.png',
  link: 'https://www.coursera.org/account/accomplishments/verify/NPVCP40N36LT'
  },
  {
  title: 'Data Structures and Algorithms',
  description: `Obtained from TUF+ for successful completion of the Data Structures and Algorithms course.
  Covered:
  - Sorting, Arrays, Hashing, Binary Search, Recursion
  - Linked List, Bit Manipulation, Greedy Algorithms
  - Sliding Window / 2 Pointer, Stack / Queues
  - Binary Trees, BSTs, Heaps, Graphs
  - Graph Traversals, Cycles, Shortest Path Algorithms:
  - Dynamic Programming, Tries, Advanced String Algorithms, Maths`,
  image: '/certi/dsatuf+.png',
  link: 'https://takeuforward.org/plus/profile/Srirama%20V' 


];

const CertificateFlipBook = () => {
  const [flippedIndex, setFlippedIndex] = useState(null);

  const toggleFlip = (index) => {
    setFlippedIndex(index === flippedIndex ? null : index);
  };

  return (
    <div className="flipbook-section">
      <h2 className="flipbook-title">Certificates</h2>
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
                 {cert.link && (
    <a href={cert.link} target="_blank" rel="noopener noreferrer" className="cert-link">
      View Certificate
    </a>
  )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CertificateFlipBook;
