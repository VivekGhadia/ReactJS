import React, { Component } from 'react';
import './homepage.css'
import profile from "../public/profile.jpeg"

class homepage extends Component {
  render() {
    return (
      <div className="homeMainDiv">
        <img src={profile}/>
      </div>
    );
  }
}

export default homepage;
