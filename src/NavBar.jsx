import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation
import './NavBar.css'; // You can create a separate CSS file for styling

function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-title">
        <Link to="/">ProjectSync</Link>
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/browse-projects">Browse Projects</Link>
        </li>
        <li>
          <Link to="/browse-research-papers">Browse Research Papers</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
