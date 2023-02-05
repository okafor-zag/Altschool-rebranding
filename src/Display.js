import React from "react";
import "./Display.css";
import { NavLink } from "react-router-dom";

const Display = () => {

  let activeStyle = {
    color: "red"
  };

  return (
    <div>
      <h1>WELCOME TO OKAFOR REBRANDING OF LAST SEMISTER EXAM AT ALTSCHOOL </h1>

      <div className="nav-bar">
        <div className="nav-link">
          <NavLink to="/" className="link" style={({isActive}) => isActive ? activeStyle : undefined } >Home</NavLink>
        </div>
        <div className="nav-link">
          <NavLink className="link" to="/users" style={({isActive}) => isActive ? activeStyle : undefined }> profile pages</NavLink>
        </div >
        <div className="nav-link">
        <NavLink to="/Contact" className="link" style={({isActive}) => isActive ? activeStyle : undefined } >Contact us</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Display;
