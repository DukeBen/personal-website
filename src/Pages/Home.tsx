import React from "react";
import './Home.scss'
const Home = () => {
  return (
    <div className = 'homeContainer'>
        <img src={require("../Data/website-picture.png")} alt="headshot" className="headshot" />
        <h1 className="name">Benjamin Goldfried</h1>
        <h3 className="major">CS @ Duke University</h3>
        <div className="logoContainer">
            <a href="https://www.linkedin.com/in/benjamin-goldfried/" target="_blank" rel="noopener noreferrer">
                <i className = "fa fa-linkedin" aria-hidden= 'true'></i>
            </a>
            <a href="https://github.com/DukeBen" target="_blank" rel="noopener noreferrer">
                <i className = "fa fa-github" ></i>
            </a>
            <a href="mailto:benjamin.goldfried@duke.edu" target="_blank" rel="noopener noreferrer">
                <i className = "fa fa-envelope" ></i>
            </a>
        </div>
    </div>
  );
};

export default Home;
