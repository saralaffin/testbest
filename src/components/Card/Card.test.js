import React from "react";
import {shallow} from "enzyme";
import Card from "./Card"



describe('Card Component', ()  => {
    const component = shallow(<Card />);

    it("Should have a state var set to false", () => {
        // expect(component.state("numberOfLikes")).toEqual({props.numberOfLikes} || 0);
        expect(component.state("liked")).toEqual(false);
    });
});