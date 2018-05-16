import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Welcome to This Sample React App</h1>
        <Person name="Max"/>
        <Person name="Manu">
          My hobbies include coding to change the world!
        </Person>
        <Person name="Stephanie"/>
      </div>
    );
  }
}

export default App;
