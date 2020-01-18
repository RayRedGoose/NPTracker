import './ParksContainer.scss'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getData } from 'apiCalls'
import { addParks } from 'redux/actions'
import ParkCardPreview from 'containers/ParkCardPreview/ParkCardPreview'
import LoadingImage from '../../components/LoadingImage/LoadingImage'

export class ParksContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoaded: false,
      error: null
    }
  }

  componentDidMount() {
    return (!this.props.parks.length)
      ? this.fetchParks()
      : this.setState({isLoaded: true})
  }

  fetchParks = async () => {
    try {
      const parks = await getData('parks', 'park')
      this.setState({isLoaded: true})
      this.props.addParks(parks)
    }
    catch (error) {
      this.setState({
        isLoaded: false,
        error: error.message
      })
    }
  }

  createCards = () => {
    const { parks, type, plannedParks } = this.props
    const planned = parks.filter(park => plannedParks.includes(park.name))
    const data = (type === 'all') ? parks : planned
    return data.map(park => (
      <ParkCardPreview
        key={park.id}
        id={park.id}
        image={park.images[0].url}
        fullName={park.fullName}
        name= {park.name}
        states={park.states}/>
    ))
  }

  render() {
    const { isLoaded, error } = this.state
    return (
      <section className="parks-content">
        { !isLoaded && !error && <LoadingImage /> }
        { error && <p>{error}</p> }
        { isLoaded && this.createCards() }
      </section>
    )
  }
}

export const mapStateToProps = ({parks, plannedParks}) => ({
  parks, plannedParks
})

export const mapDispatchToProps = dispatch => (
  bindActionCreators({
    addParks
  }, dispatch)
)

ParksContainer.propTypes = {
  type: PropTypes.string.isRequired,
  parks: PropTypes.arrayOf(PropTypes.object).isRequired,
  plannedParks: PropTypes.arrayOf(PropTypes.string).isRequired,
  addParks: PropTypes.func.isRequired
}


export default connect(mapStateToProps, mapDispatchToProps)(ParksContainer)
