import './LoginBlock.scss'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Redirect } from 'react-router-dom'
import { getItem, addItem } from '_utils/localStorage'
import { addUserInfo } from 'redux/actions'

export class LoginBlock extends Component {
  constructor() {
    super()
    this.state = {
      isRedirected: false,
      username: '',
      password: ''
    }
  }

  handleChanges = (event) => {
    const newState = { error: null }
    newState[event.target.id] = event.target.value
    this.setState(newState)
  }

  redirect = (event) => {
    event.preventDefault()
    this.setState({isRedirected: true})
  }

  submitUser = (event) => {
    event.preventDefault()
    const users = getItem('users')
    return users
      ? this.findUser(users)
      : this.setState({error: 'Please, create account!'})
  }

  findUser = (users) => {
    const currentUser = users.find(user => user.username === this.state.username)
    return currentUser
      ? this.checkUserPassword(currentUser)
      : this.setState({error: 'This username is not found!'})
  }

  checkUserPassword = (currentUser) => {
    return (currentUser.password === this.state.password)
      ? this.pushUser(currentUser)
      : this.setState({error: 'Password is incorrect!'})
  }

  pushUser = (user) => {
    this.props.addUserInfo(user)
    addItem('user', user)
    window.location = '/'
  }

  render() {
    const { username, password, error, isRedirected} = this.state
    return (
      <section className="login-container">
        { isRedirected && <Redirect to='/signup' /> }
        <form onSubmit={this.submitUser}>
          <h2>Traveler login</h2>
          {error && <p className='error'>{error}</p>}
          <label htmlFor="username">username</label>
          <input
            type="username"
            id="username"
            value={username}
            onChange={this.handleChanges}/>
          <label htmlFor="password">password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={this.handleChanges}/>
          <div>
            <button onClick={this.submitUser}>Submit</button>
            <button onClick={this.redirect}>Sign Up</button>
          </div>
        </form>
      </section>
    )
  }
}

export const mapDispatchToProps = dispatch => (
  bindActionCreators({
    addUserInfo
  }, dispatch)
)

export default connect(null, mapDispatchToProps)(LoginBlock)
