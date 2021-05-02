import React from 'react'

import {Route, Switch} from 'react-router-dom'

import {ExchangePage} from './pages/ExchangePage/ExchangePage'
import {ErrorPage} from './pages/ErrorPage/ErrorPage'
import {ReservePage} from './pages/ReservePage/ReservePage'
import {BonusPage} from './pages/BonusPage/BonusPage'
import {TermsPage} from './pages/TermsPage/TermsPage'

export const useRoutes = isAuth => {
  if (!isAuth) {
    return (
      <Switch>
        
      </Switch>
    )
  }

  return (
    <Switch>
      <Route path="/reserve" exact={true} component={ReservePage} />
      <Route path="/bonus" exact={true} component={BonusPage} />
      <Route path="/terms-of-use" exact={true} component={TermsPage} />
      <Route path="/" exact={true} component={ExchangePage} />
      <Route component={ErrorPage} />
    </Switch>
  )
} 