import './SingleParkInfo.scss'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { selectPark } from 'redux/actions'
import { getData } from 'apiCalls'
import Widget from 'components/Widget/Widget'
import ParkDescription from 'components/ParkDescription/ParkDescription'

export class SingleParkInfo extends Component {
  constructor() {
    super()
    this.state = {
      isLoaded: false
    }
  }

  componentDidMount() {
    const { type, parks } = this.props
    return (parks.length)
      ? this.findPark(type)
      : this.fetchPark(type)
  }

  findPark = (type) => {
    const { parks, selectPark } = this.props
    const search = type.replace(/-/g, ' ')
    const park = parks.find(park => park.name.toLowerCase() === search)
    selectPark(park)
    this.setState({isLoaded: true})
  }

  fetchPark = async (type) => {
    const search = type.replace(/-/g, '%20')
    try {
      const park = await getData('parks', search)
      this.props.selectPark(park[0])
      this.setState({isLoaded: true})
    }
    catch(error) {
      this.setState({error: error.message, isLoaded: false})
    }
  }

  render() {
    const { selectedPark } = this.props
    const {
      fullName,
      name,
      description,
      url,
      states,
      images,
      directionsInfo,
      weatherInfo,
      latLong
    } = selectedPark
    return (
      this.state.isLoaded &&
      <section className="single-park">
        <ParkDescription
          {...{fullName, url, states, description}}
          image={images[0].url} />
        <Widget title="planning" />
        <Widget title="directions" text={directionsInfo} data={{ latLong, name }} />
        <Widget title="weather" text={weatherInfo}  />
      </section>
    )
  }
}

export const mapStateToProps = ({ parks, selectedPark, plannedParks }) => ({
  parks, selectedPark, plannedParks
})

export const mapDispatchToProps = dispatch => (
  bindActionCreators({
    selectPark
  }, dispatch)
)

SingleParkInfo.propTypes = {
  parks: PropTypes.arrayOf(PropTypes.object).isRequired,
  selectedPark: PropTypes.object.isRequired,
  plannedParks: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectPark: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleParkInfo)
