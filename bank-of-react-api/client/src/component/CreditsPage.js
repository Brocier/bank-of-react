import React from 'react'
import CreditsList from './CreditsList'
import NewDebitForm from './NewDebitForm'
import AccountBalance from './AccountBalance'

// import {Link} from 'react-router-dom'

const CreditsPage = (props) => {
  return (
    <div>
      <h1>Credits</h1>
      <AccountBalance accountBalance={props.accountBalance}/>

      <NewDebitForm addNewDebit={props.addNewDebit}/>

      <CreditsList credits={props.credits}/>
    </div>
  )
}
export default CreditsPage