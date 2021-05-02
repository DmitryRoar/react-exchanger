import React, {useState} from 'react'
import classes from './Sidebar.module.scss'

import {NavLink} from 'react-router-dom'

export const Sidebar = () => {
  const [pages] = useState([
    {icon: 'trade', link: '', name: 'Exchange', new: false},
    {icon: 'reserve', link: 'reserve', name: 'Reserves', new: false},
    {icon: 'bonus', link: 'bonus', name: 'Bonus', new: false},
    {icon: 'check', link: 'crypto-check', name: 'Crypto check', new: true},
    {icon: 'giveaway', link: 'giveaway', name: 'Giveaway', new: true},
    {icon: 'faq', link: 'faq', name: 'FAQ', new: false},
    {icon: 'partner', link: 'parner', name: 'Parners', new: false},
    {icon: 'bids', link: 'bids', name: 'Bids', new: false},
  ])

  return (
    <div className={classes.sidebar}>
      <ul>
        {
          pages.map((page, idx) => (
            <li key={idx}>  
              <NavLink to={`/${page.link}`} activeClassName={classes.active}>
                <img src={`/assets/img/sidebar/${page.icon}.svg`} />
                <span>{page.name}</span>
                {
                  page.new && (
                    <div className={classes.new}>
                      <img src="/assets/img/sidebar/new.svg" />
                    </div>
                  )
                }
              </NavLink>
            </li>
          ))
        }
      </ul>
    </div>
  )
}