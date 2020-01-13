import React from 'react'
import { shallow } from 'enzyme'
import { ParkCardPreview, mapStateToProps, mapDispatchToProps } from './ParkCardPreview'
import { addItem, addItemToAll } from '_utils/localStorage'
import { addPlannedPark, removePlannedPark } from 'redux/actions'

jest.mock('_utils/localStorage')

describe("ParkCardPreview", () => {
  let card, instance
  const addPlannedPark = jest.fn()
  const removePlannedPark = jest.fn()
  const mockProps = {
    key: 1,
    id: 1,
    fullName:"Some National Park",
    name: "Some park",
    states:"WA",
    image:"https://www.some.url/preview.jpg",
    plannedParks:["Some park"],
    addPlannedPark,
    removePlannedPark
  }

  beforeEach(() => {
    card = shallow(
      <ParkCardPreview {...mockProps}/>
    )
    instance = card.instance()
  })
  it("should match snapshot with all data passed in correctly", () => {
    expect(card).toMatchSnapshot()
  })

  it("should call toggleWishLish when bell is clicked", () => {
    const spy = jest.spyOn(instance, 'toggleWishLish')
      .mockImplementation(jest.fn())
    instance.forceUpdate()

    card.find('img').simulate('click')

    expect(spy).toHaveBeenCalled()
  })

  it("should call removeFromWishList when toggleWishLish is clicked and park name is in list", () => {
    const spy = jest.spyOn(instance, 'removeFromWishList')
      .mockImplementation(jest.fn())
    instance.forceUpdate()

    instance.toggleWishLish()

    expect(spy).toHaveBeenCalledWith('Some park', ['Some park'])
  })

  it("should call addToWishList when toggleWishLish is clicked and park name is in list", () => {
    const card = shallow(
      <ParkCardPreview {...mockProps} plannedParks={[]}/>
    )
    const instance = card.instance()

    const spy = jest.spyOn(instance, 'addToWishList')
      .mockImplementation(jest.fn())
    instance.forceUpdate()

    instance.toggleWishLish()

    expect(spy).toHaveBeenCalledWith('Some park')
  })

  it("should call addPlannedPark when addToWishList is clicked and park name is in list", () => {

    instance.addToWishList('Some park')

    expect(addPlannedPark).toHaveBeenCalledWith('Some park')
  })

  it("should call addItemToAll when addToWishList is clicked and park name is in list", () => {

    instance.addToWishList('Some park')

    expect(addItemToAll).toHaveBeenCalledWith('planning', 'Some park')
  })

  it("should call removePlannedPark when removeFromWishList is clicked and park name is in list", () => {

    instance.removeFromWishList('Some park', ['Some park'])

    expect(removePlannedPark).toHaveBeenCalledWith('Some park')
  })

  it("should call addItem when addToWishList is clicked and park name is in list", () => {

    instance.addToWishList('Some park')

    expect(addItem).toHaveBeenCalledWith('planning', [])
  })
})

describe("mapStateToProps", () => {
  it("should return the object with correct keys from store", () => {
    const mockStore = {
      plannedParks: ['Some park'],
      activeTab: 2
    }

    const expected = {
      plannedParks: ['Some park']
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
  });

  it("should call dispatch with addPlannedPark after addPlannedPark prop is called", () => {
    const actionToDispatch = addPlannedPark('Some park')

    mockProps.addPlannedPark('Some park')

    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
  })

  it("should call dispatch with removePlannedPark after removePlannedPark prop is called", () => {
    const actionToDispatch = removePlannedPark('Some park')

    mockProps.removePlannedPark('Some park')

    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
  })
})
