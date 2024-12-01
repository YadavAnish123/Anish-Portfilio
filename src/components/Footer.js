import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="text-center">
        <p className="text-sm">
          &copy; {currentYear} Anish Kumar. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
