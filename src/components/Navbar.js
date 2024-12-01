import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./img/logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to close the menu after a link is clicked
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-gray-900 fixed top-0 w-full h-24 shadow-lg z-50 flex items-center">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-white">
          <img src={logo} alt="Logo" className="w-20 h-20 rounded-full" />
        </div>

        {/* Hamburger Menu (Visible on Small Screens) */}
        <button
          className="text-white lg:hidden focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>

        {/* Navigation Links */}
        <ul
          className={`lg:flex lg:space-x-6 lg:static absolute bg-gray-900 lg:bg-transparent w-full lg:w-auto left-0 top-24 lg:top-0 transform ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          } lg:transform-none transition-transform duration-300 ease-in-out flex flex-col lg:flex-row items-start lg:items-center text-left`}
        >
          <li className="text-gray-400 hover:text-white p-3 lg:p-0">
            <Link to="/" className="font-medium" onClick={handleLinkClick}>
              🏚 Home
            </Link>
          </li>
          <li className="text-gray-400 hover:text-white p-3 lg:p-0">
            <Link to="/project" className="font-medium" onClick={handleLinkClick}>
              📽 Projects
            </Link>
          </li>
          <li className="text-gray-400 hover:text-white p-3 lg:p-0">
            <Link to="/certificate" className="font-medium" onClick={handleLinkClick}>
              📃 Certificates
            </Link>
          </li>
          <li className="text-gray-400 hover:text-white p-3 lg:p-0">
            <Link to="/about" className="font-medium" onClick={handleLinkClick}>
              🔄 About
            </Link>
          </li>
          <li className="text-gray-400 hover:text-white p-3 lg:p-0">
            <Link to="/contact" className="font-medium" onClick={handleLinkClick}>
              📞 Contact Me
            </Link>
          </li>
          <li className="text-gray-400 hover:text-white p-3 lg:p-0">
            <Link to="/family" className="font-medium" onClick={handleLinkClick}>
              👨‍👨‍👧‍👧 Family
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
