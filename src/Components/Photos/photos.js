import React, { useState, useEffect } from "react";
import NavBar from "../navbar/navbar";
import "./photo.css";

function Photos() {
  const [photos, setPhotos] = useState([]);
  const [displayLimit, setDisplayLimit] = useState(10);

  useEffect(() => {
    fetchPhotos();
  }, []);

  const fetchPhotos = async () => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/photos");
      if (response.ok) {
        const data = await response.json();
        setPhotos(data);
      } else {
        console.error("Failed to fetch photos:", response.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleShowMore = () => {
    setDisplayLimit(displayLimit + 10);
  };

  const handleShowLess = () => {
    setDisplayLimit(Math.max(displayLimit - 10, 10)); // Ensure display limit doesn't go below 10
  };

  return (
    <div className="home-page">
      <NavBar />
      <header className="hero-section">
        <h1>Welcome to Your Website</h1>
        <p>Your catchphrase or a brief description of what your website offers.</p>
        <a href="#features" className="cta-button">
          Explore More
        </a>
      </header>

      <section id="features" className="features-section">
        <h2>Photos</h2>
        <div className="photo-grid">
          {photos.slice(0, displayLimit).map(photo => (
            <div key={photo.id} className="photo-item">
              <img src={photo.url} alt={photo.title} />
              <p>{photo.title}</p>
            </div>
          ))}
        </div>
        <div className="show-more-less-buttons">
          {photos.length > displayLimit && (
            <button onClick={handleShowMore}>Show More</button>
          )}
          {displayLimit > 10 && (
            <button onClick={handleShowLess}>Show Less</button>
          )}
        </div>
      </section>

      <section className="call-to-action">
        <h2>Ready to get started?</h2>
        <p>Join us now and experience the benefits.</p>
        <a href="#signup" className="cta-button">
          Sign Up
        </a>
      </section>

      <footer className="footer-section">
        <p>&copy; 2024 Your Company | Privacy Policy | Terms of Service</p>
      </footer>
    </div>
  );
}

export default Photos;
