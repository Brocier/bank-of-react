// src/components/Home.js

import React, {Component} from 'react';
import AccountBalance from './AccountBalance.js'
import {Link} from 'react-router-dom'

class Home extends Component {
  render() {
    return (
      <div>
        <img
          width="200px"
          src="https://letstalkpayments.com/wp-content/uploads/2016/04/Bank.png"
          alt="bank"/>
        <h1>Bank of React</h1>
        <div>
          <Link to="/userProfile">User Profile</Link>
        </div>
        <div>
          <Link to="/login">Log In</Link>
        </div>
        <AccountBalance accountBalance={this.props.accountBalance}/>
      </div>
    );
  }
}

export default Home;