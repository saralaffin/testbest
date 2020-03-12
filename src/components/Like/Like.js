import React from "react";
import "./Like.css";

const Like = props => {
  let classList = "like__div";

  if (props.active) {
    classList += ` like__div-active`;
  }
  return <div className={classList} onClick={props.onClick}></div>;
};

export default Like;
