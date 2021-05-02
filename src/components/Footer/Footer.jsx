import React from 'react'
import classes from './Footer.module.scss'

import {Link} from 'react-router-dom'

export const Footer = () => (
  <footer className={classes.footer}>
    <div className={classes.flex}>
      <span className={classes.copyright}>
        @ Quickchange. Работаем с 2016 года
      </span>
      <div className={classes.language}>
        language change
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
          <span>Наши отзывы на</span>
          <img src="/assets/img/best-change.svg" /> 
        </a>
      </div>
      <div className={classes.right}>
        <Link to="/terms-of-use" className={classes.link}>
          Пользовательское соглашение
        </Link>
        <Link to="/privacy" className={classes.link}>
          Политика конфиденциальности
        </Link>
      </div>
    </div>
  </footer>
)