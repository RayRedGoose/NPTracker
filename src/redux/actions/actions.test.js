import * as actions from '../actions'

it("should return object with a type of ADD_PROCESS when addProcess is called", () => {
  const process = 'login'

  const expected = {
    type: 'ADD_PROCESS',
    process
  }

  const result = actions.addProcess(process)

  expect(result).toEqual(expected)
});
