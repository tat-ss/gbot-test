import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      logs: [],
    };

    this.handleTimer = this.handleTimer.bind(this);
  }

  handleTimer() {
    const logs = [...this.state.logs, `Count ${this.state.logs.length + 1}`];
    this.setState({ logs });
  }

  componentDidMount() {
    window.setInterval(this.handleTimer, 1000);
  }

  render() {
    return (
      <div className="App">
        Start
        {
          this.state.logs.map(log => (
            <div>{log}</div>
          ))
        }
      </div>
    );
  }
}

export default App;
