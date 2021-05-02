import React from 'react'
import classes from './Navbar.module.scss'

import {NavLink} from 'react-router-dom'

export const Navbar = () => (
  <nav className={classes.nav}>
    <div className={classes.wrap}>
      <NavLink to="/auth" className={`${classes.button} ${classes['button__auth']}`}>
        <span>
          <img src="/assets/img/person.svg" /> 
          <span>Регистрация</span>
        </span>
      </NavLink>
      <NavLink to="/auth" className={`${classes.button}`}>
        <span>
          <img src="/assets/img/key.svg" /> 
          <span>Вход</span>
        </span>
      </NavLink>
    </div>
  </nav>
)