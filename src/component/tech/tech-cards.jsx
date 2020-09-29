import React from "react";
import "./tech-cards.css";

import cpp from "../../assets/cplusplus.svg";
import css from "../../assets/css3.svg";
import docker from "../../assets/docker.svg";
import git from "../../assets/git.svg";
import html from "../../assets/html5.svg";
import js from "../../assets/javascript.svg";
import linux from "../../assets/linux.svg";
import mongodb from "../../assets/mongodb.svg";
import mysql from "../../assets/mysql.svg";
import node from "../../assets/node-dot-js.svg";
import psql from "../../assets/postgresql.svg";
import react from "../../assets/react.svg";
import reactrouter from "../../assets/reactrouter.svg";

const Cards = () => {
  return (
    <div className="tech-cards">
      <img className="image cpp" alt="cpp" src={cpp} />
      <img className="image css" alt="css" src={css} />
      <img className="image docker" alt="docker" src={docker} />
      <img className="image git" alt="git" src={git} />
      <img className="image html" alt="html" src={html} />
      <img className="image js" alt="js" src={js} />
      <img className="image linux" alt="linux" src={linux} />
      <img className="image mongodb" alt="mongodb" src={mongodb} />
      <img className="image mysql" alt="mysql" src={mysql} />
      <img className="image node" alt="node" src={node} />
      <img className="image psql" alt="psql" src={psql} />
      <img className="image react" alt="react" src={react} />
      <img className="image reactrouter" alt="reactrouter" src={reactrouter} />
    </div>
  );
};

export default Cards;
