import './SingleParkInfo.scss'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addItem, addItemToAll } from '_utils/localStorage'
import { selectPark, addPlannedPark, removePlannedPark } from 'redux/actions'
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

  toggleWishLish = () => {
    const { plannedParks, selectedPark } = this.props
    return (!plannedParks.includes(selectedPark.name))
      ? this.addToWishList(selectedPark.name)
      : this.removeFromWishList(selectedPark.name, plannedParks)
  }

  addToWishList = (name) => {
    this.props.addPlannedPark(name)
    addItemToAll('planning', name)
  }

  removeFromWishList = (name, plannedParks) => {
    this.props.removePlannedPark(name)
    const newPlans = plannedParks.filter(park => park !== name)
    addItem('planning', newPlans)
  }

  render() {
    const { selectedPark, plannedParks } = this.props
    const {
      fullName,
      name,
      description,
      url,
      states,
      images,
      directionsInfo,
      weatherInfo,
    } = selectedPark

    const bellType = (plannedParks.includes(name)) ? 'bell-active' : 'bell-no-active'
    const wishText = (plannedParks.includes(name)) ? 'Remove from wish list' : 'Add to wish list'

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
            <p className={ bellType } onClick={this.toggleWishLish}>{wishText}</p>
            {
              // <p className="flag-no-active">Mark as visited</p>
            }
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

export const mapStateToProps = ({ parks, selectedPark, plannedParks }) => ({
  parks, selectedPark, plannedParks
})

export const mapDispatchToProps = dispatch => (
  bindActionCreators({
    selectPark, addPlannedPark, removePlannedPark
  }, dispatch)
)

SingleParkInfo.propTypes = {
  parks: PropTypes.arrayOf(PropTypes.object).isRequired,
  selectedPark: PropTypes.object.isRequired,
  plannedParks: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectPark: PropTypes.func.isRequired,
  addPlannedPark: PropTypes.func.isRequired,
  removePlannedPark: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleParkInfo)
