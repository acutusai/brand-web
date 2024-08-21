import React, { useState, useEffect } from 'react';
import Card from '../Card/Card';
import './Content.css';

const Portfolio = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch('http://localhost:8000/blogs/idea');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setBlogs(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  const limitedBlogs = blogs.slice(0, 8);
  console.log(limitedBlogs);

  return (
    <div className="portfolio-container">
      <div className="header">
        <h1 className="portfolio-title">Our</h1>
        <h1 className="portfolio-title-1">Portfolio</h1>
      </div>
      <div className="portfolio-grid">
        {limitedBlogs.map((blog) => (
          <Card key={blog.id} blog={blog}/>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
