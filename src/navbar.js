import React, { Component } from 'react';
import { Link } from 'react-router';
import logo from "../public/logo.png";


class navbar extends Component {
  render() {
    return (
      <nav className="nav">
        <ul>
          <li>
            <img id="image" src={logo} alt="Logo"  />
          </li>
        </ul>
        <ul>
          <li><Link to="/login">Login</Link></li>
          <li><a href="/register">Register</a></li>
        </ul>
        <div className="clear"></div>
      </nav>
    );
  }
}

export default navbar;
