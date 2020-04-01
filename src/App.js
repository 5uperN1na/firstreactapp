import React, { Component } from 'react';
import face from './face.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={face} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to <i>MY</i> React HELL!</h1>
        </header>
        <p className="App-intro">
          To get started, please do not rely on anything from me as I do not know--I repeat--I have NO idea what I am doing.
        </p>
        <p>
         <b>This is my offical first, React app. :)</b>
        </p>
      </div>
    );
  }
}

export default App;