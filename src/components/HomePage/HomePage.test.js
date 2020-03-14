import React from "react";
import { shallow } from "enzyme";

import HomePage from "./HomePage";

// We will describe a block of tests
describe("HomePage component", () => {
  // we will write one individual test
  it("should render wait message on load", () => {
    // Shallow rendering renders a component without rendering any of its children
    const component = shallow(<HomePage />, { disableLifecycleMethods: true });
    // We create an assertion within the test that checks if our component renders our wait message
    expect(
      component.contains(
        "This is our home page :) please wait while our pets load"
      )
    ).toBe(true);
  });
});
