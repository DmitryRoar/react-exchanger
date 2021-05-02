import React from 'react'
import classes from './Navbar.module.scss'

import {Link} from 'react-router-dom'

export const Navbar = () => (
  <nav className={classes.nav}>
    <div className={classes.wrap}>
      <Link to="/auth" className={`${classes.button} ${classes['button__auth']}`}>
        <span>
          <img src="/assets/img/header/person.svg" /> 
          <span>Sign up</span>
        </span>
      </Link>
      <Link to="/auth" className={`${classes.button}`}>
        <span>
          <img src="/assets/img/header/key.svg" /> 
          <span>Sign in</span>
        </span>
      </Link>
    </div>
  </nav>
)