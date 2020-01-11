import React from 'react';
import { shallow } from 'enzyme';
import SignUpPage from './SignUpPage';

it("should match snapshot with all data passed in correctly", () => {
  const page = shallow(<SignUpPage />)
  expect(page).toMatchSnapshot();
});
