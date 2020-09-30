import React from "react";
import "./about.css";

import Cards from "../tech/tech-cards";

const About = () => {
  return (
    <div>
      <div className="about-about">
        <div className="akansha">Akansha</div>
        <div className="about-container">
          <div className="hello">HELLO!</div>
          <div className="about-content">
            My name is Akansha Tiwari, and I am a{" "}
            <span className="highlight">CS undergrad at IIIT Gwalior</span>.
            <br />
            <br />I am a<b> web developer</b> and I love learning and
            experimenting with new stuff. I have a good understanding of a few
            of my core subjects like OOPs, OS, and DBMS. I am not fun to work
            with because I am very very serious about my work.
          </div>
        </div>
      </div>
      <div className="about-extra">
      <div className="about-content2">What am I familiar with?</div>
      <div className="cards-div">
        <Cards />
      </div>
      </div>
    </div>
  );
};

export default About;
