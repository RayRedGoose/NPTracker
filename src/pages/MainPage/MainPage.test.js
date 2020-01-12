import React from 'react';
import { shallow } from 'enzyme';
import MainPage from './MainPage';
import ParksContainer from 'containers/ParksContainer/ParksContainer'

it("should match snapshot with all data passed in correctly", () => {
  const page = shallow(
    <MainPage Part={ParksContainer} type="all" />
  )
  expect(page).toMatchSnapshot();
});
