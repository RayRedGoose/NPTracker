import './LoginPage.scss'
import React from 'react'
import logo from 'assets/logo.svg'
import LoginBlock from 'containers/LoginBlock/LoginBlock'

const LoginPage = () => {
  return (
    <main className="login-page">
      <img className="logo" src={logo} alt="logo"/>
      <LoginBlock />
    </main>
  )
}

export default LoginPage
