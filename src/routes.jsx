import React from 'react'

import {Route, Switch} from 'react-router-dom'

import {HomePage} from './pages/HomePage/HomePage'
import {ErrorPage} from './pages/ErrorPage/ErrorPage'

export const useRoutes = isAuth => {
  if (!isAuth) {
    return (
      <Switch>
        
      </Switch>
    )
  }

  return (
    <Switch>
      <Route path="/" exact={true} component={HomePage} />
      <Route component={ErrorPage} />
    </Switch>
  )
} 