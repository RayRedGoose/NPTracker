import './App.scss'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Redirect } from 'react-router-dom'
import routers from 'routers'
import { addUserInfo } from 'redux/actions'
import { getItem } from '_utils/localStorage'

export class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLogged: false
    }
  }
  componentDidMount() {
    const user = getItem('user')
    if (user) this.addUser(user)
  }

  addUser = (user) => {
    this.props.addUserInfo(user)
    this.setState({isLogged: true})
  }

  render() {
    const { user, process } = this.props
    return (
      <main className="app">
        { (!user || !process) && <Redirect to='/welcome' /> }
        { this.state.isLogged && <Redirect to='/parks' />}
        { routers }
      </main>
    );
  }
}

export const mapStateToProps = ({user, process}) => ({
  user, process
})

export const mapDispatchToProps = dispatch => (
  bindActionCreators({
    addUserInfo
  }, dispatch)
)

export default connect(mapStateToProps,mapDispatchToProps)(App);
