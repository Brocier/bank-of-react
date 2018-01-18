import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './component/Home.js'
import UserProfile from './component/UserProfile.js'

class App extends Component {
  state = {
    accountBalance: 485793.34,
    currentUser: {
      userName: 'Jim',
      memberSince: '08/23/99'
    }
  }

  render() {

    const HomeComponent = () => (< Home accountBalance = {
      this.state.accountBalance
    } />)
    const UserProfileComponent = () => (<UserProfile
      userName={this.state.currentUser.userName}
      memberSince={this.state.currentUser.memberSince}/>)

    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" render={HomeComponent}/>
            <Route exact path="/userProfile" render={UserProfileComponent}/>
          </Switch>
        </div>
      </Router>
    )
  }
}
export default App