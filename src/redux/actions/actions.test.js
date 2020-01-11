import * as actions from '../actions'

it("should return object with a type of ADD_PROCESS_NAME when addProcessName is called", () => {
  const name = 'login'

  const expected = {
    type: 'ADD_PROCESS_NAME',
    name
  }

  const result = actions.addProcessName(name)

  expect(result).toEqual(expected)
});

it("should return object with a type of ADD_PROCESS_STEP when addProcessStep is called", () => {
  const step = 1

  const expected = {
    type: 'ADD_PROCESS_STEP',
    step
  }

  const result = actions.addProcessStep(step)

  expect(result).toEqual(expected)
});

it("should return object with a type of INCREASE_STEP when increaseStep is called", () => {
  const expected = { type: 'INCREASE_STEP' }

  const result = actions.increaseStep()

  expect(result).toEqual(expected)
});

it("should return object with a type of ADD_USER_INFO when addUserInfo is called", () => {
  const info = { name: 'Ray' }

  const expected = {
    type: 'ADD_USER_INFO',
    info
  }

  const result = actions.addUserInfo(info)

  expect(result).toEqual(expected)
});
