import React from 'react'
import { shallow } from 'enzyme'
import Dashboard from './Dashboard'

describe('Dashboard', () => {
  it('should match the snapshot with all data passed in correctly', () => {
    const board = shallow(<Dashboard />)

    expect(board).toMatchSnapshot()
  })
})
