import React, { Component } from 'react';
import Header from './Header';
import FilterControls from './FilterControls';
import Map from './Map';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div id="content">
          <FilterControls />
          <Map />
        </div>
      </div>
    );
  }
}

export default App;
