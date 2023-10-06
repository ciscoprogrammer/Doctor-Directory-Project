import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <a href="/home" className="navbar-link">Home</a>
      <a href="/categories" className="navbar-link">Categories</a>
      <a href="/contact" className="navbar-link">Contact Us</a>
      
    </nav>
  );
}

export default Navbar;
