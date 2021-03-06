import React from 'react'
import { shallow } from 'enzyme'
import { SingleParkInfo, mapStateToProps, mapDispatchToProps } from './SingleParkInfo'
import { getData } from 'apiCalls'
import { selectPark, addPlannedPark, removePlannedPark } from 'redux/actions'
import { addItem, addItemToAll } from '_utils/localStorage'

jest.mock('apiCalls')
jest.mock('_utils/localStorage')

describe("SingleParkInfo", () => {
  const mockPark = {
    fullName: 'Mount Rainier National Park',
    name: 'Mount Rainier',
    description: 'Ascending to 14,410 feet above sea level, Mount Rainier stands as an icon in the Washington landscape.',
    url: 'https://www.nps.gov/mora/index.htm',
    states: 'WA',
    images: [
      {url: '/some.img1.jpg'},
      {url: '/some.img2.jpg'},
      {url: '/some.img3.jpg'}],
    directionsInfo: 'Mount Rainier National Park is located in west-central Washington state.',
    weatherInfo: 'Weather patterns at Mount Rainier are strongly influenced by the Pacific Ocean and elevation.'
  }

  describe("SingleParkInfo component", () => {
    let container, instance

    const selectPark = jest.fn()

    const mockProps = {
      type: 'mount-rainier',
      parks: [mockPark],
      selectedPark: mockPark,
      plannedParks: ['Some Park'],
      selectPark
    }

    beforeEach(() => {
      container = shallow(
        <SingleParkInfo {...mockProps} />
      )

      instance = container.instance()
    })

    describe("Snapshots", () => {
      it("should match snapshot with all data passed in correctly", () => {
        expect(container).toMatchSnapshot()
      })

      it("should match snapshot if there is no park data", () => {
        container.setState({isLoaded: false})
        expect(container).toMatchSnapshot()
      })
    })

    describe("componentDidMount", () => {
      it("should call findPark with type prop after rendering if there is parks data in store", () => {
        const spy = jest.spyOn(instance, 'findPark')
          .mockImplementation(jest.fn())
        instance.forceUpdate()

        instance.componentDidMount()

        expect(spy).toHaveBeenCalledWith('mount-rainier')
      })

      it("should call fetchPark with type prop after rendering if there is parks data in store", () => {
        const container = shallow(
          <SingleParkInfo {...mockProps} parks={[]} />
        )

        const instance = container.instance()

        const spy = jest.spyOn(instance, 'fetchPark')
          .mockImplementation(jest.fn())
        instance.forceUpdate()

        instance.componentDidMount()

        expect(spy).toHaveBeenCalledWith('mount-rainier')
      })
    })

    describe("findPark", () => {
      it("should call selectPark prop if findPark is called", () => {
        instance.findPark('mount-rainier')
        expect(selectPark).toHaveBeenCalledWith(mockPark)
      })

      it("should change isLoaded state to true if findPark is called", () => {
        container.setState({isLoaded: false})

        expect(container.state('isLoaded')).toEqual(false)

        instance.findPark('mount-rainier')

        expect(container.state('isLoaded')).toEqual(true)
      })
    })

    describe("fetchPark", () => {

      beforeEach(() => {
        getData.mockImplementation(() => {
          return Promise.resolve([mockPark])
        })
      })

      it("should call getData if fetchPark is called", async () => {
        await instance.fetchPark('mount-rainier')
        expect(getData).toHaveBeenCalledWith('parks', 'mount%20rainier')
      })

      it("should call selectPark prop if fetchPark is called", async () => {
        await instance.fetchPark('mount-rainier')
        expect(selectPark).toHaveBeenCalledWith(mockPark)
      })

      it("should change isLoaded state to true if fetchPark is called", async () => {
        container.setState({isLoaded: false})

        expect(container.state('isLoaded')).toEqual(false)

        await instance.fetchPark('mount-rainier')

        expect(container.state('isLoaded')).toEqual(true)
      })

      it("should change isLoaded state to false if getData is failed", async () => {
        getData.mockImplementation(() => {
          return Promise.reject(Error('Failed'))
        })

        expect(container.state('isLoaded')).toEqual(true)

        await instance.fetchPark('mount-rainier')

        expect(container.state('isLoaded')).toEqual(false)
      })

      it("should change error state to error message value if getData is failed", async () => {
        getData.mockImplementation(() => {
          return Promise.reject(Error('Failed'))
        })

        expect(container.state('error')).toEqual(undefined)

        await instance.fetchPark('mount-rainier')

        expect(container.state('error')).toEqual('Failed')
      })
    })
  })

  describe("mapStateToProps", () => {
    it("should return the object with correct keys from store", () => {
      const mockStore = {
        parks: [mockPark],
        selectedPark: mockPark,
        activeTab: 2,
        plannedParks: ['Some Park']
      }

      const expected = {
        parks: [mockPark],
        selectedPark: mockPark,
        plannedParks: ['Some Park']
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

    it("should call dispatch with selectPark after selectPark prop is called", () => {
      const actionToDispatch = selectPark(mockPark)

      mockProps.selectPark(mockPark)

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
    })
  })
})
