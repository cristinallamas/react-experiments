import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BandsList from './components/BandsList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React, fear not.</h2>
        </div>
        <p className="App-intro">
        <BandsList list={this.props}/>
        </p>
      </div>
    );
  }
}

export default App;
