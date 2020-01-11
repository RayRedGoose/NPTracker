import React from 'react';
import { shallow } from 'enzyme';
import { ProcessButton, mapDispatchToProps } from './ProcessButton'
import { addProcessName, addProcessStep } from 'redux/actions'

describe("ProcessButton", () => {
  let button, instance, mockProps
  const addProcessName = jest.fn()
  const addProcessStep = jest.fn()

  beforeEach(() => {
    mockProps = {
      text: "Sign In",
      type: 'login',
      addProcessName,
      addProcessStep
    }

    button = shallow(
      <ProcessButton {...mockProps} />
    )

    instance = button.instance()
  });

  describe("Snapshots", () => {
    it("should match snapshot with all data passed in correctly", () => {
      expect(button).toMatchSnapshot()
    });

    it("should match snapshot if isRedirected state is true", () => {
      button.setState({isRedirected: true})
      expect(button).toMatchSnapshot()
    });
  });

  describe("Event handlers", () => {
    it("should call redirect if button is clicked", () => {
      const spy = jest.spyOn(instance, 'redirect').mockImplementation(jest.fn())
      instance.forceUpdate()

      const mockEvent = {target: {id: 'login'}}
      button.find('button').simulate('click', mockEvent)

      expect(spy).toHaveBeenCalledWith(mockEvent);
    });
  });

  describe("redirect fn", () => {
    let mockEvent

    beforeEach(() => {
      mockEvent = {target: {id: 'login'}}
    });

    it("should call addProcessName props with target id as argument if redirect is called", () => {
      instance.redirect(mockEvent)

      expect(addProcessName).toHaveBeenCalledWith('login')
    });

    it("should call addProcessStep props with 1 as argument if redirect is called", () => {
      instance.redirect(mockEvent)

      expect(addProcessStep).toHaveBeenCalledWith(1)
    });

    it("should change isRedirected to true if redirect is called", () => {
      expect(button.state('isRedirected')).toEqual(false)

      instance.redirect(mockEvent)

      expect(button.state('isRedirected')).toEqual(true)
    });
  });
});

describe("mapDispatchToProps", () => {
  let mockDispatch, mockProps

  beforeEach(() => {
    mockDispatch = jest.fn()
    mockProps = mapDispatchToProps(mockDispatch)
  });

  it("should call dispatch with an addProcessName action when addProcessName is called", () => {
    const type = 'login'

    const actionToDispatch = addProcessName(type)

    const result = mockProps.addProcessName(type)

    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });

  it("should call dispatch with an addProcessStep action when addProcessStep is called", () => {
    const actionToDispatch = addProcessStep(1)

    const result = mockProps.addProcessStep(1)

    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });
});
