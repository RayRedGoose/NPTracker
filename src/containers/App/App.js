import './App.scss'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Redirect } from 'react-router-dom'
import routers from 'routers'

export class App extends Component {
  componentDidMount() {

  }

  render() {
    const { isLogged, process } = this.props
    return (
      <main className="app">
        {(!isLogged || !process)
            ? <Redirect to='/welcome' />
            : <Redirect to='/parks' /> }
        { routers }
      </main>
    );
  }
}

export const mapStateToProps = ({user, isLogged}) => ({
  user, isLogged
})

export const mapDispatchToProps = dispatch => (
  bindActionCreators({

  }, dispatch)
)

export default connect(mapStateToProps,mapDispatchToProps)(App);
