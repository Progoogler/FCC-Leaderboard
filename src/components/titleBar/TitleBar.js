import React, { Component } from 'react';
import './TitleBar.css';

class TitleBar extends Component {

  render() {
    return (
      <div className="Title-container">
        <img className="Title-icon" src="../images/fcc-icon.png"/>
        <h2 className="Title"><a className="Title-Link" href="https://freecodecamp.com">freeCodeCamp</a></h2>
      </div>
    );
  }
}

export default TitleBar;
