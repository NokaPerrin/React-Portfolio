import React, { Component } from 'react';
import './App.css';
import Navbar from './Navbar';
import Slider from './Components/Slider';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Slider />
      </div>
    )
  }
}

export default App;
