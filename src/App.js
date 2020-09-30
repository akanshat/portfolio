import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

import Navbar from "./components/navbar/navbar";
import Home from "./components/home/home";
import Projects from "./components/projects/projects";
import About from "./components/about/about";
import Contact from "./components/contact/contact";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Navbar />
        </header>
        <Switch>
          <Route exact path="/">
            <div className="App-content">
              <Home />
            </div>
          </Route>
          <Route exact path="/work">
            <div className="projects-component-container">
              <Projects />
            </div>
          </Route>
          <Route exact path="/about">
            <div className="about-component-container">
              <About />
            </div>
          </Route>
          <Route exact path="/contact">
            <div className="contact-component-container">
              <Contact />
            </div>
          </Route>
          <Route path="*">
            <div>
              <h1>404</h1>
            </div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
