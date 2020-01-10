import './WelcomePage.scss'
import React from 'react'
import logo from 'assets/logo.svg'
import traveler from 'assets/traveler.svg'
import ProcessButton from 'containers/ProcessButton/ProcessButton'

const WelcomePage = () => {
  return (
    <main className="welcome">
      <img className="logo" src={logo} alt="logo"/>
      <section>
        <h1>Welcome, Traveler!</h1>
        <img src={traveler} alt="traveler"/>
        <div>
          <ProcessButton text="Sign In" type='login' />
          <ProcessButton text="Create Account" type='signup' />
        </div>
      </section>
    </main>
  )
}

export default WelcomePage
