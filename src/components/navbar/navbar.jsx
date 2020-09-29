import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

import github from "../../assets/github.png";
import linkedin from "../../assets/linkedin.png";
import whatsapp from "../../assets/whatsapp.png";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar-left">
        <div className="logo-container">
          <Link to="/">
            <span className="logo">at</span>
          </Link>
        </div>
        <div className="navbar-contents">
          <Link to="/work">
            <span className="navbar-list">WORK</span>
          </Link>
          <Link to="/about">
            <span className="navbar-list">ABOUT</span>
          </Link>
          <Link to="/contact">
            <span className="navbar-list">CONTACT</span>
          </Link>
        </div>
      </div>
      <div className="navbar-right">
        <a
          href="https://www.linkedin.com/in/akansha-tiwari-10/"
          target="_blank" rel="noopener noreferrer"
        >
          <img className="social-media-icon" alt="linkedin" src={linkedin} />
        </a>
        <a href="https://github.com/akanshat" target="_blank" rel="noopener noreferrer">
          <img className="social-media-icon" alt="github" src={github} />
        </a>
        <Link to="/a">
          <img className="social-media-icon" alt="whatsapp" src={whatsapp} />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
