import React from "react";
import "./not-found.css";

import {Link} from "react-router-dom";

const NotFound = () => {
  return (
    <div className="container">
      <h1 className="text-404">404</h1>
      <Link to="/">
        <h3 className="back-home">Back</h3>
      </Link>
    </div>
  );
};

export default NotFound;
