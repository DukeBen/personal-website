import React from "react";
import Home from "./Pages/Home";
import About from './Pages/About';
import Sidebar from "./Components/Sidebar";
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
        </div>
      </div>
    </>
  );
}

export default App;
