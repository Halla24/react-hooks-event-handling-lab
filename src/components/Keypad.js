// components/Keypad.js
import React, { Component } from 'react';

class Keypad extends Component {
  // Event handler for the change event
  handleChange = () => {
    console.log('Entering password...');
  }

  render() {
    return (
      <input type="password" onChange={this.handleChange} />
    );
  }
}

export default Keypad;


