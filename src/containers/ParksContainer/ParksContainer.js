import './ParksContainer.scss'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getData } from 'apiCalls'
import { addParks } from 'redux/actions'
import ParkCardPreview from 'components/ParkCardPreview/ParkCardPreview'

export class ParksContainer extends Component {
  constructor() {
    super()
    this.state = {
      isLoaded: false,
      error: null
    }
  }

  componentDidMount() {
    console.log('hi');
    if (!this.props.parks.length) this.fetchParks()
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
    return this.props.parks.map(park => (
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
    return (
      <section className="parks-content">
        { this.createCards()}
      </section>
    )
  }
}

export const mapStateToProps = ({parks}) => ({
  parks
})

export const mapDispatchToProps = dispatch => (
  bindActionCreators({
    addParks
  }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(ParksContainer)
