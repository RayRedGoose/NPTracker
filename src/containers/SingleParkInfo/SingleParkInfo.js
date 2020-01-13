import './SingleParkInfo.scss'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { selectPark } from 'redux/actions'
import { getData } from 'apiCalls'
import arrow from 'assets/more.svg'

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
    const {
      fullName,
      description,
      url,
      states,
      images,
      directionsInfo,
      weatherInfo,
    } = this.props.selectedPark

    return (
      this.state.isLoaded && <section className="single-park">
        <section>
          <div style={{backgroundImage: `url(${images[0].url})`}}></div>
          <header>
            <h2>{fullName}</h2>
            <a href={url}><img src={arrow} alt="arrow"/></a>
          </header>
          <p className="location">{states}</p>
          <p className="desc">{description}</p>
          <footer>
            <p className="bell-no-active">Add to wish list</p>
            <p className="flag-no-active">Mark as visited</p>
          </footer>
        </section>
        <section>
          <div>
            <h3>Direction Info</h3>
            <p>{directionsInfo}</p>
          </div>
          <div>
            <h3>Weather Info</h3>
            <p>{weatherInfo}</p>
          </div>
        </section>
      </section>
    )
  }
}

export const mapStateToProps = ({ parks, selectedPark }) => ({
  parks, selectedPark
})

export const mapDispatchToProps = dispatch => (
  bindActionCreators({
    selectPark
  }, dispatch)
)

SingleParkInfo.propTypes = {
  parks: PropTypes.arrayOf(PropTypes.object).isRequired,
  selectedPark: PropTypes.object.isRequired,
  selectPark: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleParkInfo)
