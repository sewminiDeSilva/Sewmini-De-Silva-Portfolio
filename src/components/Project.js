// import React from 'react';
import './Project.css';
import project1Image from '../assets/project1.PNG';
import project2Image from '../assets/project2.PNG';
import project1PDF from '../assets/Virtual tour app- Portfolio Project 1 - Case study.pdf'; 
import React, { useState } from 'react';
import CustomModal from '.Modal.js';

  const projects = [
    {
      id: 1,
      image: project1Image,
      name: 'Virtual Art Gallery App',
      details: 'An immersive virtual tour to explore art from home.',
      link: project1PDF, // Link to your PDF file
    },
    {
      id: 2,
      image:project2Image,
      name: 'Project 2',
      details: 'Details about Project 2.',
      link: '#',
    },
    // Add more projects as needed
  ];
  const Project = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [modalContent, setModalContent] = useState('');

    const openModal = (content) => {
      setModalContent(content);
      setModalIsOpen(true);
    };

    const closeModal = () => {
      setModalIsOpen(false);
      setModalContent('');
    };
  return (
    <section id="projects" className="projects-section">
      <h2>Projects</h2>
      <div className="project-grid">
        {projects.map((project, index) => (
          <div key={index} className="project" onClick={() => openModal(project.description)}>
            <img src={project.thumbnail} alt={`${project.title} thumbnail`} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
      <CustomModal isOpen={modalIsOpen} onRequestClose={closeModal} content={modalContent} />
      

    </section>
  );
};

export default Project;
