import React from 'react'
import DebitsList from './DebitsList'
import NewDebitForm from './NewDebitForm'
import AccountBalance from './AccountBalance'

// import {Link} from 'react-router-dom'

const DebitsPage = (props) => {
  return (
    <div>
      <h1>Debits</h1>
      <AccountBalance accountBalance={props.accountBalance}/>

      <NewDebitForm addNewDebit={props.addNewDebit}/>

      <DebitsList debits={props.debits}/>
    </div>
  )
}
export default DebitsPage