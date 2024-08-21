import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css';

function Card({ blog }) {
  const truncateContent = (content, limit) => {
    const words = content.split(' ');
    if (words.length > limit) {
      return words.slice(0, limit).join(' ') + ' ...';
    }
    return content;
  };

  const truncateTitle = (title, limit) => {
    const words = title.split(' ');
    if (words.length > limit) {
      return words.slice(0, limit).join(' ') + ' ...';
    }
    return title;
  };

  return (
    <div className="small-card">
      <Link to={`/blog/${blog.id}`}>
        <img className="small-card-image" src={`http://localhost:8000${blog.image}`} alt={blog.title} />
      </Link>
      <div className="small-card-content">
        <Link to={`/blog/${blog.id}`} className="small-card-title">
          <h3>{truncateTitle(blog.title, 4)}</h3>
        </Link>
        <p className="small-card-description">{truncateContent(blog.content, 20)}</p>
        <p className="small-card-date">{new Date(blog.created_at).toLocaleDateString()}</p>
      </div>
    </div>
  );
}

export default Card;
