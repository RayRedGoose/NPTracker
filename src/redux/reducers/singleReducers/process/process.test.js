import {process} from '../process'

describe("process", () => {
  it("should return initial value", () => {
    const expected = null
    const result = process(undefined, {})

    expect(result).toEqual(expected)
  })

  it("should return process value if type of action is ADD_PROCESS_NAME", () => {
    const mockAction = {
      type: 'ADD_PROCESS_NAME',
      name: 'login'
    }

    const expected = { name: 'login' }

    const result = process(undefined, mockAction)

    expect(result).toEqual(expected)
  })

  it("should return process value if type of action is ADD_PROCESS_STEP", () => {
    const mockAction = {
      type: 'ADD_PROCESS_STEP',
      step: 1
    }

    const expected = { step: 1 }

    const result = process(undefined, mockAction)

    expect(result).toEqual(expected)
  })

  it("should return process value if type of action is INCREASE_STEP", () => {
    const mockAction = { type: 'INCREASE_STEP' }

    const expected = { step: 2 }

    const result = process({ step: 1 }, mockAction)

    expect(result).toEqual(expected)
  })
})
