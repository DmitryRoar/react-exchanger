import React, {useEffect, useRef} from 'react'
import classes from './App.module.scss'

import {useRoutes} from './routes'

export const App = () => {
  const routes = useRoutes(true)
  const elRef = useRef(null)


  useEffect(() => {
    elRef.current.classList.add(classes['fade-in'])
  }, [])

  return (
    <main className={`container ${classes['container-app']}`} ref={elRef}>
      {routes}
    </main>    
  )
}