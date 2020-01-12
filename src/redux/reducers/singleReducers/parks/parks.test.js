import { parks } from '../parks'

describe("parks", () => {
  it("should return initial value", () => {
    const expected = []
    const result = parks(undefined, {})

    expect(result).toEqual(expected);
  });

  it("should return the parks array if type of action is ADD_PARKS", () => {
    const mockParks = [{
      id: 1,
      fullName: 'Mount Rainier National Park',
      states: 'WA',
      images: {},
      description: 'Ascending to 14,410 feet above sea level, Mount Rainier stands as an icon in the Washington landscape.',
      latLong: 'lat:46, long:-121',
      url: 'https://www.some.url'
    }]

    const mockAction = {
      type: 'ADD_PARKS',
      parks: mockParks
    }

    const expected = mockParks

    const result = parks([], mockAction)

    expect(result).toEqual(expected);
  });
});
