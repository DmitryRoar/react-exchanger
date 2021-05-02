import React from 'react'
import classes from './ReserveCard.module.scss'

export const ReserveCard = ({card}) => (
  <div className={classes.card}>
    <div className={classes.img}>
      <img src={`/assets/img/reserve/${card.icon}.svg`} />
    </div>
    <p className={classes.reserve}>{card.reserve}</p>
    <p className={classes.name}>{card.name} {card.valute.toUpperCase()}</p>
  </div>
)