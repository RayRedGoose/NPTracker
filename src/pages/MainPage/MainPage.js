import './MainPage.scss'
import React from 'react'
import NavPanel from 'containers/NavPanel/NavPanel'
import UserProfile from 'containers/UserProfile/UserProfile'

const MainPage = ({ Part, type }) => {
  return (
    <main className="main-page">
      <NavPanel />
      <UserProfile />
      <Part type={type} />
    </main>
  )
}

export default MainPage
