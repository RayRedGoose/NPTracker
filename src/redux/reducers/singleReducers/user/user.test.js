import { user } from '../user'

describe("user", () => {
  it("should return initial value", () => {
    const expected = {}
    const result = user(undefined, {})

    expect(result).toEqual(expected);
  });

  it("should return user value with new data if type of action is ADD_USER_INFO", () => {
    const mockAction = {
      type: 'ADD_USER_INFO',
      info: { name: 'Ray' }
    }

    const expected = {
      last_name: 'Zlou',
      name: 'Ray'
    }

    const result = user({ last_name: 'Zlou' }, mockAction)

    expect(result).toEqual(expected);
  });
});
