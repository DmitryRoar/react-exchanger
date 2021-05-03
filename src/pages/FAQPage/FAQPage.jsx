import React, {useState} from 'react'
import classes from './FAQPage.module.scss'

import {MainLayout} from '../../layouts/MainLayout/MainLayout'

export const FAQPage = () => {
  const [active, setActive] = useState({idx: -1, open: false})
  const [questions, setQuestions] = useState([
    {title: 'How does your website work?', text: `Currency exchange is automatic. You can make exchanges 24/7/365.
    Money transfer is carried out instantly after crediting your funds to our wallet.
    Information about the status of the exchange order is updated on the payment page and duplicated by mail.`},
    {title: 'Are you using AML verification?', text: `Yes, we check cryptocurrencies for risks using the system of our partners "Crystal Blockchain". This check reveals cryptocurrency that was stolen from its owners, received fraudulently, passed through a "mixer" or was involved in the sale of prohibited goods on Darknet sites. If such a cryptocurrency is detected by our system, your order is assigned the "Risky Payment" status.`},
    {title: 'What is the time frame for a money transfer to my account after i paid to you account?', text: `our wallet.
    If the exchange order is in the "Completed" status, then the funds have been debited from our account and sent to the account you specified.
    The timing of receipt for cards and wallets depends on the payment system and your bank:
    
    System	Terms for regulations	Real terms
    QIWI	Instantly	Instantly
    YooMoney	Instantly	Instantly
    PerfectMoney	Instantly	Instantly
    Piastrix	Instantly	Instantly
    Visa/MasterCard in Russian banks	Up to 3 banking days	1 - 60 minutes
    Visa/MasterCard in banks of Ukraine	Up to 3 banking days	1 - 60 minutes
    Visa/MasterCard USD	Up to 3 banking days	1 - 60 minutes
    
    
    If after the expiration of these terms, the payment was not credited, you need to contact technical support on our website.`},
    {title: 'Can I cancel the exchange order and get my currency back?', text: `You can cancel the order. You need to write to the technical support chat on the site. In this case, the refund will be made with a service commission of 10% and after your funds are credited to our wallet. A completed application cannot be canceled.`},
    {title: 'Do you fix the exchange rate', text: `Yes, the rate is fixed for 90 minutes for Bitcoin and 30 minutes for other cryptocurrencies. After this time, the order remains valid and the exchange will be executed according to the user agreement.`},
    {title: 'What are the statuses of an exchange order?', text: `The exchange statuses change and are available on the payment page. Also, statuses are duplicated by mail.

    "Awaiting payment" - the order has been created, but funds have not been credited to our wallet yet.
    
    "Awaiting confirmation" - a transaction in the mempool and awaiting confirmation from miners in the network.
    
    "Completed" - funds have been sent to your specified account. Expect enrollment.
    
    "Closed" - your payment for the order has not been received by us, the order is closed after the expiration of time. If payment is received, the order will be executed.
    
    "Paid. The rate has changed" - the time for fixing the rate has passed and the rate has decreased. You need to make a recount or issue a refund.
    
    "Risky payment" - your cryptocurrency was previously used on prohibited sites on the Darknet or passed through the "Mixer". Please request a return.
    
    "Invalid payment amount" - you paid less than the minimum amount for exchange. Please request a return.
    
    "Rejected" - unfortunately, we were unable to send the payment to your account, you need to contact the support chat.`},
    {title: '"Awaiting confirmation" - what is it and who should confirm?', text: `A cryptocurrency transfer is considered complete when it receives the required number of confirmations on the blockchain network. After 2 confirmations for Bitcoin and 6 for Ethereum and other cryptocurrencies, an automatic payment will be made. The speed of receiving confirmations is affected by the commission you set for the transfer and network load. You cannot cancel the transaction and you cannot increase the speed, you just have to wait for confirmation.`},
    {title: 'I paid less than I indicated in the order.', text: `No problem. After confirmations in the blockchain, we will automatically recalculate the amount we received take account the fall of the exchange rate.`},
    {title: 'I paid, but the order was closed.', text: `First of all, check the withdrawal of currency from your wallet. Also, keep in mind that some cryptocurrency storage resources are sending with a delay. In this case, the status of the order "Closed" is temporary and it will be executed after the currency is credited to our wallet.`},
    {title: '"Risky Pay" - what is it and what should I do?', text: `All cryptocurrency exchanges, as well as some resources, use cryptocurrency risk checks. We use the top-end "Crystal Blockchain" system. The Risky Payment status means that most of the cryptocurrency you sent to us was previously used in the sale of prohibited goods on the Darknet marketplaces, passed through the Mixer for the purpose of money laundering, or was stolen. If the application got into this status, you need to independently issue a refund on the payment page or via a link in a letter in the mail.`},
    {title: 'What is the return fee?', text: `The cryptocurrency return fee is 0.0003 BTC / ETH. In case of "Risky Payment", the refund is made minus the actual commission to the blockchain.`},
    {title: 'What is ERC20?', text: `ERC20 is the Ethereum network's token standard. If your wallet or crypto exchange offers various withdrawal options, then select ERC20. If it does not offer, then the default will be ERC20.`},
  ])

  const activeHandler = (idx) => {
    setActive(prev => ({idx, open: prev.idx === idx ? false : true}))
  }

  return (
    <MainLayout>
      <div className="content-wrap">
        <div className="content__headline">
          FAQ
        </div>
        <div className={classes.items}>
          {
            questions.map((q, idx) => (
              <div className={`${classes.item} ${(idx === active.idx && active.open) ? classes.active : ''}`} key={idx} onClick={activeHandler.bind(null, idx)}>
                <div className={classes['item__title']}>
                  {q.title}
                  <img src="/assets/img/exchange/form/arrow.svg" />
                </div>
                {
                  active.idx === idx && active.open && (
                    <div className={classes['item__content']}>
                      {q.text}
                    </div>
                  )
                }
              </div>
            ))
          }
        </div>
        
      </div>
    </MainLayout>
  )
}