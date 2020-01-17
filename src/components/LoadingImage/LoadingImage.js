import './LoadingImage.scss'
import React from 'react'
import balalaika from 'assets/balalaika.svg'
import note from 'assets/note.svg'
import noteOne from 'assets/note-1.svg'
import noteTwo from 'assets/note-2.svg'
import noteThree from 'assets/note-3.svg'

const LoadingImage = () => {
  return (
    <section className="loading-image">
      <div>
        <img src={note} alt="note"/>
        <img src={noteOne} alt="note"/>
        <img src={noteTwo} alt="note"/>
        <img src={noteThree} alt="note"/>
      </div>
      <img src={balalaika} alt="balalaika"/>
      <p>loading...</p>
    </section>
  )
}

export default LoadingImage
