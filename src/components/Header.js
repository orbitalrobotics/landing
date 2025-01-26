import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        <Link to="/" className="text-2xl font-bold tracking-tight">
          Orbital Robotics
        </Link>
        <nav className="space-x-6">
          <Link to="/solutions" className="hover:text-blue-600 transition">
            Solutions
          </Link>
          <Link to="/technologies" className="hover:text-blue-600 transition">
            Technologies
          </Link>
          <Link to="/contact" className="hover:text-blue-600 transition">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;