import { plannedParks } from '../plannedParks'

describe("plannedParks", () => {
  it("should return initial value", () => {
    const expected = []
    const result = plannedParks(undefined, {})

    expect(result).toEqual(expected)
  })

  it("should return plannedParks value with new data if type of action is ADD_PLANNED_PARKS", () => {
    const mockAction = {
      type: 'ADD_PLANNED_PARKS',
      parks: ['Some Park']
    }

    const expected = ['Some Park']

    const result = plannedParks(undefined, mockAction)

    expect(result).toEqual(expected)
  })

  it("should return plannedParks value with new data if type of action is ADD_PLANNED_PARK", () => {
    const mockAction = {
      type: 'ADD_PLANNED_PARK',
      park: 'Some Park'
    }

    const expected = ['Some Park']

    const result = plannedParks(undefined, mockAction)

    expect(result).toEqual(expected)
  })

  it("should return plannedParks value with new data if type of action is REMOVE_PLANNED_PARK", () => {
    const mockAction = {
      type: 'REMOVE_PLANNED_PARK',
      park: 'Some Park'
    }

    const expected = []

    const result = plannedParks(undefined, mockAction)

    expect(result).toEqual(expected)
  })
})
