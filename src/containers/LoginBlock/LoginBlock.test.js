import React from 'react';
import { shallow } from 'enzyme';
import { LoginBlock, mapDispatchToProps } from './LoginBlock';

describe("LoginBlock", () => {
  let block, instance

  beforeEach(() => {
    block = shallow( <LoginBlock /> )
    instance = block.instance()
  });

  describe("snapshots", () => {
    it("should match the snapshot with all data passed in correctly", () => {
      expect(block).toMatchSnapshot()
    });

    it("should match the snapshot if isRedirect state is true", () => {
      block.setState({isRedirected: true})
      expect(block).toMatchSnapshot()
    });

    it("should match the snapshot if state has error info", () => {
      block.setState({error: 'This is error!'})
      expect(block).toMatchSnapshot()
    });
  });

  describe("events", () => {
    it("should call submitUser method when form is submitted", () => {
      const spy = jest.spyOn(instance, 'submitUser').mockImplementation(() => {})

      instance.forceUpdate()

      const mockEvent = {
        preventDefault: jest.fn()
      }

      block.find('form').simulate('submit', mockEvent)

      expect(spy).toHaveBeenCalledWith(mockEvent);
    });

    it("should call submitUser method when button is clicked", () => {
      const spy = jest.spyOn(instance, 'submitUser').mockImplementation(() => {})

      instance.forceUpdate()

      const mockEvent = {
        preventDefault: jest.fn()
      }

      block.find('button:first-child').simulate('click', mockEvent)

      expect(spy).toHaveBeenCalledWith(mockEvent);
    });

    it("should call handleChanges method when username input is change", () => {
      const spy = jest.spyOn(instance, 'handleChanges').mockImplementation(() => {})

      instance.forceUpdate()

      const mockEvent = {
        target: {
          id: 'username',
          value: 'some-user'
        }
      }

      block.find('#username').simulate('change', mockEvent)

      expect(spy).toHaveBeenCalledWith(mockEvent);
    });

    it("should call handleChanges method when password input is change", () => {
      const spy = jest.spyOn(instance, 'handleChanges').mockImplementation(() => {})

      instance.forceUpdate()

      const mockEvent = {
        target: {
          id: 'password',
          value: '1234'
        }
      }

      block.find('#password').simulate('change', mockEvent)

      expect(spy).toHaveBeenCalledWith(mockEvent);
    });
  });
});
