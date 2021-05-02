import React from 'react'

import {Route, Switch} from 'react-router-dom'

import {HomePage} from './pages/HomePage/HomePage'

export const useRoutes = isAuth => {
  if (isAuth) {
    return (
      <Switch>
        <Route path="/" exact={true} component={HomePage} />
      </Switch>
    )
  }

  return (
    <Switch>

    </Switch>
  )
} 