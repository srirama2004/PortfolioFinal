import React from "react";
import Slider from "react-slick";
import { Container, Card, Button } from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./projects.css";

const projects = [
  {
    id: 1,
    title: "Readliy",
    description: "Readly is a modern online library app built using the MERN stack (MongoDB, Express.js, React.js, Node.js). It features a splash screen, category-based book browsing, smart search, daily check-ins to track reading streaks, user authentication, and a responsive book carousel. The app has a clean, mobile-friendly UI and uses ImgBB to host book images.",
    image: "https://i.ibb.co/Xfy5Wkxn/lib.jpg",
    github: "https://github.com/srirama2004/Online_Library",
    website: "https://readify.hmmbo.com/"
  },
  {
    id: 2,
    title: "Talink",
    description: "TalentLink is a mobile freelance management app built using Java (Android Studio), Firebase, Flask (Python), and MongoDB, offering a seamless platform for clients and freelancers. It supports secure authentication, real-time project bidding via Firebase, AI-driven cost estimation using a Flask ML backend, live chat for instant communication, and personalized dashboards. The app ensures efficient project collaboration with a responsive and intelligent mobile experience.",
    image: "https://i.ibb.co/GvZVkGG1/talink.jpg",
    github: "https://github.com/srirama2004/Talent-Link-App",
    website: ""
  },
  {
    id: 3,
    title: "EasAlgo",
    description: "EasAlgo is a web application built with the PERN stack (PostgreSQL, Express.js, React.js, Node.js) that allows users to generate a GitHub token and seamlessly push code or text files directly to their GitHub repositories from the browser. It offers a simple, secure interface for managing and uploading content, making GitHub contributions faster and more accessible without using Git or command-line tools.",
    image: "https://i.ibb.co/G4q1MPZy/easalgo.png ",
    github: "https://github.com/srirama2004/Algoeas",
    website: "https://algoeas-frontend.vercel.app/"
  },
  {
    id: 4,
    title: "Beta Medical Services",
    description: "Beta Medical Service is a web application that leverages Machine Learning with Python and TensorFlow to predict blood donation behavior. It streamlines healthcare management by offering features such as patient appointment booking, test result tracking, and intelligent blood donation predictions, helping medical professionals make informed decisions and improve donor engagement.",
    image: "https://i.ibb.co/QFMHf2kG/hos.jpg",
    github: "https://github.com/srirama2004/HospitalManagement",
    website: "https://betamedcare.onrender.com"
  },
  {
    id: 5,
    title: "Resort Management ",
    description: "Resort Management is a web application built using React.js, Express.js, and PostgreSQL that enables users to seamlessly book resort rooms, hire taxis, and order utilities online. The platform offers a smooth and user-friendly experience for managing all resort-related services in one place.",
    image: "https://i.ibb.co/DDCYR1N2/img1.jpg",
    github: "https://github.com/srirama2004/Resort_Web",
    website: ""
  },
    {
    id: 6,
    title: "Secure Text Drive ",
    description: "Secure Text Drive is a secure text storage web application built with Flask and PostgreSQL, designed to safely store and retrieve text files. It incorporates RSA encryption, hashing, and digital signatures to ensure data confidentiality, integrity, and authenticity, providing users with a reliable and private file storage solution.",
    image: "https://i.ibb.co/pvG3628S/text.png",
    github: "https://github.com/srirama2004/SecureTextDrive",
    website: "https://securedrive.hmmbo.com/"
  },
   {
    id: 7,
    title: "Interly",
    description: "Interly is a React.js web app that simulates technical interviews. Users enter topics, choose difficulty, and get random questions from a Node.js backend. Questions are spoken using the Web Speech API. Answers are recorded with react-webcam and the MediaRecorder API, with optional saving or backend upload. Features include voice toggle, auto-numbered questions, and a countdown timer. Built with React Hooks and integrated Web APIs for a realistic, interactive interview experience.",
    image: "https://i.ibb.co/xw9bbr3/interlyimg.png",
    github: "https://github.com/srirama2004/Interly",
    website: "https://interly.vercel.app/"
  }
];

const settings = {
  centerMode: true,
  centerPadding: "0",
  slidesToShow: 3,
  infinite: true,
  speed: 500,
  arrows: true,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1
      }
    }
  ]
};

function Projects() {
  return (
    <Container fluid className="text-center mt-5">
      <h2 className="mb-4">Projects</h2>
      <Slider {...settings}>
        {projects.map((proj) => (
          <div key={proj.id} className="px-2">
           <Card className="project-card mx-auto">
  <Card.Img variant="top" src={proj.image} className="project-img" />
  <Card.Body>
    <Card.Title className="fs-5">{proj.title}</Card.Title>
    <Card.Text className="text-muted small" style={{ textAlign: "justify" }}>{proj.description}</Card.Text>
    <div className="d-flex justify-content-around mt-3">
      <Button variant="outline-dark" size="sm" href={proj.github} target="_blank">
        GitHub
      </Button>
   {proj.website ? (
  <Button
    variant="outline-success"
    size="sm"
    href={proj.website}
    target="_blank"
    rel="noopener noreferrer"
  >
    Live
  </Button>
) : (
  <Button variant="secondary" size="sm" disabled>
    Coming Soon
  </Button>
)}

    </div>
  </Card.Body>
</Card>

          </div>
        ))}
      </Slider>
    </Container>
  );
}

export default Projects;
