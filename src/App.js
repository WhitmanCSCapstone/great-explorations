import React, { Component } from 'react';
import logo from './logoTest.jpg';
import './App.css';
import EmbedForm from './EmbedForm.js';
import WorkshopGrid from './Grid.js';

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
            <WorkshopGrid />
          </p>
          <p>
            <EmbedForm />
          </p>
        </header>
      </div>
    );
  }
}

export default App;
