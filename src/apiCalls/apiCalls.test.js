import { getData } from '../apiCalls'

describe("getData", () => {
  const mockParksData = [{
    id: 1,
    fullName: 'Mount Rainier National Park',
    states: 'WA',
    images: {},
    description: 'Ascending to 14,410 feet above sea level, Mount Rainier stands as an icon in the Washington landscape.',
    latLong: 'lat:46, long:-121',
    url: 'https://www.some.url'
  }]

  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => {
          return Promise.resolve({data: mockParksData})
        }
      })
    })
  })

  it("should call fetch with correct url", () => {
    const url = 'https://developer.nps.gov/api/v1/parks?q=park&fields=images&limit=60&api_key=IpOkxICOi4tJPgJfN3LXvxXuOtWHz5iZdULtD2hd'
    getData('parks', 'park')
    expect(window.fetch).toHaveBeenCalledWith(url)
  })

  it('should return an array with parks', () => {
    expect(getData('parks', 'park')).resolves.toEqual(mockParksData)
  })

  it('should return an error for response that is not ok', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false
      })
    })

    expect(getData('parks', 'park')).rejects
      .toEqual(Error("There was an error getting parks."))
  })

  it('should return an error if fetch is rejected', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.reject(Error('Failed to fetch'))
    })

    expect(getData('parks', 'park')).rejects
      .toEqual(Error('Failed to fetch'))
  })
})
