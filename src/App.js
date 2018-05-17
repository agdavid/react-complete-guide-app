import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Max' },
      { name: 'Manu' },
      { name: 'Stephanie' }
    ]
  }

  switchNameHandler = () => {
    this.setState({
      persons: [
        { name: 'Maximilian' },
        { name: 'Manute' },
        { name: 'Steffi' }
      ]
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Welcome to This Sample React App</h1>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name}/>
        <Person name={this.state.persons[1].name}>
          My hobbies include coding to change the world!
        </Person>
        <Person name={this.state.persons[2].name}/>
      </div>
    );
  }
}

export default App;
