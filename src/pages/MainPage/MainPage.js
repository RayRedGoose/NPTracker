import './MainPage.scss'
import React from 'react'
import PropTypes from 'prop-types'
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

MainPage.propTypes = {
  Part: PropTypes.elementType.isRequired,
  type: PropTypes.string.isRequired
}

export default MainPage
