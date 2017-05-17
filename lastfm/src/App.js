import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BandsList from './components/BandsList'
import Favorites from './components/Favorites'


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React, fear not.</h2>
        </div>
        <div className="App-intro">
        <Favorites />
        <BandsList list={this.props}/>
        </div>
      </div>
    );
  }
}

export default App;
