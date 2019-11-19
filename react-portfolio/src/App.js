import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Navbar from './Navbar';
import Projects from './Navbar/Projects/index';
import Home from './Navbar/Home/Index';


class App extends Component {
  render() {
    return (
      <Router>
        <div id="App">
        <Navbar />

        <Route exact path="/" component={Home} />
        <Route exact path="/projects" component={Projects} />
        </div>
      </Router>


    )
  }
}

export default App;
