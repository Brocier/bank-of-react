import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'

import Home from './component/Home.js'
import UserProfile from './component/UserProfile.js'
import LogIn from './component/Login.js'
import DebitsPage from './component/DebitsPage.js'
import CreditsPage from './component/CreditsPage.js'

import axios from 'axios'
class App extends Component {
  state = {
    accountBalance: 485793.34,
    currentUser: {
      userName: 'Jim',
      memberSince: '08/23/99'
    },
    debits: [],
    credits: []
  }

  getDebits = () => {
    axios
      .get('http://localhost:4000/debits')
      .then((response) => {
        const debits = response.data

        this.setState({debits})
      })
  }

  getCredits = () => {
    axios
      .get('http://localhost:4000/credits')
      .then((response) => {
        const credits = response.data

        this.setState({credits})
      })
  }

  calculateAccountBalance = () => {
    const totalCredits = this
      .state
      .credits
      .reduce((totalCredits, credit) => {
        return totalCredits + credit.amount
      }, 0)
    const totalDebits = this
      .state
      .debits
      .reduce((totalDebits, credit) => {
        return totalDebits + credit.amount
      }, 0)
    const precisionRound = (number, precision) => {
      const factor = Math.pow(10, precision);
      return Math.round(number * factor) / factor;
    }
    return precisionRound((totalCredits - totalDebits), 2)
  }

  addNewDebit = (newDebit) => {
    const debits = [...this.state.debits]
    debits.push(newDebit)
    this.setState({debits})
  }

  addNewCredit = (newCredit) => {
    const credits = [...this.state.credits]
    credits.push(newCredit)
    this.setState({credits})
  }

  pretendLogIn = (logInInfo) => {
    const newUser = {
      ...this.state.currentUser
    }
    newUser.userName = logInInfo.userName
    this.setState({currentUser: newUser})
  }

  componentWillMount() {
    this.getCredits()
    this.getDebits()
  }

  render() {
    const accountBalance = this.calculateAccountBalance()

    const HomeComponent = () => (<Home accountBalance={accountBalance} { ...this.props }/>)
    const UserProfileComponent = () => (<UserProfile
      userName={this.state.currentUser.userName}
      memberSince={this.state.currentUser.memberSince}
      {...this.props}/>)
    const LogInComponent = () => (<LogIn
      user={this.state.currentUser}
      pretendLogIn={this.pretendLogIn}
      {...this.props}/>)
    const DebitsPageComponent = () => (<DebitsPage
      debits={this.state.debits}
      addNewDebit={this.addNewDebit}
      accountBalance={accountBalance}
      {...this.props}/>)
    const CreditsPageComponent = () => (<CreditsPage
      credits={this.state.credits}
      addNewCredit={this.addNewCredit}
      accountBalance={accountBalance}
      {...this.props}/>)

    return (
      <Router>
        <div>
          <div>
            <div>
              <Link to="/">Home</Link>
            </div>
            <div>
              <Link to="/login">Log In</Link>
            </div>
          </div>
          <Switch>
            <Route exact path="/" render={HomeComponent}/>
            <Route exact path="/userProfile" render={UserProfileComponent}/>
            <Route exact path="/login" render={LogInComponent}/>
            <Route exact path="/debits" render={DebitsPageComponent}/>
            <Route exact path="/credits" render={CreditsPageComponent}/>
          </Switch>
        </div>
      </Router>
    )
  }
}
export default App