import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import "../../App.css";
import "./Footer.css";

function Footer(props) {
  return (
    <div className="footer__bar">
      <div className="footer__image">
        <img src="https://i.imgur.com/15AizW0.png"></img>
      </div>
      <div className="footer__links-container">
        <Link to="/" className="footer__links">
          Posts
        </Link>
        <Link to="/dogs" className="footer__links">
          Dog Breeds
        </Link>
        <Link to="/cats" className="footer__links">
          Cat Breeds
        </Link>
        <Link to="/addPet" className="footer__links">
          Add a Pet
        </Link>
      </div>
    </div>
  );
}

export default Footer;
