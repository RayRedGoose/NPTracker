import './NavPanel.scss'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { NavLink } from 'react-router-dom'
import { changeActiveTab } from 'redux/actions'

export class NavPanel extends Component {
  toggleTab = (event) => {
    this.props.changeActiveTab(+event.target.id)
  }

  createTabs = () => {
    const tabNames = ['dashboard', 'parks', 'wish list', 'visited']

    return tabNames.map((tab, index) => {
      const tabClass = (this.props.activeTab === (index + 1)) ? 'nav-tab tab-active' : 'nav-tab'
      const link = tab.replace(/ /g, '-')
      return <NavLink
        to={`/${link}`}
        key={link}
        id={index+1}
        className={tabClass}
        onClick={this.toggleTab}>{ tab }</NavLink>
    })
  }

  render() {
    return (
      <nav className="nav-panel">
        { this.createTabs() }
      </nav>
    )
  }
}

export const mapStateToProps = ({ activeTab }) => ({
  activeTab
})

export const mapDispatchToProps = dispatch => (
  bindActionCreators({
    changeActiveTab
  }, dispatch)
)

NavPanel.propTypes = {
  activeTab: PropTypes.number.isRequired,
  changeActiveTab: PropTypes.func.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(NavPanel)
