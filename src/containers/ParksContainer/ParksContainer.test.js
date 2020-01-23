import React from 'react'
import { shallow } from 'enzyme'
import { ParksContainer, mapStateToProps, mapDispatchToProps } from './ParksContainer'
import { getData } from 'apiCalls'
import { addParks } from 'redux/actions'

jest.mock('apiCalls')

describe("ParksContainer", () => {
  const mockParksData = [{
    id: 1,
    fullName: 'Some National Park',
    name: 'Some',
    states: 'WA',
    description: 'something about park here',
    images: [{url: 'images/some.jpg'}]
  }]

  describe("ParksContainer container", () => {
    let container, instance
    const addParks = jest.fn()

    beforeEach(() => {
      container = shallow(
        <ParksContainer
          type="all"
          parks={mockParksData}
          plannedParks={[]}
          process={null}
          addParks={addParks} />
      )

      instance = container.instance()
    })

    describe("Snapshots", () => {
      it("should match snapshot with all data passed in correctly and isLoaded is true", () => {
        container.setState({isLoaded: true})
        expect(container).toMatchSnapshot()
      })

      it("should match snapshot if isLoaded is false but there is no error", () => {
        expect(container).toMatchSnapshot()
      })

      it("should match snapshot if there is an error", () => {
        container.setState({error: 'This is error!'})
        expect(container).toMatchSnapshot()
      })
    })

    describe("createCards", () => {
      it("should call createCards method after rendering if there is park loaded", () => {
        const spy = jest.spyOn(instance, 'createCards')
          .mockImplementation(jest.fn())
        instance.forceUpdate()

        container.setState({isLoaded: true})

        expect(spy).toHaveBeenCalled()
      })

      it("should call searchParks method with parks and query for search if createCards is called and there is a search process", () => {
        const container = shallow(
          <ParksContainer
            type="all"
            parks={mockParksData}
            plannedParks={[]}
            addParks={addParks}
            process={{name: 'search', query: 'Ro'}} />
        )

        const instance = container.instance()

        instance.createCards()

        const spy = jest.spyOn(instance, 'searchParks')
          .mockImplementation(() => ({parksForCard: [], type: ''}))
        instance.forceUpdate()

        expect(spy).toHaveBeenCalledWith(mockParksData, 'Ro')
      })

      it("should call chooseParksType method if createCards is called and there is no search process", () => {
        const spy = jest.spyOn(instance, 'chooseParksType')
          .mockImplementation(() => ({parksForCard: [], type: ''}))
        instance.forceUpdate()

        expect(spy).toHaveBeenCalled()
      })

      it("should return the object with parks for cards and container type if chooseParksType is called", () => {
        const expected = {
          parksForCard: mockParksData,
          type: 'parks'
        }

        const result = instance.chooseParksType()

        expect(result).toEqual(expected)
      })
    })

    describe("fetchParks", () => {
      beforeEach(() => {
        getData.mockImplementation(() => Promise.resolve(mockParksData))
      })

      it("should call fetchParks method after rendering if there is no parks in props", async () => {
        const container = shallow(
          <ParksContainer
            type="all"
            parks={[]}
            plannedParks={[]}
            addParks={addParks} />
        )

        const instance = container.instance()

        const spy = jest.spyOn(instance, 'fetchParks')
          .mockImplementation(() => Promise.resolve(mockParksData))

        await instance.componentDidMount()

        expect(spy).toHaveBeenCalled()
      })

      it("should call getData when fetchParks is called", async () => {

        await instance.fetchParks()

        expect(getData).toHaveBeenCalledWith('parks', 'park')
      })

      it("should call addParks prop when fetchParks is called", async () => {

        await instance.fetchParks()

        expect(addParks).toHaveBeenCalledWith(mockParksData)
      })

      it("should change isLoaded state to true", async () => {
        container.setState({isLoaded: false})
        expect(container.state('isLoaded')).toEqual(false)

        await instance.fetchParks()

        expect(container.state('isLoaded')).toEqual(true)
      })

      it("should change isLoaded state to false if fetch is failed", async () => {
        getData.mockImplementation(() => Promise.reject(Error('Failed to fetch')))

        instance.setState({isLoaded: true})

        expect(container.state('isLoaded')).toEqual(true)

        await instance.fetchParks()

        expect(container.state('isLoaded')).toEqual(false)
      })

      it("should change error state if fetch is failed", async () => {
        getData.mockImplementation(() => Promise.reject(Error('Failed to fetch')))

        expect(container.state('error')).toEqual(null)

        await instance.fetchParks()

        expect(container.state('error')).toEqual("Failed to fetch")
      })
    })
  })

  describe("mapStateToProps", () => {
    it("should return the object with correct keys from store", () => {
      const mockStore = {
        parks: mockParksData,
        user: {},
        activeTab: 2,
        plannedParks: ['Rocky Mountains'],
        process: null
      }

      const expected = {
        parks: mockParksData,
        plannedParks: ['Rocky Mountains'],
        process: null
      }

      const result = mapStateToProps(mockStore)

      expect(result).toEqual(expected)
    })
  })

  describe("mapDispatchToProps", () => {
    it("should call dispatch with addParks after addParks prop is called", () => {
      const mockDispatch = jest.fn()
      const mockProps = mapDispatchToProps(mockDispatch)
      const actionToDispatch = addParks(mockParksData)

      mockProps.addParks(mockParksData)

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
    })
  })
})
