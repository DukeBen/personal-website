import React from "react";
import Home from "./Pages/Home";
import About from './Pages/About';
import WorkExperience from "./Pages/WorkExperience";
import Projects from "./Pages/Projects";
import Sidebar from "./Components/Sidebar";
import './App.css'
function App() {
  return (
    <>
      <div id="outerContainer">
        <Sidebar
          className="sidebar"
          pageWrapId={"innerContainer"}
          outerContainerId={"outerContainer"}
        />

        <div id="innerContainer">
          <section id = 'home'>
            <Home />
          </section>
          <section id = 'about'>
            <About />
          </section>
          <section id = 'workExperience'>
            <WorkExperience />
          </section>
          <section id = 'projects'>
            <Projects />
          </section>
        </div>
      </div>
    </>
  );
}

export default App;
