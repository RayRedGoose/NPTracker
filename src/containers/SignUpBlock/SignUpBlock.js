import './SignUpBlock.scss'
import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import matryoshka from 'assets/matryoshka.svg'
import arrow from 'assets/send.svg'
import { addItem, addItemToAll } from '_utils/localStorage'
import { addUserInfo, increaseStep } from 'redux/actions'

export class SignUpBlock extends Component {
  constructor(props) {
    super(props)
    this.state = {
      type: '',
      data: {},
      error: ''
    }
  }

  componentDidMount() {
    const { process } = this.props
    if (!process) window.location = '/welcome'
    this.checkType()
  }

  componentDidUpdate(prevProps) {
    if (this.props.process.step !== prevProps.process.step) {
      this.checkType()
    }
  }

  checkType = () => {
    const { id, process } = this.props
    if (process.step < id) this.setState({type: 'inactive'})
    if (process.step === id) this.setState({type: 'active'})
    if (process.step > id) this.setState({type: 'done'})
  }

  createInputs = () => {
    const { inputs } = this.props

    return inputs.map(input => {
      const text = (input === 'password') ? 'password' : 'text'
      return (
        <Fragment key="inputs">
          <label
            key={'label-' + input}
            htmlFor={input}>
            {input.split('_').join(' ')}</label>
          <input
            key={'input-' + input}
            id={input}
            type={text}
            value={this.state.data[input]}
            onChange={this.handleChanges} />
        </Fragment>
      )
    })
  }

  handleChanges = (event) => {
    this.setState({error: ''})
    const obj = {}
    obj[event.target.id] = event.target.value
    this.setState({data: {...this.state.data, ...obj}})
  }

  updateUser = () => {
    this.props.increaseStep()
    this.props.addUserInfo(this.state.data)
  }

  submitUser = () => {
    const {user} = this.props
    addItem('user', user)
    addItemToAll('users', user)
    window.location = '/'
  }

  cancel = () => {
    window.location = '/window'
  }

  checkUserFullness = () => {
    const user = this.props.user ? this.props.user : {}
    return Object.keys(user).sort() !== ['city', 'image', 'last_name','name','password', 'username']
  }

  render() {
    const { id, user, process } = this.props

    const imageStyle = {
      height: `${200 - (id * 40)}px`,
      position: 'relative',
      zIndex: '3'
    }

    const bodyWithInputs = (
      <Fragment key='form'>
        <form>
          <h2>CREATE ACCOUNT</h2>
          {!this.state.error === '' && <p className="error-notification">this.state.error</p>}
          { this.createInputs() }
          <p>click arrow button to go to next step</p>
        </form>
        <img className="arrow-btn" src={arrow} alt="arrow" onClick={this.updateUser}/>
      </Fragment>
    )

    const bodyWithError = (
      <div key='error-block' className="submit-block error-block">
        <h2>Profile overview</h2>
        <p className="error">You don't pass correct data</p>
        <button onClick={this.cancel}>Cancel</button>
      </div>
    )

    const bodyWithSubmit = (this.checkUserFullness()) ? bodyWithError : (
      <div key='submit-block' className="submit-block">
        <h2>Profile overview</h2>
        <img src={user.image} alt="avatar" />
        <p>{user.name + ' ' + user.last_name}</p>
        <p className="location">{user.city}</p>
        <div>
          <button onClick={this.submitUser}>Create</button>
          <button onClick={this.cancel}>Cancel</button>
        </div>
      </div>
    )

    const checkBody = (process && process.step === 4) ? bodyWithSubmit : bodyWithInputs

    return (
      <section id={ id } className={`signup-container ${this.state.type}-block`}>
        { this.state.type === 'inactive' && <img style={imageStyle} src={matryoshka} alt="matryoshka"/>}
        { this.state.type === 'active' && checkBody }
      </section>
    )
  }
}

export const mapStateToProps = ({ process, user }) => ({
  process, user
})

export const mapDispatchToProps = dispatch => (
  bindActionCreators({
    addUserInfo,
    increaseStep
  }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(SignUpBlock)
