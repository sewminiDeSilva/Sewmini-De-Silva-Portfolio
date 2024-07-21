import React, { useState, useEffect } from 'react';
import './About.css'
import profileGif from '../assets/profilePic.png'
import cv from '../assets/'



const About = () => {

  const [showSections, setShowSections] = useState(false);

  useEffect(() => {
    // Set timeout to delay showing the sections after 1 second
    const timer = setTimeout(() => {
      setShowSections(true);
    }, 1000);

    return () => clearTimeout(timer); // Clean up timeout on unmount
  }, []);
  return (
    <section id="about">
    
      <div className={`about-grid ${showSections ? 'visible' : 'hidden'}`}>
        <div className="about-text">
          <h1>Hi, I'm  <span> Sewmini.</span></h1>
          <p>  As an enthusiastic Software Engineering undergraduate, 
            I  am eager to gain valuable industry experience.
             I seek a  challenging internship in a dynamic 
            environment where I  can apply my knowledge, quick learning, and creative  abilities.</p>
          <a href="/src/assets/your-cv.pdf" download className="download-button">Download CV</a>
        </div>
        <div className="about-image">
          <img src={profileGif} alt="About Me" /> 
        </div> 
      </div>
    </section>
  );
}

export default About;
  