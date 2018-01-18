import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './component/Home.js'

class App extends Component {
  state = {
    accountBalance: 485793.34
  }

  render() {

    const HomeComponent = () => (< Home accountBalance = {
      this.state.accountBalance
    } />)

    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" render={HomeComponent}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
