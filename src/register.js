import React, { Component } from 'react';
import googlelogo from "../public/googlelogo.png"


class register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      mobilenumber: '',
      date: '',
      gender:'',
      password: ''
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
      <div>
        <div className="registerFormDiv">
          <link href="https://fonts.googleapis.com/css?family=Titillium+Web" rel="stylesheet" />
          <form className="registerForm">
            <label className="labelRegisterHere">Register Here!</label>
            <div className="registerDiv">
              <input type="text"
                placeholder="Enter Name"
                name="name"
                value={this.state.name}
                onChange={this.handleChange}
                required /><br />
              <input type="email"
                name="email"
                placeholder="Email-Id"
                value={this.state.email}
                onChange={this.handleChange}
                required/><br />
              <input type="text"
                name="mobilenumber"
                placeholder="Mobile Number"
                minLength="10"
                maxLength="10"
                pattern="\d{10}"
                value={this.state.mobilenumber}
                onChange={this.handleChange}
                required/><br />
              <input type="date"
                name="date"
                value={this.state.date}
                onChange={this.handleChange}
                required/>
              <select className="select" name="gender"
                value={this.state.gender}
                onChange={this.handleChange}>
                <option value="gender">Gender:</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
              <input type="password"
                name="password"
                placeholder="Password"
                value={this.state.password}
                onChange={this.handleChange}
                required/><br />
              <input type="submit" value="Sign Up"/>
            </div>
          </form>
        </div>
      </div>
    );
  }
};

export default register;
