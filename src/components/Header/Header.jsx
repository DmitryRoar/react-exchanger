import React from 'react'
import classes from './Header.module.scss'

import {Link} from 'react-router-dom'

import {Navbar} from '../Navbar/Navbar'

export const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.wrap}>
        <div className={classes.logo}>
          <Link to="/">
            <img src="/assets/img/logo.svg" />
          </Link>
        </div>
        <div className={classes.desc}>
          <p className={classes.item}>
            <img src="/assets/img/robot.svg" />
            <span>Автоматический обмен</span>
          </p>
          <p className={classes.item}>
            <img src="/assets/img/always-time.svg" />
            <span>Тех. поддержка</span>
          </p>
        </div>
      </div>

      <Navbar />
    </header>
  )
}