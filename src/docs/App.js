import React from 'react';

import Components, { Button, Typography } from '../components';
import logo from './assets/logo.svg';
import './App.css';

function App() {
  const { Title, Text } = Typography;
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
        <Title level={3} type="danger">سلام</Title>
        <Text>تکست ساده</Text>
      </header>
    </div>
  );
}

export default App;
