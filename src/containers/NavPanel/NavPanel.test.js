import React from 'react'
import { shallow } from 'enzyme'
import { NavPanel, mapStateToProps, mapDispatchToProps } from './NavPanel'
import { changeActiveTab } from 'redux/actions'

describe("NavPanel", () => {
  let panel, instance
  const changeActiveTab = jest.fn()

  beforeEach(() => {
    panel = shallow(
      <NavPanel
        activeTab={1}
        changeActiveTab={changeActiveTab} />
    )

    instance = panel.instance()
  })

  it("should match snapshot with all data passed in correctly", () => {
    expect(panel).toMatchSnapshot()
  })

  it("should call createTabs method after rendering", () => {
    const spy = jest.spyOn(instance, 'createTabs')
      .mockImplementation(jest.fn())
    instance.forceUpdate()

    expect(spy).toHaveBeenCalled()
  })

  it("should call changeActiveTab with target id when toggleTab is called", () => {
    const mockEvent = {target: {id: 2}}
    instance.toggleTab(mockEvent)
    expect(changeActiveTab).toHaveBeenCalledWith(2)
  })
})

describe("mapStateToProps", () => {
  it("should return the object with correct keys", () => {
    const mockStore = {
      activeTab: 1,
      user: {}
    }

    const expected = {
      activeTab: 1
    }

    const result = mapStateToProps(mockStore)

    expect(result).toEqual(expected)
  })
})

describe("mapDispatchToProps", () => {
  it("should call dispatch with changeActiveTab when changeActiveTab is called", () => {
    const mockDispatch = jest.fn()
    const mockProps = mapDispatchToProps(mockDispatch)
    const actionToDispatch = changeActiveTab(2)

    mockProps.changeActiveTab(2)

    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
  })
})
