import { selectedPark } from '../selectedPark'

describe("selectedPark", () => {
  it("should return initial value", () => {
    const expected = {}
    const result = selectedPark(undefined, {})

    expect(result).toEqual(expected)
  })

  it("should return selectedPark value if type of action is SELECT_PARK", () => {
    const mockPark = {
      id: 1,
      fullName: 'Some Park',
      description: 'Some description here',
      images: [{url: '/some.img.jpg'}]
    }

    const mockAction = {
      type: 'SELECT_PARK',
      park: mockPark
    }

    const expected = mockPark

    const result = selectedPark(undefined, mockAction)

    expect(result).toEqual(expected)
  })
})
