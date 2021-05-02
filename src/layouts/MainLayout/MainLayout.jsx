import React from 'react'

import {Header} from '../../components/Header/Header'
import {Footer} from '../../components/Footer/Footer'
import {Sidebar} from '../../components/Sidebar/Sidebar'

export const MainLayout = ({children}) => {
  return (
    <>
      <Header />
      <Sidebar />
      {children}
      <Footer />
    </>
  )
}