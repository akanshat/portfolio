import React from "react";
import "./about.css";
import Cards from "../tech/tech-cards";
const About = () => {
  return (
    <div className="about-about">
      <div className="akansha">Akansha</div>
      <div className="about-container">
        <div className="hello">HELLO!</div>
        <div className="about-content">
          My name is Akansha Tiwari, and I am a{" "}
          <span>CS undergrad at IIIT Gwalior</span>. I have maintained a CGPA of
          7.92.
          <br />
          <br />I am a web developer and I love learning and experimenting with
          new stuff. I have a good understanding of a few of my core subjects
          like OOPs, OS, and DBMS. I am not fun to work with because I am very
          very serious about my work.
          <Cards />
        </div>
      </div>
    </div>
  );
};

export default About;
