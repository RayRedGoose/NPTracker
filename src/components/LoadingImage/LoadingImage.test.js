import React from 'react'
import { shallow } from 'enzyme'
import LoadingImage from './LoadingImage'

describe('LoadingImage', () => {
  it('should match the snapshot with all data passed in correctly', () => {
    const block = shallow(<LoadingImage />)

    expect(block).toMatchSnapshot()
  })
})
