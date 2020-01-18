import React from 'react'
import { shallow } from 'enzyme'
import Instructions from './Instructions'

describe('Instructions', () => {
  it('should match the snapshot with all data passed in correctly', () => {
    const block = shallow(<Instructions />)

    expect(block).toMatchSnapshot()
  })
})
