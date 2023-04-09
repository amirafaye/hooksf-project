import React from "react";

class State extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      errorMessage: "",
      timer: null,
      timerValue: 0,
    };
  }
  increment = () => {
    this.setState({
      count: this.state.count + 1,
      errorMessage: "",
    });
  };
  decrement = () => {
    if (this.state.count === 0) {
      this.setState({
        errorMessage: "Cannot decrement below 0",
      });
    } else {
      this.setState({
        count: this.state.count - 1,
        errorMessage: "",
      });
    }
  };
  // when component is mounted to the DOM timer increments every second
  componentDidMount() {
    this.setState({
      timer: setInterval(() => {
        this.setState({
          count: this.state.count + 1,
        });
      }, 1000),
    });
  }
  // when component is removed from the DOM timer is cleared
  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  render() {
    return (
      <div>
        <h1>State</h1>
        <button onClick={this.increment}>Increment</button>
        <h2>{this.state.count}</h2>
        <button onClick={this.decrement}>Decrement</button>
        <h2>{this.state.errorMessage}</h2>
        <h2>Timer : {this.state.timerValue}</h2>
      </div>
    );
  }
}

export default State;
