import React from "react";
import { storiesOf } from "@storybook/react";
import Dropdown from "./Dropdown";

storiesOf("Dropdown", module)
  .add("Dropdown Gray", () => (
    <Dropdown label="Breed" type="gray" options={["Select", "A", "B", "C"]} />
  ))
  .add("Dropdown White", () => (
    <Dropdown label="Age" type="white" options={[1, 2, 3, 4, "5+"]} />
  ));
