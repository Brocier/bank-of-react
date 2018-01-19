import React from 'react'
import CreditsList from './CreditsList'
// import NewCreditForm from './NewCreditForm'
import AccountBalance from './AccountBalance'

// import {Link} from 'react-router-dom'

const CreditsPage = (props) => {
  return (
    <div>
      <h1>Credits</h1>
      <AccountBalance accountBalance={props.accountBalance}/> {/* <NewCreditForm addNewCredit={props.addNewCredit}/> */}

      <CreditsList credits={props.credits}/>
    </div>
  )
}
export default CreditsPage