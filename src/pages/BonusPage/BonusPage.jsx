import React from 'react'
import classes from './BonusPage.module.scss'

import {MainLayout} from '../../layouts/MainLayout/MainLayout'

export const BonusPage = () => {
  return (
    <MainLayout>
      <div className="content-wrap">
        <div className="content__headline">
          <h2>Bonus</h2>
        </div>
      </div>
    </MainLayout>
  )
}