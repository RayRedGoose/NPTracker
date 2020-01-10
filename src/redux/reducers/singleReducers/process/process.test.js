import {process} from '../process'

describe("process", () => {
  it("should return initial value", () => {
    const expected = null
    const result = process(undefined, {})

    expect(result).toEqual(expected);
  });

  it("should return process value if type of action is ADD_PROCESS", () => {
    const mockAction = {
      type: 'ADD_PROCESS',
      process: 'login'
    }

    const expected = 'login'

    const result = process(undefined, mockAction)

    expect(result).toEqual(expected);
  });
});
