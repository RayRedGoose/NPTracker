import './NavPanel.scss'
import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'

const NavPanel = ({ activeTab }) => {
  const tabNames = ['dashboard', 'parks', 'visited', 'wish list']

  const tabs = tabNames.map((tab, index) => {
    const tabClass = (activeTab === (index+1)) ? 'nav-tab tab-active' : 'nav-tab'
    const link = tab.replace(/ /g, '-')
    return <NavLink
      to={`/${link}`}
      key={link}
      id={index+1}
      className={tabClass}>{ tab }</NavLink>
  })

  return (
    <nav className="nav-panel">
      { tabs }
    </nav>
  )
}

export const mapStateToProps = ({ activeTab }) => ({
  activeTab: 2
})

export default connect(mapStateToProps)(NavPanel)
