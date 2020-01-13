import React from 'react'
import { shallow } from 'enzyme'
import { LoginBlock, mapDispatchToProps } from './LoginBlock'
import { getItem, addItem } from '_utils/localStorage'
import { addUserInfo } from 'redux/actions'

jest.mock('_utils/localStorage')

describe("LoginBlock", () => {
  let block, instance
  const mockUser = {
    username: 'some-user',
    password: '1234'
  }
  const addUserInfo = jest.fn()

  beforeEach(() => {
    block = shallow(
      <LoginBlock addUserInfo={ addUserInfo }/> )
    instance = block.instance()
  })

  describe("Snapshots", () => {
    it("should match the snapshot with all data passed in correctly", () => {
      expect(block).toMatchSnapshot()
    })

    it("should match the snapshot if isRedirect state is true", () => {
      block.setState({isRedirected: true})
      expect(block).toMatchSnapshot()
    })

    it("should match the snapshot if state has error info", () => {
      block.setState({error: 'This is error!'})
      expect(block).toMatchSnapshot()
    })
  })

  describe("Event handlers", () => {
    it("should call submitUser method when form is submitted", () => {
      const spy = jest.spyOn(instance, 'submitUser').mockImplementation(() => {})

      instance.forceUpdate()

      const mockEvent = {
        preventDefault: jest.fn()
      }

      block.find('form').simulate('submit', mockEvent)

      expect(spy).toHaveBeenCalledWith(mockEvent)
    })

    it("should call submitUser method when button is clicked", () => {
      const spy = jest.spyOn(instance, 'submitUser').mockImplementation(() => {})

      instance.forceUpdate()

      const mockEvent = {
        preventDefault: jest.fn()
      }

      block.find('button:first-child').simulate('click', mockEvent)

      expect(spy).toHaveBeenCalledWith(mockEvent)
    })

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

      expect(spy).toHaveBeenCalledWith(mockEvent)
    })

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

      expect(spy).toHaveBeenCalledWith(mockEvent)
    })

    it("should call redirect method when sign up button has been clicked", () => {
      const spy = jest.spyOn(instance, 'redirect').mockImplementation(() => {})

      instance.forceUpdate()

      const mockEvent = {
        preventDefault: jest.fn()
      }

      block.find('button:last-child').simulate('click', mockEvent)

      expect(spy).toHaveBeenCalledWith(mockEvent)
    })
  })

  it("should change isRedirected state to true arter redirect fn has been called", () => {
    const mockEvent = {
      preventDefault: jest.fn()
    }

    expect(block.state('isRedirected')).toEqual(false)

    instance.redirect(mockEvent)

    expect(block.state('isRedirected')).toEqual(true)
  })

  describe("handleChanges", () => {
    let mockEvent

    beforeEach(() => {
      mockEvent = {
        target: {
          id: 'username',
          value: 'user'
        }
      }
    })

    it("should change state key the same with id of input if handleChanges has been called", () => {
      const inpytType = 'username'

      expect(block.state(inpytType)).toEqual('')

      instance.handleChanges(mockEvent)

      expect(block.state(inpytType)).toEqual('user')
    })

    it("should change state key the same with id of input if handleChanges has been called", () => {
      mockEvent = {
        target: {
          id: 'password',
          value: '1234'
        }
      }

      const inpytType = 'password'

      expect(block.state(inpytType)).toEqual('')

      instance.handleChanges(mockEvent)

      expect(block.state(inpytType)).toEqual('1234')
    })

    it("should create state error key with value of null if handleChanges has been called", () => {
      expect(block.state('error')).toEqual(undefined)

      instance.handleChanges(mockEvent)

      expect(block.state('error')).toEqual(null)
    })
  })

  describe("submitUser fn", () => {
    const mockEvent = {
      preventDefault: jest.fn()
    }

    const mockUsers = [mockUser]

    beforeEach(() => {
      getItem.mockImplementation(() => mockUsers)
    })

    it("should call getItem when submitUser is called", () => {
      instance.submitUser(mockEvent)

      expect(getItem).toHaveBeenCalledWith('users')
    })

    it("should call findUser if the users array was taken from LS when submitUser is called", () => {
      const spy = jest.spyOn(instance, 'findUser').mockImplementation(() => {})
      instance.forceUpdate()

      instance.submitUser(mockEvent)

      expect(spy).toHaveBeenCalledWith(mockUsers)
    })

    it("should add error message to state if the users array was not taken from LS when submitUser is called", () => {
      getItem.mockImplementation(() => {})

      expect(block.state('error')).toEqual(undefined)

      instance.submitUser(mockEvent)

      const error = 'Please, create account!'

      expect(block.state('error')).toEqual(error)
    })
  })

  describe("findUser fn", () => {

    it("should call checkUserPassword if user was found when findUser is called", () => {
      const spy = jest.spyOn(instance, 'checkUserPassword').mockImplementation(() => {})
      instance.forceUpdate()

      block.setState({username: 'some-user'})

      instance.findUser([mockUser])

      expect(spy).toHaveBeenCalledWith(mockUser)
    })

    it("should add error message to state if user was not found when findUser is called", () => {
      block.setState({username: 'other-user'})

      expect(block.state('error')).toEqual(undefined)

      instance.findUser([mockUser])

      const error = 'This username is not found!'

      expect(block.state('error')).toEqual(error)
    })
  })

  describe("checkUserPassword fn", () => {

    it("should call pushUser if password is correct when checkUserPassword is called", () => {
      const spy = jest.spyOn(instance, 'pushUser').mockImplementation(() => {})
      instance.forceUpdate()

      block.setState({password: '1234'})

      instance.checkUserPassword(mockUser)

      expect(spy).toHaveBeenCalledWith(mockUser)
    })

    it("should add error message to state if password is not correct when checkUserPassword is called", () => {
      block.setState({password: '1111'})

      expect(block.state('error')).toEqual(undefined)

      instance.checkUserPassword(mockUser)

      const error = 'Password is incorrect!'

      expect(block.state('error')).toEqual(error)
    })
  })

  describe("pushUser", () => {
    it("should call addUserInfo props when pushUser is called", () => {
      instance.pushUser(mockUser)
      expect(addUserInfo).toHaveBeenCalledWith(mockUser)
    })

    it("should call addItem when pushUser is called", () => {
      instance.pushUser(mockUser)

      expect(addItem).toHaveBeenCalledWith('user', mockUser)
    })
  })
})

describe("mapDispatchToProps", () => {
  it("should call dispatch with an addUserInfo action when addUserInfo is called", () => {
    const user = { name: 'Ray' }
    const mockDispatch = jest.fn()
    const mockProps = mapDispatchToProps(mockDispatch)

    const actionToDispatch = addUserInfo(user)

    const result = mockProps.addUserInfo(user)

    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
  })
})
