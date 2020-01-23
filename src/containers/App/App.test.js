import React from 'react'
import { shallow } from 'enzyme'
import { App, mapStateToProps, mapDispatchToProps } from './App'
import { addUserInfo, addPlannedParks, changeActiveTab } from 'redux/actions'
import { getItem } from '_utils/localStorage'

jest.mock('_utils/localStorage')

describe('App', () => {
  let app, instance, mockProps

  const addUserInfo = jest.fn()
  const addPlannedParks = jest.fn()
  const changeActiveTab = jest.fn()
  const user = { name: 'Ray' }
  const process = null

  beforeEach(() => {
    mockProps = {
      user,
      process,
      addUserInfo,
      addPlannedParks,
      changeActiveTab
    }

    app = shallow(
      <App {...mockProps} />
    )

    instance = app.instance()
  })

  describe("Snapshots", () => {
    it("should match snapshot with all data passed in correctly", () => {
      expect(app).toMatchSnapshot()
    })
  })

  it("should call getItem after component was rendered", () => {
    expect(getItem).toHaveBeenCalledWith('user')
  })

  describe("addUser", () => {
    it("should call addUser method if user info was taken from localStorage after component was rendered", () => {
      getItem.mockImplementation(()=> user)

      const spy = jest.spyOn(instance, 'addUser').mockImplementation()

      instance.componentDidMount()

      expect(spy).toHaveBeenCalledWith(user)
    })

    it("should call addUserInfo prop with user argument if addUser is called", () => {
      instance.addUser(user)

      expect(addUserInfo).toHaveBeenCalledWith(user)
    })

    it("should call addUserData with user argument if addUser is called", () => {
      const spy = jest.spyOn(instance, 'addUserData').mockImplementation(jest.fn())
      instance.forceUpdate()

      instance.addUser(user)

      expect(spy).toHaveBeenCalled()
    })
  })

  describe("checkActiveTab", () => {
    it("should call checkActiveTab method after component was rendered", () => {
      const spy = jest.spyOn(instance, 'checkActiveTab')
        .mockImplementation(jest.fn())
      instance.forceUpdate()

      instance.componentDidMount()

      expect(spy).toHaveBeenCalled()
    })

    it("should call changeActiveTab props with 0 if path is not tab", () => {
      instance.checkActiveTab()

      expect(changeActiveTab).toHaveBeenCalledWith(0)
    })

    it("should call changeActiveTab props with 1 if path is /dashboard", () => {
      instance.checkActiveTab('/dashboard')

      expect(changeActiveTab).toHaveBeenCalledWith(1)
    })

    it("should call changeActiveTab props with 2 if path is /parks", () => {
      instance.checkActiveTab('/parks')

      expect(changeActiveTab).toHaveBeenCalledWith(2)
    })

    it("should call changeActiveTab props with 3 if path is /wish-list", () => {
      instance.checkActiveTab('/wish-list')

      expect(changeActiveTab).toHaveBeenCalledWith(3)
    })

    it("should call changeActiveTab props with 4 if path is /visited", () => {
      instance.checkActiveTab('/visited')

      expect(changeActiveTab).toHaveBeenCalledWith(4)
    })
  });

  it("should call addPlannedParks prop with user argument if addUserData is called", () => {
    getItem.mockImplementation(() => ["Some park"])

    instance.addUserData(user)

    expect(addPlannedParks).toHaveBeenCalledWith(["Some park"])
  });
})

describe("mapDispatchToProps", () => {
  let mockDispatch, mockProps

  beforeEach(() => {
    mockDispatch = jest.fn()
    mockProps = mapDispatchToProps(mockDispatch)
  })

  it("should call dispatch with an addUserInfo action when addUserInfo is called", () => {
    const user = {name: 'Ray'}

    const actionToDispatch = addUserInfo(user)

    const result = mockProps.addUserInfo(user)

    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
  })

  it("should call dispatch with an addPlannedParks action when addPlannedParks is called", () => {
    const parks = ["Some Park"]

    const actionToDispatch = addPlannedParks(parks)

    const result = mockProps.addPlannedParks(parks)

    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
  })

  it("should call dispatch with an changeActiveTab action when changeActiveTab is called", () => {
    const actionToDispatch = changeActiveTab(1)

    const result = mockProps.changeActiveTab(1)

    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
  })
})
