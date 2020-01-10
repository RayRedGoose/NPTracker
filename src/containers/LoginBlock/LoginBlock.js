import './LoginBlock.scss'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Redirect } from 'react-router-dom'
import { getItem, addItem } from '_utils/localStorage'
import { addUserInfo } from 'redux/actions'

export class LoginBlock extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isRedirected: false,
      username: '',
      password: ''
    }
  }

  handleChanges = (event) => {
    const obj = {}
    obj[event.target.id] = event.target.value
    this.setState(obj)
  }

  redirect = (event) => {
    event.preventDefault()
    this.setState({isRedirected: true})
  }

  submitUser = (event) => {
    event.preventDefault()
    const { username, password } = this.state
    const users = getItem('users') || [ ]
    const currentUser = users.find(user => user.username === username) || { }
    return (currentUser.password === password)
      ? this.pushUser(currentUser)
      : this.setState({error: 'Not correct password'})
  }

  pushUser = (user) => {
    this.props.addUserInfo(user)
    addItem('user', user)
    window.location = '/'
  }

  render() {
    return (
      <section className="login-container active">
        { this.state.isRedirected && <Redirect to='/signup' /> }
        <form onSubmit={this.submitUser}>
          <h2>Traveler login</h2>
          <label htmlFor="username">username</label>
          <input
            type="username"
            id="username"
            value={this.state.username}
            onChange={this.handleChanges}/>
          <label htmlFor="password">password</label>
          <input
            type="password"
            id="password"
            value={this.state.password}
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

export const mapStateToProps = ({ process, user }) => ({

})

export const mapDispatchToProps = dispatch => (
  bindActionCreators({
    addUserInfo
  }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(LoginBlock)
