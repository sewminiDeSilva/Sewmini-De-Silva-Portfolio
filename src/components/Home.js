
import React from 'react';
import './Home.css'
import { ReactComponent as LinkedInIcon } from '../assets/linkedin.svg';

function Home() {
    const handleScrollToSection = (id) => {
        document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
    };
    return (
        <nav className="navbar">
            <div className="logo">
                S<span className="highlight">E</span>WMINI
            </div>
            <ul className="nav-links">
            
                <li>
                    <button onClick={() => handleScrollToSection('about')} className="nav-link">About</button>
                </li>
                <li>
                    <button onClick={() => handleScrollToSection('projects')} className="nav-link">Projects</button>
                </li>
                <li>
                    <button onClick={() => handleScrollToSection('articles')} className="nav-link">Knowlage Sharing</button>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/sewmini-de-silva-489414247/" target="_blank" rel="noopener noreferrer">
                        <LinkedInIcon className="linkedin-icon" />
                    </a>
                </li>
            </ul>
        </nav>
    );
}


export default Home;
