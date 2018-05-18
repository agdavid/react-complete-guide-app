import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Max' },
      { name: 'Manu' },
      { name: 'Stephanie' }
    ],
    showPeople: false
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName },
        { name: 'Manute' },
        { name: 'Steffi' }
      ]
    });
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPeople;
    this.setState({
      showPeople: !doesShow
    })
  }

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Max' },
        { name: event.target.value },
        { name: 'Stephanie' }
      ]
    });
  }

  render() {

    const style = {
        backgroundColor: 'white',
        font: 'inherit',
        border: '1px solid blue',
        padding: '8px',
        cursor: 'pointer'
    }

    return (
      <div className="App">
        <h1>Welcome to This Sample React App</h1>
        <button
          onClick={this.togglePersonsHandler}
          style={style}
        >Toggle People</button>
        { this.state.showPeople ?
          <div>
            <Person name={this.state.persons[0].name}/>
            <Person
              name={this.state.persons[1].name}
              click={this.switchNameHandler.bind(this, 'Maxxy!')}
              changed={this.nameChangeHandler}
            >
              My hobbies include coding to change the world!
            </Person>
            <Person name={this.state.persons[2].name}/>
          </div> : null 
        }
      </div>
    );
  }
}

export default App;
