import React, {useState} from 'react'
import classes from './Sidebar.module.scss'

import {NavLink} from 'react-router-dom'

import {SvgIcon} from '../SvgIcon/SvgIcon'

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
                <SvgIcon icon={page.icon} section="sidebar" width="24" customClass={classes.svg} />
                <span>{page.name}</span>
                {
                  page.new && (
                    <div className={classes.new}>
                      <SvgIcon icon="new-page" width="24" />
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