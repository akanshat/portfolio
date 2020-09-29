import React from "react";

import Navbar from "./component/navbar/navbar";
import Projects from "./component/projects/projects";
import About from "./component/about/about";

import { Element } from "react-scroll";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Element name="home" className="element">
        <header className="App-header">
          <Navbar />
        </header>
      </Element>
      <div className="App-content">CONTENT</div>

      <div className="projects-component-container">
        <Element name="projects" className="element">
          <Projects />
        </Element>
      </div>
      <div className="projects-component-container">
        <Element name="about" className="element">
          <About />
        </Element>
      </div>
      <div className="projects-component-container">
        <Element name="contact" className="element">
          CONTACT
        </Element>
      </div>

      <footer className="App-footer">Footer</footer>
    </div>
  );
}

export default App;
