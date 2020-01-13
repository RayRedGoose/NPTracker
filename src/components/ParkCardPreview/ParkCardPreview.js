import './ParkCardPreview.scss'
import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import done from 'assets/done.svg'
import bell from 'assets/bell.svg'

class ParkCardPreview extends Component {
  render() {
    const { id, image, fullName, name, states } = this.props
    const title = (fullName.length > 35 ) ? name : fullName
    const link = name.toLowerCase().replace(/ /g, '-')
    return (
      <section id={id} className="park-card">
        <div className="preview" style={{backgroundImage: `url(${image})`}}>
          <header>
            <p className="location">{states}</p>
            <section>
              <img src={done} alt="flag"/>
              <img src={bell} alt="bell "/>
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

export default ParkCardPreview
