import React, { Component } from 'react'
import MapGL, { Popup, NavigationControl, FullscreenControl } from 'react-map-gl'
import Pin from './Pin'
import ParkInfo from './ParkInfo'

const MAPBOX_TOKEN = 'pk.eyJ1IjoicmF5cmVkZ29vc2UiLCJhIjoiY2s1aWV6YWp3MDBhZjNrbmoza21zM2xnYSJ9.pobIjWmc_InU_zmap2lguQ'

const fullscreenControlStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  padding: '10px'
}

const navStyle = {
  position: 'absolute',
  top: 36,
  left: 0,
  padding: '10px'
}

class Map extends Component {
  constructor(props) {
    super(props)
    this.state = {
      viewport: {
        latitude: 0,
        longitude: 0,
        zoom: 14,
        bearing: 0,
        pitch: 0
      },
      popupInfo: null
    }
  }

  componentDidMount() {
    const park = this.getDirection()
    this.setState({viewport: {
      ...this.state.viewport, latitude: park.latitude, longitude: park.longitude}
    })
  }

  getDirection = () => {
    const direction = this.props.latLong.replace('lat:', '').replace('long:', '').split(',')

    return {
      name: this.props.name,
      latitude: +direction[0],
      longitude: +direction[1]
    }
  }

  _updateViewport = viewport => {
    this.setState({viewport})
  }

  _onClickMarker = park => {
    this.setState({popupInfo: park})
  }

  _renderPopup() {
    const { popupInfo } = this.state

    return (
      popupInfo && (
        <Popup
          anchor="top"
          longitude={popupInfo.longitude}
          latitude={popupInfo.latitude}
          closeOnClick={false}
          onClose={() => this.setState({popupInfo: null})}
        >
          <ParkInfo name={popupInfo.name} />
        </Popup>
      )
    )
  }

  render() {
    const { viewport } = this.state
    const park = this.getDirection()

    return (
      <MapGL
        {...viewport}
        width="100%"
        height="25vh"
        mapStyle="mapbox://styles/mapbox/outdoors-v11"
        onViewportChange={this._updateViewport}
        mapboxApiAccessToken={MAPBOX_TOKEN}
      >
        <Pin park={park} onClick={this._onClickMarker} />

        {this._renderPopup()}

        <div style={fullscreenControlStyle}>
          <FullscreenControl />
        </div>
        <div style={navStyle}>
          <NavigationControl />
        </div>
      </MapGL>
    )
  }
}

export default Map
