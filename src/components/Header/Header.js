import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";

import "../../App.css";
import "./Header.css";

function Header(props) {
  return (
    <div className="header__bar">
      <div className="header__image">
        <img src="https://i.imgur.com/15AizW0.png"></img>
      </div>
      <div className="header__links-container">
        <Link to="/addPet" className="header__links">
          + Add Post
        </Link>
        <Link to="/dogs" className="header__links">
          Dog Breeds
        </Link>
        <Link to="/cats" className="header__links">
          Cat Breeds
        </Link>
        <Link to="/" className="header__links">
          <HomeIcon fontSize="large" color="white" />
        </Link>
      </div>
    </div>
  );
}

export default Header;
