import React from "react";
import { shallow } from "enzyme";

import AddPet from "./AddPet";

//We will describe a block of tests
describe("Add Pet Component", () => {
  const component = shallow(<AddPet />);

  it("should have an empty type, petName, breed, caption, and image state var. Age and numberOfLikes should be 0", () => {
    //Optionally test to check if password and email are empty strings on setup
    expect(component.state("type")).toEqual("");
    expect(component.state("petName")).toEqual("");
    expect(component.state("breed")).toEqual("");
    expect(component.state("caption")).toEqual("");
    expect(component.state("image")).toEqual("");
    expect(component.state("age")).toEqual(0);
    expect(component.state("numberOfLikes")).toEqual(0);
  });
});
