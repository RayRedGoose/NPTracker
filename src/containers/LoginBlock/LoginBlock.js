import './LoginBlock.scss'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
// import { getItem } from '_utils/localStorage'
import { addUserInfo } from 'redux/actions'

export class LoginBlock extends Component {

  render() {
    return (
      <section className="login-container active">
        <form onSubmit={this.submitUser}>
          <h2>Traveler login</h2>
          <label htmlFor="username">username</label>
          <input type="username" id="username"/>
          <label htmlFor="password">password</label>
          <input type="password" id="password"/>
          <div>
            <button>Submit</button>
            <button>Sign Up</button>
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
