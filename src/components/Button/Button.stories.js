import React from "react";
import { storiesOf } from "@storybook/react";
import "./Button.css";
import Button from "./Button";

//This is adding attributes that we can access later.
storiesOf("Button", module)
  .add("Primary", () => <Button label="Do something" type="primary" />)
  .add("Large Primary", () => (
    <Button label="Do something" type="primary" large />
  ))
  .add("Danger", () => <Button label="Do something" type="danger" />)
  .add("Success", () => <Button label="Do something" type="success" />)
  .add("sucshad", () => <Button label="Do something" type="sucshad" />)
  .add("Warning", () => <Button label="Do something" type="warning" />)
  .add("Default", () => <Button label="Do something" type="default" />)
  .add("defade", () => <Button label="Do something" type="defade" />)
  .add("defshad", () => <Button label="Do something" type="defshad" />)
  .add("dangfade", () => <Button label="Do something" type="danfade" />)
  .add("sucfade", () => <Button label="Do something" type="sucfade" />)
  .add("warfade", () => <Button label="Do something" type="warfade" />)
  .add("warnshad", () => <Button label="Do something" type="warnshad" />)
  .add("primfade", () => <Button label="Do something" type="primfade" />)
  .add("lprimfade", () => <Button label="Do something" type="lprimfade" />)
  .add("primshad", () => <Button label="Do something" type="primshad" />)
  .add("lprimshad", () => <Button label="Do something" type="lprimshad" />)
  .add("danshad", () => <Button label="Do something" type="danshad" />)
  .add("primeoutline", () => (
    <Button label="Do something" type="primeoutline" />
  ))
  .add("lprimeoutline", () => (
    <Button label="Do something" type="lprimeoutline" />
  ))
  .add("dangoutline", () => <Button label="Do something" type="dangoutline" />)
  .add("sucoutline", () => <Button label="Do something" type="sucoutline" />)
  .add("waroutline", () => <Button label="Do something" type="waroutline" />)
  .add("defoutline", () => <Button label="Do something" type="defoutline" />)
  .add("submit", () => <Button label="submit" type="submit" />);
