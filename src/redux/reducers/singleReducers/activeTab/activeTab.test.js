import { activeTab } from '../activeTab'

describe("activeTab", () => {
  it("should return initial value", () => {
    const expected = 1
    const result = activeTab(undefined, {})

    expect(result).toEqual(expected);
  });

  it("should return activeTab value with new data if type of action is CHANGE_ACTIVE_TAB", () => {
    const mockAction = {
      type: 'CHANGE_ACTIVE_TAB',
      id: 2
    }

    const expected = 2

    const result = activeTab(undefined, mockAction)

    expect(result).toEqual(expected);
  });
});
