import React from 'react'
import { shallow } from 'enzyme'
import { UserProfile, mapStateToProps } from './UserProfile'

describe("UserProfile", () => {
  it("should match snapshot with all data passed correctly", () => {
    const profile = shallow(
      <UserProfile user={{
        name: 'Ray',
        last_name: 'Zlou',
        city: 'Denver',
        image: 'https://www.some.url/some.jpg'
      }}/>
    )
    expect(profile).toMatchSnapshot()
  })
})

describe("mapStateToProps", () => {
  it("should return the object with correct key from store", () => {
    const mockStore = {
      user: {name: 'Ray'},
      activeTab: 2
    }

    const expected = {
      user: {name: 'Ray'}
    }

    const result = mapStateToProps(mockStore)

    expect(result).toEqual(expected)
  })
})
