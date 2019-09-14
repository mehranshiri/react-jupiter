import React from 'react';

import Components, { Button } from '../components';
import logo from './assets/logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit
          <code>src/App.js</code>
          and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Components.Button1 displayText="پرداخت" />
        <Button props="props value" borderRadius={3} rounded />
      </header>
    </div>
  );
}

export default App;
