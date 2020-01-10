import React from 'react';
import { shallow } from 'enzyme';
import { App } from './App';

describe('App', () => {
  it('should match the snapshot with all data passed in correctly', () => {
    const app = shallow(<App />);
    expect(app).toMatchSnapshot();
  });
});
