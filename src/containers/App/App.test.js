import React from 'react';
import { shallow } from 'enzyme';
import { App, mapStateToProps, mapDispatchToProps } from './App';
import { addUserInfo } from 'redux/actions'
import { getItem } from '_utils/localStorage'

jest.mock('_utils/localStorage')

describe('App', () => {
  let app, instance, mockProps

  const addUserInfo = jest.fn()
  const user = { name: 'Ray' }
  const process = null

  beforeEach(() => {
    mockProps = {
      user,
      process,
      addUserInfo
    }

    app = shallow(
      <App {...mockProps} />
    );

    instance = app.instance()
  });

  it("should call getItem after component was rendered", () => {
    expect(getItem).toHaveBeenCalledWith('user');
  });

  it("should call addUserInfo prop if user info was taken from localStorage after component was rendered", () => {
    getItem.mockImplementation(() => user)

    instance.componentDidMount()

    expect(addUserInfo).toHaveBeenCalledWith(user);
  });

  it("should call change isLogged state if user prop is changed", () => {
    expect(app.state('isLogged')).toEqual(false);

    const mockPrevProp = { user: {} }

    instance.componentDidUpdate(mockPrevProp)

    expect(app.state('isLogged')).toEqual(true);
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
