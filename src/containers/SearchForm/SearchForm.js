import './SearchForm.scss'
import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addProcessName, addProcessQuery, removeProcess } from 'redux/actions'

export class SearchForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      query: ''
    }
  }

  toggleSubmit = (event) => {
    event.preventDefault()
    const { process } = this.props
    const { query } = this.state
    return (!process && query !== '')
      ? this.submitSearch(event)
      : this.removeSearch()
  }

  submitSearch = (event) => {
    event.preventDefault()
    const { addProcessName, addProcessQuery } = this.props
    addProcessName('search')
    addProcessQuery(this.state.query)
    this.setState({query: ''})
  }

  removeSearch = () => {
    const { removeProcess } = this.props
    this.setState({query: ''})
    removeProcess()
  }

  handleChanges = (event) => {
    const query = event.target.value.toLowerCase()
    this.setState({query: query})
  }

  render() {
    const { query } = this.state
    const { process } = this.props
    const buttonClass = (!process) ? 'submit-btn' : 'cancel-btn'
    return (
      <form className="search-form" onSubmit={this.toggleSubmit}>
        <input
          type="text"
          value={query}
          onChange={this.handleChanges}
          placeholder="Search"/>
        <button className={buttonClass}></button>
      </form>
    )
  }
}

export const mapStateToProps = ({process}) => ({
  process
})

export const mapDispatchToProps = dispatch => (
  bindActionCreators({
    addProcessName, addProcessQuery, removeProcess
  }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm)
