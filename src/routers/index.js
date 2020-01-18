import React from 'react'
import { Switch, Route } from 'react-router-dom'
import WelcomePage from 'pages/WelcomePage/WelcomePage'
import LoginPage from 'pages/LoginPage/LoginPage'
import MainPage from 'pages/MainPage/MainPage'
import SignUpPage from 'pages/SignUpPage/SignUpPage'
import Instructions from 'components/Instructions/Instructions'
import Page404 from 'pages/Page404/Page404'
import ParksContainer from 'containers/ParksContainer/ParksContainer'
import SingleParkInfo from 'containers/SingleParkInfo/SingleParkInfo'
import Dashboard from 'components/Dashboard/Dashboard'

const routers = (
  <Switch>
    <Route exact path='/welcome' render={() => <WelcomePage />} />
    <Route exact path='/login' render={() => <LoginPage />} />,
    <Route exact path='/signup' render={() => <SignUpPage />} />
    <Route exact path='/' render={() => <MainPage Part={ Instructions } />} />
    <Route exact path='/dashboard' render={() => <MainPage Part={ Dashboard } />} />
    <Route exact path='/parks' render={() => <MainPage Part={ ParksContainer } type="all" />} />
    <Route exact path='/wish-list' render={() => <MainPage Part={ ParksContainer } type="wish" />} />
    <Route exact path='/parks/:park' render={({match}) => <MainPage Part={ SingleParkInfo } type={match.params.park} />} />
    <Route path="*" component={Page404} />
  </Switch>
)

export default routers
