import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

function NavBar() {
    return (
      <nav className="navbar">
        <div className="logo">Your Logo</div>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Comments">Comments</Link>
          </li>
          <li>
            <Link to="/Post">Post</Link>
          </li>
          <li>
            <Link to="/Todos">Todos</Link>
          </li>
          <li>
            <Link to="/User">User</Link>
          </li>
          <li>
            <Link to="/Photos">Photos</Link>
          </li>
        </ul>
      </nav>
    );
  }
  
  export default NavBar;