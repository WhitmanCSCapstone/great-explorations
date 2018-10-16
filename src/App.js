import React, { Component } from 'react';
import './App.css';
import logo from './logoTest.jpg'
import EmbedForm from './EmbedForm.js';
import WorkshopGrid from './Grid.js';
import ImageScroll from './ImageScroll.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
            <ImageScroll />
        </div>
        <header className="App-header">
          <p className="App-header-text">
            Welcome to Great Explorations!
          </p>
          <p className="App-text">
            Below you will find all of the 2019 workshops.
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
