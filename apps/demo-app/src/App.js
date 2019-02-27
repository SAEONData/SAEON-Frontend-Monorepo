import React, { Component } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom'
import './App.css';

import Home from './components/home';
import Demo from './components/demo';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">

          <HashRouter>
            <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/demo" component={Demo} exact />
            </Switch>
          </HashRouter>

        </header>
      </div>
    );
  }
}

export default App;
