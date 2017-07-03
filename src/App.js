import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      logs: [],
    };

    this.handleData = this.handleData.bind(this);
  }

  handleData(json) {
    const logs = [...this.state.logs, json.message];
    this.setState({ logs });
  }

  componentDidMount() {
    fetch('./data.json')
      .then(res => res.json())
      .then(this.handleData);
  }

  render() {
    return (
      <div className="App">
        Start {this.props.title}
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
