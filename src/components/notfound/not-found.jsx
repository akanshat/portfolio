import React from "react";
import "./not-found.css";

import { Link } from "react-router-dom";
import PageNotFound from "../../assets/page-not-found.png";

const NotFound = () => {
  return (
    <div className="container">
      <div className="text-404">
        <img className="image404" alt="404" src={PageNotFound} />
      </div>
      <div>
        <Link to="/">
          <h3 className="back-home">Back</h3>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
