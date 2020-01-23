import * as actions from '../actions'

it("should return object with a type of ADD_PROCESS_NAME when addProcessName is called", () => {
  const name = 'login'

  const expected = {
    type: 'ADD_PROCESS_NAME',
    name
  }

  const result = actions.addProcessName(name)

  expect(result).toEqual(expected)
})

it("should return object with a type of ADD_PROCESS_STEP when addProcessStep is called", () => {
  const step = 1

  const expected = {
    type: 'ADD_PROCESS_STEP',
    step
  }

  const result = actions.addProcessStep(step)

  expect(result).toEqual(expected)
})

it("should return object with a type of ADD_PROCESS_QUERY when addProcessStep is called", () => {
  const query = "Rock"

  const expected = {
    type: 'ADD_PROCESS_QUERY',
    query
  }

  const result = actions.addProcessQuery(query)

  expect(result).toEqual(expected)
})

it("should return object with a type of INCREASE_STEP when increaseStep is called", () => {
  const expected = { type: 'INCREASE_STEP' }

  const result = actions.increaseStep()

  expect(result).toEqual(expected)
})

it("should return object with a type of REMOVE_PROCESS when increaseStep is called", () => {
  const expected = { type: 'REMOVE_PROCESS' }

  const result = actions.removeProcess()

  expect(result).toEqual(expected)
})

it("should return object with a type of ADD_USER_INFO when addUserInfo is called", () => {
  const info = { name: 'Ray' }

  const expected = {
    type: 'ADD_USER_INFO',
    info
  }

  const result = actions.addUserInfo(info)

  expect(result).toEqual(expected)
})

it("should return object with a type of ADD_PARKS when addParks is called", () => {
  const parks = [{
    id: 1,
    fullName: 'Mount Rainier National Park',
    states: 'WA',
    images: {},
    description: 'Ascending to 14,410 feet above sea level, Mount Rainier stands as an icon in the Washington landscape.',
    latLong: 'lat:46, long:-121',
    url: 'https://www.some.url'
  }]

  const expected = {
    type: 'ADD_PARKS',
    parks
  }

  const result = actions.addParks(parks)

  expect(result).toEqual(expected)
})

it("should return object with a type of CHANGE_ACTIVE_TAB when changeActiveTab is called", () => {
  const expected = {
    type: 'CHANGE_ACTIVE_TAB',
    id: 2
  }

  const result = actions.changeActiveTab(2)

  expect(result).toEqual(expected)
})

it("should return object with a type of SELECT_PARK when selectPark is called", () => {
  const mockPark = {
    id: 1,
    fullName: 'Some Park',
    description: 'Some description here',
    images: [{url: '/some.img.jpg'}]
  }

  const expected = {
    type: 'SELECT_PARK',
    park: mockPark
  }

  const result = actions.selectPark(mockPark)

  expect(result).toEqual(expected)
})

it("should return object with a type of ADD_PLANNED_PARKS when addPlannedParks is called", () => {
  const expected = {
    type: 'ADD_PLANNED_PARKS',
    parks: ['Some Park']
  }

  const result = actions.addPlannedParks(['Some Park'])

  expect(result).toEqual(expected)
})

it("should return object with a type of ADD_PLANNED_PARK when addPlannedPark is called", () => {
  const expected = {
    type: 'ADD_PLANNED_PARK',
    park: 'Some Park'
  }

  const result = actions.addPlannedPark('Some Park')

  expect(result).toEqual(expected)
})

it("should return string with a type of REMOVE_PLANNED_PARK when removePlannedPark is called", () => {
  const expected = {
    type: 'REMOVE_PLANNED_PARK',
    park: 'Some Park'
  }

  const result = actions.removePlannedPark('Some Park')

  expect(result).toEqual(expected)
})
