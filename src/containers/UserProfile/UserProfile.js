import './UserProfile.scss'
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
// import logout from 'assets/logout.svg'

export const UserProfile = ({ user }) => {
  return (
    <aside className="user-profile">
      <header>
        <h2>Your Account</h2>
        {
          //<img src={logout} alt="logout"/>
        }
      </header>
      <section>
        <div className="image" style={{backgroundImage: `url(${user.image})`}}></div>
        <div>
          <p>{user.name + ' ' + user.last_name}</p>
          <p className="location">{user.city}</p>
        </div>
      </section>
    </aside>
  )
}

export const mapStateToProps = ({ user }) => ({
  user
})

UserProfile.propTypes = {
  user: PropTypes.object.isRequired
}

export default connect(mapStateToProps)(UserProfile)
