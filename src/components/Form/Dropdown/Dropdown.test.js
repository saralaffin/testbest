import React from "react";
import { shallow } from "enzyme";

import Dropdown from "./Dropdown";

// We will describe a block of tests
describe("dropdown component", () => {
  // we will write one individual test
  it("should render as expected", () => {
    // Shallow rendering renders a component without rendering any of its children
    const component = shallow(
      <Dropdown label={"age"} type="white" options={[1, 2, 3, 4, "5+"]} />
    );
    // We create an assertion within the test that checks if our component renders our name prop
    expect(component.contains("age")).toBe(true);
  });
});
