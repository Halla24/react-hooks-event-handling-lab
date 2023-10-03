// components/EyesOnMe.js
import React, { Component } from 'react';

class EyesOnMe extends Component {
  // Event handlers for focus and blur events
  handleFocus = () => {
    console.log('Good!');
  }

  handleBlur = () => {
    console.log('Hey! Eyes on me!');
  }

  render() {
    return (
      <button onFocus={this.handleFocus} onBlur={this.handleBlur}>
        Eyes on me
      </button>
    );
  }
}

export default EyesOnMe;

