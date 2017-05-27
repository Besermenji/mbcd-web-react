import React, { Component } from 'react';
import { Link } from 'react-router';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p><Link to="/login">Home</Link></p>

        <p><Link to="/contact">Contact</Link></p>

        <p><Link to="/notexist">Not Exist</Link></p>
        {this.props.children}
      </div>
    );
  }
}

export default App;
