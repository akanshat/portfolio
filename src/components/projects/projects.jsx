import React from "react";
import "./projects.css";

import foodcy from "../../assets/foodcy.png";
import monsters from "../../assets/monsters.png";
import crwn from "../../assets/crwn.png";
import foodWebApp from "../../assets/food-web-app.png";

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
          <a
            href="https://akanshat.github.io/aliens-rolodex-improved/"
            target="_blank"
            rel="noopener noreferrer"
          >
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
          </a>
        </div>
        {/* <div className="figure">
          <img src={url} alt="url" />
          <div className="figcaption">
            <h2>
              <b>Shorten</b> your <b>URL</b>
            </h2>
          </div>
        </div> */}
        <div className="figure">
          <a
            href="https://akansha-crwn-live.herokuapp.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={crwn} alt="crwn" />
            <div className="figcaption">
              <h2>
                <b>Crwn</b> Clothing{" "}
              </h2>
              <p>A shopping website.</p>
            </div>
          </a>
        </div>
        <div className="figure">
          <img src={foodWebApp} alt="foodWebApp" />
          <div className="figcaption">
            <h2>
              <b>Food</b> Ordering <b>Web-app</b>{" "}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
