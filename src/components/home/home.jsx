import React from "react";
import "./home.css";

import Cards from "../../components/tech/tech-cards";

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-content">Home</div>
      <div className="cards">
        <Cards />
      </div>
    </div>
  );
};

export default Home;
