import React from "react";

const Form = props => {
  return (
    <form className="form__form" onSubmit={props.onSubmit} netlify>
      {props.inputComponenets}
      {props.dropdownComponents}
      {props.buttonComponent}
    </form>
  );
};

export default Form;
