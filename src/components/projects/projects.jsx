import React from "react";
import "./projects.css";

import foodcy from "../../assets/foodcy.png";
import monsters from "../../assets/monsters.png";
import url from "../../assets/url.png";
import crwn from "../../assets/crwn.png";

const Projects = () => {
  return (
    <div className="project-container">
      <h1>PROJECTS</h1>
      <div className="list-of-projects">
        <div className="figure">
          <img src={foodcy} alt="foodcy" />
          <div className="figcaption">
            <h2>
              <b>Foodcy</b>
            </h2>
            <p>Best restaurants in the town.</p>
          </div>
        </div>
        <div className="figure">
          <img src={monsters} alt="monsters" />
          <div className="figcaption">
            <h2>
              <b>Aliens</b> Rolodex{" "}
            </h2>
            <p>
              Search for aliens, and their <br />
              aliases on earth.
            </p>
          </div>
        </div>
        <div className="figure">
          <img src={url} alt="url" />
          <div className="figcaption">
            <h2>
              <b>Shorten</b> your <b>URL</b>
            </h2>
          </div>
        </div>
        <div className="figure">
          <img src={crwn} alt="crwn" />
          <div className="figcaption">
            <h2>
              <b>Crwn</b> Clothing{" "}
            </h2>
            <p>A shopping website.</p>
          </div>
        </div>
      </div>
      <div className="experience-div">
        <div className="experience">EXPERIENCE</div>
        <div className="experience-content">
          <h3>EnLume Inc.</h3>
          <p>SDE Intern</p>
          <span className="exp-content">
            - R&D on overall understanding of Jitsi Components and workflow.
            <br />
            - Developed backend functionalities with Node.js.
            <br />
            - Developed swagger documentation for backend APIs.
            <br />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Projects;
