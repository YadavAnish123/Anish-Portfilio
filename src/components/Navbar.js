 

import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Navbar.css'

const Navbar = () => {
  const [activePage, setActivePage] = useState('home'); // Set the default active page

  const handleSetActivePage = (page) => {
    setActivePage(page);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <a className="navbar-brand" href="#">
         
        <div className="logo">
          <span className="name">Anish</span> &nbsp;
          <span className="portfolio">Portfolio</span>
        </div>
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className={`nav-item ${activePage === 'home' ? 'active' : ''}`}>
            <Link
              to="/"
              className="nav-link"
              onClick={() => handleSetActivePage('home')}
            >
              Home <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className={`nav-item ${activePage === 'project' ? 'active' : ''}`}>
            <Link
              to="/project"
              className="nav-link"
              onClick={() => handleSetActivePage('project')}
            >
              Projects
            </Link>
          </li>
          <li className={`nav-item ${activePage === 'certificate' ? 'active' : ''}`}>
            <Link
              to="/certificate"
              className="nav-link"
              onClick={() => handleSetActivePage('certificate')}
            >
              Certificates
            </Link>
          </li>
          <li className={`nav-item ${activePage === 'about' ? 'active' : ''}`}>
            <Link
              to="/about"
              className="nav-link"
              onClick={() => handleSetActivePage('about')}
            >
              About
            </Link>
          </li>
          <li className={`nav-item ${activePage === 'contact' ? 'active' : ''}`}>
            <Link
              to="/contact"
              className="nav-link"
              onClick={() => handleSetActivePage('contact')}
            >
              Contact Me
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

