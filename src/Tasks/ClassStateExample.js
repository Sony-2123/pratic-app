

// src/Task1_ReactState/ClassStateExample.js

import React, { Component } from 'react';

class ClassStateExample extends Component {
  constructor() {
    super();
    this.state = {
      message: 'Hello from Class Component!',
    };
  }

  changeMessage = () => {
    this.setState({ message: 'You clicked the button!' });
  };

  render() {
    return (
      <div>
        <h2>Class Component State Example</h2>
        <p>{this.state.message}</p>
        <button onClick={this.changeMessage}>Change Message</button>
      </div>
    );
  }
}

export default ClassStateExample;
