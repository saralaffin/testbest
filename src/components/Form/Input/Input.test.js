// Import React
import React from 'react';
import { shallow } from 'enzyme';

import Input from './Input';

//We will describe a block of tests
describe('Hello world component', () => {
	// we will write one individual test
  it('should render as expected', () => {
    // Shallow rendering renders a component without rendering any of its children
    const component = shallow(<Input label={"Name"} type={"small"} placeholder={"placeholder"} />)
    // We create an assertion within the test that checks if our component renders our name prop
    expect(component.contains('Name')).toBe(true)
  })
})