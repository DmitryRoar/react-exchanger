import React from 'react'
import { MainLayout } from '../../layouts/MainLayout/MainLayout'
import classes from './Partners.module.scss'

export const Partners = () => {
  return (
    <MainLayout>
      <div className="content-wrap">
        <div className="content__headline">
          Affiliate program
        </div>

        <div className={classes.info}>
          <h3>What do we offer?</h3>
          <p>A unique opportunity to become our business partner and without any special effort to establish a source of passive income on an ongoing basis. Each registered user in the "Partners" section can find his referral link with a unique ID. When a client goes to our site using this link and carries out any operation with currency, you are charged from 5% to 20% of our profit (% of deductions depends on the number of exchanges made). You will also be charged a fee for subsequent operations of the user you brought!</p>
          <h3>How to attract a user?</h3>
          <p>- Webmasters can place banners and other advertising materials on their sites, blogs and other accessible sites; - Theme forums and other free platforms are available for Internet users, where you can create a topic, reply in a conversation, or insert a link in your signature. Social networks also deserve special attention; - For representatives of electronic currency exchange monitoring, we provide rate upload files according to the requirements of estandards.ru (contact the site support). Affiliate program accruals and payments are made exclusively in dollars. The minimum amount for withdrawing earned money from an affiliate account is 10 USD. Payments are made from the 1st to the 5th day of each month. Also, for more information, you can contact the Support Service.</p>
        </div>
      </div>
    </MainLayout>
  )
}