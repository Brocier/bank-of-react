import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './component/Home.js'

class App extends Component {
  constructor() {
    super()
    this.state = {
      accountBalance: 12312312.34
    }
  }

  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Home}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
