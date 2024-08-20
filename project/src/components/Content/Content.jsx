import React from 'react';
import './Content.css';

const Portfolio = () => {
  const portfolioItems = [
    { id: 1, image: 'https://www.betterup.com/hubfs/Happy-work-team-cheering-and-celebrating-at-meeting-team-collaboration.jpg', title: 'Vivre Alouette' },
    { id: 2, image: 'https://miro.medium.com/v2/resize:fit:1024/1*1SyMH7W2fWbC_jwjZHI4vg.jpeg', title: 'Happy Friends' },
    { id: 3, image: 'https://www.simplilearn.com/ice9/free_resources_article_thumb/What_is_Team_Collaboratio.jpg', title: 'Cooking at Home' },
  ];

  return (
    <div className="portfolio-container">
        <div className="header">
            <h1 className="portfolio-title">Our </h1>
            <h1  className="portfolio-title-1">portfolio</h1>
        </div>
      <div className="portfolio-grid">
        {portfolioItems.map((item) => (
          <div key={item.id} className="portfolio-item">
            <img src={item.image} alt={item.title} />
            <div className="portfolio-item-overlay">
              <p>{item.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;