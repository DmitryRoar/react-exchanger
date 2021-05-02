import React from 'react'

import {useRoutes} from './routes'

export const App = () => {
  const routes = useRoutes(true)

  return (
    <main className="container">
      {routes}
    </main>    
  )
}