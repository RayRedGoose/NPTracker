import React, { PureComponent } from 'react'

export default class ParkInfo extends PureComponent {
  render() {
    const { name } = this.props

    return (
      <div>
        <p className="place">{ name }</p>
      </div>
    )
  }
}
