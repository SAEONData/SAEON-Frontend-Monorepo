import React, { Component } from 'react';
import logo from '../logo.svg';

import DemoComp from '@examples/demo-comp';

class Home extends Component {
  render() {
    return (
      <>
        <img src={logo} className="App-logo" alt="logo" />

        <p>
          Welcome to React. Happy hacking...
        </p>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <br />

        <div onClick={() => { window.location.hash = "demo" }}>
          <DemoComp />
        </div>
      </>
    );
  }
}

export default Home;
