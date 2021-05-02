import React from 'react'
import classes from './ExchangePage.module.scss'

import {MainLayout} from '../../layouts/MainLayout/MainLayout'

import {ExchangeForm} from '../../components/ExchangeForm/ExchangeForm'

export const ExchangePage = () => {
  return (
    <MainLayout>
      <div className={classes.wrap}>
        <form className={classes.form}>
          <div className="content-wrap">
            <div className={classes.content}>
              <div className="content__headline">
                <h2>Sell</h2>
              </div>

              <ExchangeForm />
            </div>
          </div>
          <div className="content-wrap content-wrap__last">
            <div className="content__headline">
              <h2>Buy</h2>
            </div>
          </div>
          <div className={classes.change}>
            <img src="assets/img/exchange/change-arrow.svg" />
          </div>
        </form>
      </div>
    </MainLayout>
  )
}