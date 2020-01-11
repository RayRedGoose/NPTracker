import React from 'react';
import { shallow } from 'enzyme';
import LoginPage from './LoginPage';

it("should match snapshot with all data passed in correctly", () => {
  const page = shallow(<LoginPage />)
  expect(page).toMatchSnapshot();
});
