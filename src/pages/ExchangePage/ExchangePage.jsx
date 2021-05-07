import React, {useEffect, useState} from 'react'
import classes from './ExchangePage.module.scss'

import {MainLayout} from '../../layouts/MainLayout/MainLayout'

import {ExchangeForm} from '../../components/ExchangeForm/ExchangeForm'
import {Input} from '../../components/Input/Input'
import { Link } from 'react-router-dom'

export const ExchangePage = () => {
  const [email, setEmail] = useState('')
  const [card, setCard] = useState('')
  const [countTo, setCountTo] = useState('')
  const [countFrom, setCountFrom] = useState('')

  const [disabled, setDisabled] = useState(true)

  useEffect(() => {
    if (email && card && countTo && countFrom) {
      setDisabled(false)
    } else {
      setDisabled(true)
    }
  }, [email, card, countTo, countFrom])

  const submitHandler = event => {
    event.preventDefault()
  }

  return (
    <MainLayout>
      <div className={classes.wrap}>
        <form className={classes.form} onSubmit={submitHandler}>
          <div className="content-wrap">
            <div className={classes.content}>
              <div className="content__headline">
                <h2>Sell</h2>
              </div>

              <ExchangeForm value={countFrom} setValue={setCountFrom} />

              <div className={classes.data}>
                <Input value={email} setValue={setEmail} border={true} label="Email" type="email" />
              </div>
            </div>
          </div>
          <div className="content-wrap content-wrap__last">
            <div className="content__headline">
              <h2>Buy</h2>
            </div>

            <ExchangeForm value={countTo} setValue={setCountTo} />
            <div className={classes.data}>
              <Input setValue={setCard} value={card} border={true} label="Card number" type="text" />
            </div>

            <div className={classes.exchange}>
              <div className={classes['exchange__text']}>
              By clicking the "Exchange" button you agree to the user <a target="_blank" rel="noreferrer noopener" href="/terms-of-use">agreement</a> of our resource.
              </div>
              <button type="submit" disabled={disabled}>
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