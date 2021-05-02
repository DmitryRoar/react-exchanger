import React from 'react'
import classes from './MainLayout.module.scss'

import {Header} from '../../components/Header/Header'
import {Footer} from '../../components/Footer/Footer'
import {Sidebar} from '../../components/Sidebar/Sidebar'

export const MainLayout = ({children}) => {
  return (
    <>
      <Header />
      <section className={classes.section}>
        <Sidebar />
        {children}
      </section>
      <Footer />
    </>
  )
}