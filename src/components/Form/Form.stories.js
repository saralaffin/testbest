import React from "react";
import { storiesOf } from "@storybook/react";
import "./Form.css";
import Form from "./Form";
import Input from "./Input/Input";
import Dropdown from "./Dropdown/Dropdown";
import Button from "../Button/Button";

let inputComponenets = [
  <Input label="Name" type="small" placeholder="Name" />,
  <Input
    label="Caption"
    type="small"
    placeholder="Be creative! And pawsitive!"
  />,
  <Input
    label="Image URL"
    type="small"
    placeholder="Checkout imgur.com for hosting image files"
  />
];
let dropdownComponents = [
  <Dropdown label="Type" options={["cat", "dog"]} type="gray" />,
  <Dropdown label="Breed" options={[1, 2, 3]} type="gray" />,
  <Dropdown
    label="Age"
    options={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, "15+"]}
    type="gray"
  />
];
let buttonInfo = {
  label: "Submit",
  type: "default"
};
let buttonComponent = <Button {...buttonInfo} />;

storiesOf("Form", module).add("Form", () => (
  <Form
    inputComponenets={inputComponenets}
    dropdownComponents={dropdownComponents}
    buttonComponent={buttonComponent}
  />
));
