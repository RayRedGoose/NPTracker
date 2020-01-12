import React from 'react'
import { Switch, Route } from 'react-router-dom'
import WelcomePage from 'pages/WelcomePage/WelcomePage'
import LoginPage from 'pages/LoginPage/LoginPage'
import MainPage from 'pages/MainPage/MainPage'
import SignUpPage from 'pages/SignUpPage/SignUpPage'
import Dashboard from 'containers/Dashboard/Dashboard'
import ParksContainer from 'containers/ParksContainer/ParksContainer'


const routers = (
  <Switch>
    <Route exact path='/welcome' render={() => <WelcomePage />} />
    <Route exact path='/login' render={() => <LoginPage />} />,
    <Route exact path='/signup' render={() => <SignUpPage />} />
    <Route exact path='/' render={() => <MainPage Part={ Dashboard } />} />
    <Route exact path='/parks' render={() => <MainPage Part={ ParksContainer } type="all"/>} />
    <Route exact path='/visited' render={() => <MainPage Part={ ParksContainer } type="done" />} />
    <Route exact path='/wish-list' render={() => <MainPage Part={ ParksContainer } type="want" />} />
  </Switch>
)

export default routers
