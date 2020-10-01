import React from "react";
import "./about.css";

const About = () => {
  return (
    <div className="wrap-about">
      <div className="about-about">
        <div className="about-container">
          <div className="hello">ABOUT ME</div>
          <div className="about-content">
            My name is Akansha Tiwari, and I am a{" "}
            <span className="highlight">CS undergrad at IIIT Gwalior</span>.
            <br />
            <br />I am a<b> web developer</b> and I love learning and
            experimenting with new stuff. I have a good understanding of a few
            of my core subjects like OOPs, OS, and DBMS. I am a fun person to be
            around and to work with. What makes me different is nothing, because
            the probability of being different will be 1 / ( 7.8 billion and
            counting ).
          </div>
        </div>
      </div>
      <div className="about-content highlight">I am familiar with</div>
      <div className="ul-list">
        <ul>
          <li>C/C++</li>
          <li>Js</li>
          <li>ReactJs</li>
        </ul>
        <ul>
          <li>Node.js</li>
          <li>Express</li>
          <li>Docker</li>
        </ul>
        <ul>
          <li>Linux</li>
          <li>Git</li>
          <li>MySQL</li>
        </ul>
        <ul>
          <li>PostgreSQL</li>
          <li>MongoDB</li>
          <li>Mongoose</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
