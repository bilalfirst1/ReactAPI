import React, { useState, useEffect } from "react";
import NavBar from "../navbar/navbar";
import "../Post/post.css";

function Post() {
  const [posts, setPosts] = useState([]);
  const [displayedPosts, setDisplayedPosts] = useState(6); // Number of posts initially displayed

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts");
      if (!response.ok) {
        throw new Error("Failed to fetch posts");
      }
      const data = await response.json();
      setPosts(data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleShowMore = () => {
    setDisplayedPosts(displayedPosts + 6); // Increase the number of displayed posts
  };

  const handleShowLess = () => {
    setDisplayedPosts(6); // Reset to the initial number of displayed posts
  };

  return (
    <div className="home-page">
      <NavBar />
      <header className="hero-section">
        <h1>Welcome to Your Website</h1>
        <p>Your catchphrase or a brief description of what your website offers.</p>
        <a href="#features" className="cta-button">Explore More</a>
      </header>
  
      <section id="features" className="features-section">
        <div className="post-grid">
          {posts.slice(0, displayedPosts).map((post) => (
            <div key={post.id} className="post-item">
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </div>
          ))}
        </div>
        <div className="show-more-less-buttons">
        {displayedPosts < posts.length ? (
          <button onClick={handleShowMore}>Show More</button>
        ) : null}
        {displayedPosts > 6 ? (
          <button onClick={handleShowLess}>Show Less</button>
        ) : null}
      </div>
      </section>
  
      <section className="call-to-action">
        <h2>Ready to get started?</h2>
        <p>Join us now and experience the benefits.</p>
        <a href="#signup" className="cta-button">Sign Up</a>
      </section>
  
      <footer className="footer-section">
        <p>&copy; 2024 Your Company | Privacy Policy | Terms of Service</p>
      </footer>
      
    </div>
  );
}

export default Post;
