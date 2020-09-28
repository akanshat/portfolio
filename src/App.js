import React from "react";

import Navbar from "./component/navbar/navbar";
import Projects from "./component/projects/projects";
import { Element } from "react-scroll";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Element name="home" className="element">
        <header className="App-header">
          <Navbar />
        </header>
        <div className="App-content">CONTENT</div>
      </Element>

      <div className="projects-component-container">
        <Element name="projects" className="element">
          <Projects />
        </Element>
      </div>
      <div className="projects-container">
        <Element name="about" className="element">
          ABOUT ME
        </Element>
      </div>
      <div className="projects-container">
        <Element name="contact" className="element">
          CONTACT
        </Element>
      </div>

      <footer className="App-footer">Footer</footer>
    </div>
  );
}

export default App;
