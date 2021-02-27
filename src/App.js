import React, { useState } from 'react';
import styled from 'styled-components';
import './App.css';
import Person from './Person/Person.js';

//Create a styled button component.
const StyledButton = styled.button`
  background-color: ${props => props.alt ? 'red' : 'green'};
  color: white;
  font: inherit;
  border: 1px solid black;
  padding: 8px;
  cursor: pointer;

  &:hover{
    background-color: ${props => props.alt ? 'salmon' : 'lightgreen'};
    color: black;
}`;

const App = props => {
  //
  const [state, setState] = useState({
    persons: [
      { id: 1, name: "Wellington", age: 27 },
      { id: 2, name: "Nayla", age: 33 }
    ],
    showPersons: true
  });

  const onChangeHandler = (event, id) => {
    const personIndex = state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...state.persons];
    persons[personIndex] = person;
    setState({
      ...state,
      persons: persons
    });
  }

  const togglePersonHandler = () => {
    const doesShow = state.showPersons;
    setState({
      ...state,
      showPersons: !doesShow
    })
  }

  const deletePersonHandler = (personId) => {
    const personIndex = state.persons.findIndex(p => {
      return p.id === personId;
    });
    //Create a new array with the content of the original array.
    const personsArray = [...state.persons]
    //Remove the index of the array.
    personsArray.splice(personIndex, 1);
    //Define and update the component.
    setState({
      ...state,
      persons: personsArray
    });
  }

  let persons = null;

  if (state.showPersons) {
    persons = (<div>
      {state.persons.map((person) => {
        return <Person
          onClick={() => deletePersonHandler(person.id)}
          name={person.name}
          age={person.age}
          key={person.id}
          onChange={(event) => onChangeHandler(event, person.id)}
        />
      })}
    </div>);

  }

  const classes = [];

  if (state.persons.length < 2) {
    classes.push('red');
  }
  if (state.persons.length == 1) {
    classes.push('bold');
  }

  return (
    <div className="App">
      <h1>Hi, hello.</h1>
      <p className={classes.join(' ')}>It is really working!!!</p>
      <StyledButton
        alt={state.showPersons}
        onClick={togglePersonHandler} >Toggle Persons
      </StyledButton>
      {persons}
    </div>
  );
}

export default App;
