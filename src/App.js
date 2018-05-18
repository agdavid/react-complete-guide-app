import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: 1, name: 'Max' },
      { id: 2, name: 'Manu' },
      { id: 3, name: 'Stephanie' }
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
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({
      persons: persons
    });
  }

  nameChangeHandler = (event, personId) => {
    const personIndex = this.state.persons.findIndex( p => {
      return p.id === personId;
    });

    const person = {...this.state.persons[personIndex]}
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons
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
                    click={ () => this.deletePersonHandler(index) }
                    key={person.id}
                    changed={ (event) => this.nameChangeHandler(event, person.id)} />
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
