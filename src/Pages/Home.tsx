import React from "react";

const Home = () => {
  return (
    <>
        <h1 className="name">Benjamin Goldfried</h1>
        <h3 className="student">Computer Science Student and Software Engineer</h3>
        <h3 className="major">CS @ Duke University</h3>

        <a href="https://www.linkedin.com/in/benjamin-goldfried/" target="_blank" rel="noopener noreferrer">
            <img src= {require("../Data/LinkedIn_logo.png")} alt="LinkedIn logo image" />
        </a>
        <a href="https://github.com/DukeBen" target="_blank" rel="noopener noreferrer">
            <img src= {require("../Data/github_logo.png")} alt="GitHub logo image" />
        </a>
        <a href="mailto:benjamin.goldfried@duke.edu" target="_blank" rel="noopener noreferrer">
            <img src = {require("../Data/email.png")} alt="email logo image" />
        </a>
    </>
  );
};

export default Home;
