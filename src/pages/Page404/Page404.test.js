import React from 'react'
import { shallow } from 'enzyme'
import Page404 from './Page404'

it("should match snapshot with all data passed in correctly", () => {
  const page = shallow(<Page404 />)
  expect(page).toMatchSnapshot()
})
