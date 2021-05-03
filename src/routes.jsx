import React from 'react'

import {Route, Switch} from 'react-router-dom'

import {ExchangePage} from './pages/ExchangePage/ExchangePage'
import {ErrorPage} from './pages/ErrorPage/ErrorPage'
import {TermsPage} from './pages/TermsPage/TermsPage'
import {FAQPage} from './pages/FAQPage/FAQPage'
import {Partners} from './pages/Partners/Partners'

export const useRoutes = isAuth => {
  if (!isAuth) {
    return (
      <Switch>
        
      </Switch>
    )
  }

  return (
    <Switch>
      <Route path="/faq" component={FAQPage} />
      <Route path="/partner" component={Partners} />
      <Route path="/terms-of-use" exact={true} component={TermsPage} />
      <Route path="/" exact={true} component={ExchangePage} />
      <Route component={ErrorPage} />
    </Switch>
  )
} 