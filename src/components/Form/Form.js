import React from "react";
import "./Form.css";

const Form = props => {
  return (
    <form className="form__form" onSubmit={props.onSubmit} netlify>
      {props.inputComponenets}
      <div className="form__imgur">
        <a href="https://imgur.com/upload?beta" target="_blank">
          Click here to upload your image to Imgur, then paste the Image URL
          above.
        </a>
      </div>
      {props.dropdownComponents}
      {props.buttonComponent}
    </form>
  );
};

export default Form;
