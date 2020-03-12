import React from "react";
import "./Dropdown.css";
import "./Dropdown.stories.js";

const Dropdown = props => {
  let classList = "";

  let types = ["white", "gray"];

  if (types.includes(props.type)) {
    classList += `dropdown__${props.type}`;
  }

  let optionsFill = () => {
    return props.options.map((option, index) => {
      return <option key={index}>{option}</option>;
    });
  };

  return (
    <p>
      <label>{props.label}</label>
      <br></br>
      <select
        className={classList}
        id="dropdown"
        onChange={props.onChange}
        name={props.name}
        defaultValue={"DEFAULT"}
      >
        <option value="DEFAULT" disabled>
          Select...
        </option>
        {optionsFill()}
      </select>
    </p>
  );
};

export default Dropdown;
