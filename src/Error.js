import React from "react";
import { Link } from "react-router-dom";

const Errors = () => {
  return (
    <div>
      <div>Error 404</div>
      <h1>Oops! You seem to be lost.</h1>
      <p>Back to homepage</p>
      <Link to="/">Home</Link>
    </div>
  );
};

export default Errors;
