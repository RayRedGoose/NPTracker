import React from 'react'
import { shallow } from 'enzyme'
import ParkCardPreview from './ParkCardPreview'

it("should match snapshot with all data passed in correctly", () => {
  const card = shallow(
    <ParkCardPreview
      id={1}
      image="https://www.some.url/preview.jpg"
      name="Some National Park"/>
  )
  expect(card).toMatchSnapshot()
})
