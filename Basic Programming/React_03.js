// Analyze the below code and advise what is wrong with using setState() inside the render() method:


import React, { Component } from "react";

class App extends Component {
  state = {
    counter: 0,
  };

  incrementCounter = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  render() {
    return (
      <div>
        Counter: {this.state.counter}
        <button onClick={this.incrementCounter}>Increment</button>
      </div>
    );
  }
}

export default App;

// The issue with the code is that you're calling this.setState inside the render() method. This will cause an infinite loop because every time the component re-renders, it will trigger another setState call, leading to continuous re-rendering until the browser crashes
