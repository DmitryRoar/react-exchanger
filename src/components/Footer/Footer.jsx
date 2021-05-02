import React from 'react'
import classes from './Footer.module.scss'

import {Link} from 'react-router-dom'

export const Footer = () => (
  <footer className={classes.footer}>
    <div className={classes.flex}>
      <span className={classes.copyright}>
        © Quickchange. We are working since 2016
      </span>
      <div className={classes.language}>
        <div className={classes.header}>
          <img src="/assets/img/footer/globus.svg" />
          <span>English</span> 
        </div>
      </div>
    </div>
    <div className={classes.links}>
      <div className={classes.left}>
        <Link to="/" className={classes.link}>
          support@quickchange.cc
        </Link>
        <a
          className={classes['link__bestchange']} 
          rel="noreferrer noopener" 
          href="https://www.bestchange.ru/quickchange-exchanger.html"
        >
          <span>Our reviews on</span>
          <img src="/assets/img/footer/best-change.svg" /> 
        </a>
      </div>
      <div className={classes.right}>
        <Link to="/terms-of-use" className={classes.link}>
          Terms of use
        </Link>
        <Link to="/privacy" className={classes.link}>
          Privacy policy
        </Link>
      </div>
    </div>
  </footer>
)