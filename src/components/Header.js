import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from "react-icons/fa6"; // Importing the FaBars icon for the dropdown button
import './Header.css'; // Assuming you have CSS for the header styling

function Header() {
  // State for controlling the visibility of the dropdown menu
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the dropdown menu visibility
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <nav className="nav">
        {/* Navigation links */}
        <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
            <img src="logo.png" alt="Logo" class="eye-style" />
            <li><Link to="/">Orbital Robotics</Link></li>
            <li><Link to="/solutions">Solutions</Link></li>
            <li><Link to="/technologies">Technologies</Link></li>
            <li><Link to="/contact" >Contact</Link></li>
        </ul>
        {/* Button to toggle the dropdown menu visibility */}
        <button className="dropdown-toggle" onClick={toggleDropdown}>
          <FaBars />
          {/* {isOpen ? '▲' : '▼'}  */}
          {/* Optional: You could use text to indicate open/close state of the dropdown */}
        </button>
      </nav>
    </header>

  );
}

export default Header;