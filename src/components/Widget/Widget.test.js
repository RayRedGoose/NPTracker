import React from 'react'
import { shallow } from 'enzyme'
import Widget from './Widget'

describe('Widget', () => {
  it('should match the snapshot with all data passed in correctly', () => {
    const widget = shallow(
      <Widget title="weather" text="Weather info text" />
    )

    expect(widget).toMatchSnapshot()
  })

  it('should match the snapshot if there is no text', () => {
    const widget = shallow(
      <Widget title="weather" />
    )

    expect(widget).toMatchSnapshot()
  })

  it('should match the snapshot if it\'s directions widget', () => {
    const widget = shallow(
      <Widget
        title="directions"
        text="This is directions info text"
        data={{name: 'Mount Rainier'}} />
    )

    expect(widget).toMatchSnapshot()
  })
})
