import './App.scss'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import routers from 'routers'
import { addUserInfo, addPlannedParks, changeActiveTab } from 'redux/actions'
import { getItem } from '_utils/localStorage'

export class App extends Component {
  componentDidMount() {
    const user = getItem('user')
    const path = window.location.pathname
    console.log(path);
    if (user) this.addUser(user)
    this.checkActiveTab(path)
  }

  addUser = (user) => {
    this.props.addUserInfo(user)
    this.addUserData()
  }

  addUserData = () => {
    const planning = getItem('planning')
    if (planning) this.props.addPlannedParks(planning)
  }

  checkActiveTab = (pathname) => {
    const { changeActiveTab } = this.props
    switch (pathname) {
      case '/dashboard':
        return changeActiveTab(1)
      case '/parks':
        return changeActiveTab(2)
      case '/wish-list':
        return changeActiveTab(3)
      case '/visited':
        return changeActiveTab(4)
      default:
        return changeActiveTab(0)
    }
  }

  render() {
    return (
      <main className="app">{ routers }</main>
    )
  }
}

export const mapDispatchToProps = dispatch => (
  bindActionCreators({
    addUserInfo, addPlannedParks, changeActiveTab
  }, dispatch)
)

App.propTypes = {
  addUserInfo: PropTypes.func.isRequired,
  addPlannedParks: PropTypes.func.isRequired,
  changeActiveTab: PropTypes.func.isRequired,
}

export default connect(null, mapDispatchToProps)(App)
