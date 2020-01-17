import './ParkDescription.scss'
import React from 'react'
import arrow from 'assets/more.svg'

const ParkDescription = (props) => {
  const { image, fullName, url, states, description } = props

  return (
    <section className="park-info">
      <div style={{backgroundImage: `url(${image})`}}></div>
      <header>
        <h2>{fullName}</h2>
        <a href={url}><img src={arrow} alt="arrow"/></a>
      </header>
      <p className="location">{states}</p>
      <p className="desc">{description}</p>
    </section>
  )
}

export default ParkDescription
