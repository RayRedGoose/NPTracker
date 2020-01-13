import React from 'react'
import { shallow } from 'enzyme'
import ParkCardPreview from './ParkCardPreview'

it("should match snapshot with all data passed in correctly", () => {
  const card = shallow(
    <ParkCardPreview
      key={1}
      id={1}
      fullName="Some National Park"
      name="Some"
      states="WA"
      image="https://www.some.url/preview.jpg"/>
  )
  expect(card).toMatchSnapshot()
})
