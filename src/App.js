import React from 'react';
import logo from './logo.svg';
import './App.css';
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          Welcome to my React test site!
        </h1>
        <h2><Weather /></h2>
        <a
          className="App-link"
          href="https://github.com/abigpige0n/weather-app-react"
          target="_blank"
          rel="noopener noreferrer"
        >
          Check out the Github here!
        </a>
      </header>
    </div>
  );
}

export default App;
