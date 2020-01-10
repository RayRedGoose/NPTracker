import React from 'react';
import { shallow } from 'enzyme';
import WelcomePage from './WelcomePage';

describe('WelcomePage', () => {
  it('should match the snapshot with all data passed in correctly', () => {
    const page = shallow(<WelcomePage />);

    expect(page).toMatchSnapshot();
  });
});
