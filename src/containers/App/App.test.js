import React from 'react';
import { shallow } from 'enzyme';
import { App, mapStateToProps, mapDispatchToProps } from './App';
import { addUserInfo } from 'redux/actions'

describe('App', () => {
  let App

  beforeEach(() => {
    const app = shallow(
      <App />
    );
  });

});

describe("mapStateToProps", () => {
  it("should return the object with correct key/value pairs from store", () => {
    const mockStore = {
      user: { },
      process: null,
      parks: []
    }

    const expected = {
      user: { },
      process: null,
    }

    const result = mapStateToProps(mockStore)

    expect(result).toEqual(expected);
  });
});

describe("mapDispatchToProps", () => {
  let mockDispatch, mockProps

  beforeEach(() => {
    mockDispatch = jest.fn()
    mockProps = mapDispatchToProps(mockDispatch);
  });

  it("should call dispatch with an addUserInfo action when addUserInfo is called", () => {
    const user = {name: 'Ray'}

    const actionToDispatch = addUserInfo(user)

    const result = mockProps.addUserInfo(user)

    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });
});
