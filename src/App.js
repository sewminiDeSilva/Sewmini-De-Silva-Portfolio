// src/App.js
import React, { useState, useEffect } from 'react';
import Home from './components/Home';
import About from './components/About';
import Project from './components/Project';
import Articles from './components/Articles';

import './App.css';

function App() {
  const [showSections, setShowSections] = useState({
    about: false,
    projects: false,
    articles: false,
  });

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById('about').getBoundingClientRect();
      const projectsSection = document.getElementById('projects').getBoundingClientRect();
      const articlesSection = document.getElementById('articles').getBoundingClientRect();

      if (aboutSection.top <= window.innerHeight && aboutSection.bottom >= 0) {
        setShowSections((prev) => ({ ...prev, about: true }));
      }
      if (projectsSection.top <= window.innerHeight && projectsSection.bottom >= 0) {
        setShowSections((prev) => ({ ...prev, projects: true }));
      }
      if (articlesSection.top <= window.innerHeight && articlesSection.bottom >= 0) {
        setShowSections((prev) => ({ ...prev, articles: true }));
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="App">

      <Home />
      <section id="about" className={`section ${showSections.about ? 'show' : 'hide'}`}>
        <About />
      </section>
      <section id="projects" className={`section ${showSections.projects ? 'show' : 'hide'}`}>
        <Project />
      </section>
      <section id="Articles" className={`section ${showSections.Articls ? 'show' : 'hide'}`}>
        <Articles />
      </section>
      <footer className="footer">
        <div className="contact">
          <a href="mailto:sewminidesilva4@gmail.com" target="_blank" rel="noopener noreferrer">
            sewminidesilva4@gmail.com
          </a>
        </div>
        <div className="contact">
          <a href="https://www.linkedin.com/in/sewmini-de-silva-489414247/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
