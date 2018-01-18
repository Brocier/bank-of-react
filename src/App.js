import React, {Component} from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import Home from './component/Home.js'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          Hello World!
          <Home/>
        </div>
      </Router>
    );
  }
}

export default App;
