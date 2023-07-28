import React, { useState, useEffect} from "react";
import { Link } from "react-scroll";
import { TypeAnimation } from 'react-type-animation';
import "./Home.scss";
const Home = () => {

  const [hover, setHover] = useState(false);
  const ref = React.createRef(); // HTMLSpanElement because 'span' is the default wrapper element of the <TypeAnimation/> component
 
  const CURSOR_CLASS_NAME = 'custom-type-animation-cursor';
  
  const showCursorAnimation = (show) => {
  if (!ref.current) {
  return;
  }
  
  const el = ref.current;
  if (show) {
  el.classList.add(CURSOR_CLASS_NAME);
  } else {
  el.classList.remove(CURSOR_CLASS_NAME);
  }
  };
  return (
    <div >
      <main className="homeContainer" >
        <img
          src={require("../Data/website-picture.png")}
          alt="headshot"
          className="headshot"
        />
        <TypeAnimation 
            className = {CURSOR_CLASS_NAME}
            ref={ref}
            cursor={false}
            sequence = {[1500, 'Benjamin Goldfried',
            () => showCursorAnimation(false)
            ]}
            style = {{fontSize: '2em', fontWeight: 'bold', marginTop: '18.72px'}}
            speed = {25}/>
        <h3 className="major">CS @ Duke University</h3>
        <div className="logoContainer">
          <a
            href="https://www.linkedin.com/in/benjamin-goldfried/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-linkedin" aria-hidden="true"></i>
          </a>
          <a
            href="https://github.com/DukeBen"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-github"></i>
          </a>
          <a
            href="mailto:benjamin.goldfried@duke.edu"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-envelope"></i>
          </a>
        </div>
        <div className="chevron animated">
            <p style = {{fontSize: '20px', marginBottom: '10px'}}>Scroll down</p>
            <Link 
                    style={{cursor: "pointer"}}
                    activeClass="active"
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration= {1500}
                >
                    <i 
                      className={`fa-solid fa-chevron-down fa-xl ${hover ? 'hovered' : 'not-hovered'}`}
                      onMouseEnter = {() => setHover(true)}
                      onMouseLeave = {() => setHover(false)}
                    ></i>
                </Link>
        </div>
      </main>
    </div>
  );
};

export default Home;
