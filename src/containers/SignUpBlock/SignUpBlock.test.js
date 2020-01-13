import React from 'react'
import { shallow } from 'enzyme'
import { SignUpBlock, mapStateToProps, mapDispatchToProps } from './SignUpBlock'
import { addItem, addItemToAll } from '_utils/localStorage'
import { addUserInfo, increaseStep } from 'redux/actions'

jest.mock('_utils/localStorage')

describe("SignUpBlock", () => {
  let block, instance

  const mockUser = {
    username: 'some-user',
    password: '1234',
    name: 'Ray',
    last_name: 'Zlou',
    city: 'Denver',
    image: 'some-image'
  }
  const addUserInfo = jest.fn()
  const increaseStep = jest.fn()

  const mockProps = {
    key: 1,
    id: 1,
    inputs: ['username'],
    process: {
      name: 'signup',
      step: 1
    },
    user: {},
    addUserInfo,
    increaseStep
  }

  beforeEach(() => {
    block = shallow(
      <SignUpBlock {...mockProps} />
    )

    instance = block.instance()
  })

  describe("Snapshots", () => {

    it("should match snapshot with all data passed correctly", () => {
      expect(block).toMatchSnapshot()
    })

    it("should match snapshot if type is inactive", () => {
      block.setState({type: 'inactive'})
      expect(block).toMatchSnapshot()
    })

    it("should match snapshot if type is done", () => {
      block.setState({type: 'done'})
      expect(block).toMatchSnapshot()
    })

    it("should match snapshot if type is active on last step of process and all user data was entered", () => {
      const lastBlock = shallow(
        <SignUpBlock {...mockProps}
          id={4}
          process={{name: 'signup', step: 4}}
          user={mockUser} />
      )

      expect(lastBlock).toMatchSnapshot()
    })

    it("should match snapshot with error if type is active on last step of process but no user data", () => {
      const lastBlock = shallow(
        <SignUpBlock {...mockProps}
          id={4}
          process={{name: 'signup', step: 4}} />
      )

      expect(lastBlock).toMatchSnapshot()
    })
  })

  describe("Active state", () => {

    it("should call createInputs method after rendering", () => {
      const spy = jest.spyOn(instance, 'createInputs').mockImplementation(jest.fn())
      instance.forceUpdate()
      expect(spy).toHaveBeenCalled()
    })

    it("should call updateUser method when arrow image is clicked", () => {
      const spy = jest.spyOn(instance, 'updateUser').mockImplementation(jest.fn())
      instance.forceUpdate()

      block.find('img').simulate('click')

      expect(spy).toHaveBeenCalled()
    })

    it("should call handleChanges method when input is changed", () => {
      const spy = jest.spyOn(instance, 'handleChanges').mockImplementation(jest.fn())
      instance.forceUpdate()

      const mockEvent = {
        target: {
          id: 'username',
          value: 'user'
        }
      }

      block.find('input').simulate('change', mockEvent)

      expect(spy).toHaveBeenCalledWith(mockEvent)
    })

    describe("Last block", () => {
      let lastBlock, newInstance

      beforeEach(() => {
        lastBlock = shallow(
          <SignUpBlock {...mockProps}
            id={4}
            process={{name: 'signup', step: 4}}
            user={mockUser} />
        )

        newInstance = lastBlock.instance()
      })

      it("should call submitUser method when first button is clicked if it's lastBlock with correct user data", () => {
        const spy = jest.spyOn(newInstance, 'submitUser').mockImplementation(jest.fn())
        newInstance.forceUpdate()

        lastBlock.find('button:first-child').simulate('click')

        expect(spy).toHaveBeenCalled()
      })

      it("should call cancel method when last button is clicked if it's lastBlock with correct user data", () => {
        const spy = jest.spyOn(newInstance, 'cancel').mockImplementation(jest.fn())
        newInstance.forceUpdate()

        lastBlock.find('button:last-child').simulate('click')

        expect(spy).toHaveBeenCalled()
      })

      it("should call cancel method when button is clicked if it's lastBlock with error", () => {
        const errorBlock = shallow(
          <SignUpBlock {...mockProps}
            id={4}
            process={{name: 'signup', step: 4}} />
        )

        const spy = jest.spyOn(errorBlock.instance(), 'cancel').mockImplementation(jest.fn())
        errorBlock.instance().forceUpdate()

        errorBlock.find('button').simulate('click')

        expect(spy).toHaveBeenCalled()
      })
    })
  })

  describe("Lifecycle methods", () => {

    it("should call checkType fn after rendering if there is process prop", () => {
      const spy = jest.spyOn(instance, 'checkType').mockImplementation(jest.fn())
      instance.forceUpdate()

      instance.componentDidMount()

      expect(spy).toHaveBeenCalled()
    })

    it("should call checkType fn if process step prop was changed", () => {
      const spy = jest.spyOn(instance, 'checkType').mockImplementation(jest.fn())
      instance.forceUpdate()

      const mockPrevProps = {
        process: {
          name: 'signup',
          step: 2
        }
      }

      instance.componentDidUpdate(mockPrevProps)

      expect(spy).toHaveBeenCalled()
    })
  })

  describe("checkType", () => {

    it("should change type state to active if process step and id are the same when checkType is called", () => {
      block.setState({type: 'inactive'})
      expect(block.state('type')).toEqual('inactive')
      block.instance().checkType()
      expect(block.state('type')).toEqual('active')
    })

    it("should change type state to inactive if process step is less than id when checkType is called", () => {
      const block = shallow(
        <SignUpBlock {...mockProps}
          process={{
            name: 'signup',
            step: 1
          }}
          id={ 2 }/>
      )
      block.setState({type: 'active'})
      expect(block.state('type')).toEqual('active')
      block.instance().checkType()
      expect(block.state('type')).toEqual('inactive')
    })

    it("should change type state to done if process step is more than id when checkType is called", () => {
      const block = shallow(
        <SignUpBlock {...mockProps}
          process={{
            name: 'signup',
            step: 3
          }}
          id={ 2 }/>
      )
      block.setState({type: 'active'})
      expect(block.state('type')).toEqual('active')
      block.instance().checkType()
      expect(block.state('type')).toEqual('done')
    })
  })

  it("should change data state if handleChanges is called", () => {
    expect(block.state('data')).toEqual({ })

    const mockEvent = {
      target: {
        id: 'username',
        value: 'some-user'
      }
    }

    block.instance().handleChanges(mockEvent)
    expect(block.state('data')).toEqual({'username': 'some-user'})
  })

  describe("updateUser", () => {

    it("should call increaseStep prop when updateUser is called", () => {
      instance.updateUser()
      expect(increaseStep).toHaveBeenCalled()
    })

    it("should call addUserInfo with data state prop when updateUser is called", () => {
      instance.updateUser()
      expect(addUserInfo).toHaveBeenCalledWith(block.state('data'))
    })
  })

  describe("submitUser", () => {

    it("should call addItem with correct argument when submitUser is called", () => {
      addItem.mockImplementation(jest.fn())
      instance.submitUser()
      expect(addItem).toHaveBeenCalledWith('user', {})
    })

    it("should call addItemToAll with correct argument when submitUser is called", () => {
      addItemToAll.mockImplementation(jest.fn())
      instance.submitUser()
      expect(addItemToAll).toHaveBeenCalledWith('users', {})
    })
  })
})

describe("mapStateToProps", () => {

  it("should return the object with correct key", () => {
    const mockStore = {
      process: null,
      user: null,
      error: 'There is error!'
    }

    const expected = {
      process: null,
      user: null,
    }

    const result = mapStateToProps(mockStore)

    expect(result).toEqual(expected)
  })
})

describe("mapDispatchToProps", () => {
  let mockDispatch, mockProps

  beforeEach(() => {
    mockDispatch = jest.fn()
    mockProps = mapDispatchToProps(mockDispatch)
  })

  it("should call dispatch with an addUserInfo action when addUserInfo is called", () => {
    const user = { name: 'Ray' }

    const actionToDispatch = addUserInfo(user)

    const result = mockProps.addUserInfo(user)

    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
  })

  it("should call dispatch with an increaseStep action when increaseStep is called", () => {
    const actionToDispatch = increaseStep()

    const result = mockProps.increaseStep()

    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
  })
})
