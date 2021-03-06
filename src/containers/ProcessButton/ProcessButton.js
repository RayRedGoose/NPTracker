import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addProcessName, addProcessStep } from 'redux/actions'

export class ProcessButton extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isRedirected: false
    }
  }

  redirect = (event) => {
    const { addProcessName, addProcessStep } = this.props
    const type = event.target.id
    addProcessName(type)
    addProcessStep(1)
    this.setState({isRedirected: true})
  }

  render() {
    const { text, type } = this.props

    return (
      (!this.state.isRedirected)
        ? <button onClick={this.redirect} id={type}>{text}</button>
        : <Redirect to={`/${type}`} />
    )
  }
}

export const mapDispatchToProps = dispatch => (
  bindActionCreators({
    addProcessName,
    addProcessStep
  }, dispatch)
)

ProcessButton.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  addProcessName: PropTypes.func.isRequired,
  addProcessStep: PropTypes.func.isRequired
}


export default connect(null, mapDispatchToProps)(ProcessButton)
