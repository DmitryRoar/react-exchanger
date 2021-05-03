import React, {useState} from 'react'
import classes from './Sidebar.module.scss'

import {NavLink} from 'react-router-dom'

export const Sidebar = () => {
  const [pages] = useState([
    {icon: 'trade', link: '', name: 'Exchange', new: false},
    {icon: 'faq', link: 'faq', name: 'FAQ', new: false},
    {icon: 'partner', link: 'partner', name: 'For partners', new: false},
  ])

  return (
    <div className={classes.sidebar}>
      <ul>
        {
          pages.map((page, idx) => (
            <li 
              key={idx} 
            >  
              <NavLink 
                to={`/${page.link}`} 
                exact 
                activeClassName={classes.active}
              >
                <img 
                  style={{
                    WebkitMask: `url(/assets/img/sidebar/${page.icon}.svg) no-repeat center`,
                    width: 24, height: 24, backgroundColor: "#000"
                  }} 
                />
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