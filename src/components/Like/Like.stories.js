import React from "react";
import { storiesOf } from "@storybook/react";
import "./Like.css";
import Like from "./Like";

const onClick = e => {
  console.log(e);
};
//I am adding atributes we can access later
storiesOf("Like", module)
  .add("Like", () => <Like onClick={onClick} />)
  .add("Like active", () => <Like onClick={onClick} active />);
