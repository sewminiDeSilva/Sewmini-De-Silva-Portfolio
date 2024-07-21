// src/components/MediumArticles.js
import React from 'react';
import './Articles.css';
import Article1Image from '../assets/article1.png'; 
import Article2Image from '../assets/article2.png'; 

const Articles = () => {
  const articles = [
    {
      id: 1,
      title: 'Foundational Elements of Visual Design',
      description: 'A comprehensive guide to typography, color theory, iconography, and layout in UI/UX design. Learn how to effectively use these elements to create visually appealing and functional designs that enhance user experience.',
      image: Article1Image,
      link: 'https://medium.com/@sewminidesilva4/foundational-elements-of-visual-design-561aa48067ed',
    },
    {
      id: 2,
      title: 'Demystify user experience design: A beginner guide',
      description: 'A beginner guide to UX design, focusing on understanding user needs, wireframing, prototyping, usability testing, and accessibility. ',
      image:Article2Image ,
      link: 'https://medium.com/@sewminidesilva4/demystify-user-experience-design-a-beginners-guide-28074930bed1',
    },
  ];

  return (
    <section id="articles" className="articles-section">
      <h2>Articles</h2>
      <div className="article-grid">
        {articles.map((article) => (
          <div key={article.id} className="article-card">
            <img src={article.image} alt={article.title} className="article-image" />
           
              <div className="article-text">
                <h3 className="article-title">{article.title}</h3>
                <p className="article-description">{article.description}</p>
              
              <a href={article.link} className="article-link" target="_blank" rel="noopener noreferrer">Read More</a>
          </div>  </div>
         
        ))}
      </div>
    </section>
  );
};

export default Articles;
