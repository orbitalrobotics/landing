import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
        </div>
        <div className="footer-links">
          <Link to="/About">About</Link>
          <Link to="/contact">Contact</Link>
          <a href="#privacy">Privacy Policy</a>
        </div>
        <div className="footer-social">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebookF />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
        </div>
      </div>
      <div className="footer-bottom">

        <p>&copy; {new Date().getFullYear()}© Orbital Robotics. All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;