import './ParkCardPreview.scss'
import React from 'react'
import done from 'assets/done.svg'
import arrow from 'assets/more.svg'
import bell from 'assets/bell.svg'

const ParkCardPreview = ({id, image, name}) => {
  return (
    <section id={id} className="park-card">
      <div className="preview" style={{backgroundImage: `url(${image})`}}>
        <header>
          <section>
            <img src={done} alt="flag"/>
            <img src={bell} alt="bell "/>
          </section>
          <img src={arrow} alt="arrow"/>
        </header>
      </div>
      <h2>{ name }</h2>
    </section>
  )
}

export default ParkCardPreview
