import React from 'react'
import classes from './Navbar.module.scss'

import {Link} from 'react-router-dom'

import {SvgIcon} from '../../components/SvgIcon/SvgIcon'

export const Navbar = () => (
  <nav className={classes.nav}>
    <div className={classes.wrap}>
      <Link to="/sign-up" className={`${classes.button} ${classes['button__auth']}`}>
        <span>
          <SvgIcon width="16" section="header" icon="person" customClass={classes.svg} />
          <span>Sign up</span>
        </span>
      </Link>
      <Link to="/sign-in" className={`${classes.button}`}>
        <span>
          <SvgIcon width="16" section="header" icon="key" customClass={classes.svg} />
          <span>Sign in</span>
        </span>
      </Link>
    </div>
  </nav>
)