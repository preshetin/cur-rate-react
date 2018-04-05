import React, { Component } from 'react';
import logo from './logo.svg';
import CurrencyConverterItem from './CurrencyConverterItem';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Crypto Currency Rates</h1>
        </header>
        <CurrencyConverterItem from="BTC" to="USD" />
        <CurrencyConverterItem from="USD" to="BTC" />
      </div>
    );
  }
}

export default App;
