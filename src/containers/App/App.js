import './App.scss'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import routers from 'routers'
import { addUserInfo, addPlannedParks } from 'redux/actions'
import { getItem } from '_utils/localStorage'

export class App extends Component {
  componentDidMount() {
    const user = getItem('user')
    if (user) this.addUser(user)
  }

  addUser = (user) => {
    this.props.addUserInfo(user)
    this.addUserData()
  }

  addUserData = () => {
    const planning = getItem('planning')
    if (planning) this.props.addPlannedParks(planning)
  }

  render() {
    return (
      <main className="app">
        { routers }
      </main>
    )
  }
}

export const mapDispatchToProps = dispatch => (
  bindActionCreators({
    addUserInfo, addPlannedParks
  }, dispatch)
)

App.propTypes = {
  addUserInfo: PropTypes.func.isRequired,
  addPlannedParks: PropTypes.func.isRequired
}

export default connect(null,mapDispatchToProps)(App)
