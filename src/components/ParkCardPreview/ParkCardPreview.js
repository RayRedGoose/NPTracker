import './ParkCardPreview.scss'
import React from 'react'
import starEmpty from 'assets/star-empty.svg'
import arrow from 'assets/more.svg'

const ParkCardPreview = ({id, image, name}) => {
  return (
    <section id={id} className="park-card">
      <div className="preview" style={{backgroundImage: `url(${image})`}}>
        <header>
          <img src={starEmpty} alt="empty star"/>
          <img src={arrow} alt="arrow"/>
        </header>
      </div>
      <h2>{ name }</h2>
    </section>
  )
}

export default ParkCardPreview
