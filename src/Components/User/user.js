import React, { useState, useEffect } from "react";
import NavBar from "../navbar/navbar";
import "../User/user.css";

function User() {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(3);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      if (response.ok) {
        const data = await response.json();
        setUsers(data);
      } else {
        console.error("Failed to fetch users:", response.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // Get current users
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

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
        <h2>Users</h2>
        <ul>
          {currentUsers.map(user => (
            <li key={user.id}>
              <strong>Name:</strong> {user.name}, <strong>Email:</strong> {user.email}
            </li>
          ))}
        </ul>
        <div className="pagination-buttons">
          <button onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>
            Show Less
          </button>
          <button onClick={() => paginate(currentPage + 1)} disabled={indexOfLastUser >= users.length}>
            Show More
          </button>
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

export default User;
