import React from 'react'
import classes from './Nav.module.css'
import { NavLink } from 'react-router-dom'
import { useAuth } from '../provider/AuthProvider'

const Nav = () => {
  const { isLoggedIn, logout } = useAuth()

  return (
    <div className={classes.nav}>
      <div className={classes.logo}>
        <a href="/">
          <h3>Facebugs</h3>
        </a>
        <div className={classes.link}>
          <NavLink to={'/'} className={(arg) => (arg.isActive ? classes.active : undefined)}>
            Feed
          </NavLink>
        </div>
        <div className={classes.link}>
          <NavLink to={'/create'} className={(arg) => (arg.isActive ? classes.active : undefined)}>
            Create
          </NavLink>
        </div>
      </div>
      <div className={classes.login}>
        {isLoggedIn ? (
          <div className={classes.link}>
            <NavLink to={'/profile'} className={(arg) => (arg.isActive ? classes.active : undefined)}>
              Profile
            </NavLink>

            <NavLink to={'/'} onClick={logout} className={(arg) => (arg.isActive ? classes.active : undefined)}>
              <button type="button">Log Out</button>
            </NavLink>
          </div>
        ) : (
          <NavLink to={'/login'} className={(arg) => (arg.isActive ? classes.active : undefined)}>
            <button type="button">Log In</button>
          </NavLink>
        )}
      </div>
    </div>
  )
}

export default Nav
