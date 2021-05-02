import React from 'react'
import classes from './ErrorPage.module.scss'

import {Link} from 'react-router-dom'

import {MainLayout} from '../../layouts/MainLayout/MainLayout'

export const ErrorPage = () => (
  <MainLayout>
    <div className="content-wrap">
      <div className={classes.content}>
        <img src="/assets/img/error/not-found.svg" />
        <h3>Page not found</h3>
        <p>This page does not exist or it was deleted</p>
        <Link to="/">
          To main page
        </Link>
      </div>
    </div>
  </MainLayout>
)