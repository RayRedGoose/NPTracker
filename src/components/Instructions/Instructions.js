import './Instructions.scss'
import React, { Component } from 'react'

class Instructions extends Component {
  constructor() {
    super()
    this.state = {
      text: 'Click on \'Dashboard\' tab to see your summary',
      count: 2
    }
  }

  componentDidMount() {
    const texts = [
      'Click on \'Dashboard\' tab to see your summary',
      'Click on \'Parks\' tab to see all national parks',
      'Click on \'Wish List\' tab to see your plannings',
      'Click on \'Visited\' tab to see your visited places'
    ]

    setInterval(() => {
      let { count } = this.state
      return (count !== 4)
        ? this.setState({text: texts[count], count: count+1})
        : this.setState({text: texts[0], count: 1})
    }, 6000)
  }

  render() {
    return (
      <section className="instructions">
        <h2>{this.state.text}</h2>
      </section>
    )
  }
}

export default Instructions
