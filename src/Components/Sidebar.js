import React from 'react';
import { Link } from "react-scroll";
import { slide as Menu } from 'react-burger-menu';
import './Sidebar.css';

export default props => {
  return (
    <Menu {...props}>
       <Link 
                    style={{cursor: "pointer"}}
                    activeClass="active"
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration= {1500}
                >
          Home
        </Link>
      <Link 
                    style={{cursor: "pointer"}}
                    activeClass="active"
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration= {1500}
                >
          About
        </Link>
        <Link 
                    style={{cursor: "pointer"}}
                    activeClass="active"
                    to="workExperience"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration= {1500}
                >
          Work Experience
        </Link>
        <Link 
                    style={{cursor: "pointer"}}
                    activeClass="active"
                    to="projects"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration= {1500}
                >
          Projects
        </Link>
    </Menu>
  );
};