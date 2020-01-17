import './Widget.scss'
import React from 'react'
import Map from '../Map/Map'

const Widget = ({title, text, data}) => {
  return (
    <section className={`widgets ${title}`}>
      <h3>{ title } info</h3>
      {
        (text)
          ? <p>{ text }</p>
          : <p>There is no { title } info.</p>
      }
      { title === 'directions' && <Map {...data}/> }
    </section>
  )
}

export default Widget
