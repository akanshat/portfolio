import React from "react";
import "./projects.css";

import foodcy from "../../assets/foodcy.png";
import monsters from "../../assets/monsters.png";
import url from "../../assets/url.png";

const Projects = () => {
  return (
    <div className="project-container">
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
    </div>
  );
};

export default Projects;
