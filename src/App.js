import React, { Component } from 'react';
import logo from './logoTest.jpg';
import './App.css';
import FormTest from './FormTest.js';
import ReadSheetTest from './ReadSheetTest.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Welcome to Great Explorations!
          </p>
          <p>
            <ReadSheetTest />
          </p>
          <p>
            <FormTest />
          </p>
        </header>
      </div>
    );
  }
}

export default App;
