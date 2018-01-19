import React from 'react'

const Debit = (props) => {
  return (
    <div>
      <hr/>
      <h4>
        Description: {props.description}
      </h4>
      <p>
        Amount: {props.amount}
      </p>
      <p>
        Date: {props.date}
      </p>
    </div>
  )
}

export default Debit