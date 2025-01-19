// import React from "react";
import { Link } from "react-router-dom";
import "../styles/NotFound.css";

function NotFound() {
  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <h1 className="not-found-title">404</h1>
        <p className="not-found-message">
          It seems you are lost your way! The page you are looking for is not
          here.
        </p>
        <Link to="/" className="not-found-home-link">
          <button className="not-found-button">Take Me Home</button>
        </Link>
      </div>
      <div className="not-found-animation">
      </div>
    </div>
  );
}

export default NotFound;
