import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './component/Home.js'
import UserProfile from './component/UserProfile.js'
import LogIn from './component/Login.js'
class App extends Component {
  state = {
    accountBalance: 485793.34,
    currentUser: {
      userName: 'Jim',
      memberSince: '08/23/99'
    }
  }
  pretendLogIn = (logInInfo) => {
    const newUser = {
      ...this.state.currentUser
    }
    newUser.userName = logInInfo.userName
    this.setState({currentUser: newUser})
  }
  render() {
    const HomeComponent = () => (< Home accountBalance = {
      this.state.accountBalance
    } />)
    const UserProfileComponent = () => (<UserProfile
      userName={this.state.currentUser.userName}
      memberSince={this.state.currentUser.memberSince}/>)
    const LogInComponent = () => (<LogIn
      user={this.state.currentUser}
      pretendLogIn={this.pretendLogIn}
      {...this.props}/>)
    return (
      <Router>
        <Switch>
          <Route exact path="/" render={HomeComponent}/>
          <Route exact path="/userProfile" render={UserProfileComponent}/>
          <Route exact path="/login" render={LogInComponent}/>
        </Switch>
      </Router>
    )
  }
}
export default App