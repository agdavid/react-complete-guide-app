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
    showPersons: false
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    })
  }

  deletePersonHandler(personIndex) {
    const persons = this.state.persons;
    persons.splice(personIndex, 1);
    this.setState({
      persons: persons
    });
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

    let persons = null;

    if ( this.state.showPersons ) {
      persons = (
        <div>
          { this.state.persons.map((person, index) => {
            return <Person
                    name={person.name}
                    click={ () => this.deletePersonHandler(index) }/>
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Welcome to This Sample React App</h1>
        <button onClick={this.togglePersonsHandler} style={style}>Toggle People</button>
        {persons}
      </div>
    );
  }
}

export default App;
