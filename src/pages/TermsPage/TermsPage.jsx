import React, {useState} from 'react'
import classes from './TermsPage.module.scss'

import {MainLayout} from '../../layouts/MainLayout/MainLayout'

export const TermsPage = () => {
  const [terms] = useState([
    {headline: 'Terms and definitions', texts: [
      {text: 'Quickchange is an automated web service located on the Internet at https://quickchange.cc and offering its services using a special software interface for all Users (hereinafter referred to as theService).'},
      {text: 'A user is any natural or legal person who agrees with all the conditions offered by the Service and has acceded to this agreement.'},
      {text: 'Electronic units (title units) - accounting units of the respective electronic settlement systems, indicating a certain amount of claim rights or other rights arising from the agreement of electronic settlement systems with its users.'},
      {text: 'Electronic settlement system (payment system) is a software and hardware product developed by a third party and represents a system for implementing the accounting of electronic units, as well as the organization of mutual settlements between its users.'},
      {text: 'Payment - transfer of electronic units from the payer to the recipient.'},
      {text: 'Order - information submitted by the User using the tools of theService in electronic form, indicating his intentions to use the services of the Service on the terms proposed by the Service and specified in the application parameters.'}
    ]},
    {headline: 'General Provisions', texts: [
      {text: 'This agreement governs the relationship between the User and the Service regarding the services provided by the Service to the User and cancels all previous agreements between the Service and the User on this subject.'},
      {text: 'This agreement does not cancel the current legislation of the countries of registration and location of the User, as well as the contractual relationship between the User and the Electronic PaymentSystem (s).'},
      {text: 'This agreement is considered adopted on the terms of a public offer accepted by the User during the filing of the Application, which is an integral part of this agreement.'},
      {text: 'A public offer is the information displayed by the Service on the parameters and conditions of the Application.'},
      {text: 'A public offer is the information displayed by the Service on the parameters and conditions of the Application.'},
      {text: 'The date and time of acceptance, as well as the parameters of the conditions of the Application are recorded by the Service automatically at the time of completion of the application.'},
      {text: 'The period of acceptance by the User of a transaction with theService on the terms described in the User’s Application is 30 minutes from the date of completion of the application.'},
      {text: 'This agreement shall enter into force upon completion of the application by the User.'},
      {text: 'This agreement shall terminate from the moment of receipt of the Electronic units in the details provided by the User in the amount provided for by the parameters of the User\'s Application, or from the moment the application is canceled.'},
      {text: 'The parties acknowledge this agreement in electronic form as equivalent in legal force to a contract concluded in writing.'},
      {text: 'The service reserves the right to unilaterally make changes to the discount system as well as to the partner remuneration system without corresponding notification of the User, but with the obligatory publication of the current version of the deduction system on the "Help" page of the "Exchange Bonus" and "Affiliate Program"sections.'},
      {text: 'The service reserves the right to unilaterally amend this agreement without notifying the User accordingly, but with the obligatory publication of the current version of the agreement on this page.'}
    ]},
    {headline: 'Subject of the agreement', texts: [
      {text: 'Using the technical means of the Service, by submitting the Application, the User instructs, and the Service, on its own be half and at the expense of the User, performs actions to receive and further transfer the amount of Electronic Units declared by the User to a person or persons wishing to purchase such for a cash equivalent in an amount not lower than provided in the parameters of the Application submitted by the User, as well as actions to transfer the cash equivalent in the amount specified in the application parameters to the details specified by the User.'},
      {text: 'Any positive difference arising as a result of the actions described in clause 3.1 of this agreement, as additional benefits received, is transferred to the Service as a premium payment of commission services.'}
    ]},
    {headline: 'Terms of Service', texts: [
      {text: 'Processing of User Applications is carried out by the Service in strict accordance with the privacy policy (clause 5 of this agreement), as well as the policy to combat money laundering and the prevention of illegal transactions (clause 6 of this agreement).'},
      {text: 'The order of the Service’s services, the management of the transaction process and the receipt of information on the progress of the transaction by the User are carried out exclusively using the appropriate user interface provided by the Service.'},
      {text: 'Accounting of transactions with electronic units is carried out by the Service in accordance with the regulations, rules and format of the relevant Electronic Settlement Systems.'},
      {text: 'Any completed operation performed by the Service at the request of the User is considered irrevocable, i.e. cannot be canceled by the User after its completion - the receipt by the User of the transaction due to him under previously accepted terms.'},
      {text: 'In case of non-receipt of electronic units from the User within 15 minutes from the moment of acceptance of the User to the details provided by the Service, the agreement on the conditions specified in the Application is considered terminated by the Service unilaterally as not entered into force, without notifying the User about it.'},
      {text: 'In the event of termination of the agreement, Electronic units received after the above period shall be returned to the sender\'s details within the next 24 hours. When making a refund, all commission costs for the transfer of electronic units are made from the funds received at the expense of the User. The Service is not responsible for possible delays in return if they occurred through no fault of theService.'},
      {text: 'In the event that the number of received Electronic units differs from that declared by the User, the Service may unilaterally terminate the agreement by refusing to execute the application and returning the received funds to the sender\'s details within the next 24 hours. When making a return, all commission costs for the transfer of Electronic units are made from the funds received at the expense of the User. The Service is not responsible for possible delays in return if they occurred through no fault of the Service.'},
      {text: 'In the case of non-sending of a cash equivalent to the details specified by the User within 24 hours from the start of the contract, in the absence of reasons for blocking the Electronic units received at the User’s request from the Service, the User may request termination of the agreement by canceling his application and returning the electronic units in full volume.'},
      {text: 'The request to cancel the application should be fulfilled by the Service only if, at the time of receipt of such a request, the money equivalent was not sent to the details specified by the User.'},
      {text: 'In case of cancellation of the application, the Electronic units are returned by the Service to the sender\'s details within 24hours from the receipt of the cancellation request. The Service is not responsible for possible delays in return if they occurred through no fault of the Service.'},
      {text: 'The service has the right to attract third-party performers to fulfill its obligations.'},
      {text: 'The Service has the right to cancel the ongoing operation and return the Electronic units and / or financial funds contributed by the User with the reimbursement of the fees of the ElectronicSettlement Systems to the User without explanation.'},
      {text: 'The Service has the right to refuse further maintenance to theUser in case of violation by the User of any of the clauses of this agreement.'},
      {text: 'In case of refusal by the Service of further maintenance of the User, the Service notifies the User of its decision by e-mail or phone call, after which it freezes the User’s account and all currentUser Applications. Further, the Service carries out the return of Electronic units received at the request of the User at the details of the sender within 24 hours from the date of refusal. When making are turn, all commission costs for the transfer of Electronic units are made from the funds received at the expense of the User. The Service is not responsible for possible delays in return if they occurred through no fault of the Service.'},
      {text: 'All subsequent Applications created by the User after theService refuses to continue servicing the User are automatically frozen. Accounts associated with these Applications are blocked.'}
    ]}
  ])

  return (
    <MainLayout>
      <div className="content-wrap">
        <div className="content__headline">
          Terms of use
        </div>
        <section className={classes.section}>
          {
            terms.map((term, termIdx) => (
              <div key={termIdx} className={classes.term}>
                <h3>{termIdx + 1}. {term.headline}</h3>
                {
                  term.texts.map(({text}, textIdx) => (
                    <p key={textIdx}>{termIdx + 1}.{textIdx + 1} {text}</p>
                  ))
                }
              </div>
            ))
          }
        </section>
      </div>
    </MainLayout>
  )
}