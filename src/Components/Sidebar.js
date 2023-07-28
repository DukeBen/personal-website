import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import './Sidebar.css';

export default props => {
  return (
    <Menu {...props}>
      <a className="menu-item" href="#home">
        Home
      </a>
      <a className="menu-item" href="#about">
        About
      </a>
      <a className="menu-item" href="#workExperience">
        Work Experience
      </a>
      <a className="menu-item" href="#projects">
        Projects
      </a>
    </Menu>
  );
};