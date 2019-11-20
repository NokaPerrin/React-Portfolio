import React, { Component } from 'react';
import {
  BrowserRouter as Router, Route
} from "react-router-dom";
import './App.css';
import Navbar from './Navbar';
import Home from './Navbar/Home/Index';
import Projects from './Navbar/Projects/index';
import About from './Navbar/About/index';
import Contact from './Navbar/Contact/Index';


class App extends Component {
  render() {
    return (
      <Router>
        <div id="App">
          <Navbar />

          <Route exact path="/" component={Home} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
        </div>
      </Router>


    )
  }
}

export default App;
