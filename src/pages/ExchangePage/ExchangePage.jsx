import React, {useState} from 'react'
import classes from './ExchangePage.module.scss'

import {MainLayout} from '../../layouts/MainLayout/MainLayout'

import {ExchangeForm} from '../../components/ExchangeForm/ExchangeForm'
import {Input} from '../../components/Input/Input'
import { Link } from 'react-router-dom'

export const ExchangePage = () => {
  const [email, setEmail] = useState('')

  console.log(email)

  return (
    <MainLayout>
      <div className={classes.wrap}>
        <form className={classes.form}>
          <div className="content-wrap">
            <div className={classes.content}>
              <div className="content__headline">
                <h2>Sell</h2>
              </div>

              <ExchangeForm input={{type: 'number', maxLength: '44'}} />

              <div className={classes.data}>
                <Input setValue={setEmail} border={true} input={{label: 'Email', type: 'email'}} />
              </div>
            </div>
          </div>
          <div className="content-wrap content-wrap__last">
            <div className="content__headline">
              <h2>Buy</h2>
            </div>

            <ExchangeForm input={{label: 'HELLO', type: 'number', maxLength: '44'}} />
            <div className={classes.data}>
              <Input setValue={setEmail} border={true} input={{label: 'Card number', type: 'text'}} />
            </div>

            <div className={classes.exchange}>
              <div className={classes['exchange__text']}>
              By clicking the "Exchange" button you agree to the user <a target="_blank" rel="noreferrer noopener" href="/terms-of-use">agreement</a> of our resource.
              </div>
              <button type="submit" disabled>
                Exchange
              </button>
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