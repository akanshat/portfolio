import React from "react";
import "./navbar.css";
import { Link } from "react-scroll";

import github from "../../assets/github.png";
import linkedin from "../../assets/linkedin.png";
import whatsapp from "../../assets/whatsapp.png";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar-left">
        <Link
          activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          offset={-80}
          duration={500}
        >
          <div className="logo-container">
            <span className="logo">at</span>
          </div>
        </Link>
        <div className="navbar-contents">
          <Link
            activeClass="active"
            to="work"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
          >
            <span className="navbar-list">WORK</span>
          </Link>
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            <span className="navbar-list">ABOUT</span>
          </Link>
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-140}
            duration={500}
          >
            <span className="navbar-list">CONTACT</span>
          </Link>
        </div>
      </div>
      <div className="navbar-right">
        <a
          href="https://www.linkedin.com/in/akansha-tiwari-10/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="social-media-icon" alt="linkedin" src={linkedin} />
        </a>
        <a
          href="https://github.com/akanshat"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="social-media-icon" alt="github" src={github} />
        </a>
        <a
          href="https://github.com/akanshat"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="social-media-icon" alt="whatsapp" src={whatsapp} />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
