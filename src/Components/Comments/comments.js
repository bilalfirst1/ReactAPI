import React, { useState, useEffect } from "react";
import NavBar from "../navbar/navbar";
import "../Index/index1.css";
import "../Comments/form.css";

function Comments() {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState({ name: "", body: "" });
  const [displayLimit, setDisplayLimit] = useState(10);

  useEffect(() => {
    fetchComments();
  }, []);

  const fetchComments = async () => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/comments");
      if (response.ok) {
        const data = await response.json();
        setComments(data);
      } else {
        console.error("Failed to fetch comments:", response.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/comments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newComment)
      });

      if (response.ok) {
        const data = await response.json();
        setComments([...comments, data]);
        setNewComment({ name: "", body: "" });
      } else {
        console.error("Failed to submit comment:", response.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewComment({
      ...newComment,
      [name]: value
    });
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

        <div>
          <h1>Comments</h1>
          <ul className="comment-list">
            {comments.slice(0, displayLimit).map(comment => (
              <div key={comment.id} className="comment-box">
                <li>
                  <strong>{comment.name}</strong>: {comment.body}
                </li>
              </div>
            ))}
          </ul>
          {comments.length > displayLimit && (
            <div>
              {displayLimit <= comments.length - 10 && (
                <button onClick={handleShowMore}>Show More</button>
              )}
              {displayLimit > 10 && (
                <button onClick={handleShowLess}>Show Less</button>
              )}
            </div>
          )}
        </div>
      </header>

      <section id="features" className="features-section">
        <div className="feature">
          <h2>Feature 1</h2>
          <p>Highlight the first key feature of your website.</p>
        </div>

        <div className="feature">
          <h2>Feature 2</h2>
          <p>Describe the second important feature that sets you apart.</p>
        </div>

        <div className="feature">
          <h2>Feature 3</h2>
          <p>Introduce the third key feature that users will find valuable.</p>
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

export default Comments;
