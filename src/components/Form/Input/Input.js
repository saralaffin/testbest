import React from "react";
import "./Input.css";
const Input = props => {
  let classList = "";
  let types = ["small", "medium"];
  if (types.includes(props.type)) {
    classList += ` input__${props.type}`;
  }

  return (
    <p>
      <label>{props.label}</label>
      <br></br>
      <input
        type="text"
        placeholder={props.placeholder}
        onChange={props.onChange}
        className={classList}
        name={props.name}
      ></input>
    </p>
  );
};
export default Input;
