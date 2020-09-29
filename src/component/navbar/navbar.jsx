import React from "react";
import { Link } from "react-scroll";

import "./navbar.css";

import github from "../../assets/github.png";
import linkedin from "../../assets/linkedin.png";
import whatsapp from "../../assets/whatsapp.png";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar-left">
        <div className="logo-container">
          <span className="logo">
            <Link
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              duration={500}
            >
              at
            </Link>
          </span>
        </div>
        <div className="navbar-contents">
          <span className="navbar-list">
            <Link
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              duration={500}
            >
              WORK
            </Link>
          </span>
          <span className="navbar-list">
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              duration={1000}
            >
              ABOUT
            </Link>
          </span>
          <span className="navbar-list">
            <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              duration={1200}
            >
              CONTACT
            </Link>
          </span>
        </div>
      </div>
      <div className="navbar-right">
        <img className="social-media-icon" alt="linkedin" src={linkedin} />
        <img className="social-media-icon" alt="github" src={github} />
        <img className="social-media-icon" alt="whatsapp" src={whatsapp} />
      </div>
    </div>
  );
};

export default Navbar;
