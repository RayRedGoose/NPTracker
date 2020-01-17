import React from 'react'
import { shallow } from 'enzyme'
import ParkDescription from './ParkDescription'

describe('ParkDescription', () => {
  it('should match the snapshot with all data passed in correctly', () => {
    const widget = shallow(
      <ParkDescription
        image="https://some.url/image.jpg"
        fullName="Mount Rainier National Park"
        url="https://some.url"
        states="WA"
        description="Ascending to 14,410 feet above sea level, Mount Rainier stands as an icon in the Washington landscape." />
    )

    expect(widget).toMatchSnapshot()
  })
})
