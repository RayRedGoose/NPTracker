import './ParkCardPreview.scss'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { NavLink } from 'react-router-dom'
import { addPlannedPark, removePlannedPark } from 'redux/actions'
import { addItem, addItemToAll } from '_utils/localStorage'
import done from 'assets/done.svg'
import bell from 'assets/bell.svg'
import bellFull from 'assets/bell-full.svg'

export class ParkCardPreview extends Component {

  toggleWishLish = () => {
    const { plannedParks, name } = this.props
    return (!plannedParks.includes(name))
      ? this.addToWishList(name)
      : this.removeFromWishList(name, plannedParks)
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
    const { id, image, fullName, name, states, plannedParks } = this.props
    const title = (fullName.length > 35 ) ? name : fullName
    const link = name.toLowerCase().replace(/ /g, '-')
    const bellType = (plannedParks.includes(name)) ? bellFull : bell
    return (
      <section id={id} className="park-card">
        <div className="preview" style={{backgroundImage: `url(${image})`}}>
          <header>
            <p className="location">{states}</p>
            <section>
              {
                // <img src={done} alt="flag"/>
              }
              <img src={bellType} alt="bell" onClick={this.toggleWishLish}/>
            </section>
          </header>
        </div>
        <NavLink
          to={`/parks/${link}`}
          onClick={this.redirect}
          className="title">{ title }</NavLink>
      </section>
    )
  }
}

export const mapStateToProps = ({plannedParks}) => ({
  plannedParks
})

export const mapDispatchToProps = dispatch => (
  bindActionCreators({
    addPlannedPark,
    removePlannedPark
  }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(ParkCardPreview)
