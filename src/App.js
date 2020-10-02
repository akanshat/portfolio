import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

import Navbar from "./components/navbar/navbar";
import Home from "./components/home/home";
import Projects from "./components/projects/projects";
import About from "./components/about/about";
import Contact from "./components/contact/contact";
import NotFound from "./components/notfound/not-found";
//import toparrow from "./assets/top-arrow.png";

import { Element, animateScroll as scroll } from "react-scroll";

import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <div className="App">
            <header className="App-header">
              <Navbar />
            </header>
            <div className="page-content">
              <Element name="home" className="element">
                <div className="App-content">
                  <Home />
                </div>
              </Element>
              <Element name="work" className="element">
                <div className="projects-component-container">
                  <Projects />
                </div>
              </Element>
              <Element name="about" className="element">
                <div className="about-component-container">
                  <About />
                </div>
              </Element>
              <Element name="contact" className="element">
                <div className="contact-component-container">
                  <Contact />
                </div>
              </Element>
              {/* <div className="move-to-top" onClick={scroll.scrollToTop}>
                  <img src={toparrow} alt="arrow" height="40px" />
                </div> */}
            </div>
          </div>
        </Route>
        <Route path="*">
          <>
            <div className="not-found-container">
              <NotFound />
            </div>
          </>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
