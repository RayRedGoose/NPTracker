import React from 'react'
import { Switch, Route } from 'react-router-dom'
import WelcomePage from 'pages/WelcomePage/WelcomePage'
import LoginPage from 'pages/LoginPage/LoginPage'
import MainPage from 'pages/MainPage/MainPage'
import SignUpPage from 'pages/SignUpPage/SignUpPage'



const routers = (
  <Switch>
    <Route exact path='/welcome' render={() => <WelcomePage />} />
    <Route exact path='/login' render={() => <LoginPage />} />,
    <Route exact path='/signup' render={() => <SignUpPage />} />
    <Route exact path='/parks' render={() => <MainPage />} />
  </Switch>
)

export default routers
