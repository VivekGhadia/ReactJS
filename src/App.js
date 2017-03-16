import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Navbar from './navbar.js'
import cover from "../public/cover.png"

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        {this.props.children}
      </div>
    );
  }
}

export default App;
