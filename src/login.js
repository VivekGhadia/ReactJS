import React, { Component } from 'react';
import googlelogo from "../public/googlelogo.png"

class login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password:''
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState( {
      [event.target.name]: event.target.value
    });
  }

  render() {
    console.log(this.state);
    return (
      <div className="loginFormDiv">
        <link href="https://fonts.googleapis.com/css?family=Titillium+Web" rel="stylesheet" />
        <form className="loginForm" method="post">
          <label className="labelLetsStart">Let's Start!</label>
          <div className="loginDiv">
            <input type="email"
              name="email"
              placeholder="Email-Id"
              value={this.state.email}
              onChange={this.handleChange}
              required/><br />
            <input type="password"
              name="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.handleChange}
              required/><br />
            <input type="submit" value="Sign In"/>
            <label className="labelForgotPass">Forgot Password? </label><a href="#" target="_blank">Click Here</a>
          </div>
        </form>
      </div>
    );
  }
}

export default login;

