import React, {useEffect, useState} from 'react'
import classes from './ReservePage.module.scss'

import {MainLayout} from '../../layouts/MainLayout/MainLayout'
import { ReserveCard } from '../../components/ReserveCard/ReserveCard'

export const ReservePage = () => {
  const [tabs, setTabs] = useState([
    {valute: 'rub', count: '14 840 966', active: true},
    {valute: 'uah', count: '27 891 524', active: false},
    {valute: 'usd', count: '266 483', active: false},
    {valute: 'eur', count: '253 321', active: false},
  ])

  const [cards, setCards] = useState([
    {icon: 'ADVCash', name: 'ADVCash', valute: 'rub', reserve: '6 514 271'},
    {icon: 'Payeer', name: 'Payeer', valute: 'rub', reserve: '8 104 664'},
    {icon: 'UMoney', name: 'ЮMoney', valute: 'rub', reserve: '60 234'},
    {icon: 'Piastrix', name: 'Piastrix', valute: 'rub', reserve: '6 514 271'},

    {icon: 'mono', name: 'МоноБанк', valute: 'uah', reserve: '8 914 729'},
    {icon: 'visa', name: 'Visa/MC', valute: 'uah', reserve: '9 577 479'},
    {icon: 'privat', name: 'Приват24', valute: 'uah', reserve: '9 047 000'},

    {icon: 'Payeer', name: 'Payeer', valute: 'usd', reserve: '36 074'},
    {icon: 'ADVCash', name: 'AVDCash', valute: 'usd', reserve: '190 409'},

    {icon: 'Payeer', name: 'Payeer', valute: 'eur', reserve: '110 471'},
    {icon: 'perfectmoney', name: 'PerfectMoney', valute: 'eur', reserve: '106 602'},
    {icon: 'ADVCash', name: 'AVDCash', valute: 'eur', reserve: '36 248'},
  ])

  useEffect(() => {
    localStorage.setItem('card-valute', 'rub')
  }, [])

  const tabHandler = (_, tab) => {
    setTabs(prev => {
      return prev.map((t) => {
        if (t.active) {
          t.active = false
        } 
        if (t === tab) {
          t.active = true
          localStorage.setItem('card-valute', t.valute.toLowerCase())
        }
        return t
      })
    })

    
  }

  return (
    <MainLayout>
      <div className="content-wrap">
        <div className="content__headline">
          Reservers
        </div>

        <div className={classes.tabs}>
          {
            tabs.map((tab, idx) => (
            <div 
              className={`${classes.tab} ${tab.active && classes.active}`} 
              key={idx} 
              onClick={event => tabHandler(event, tab)}
            >
              <h2>{tab.valute.toUpperCase()}</h2>
              <span>{tab.count}</span>
            </div>
            ))
          }
        </div>

        <div className={classes.cards}>
          {
            cards.map((card, idx) => {
              if (card.valute === localStorage.getItem('card-valute')) {
                return (
                  <ReserveCard 
                    card={card} 
                    key={idx} 
                  />
                )
              }
            })
          }
        </div>
      </div>
    </MainLayout>
  )
}