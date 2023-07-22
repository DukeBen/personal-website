import React, { useState } from 'react';
import './Navbar.css'; // Create a separate CSS file for styling the Navbar

const Navbar = () => {
  const [isNavVisible, setNavVisible] = useState(false);

  const toggleNav = () => {
    setNavVisible(!isNavVisible);
  };

  return (
    <div>
      <button onClick={toggleNav}>Toggle Navigation</button>
      {isNavVisible && (
        <nav className="navbar">
          {/* Your navigation links here */}
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      )}
    </div>
  );
};

export default Navbar;
