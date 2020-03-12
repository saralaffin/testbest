import React from "react";

// This is a functional component - just sent up a little differently as an arrow function!
const Button = props => {
  {
    /* <button style={props.style}>{props.label}</button> */
  }
  let classList = "";
  let types = [
    "primary",
    "danger",
    "success",
    "warning",
    "warnshad",
    "default",
    "defade",
    "defshad",
    "danfade",
    "sucfade",
    "warfade",
    "primfade",
    "lprimfade",
    "primshad",
    "lprimshad",
    "danshad",
    "warnshad",
    "sucshad",
    "primeoutline",
    "lprimeoutline",
    "dangoutline",
    "sucoutline",
    "waroutline",
    "defoutline",
    "submit"
  ];
  if (types.includes(props.type)) {
    classList += `button-${props.type}`;
  }
  if (props.large) {
    classList += ` button-large`; // Note the spacing here since we are adding to the string!
  }

  //  Give the button's class a value of classList
  return <button className={classList}>{props.label}</button>;
};
export default Button;
