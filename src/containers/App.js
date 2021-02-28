import React, { useState } from 'react';

import './App.css';
import PersonsList from '../components/PersonsList/PersonsList.js';
import Cockpit from '../components/Cockpit/Cockpit';


const app = props => {
  //
  const [state, setState] = useState({
    persons: [
      { id: 1, name: "Wellington", age: 27 },
      { id: 2, name: "Nayla", age: 33 }
    ],
    showPersons: false,
    showCockpit: true
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
    setState((prevState, props) => {
      return {
        ...prevState,
        persons: persons
      };
    });
  }

  const togglePersonHandler = () => {
    const doesShow = state.showPersons;
    setState((prevState, props) => {
      return {
        ...prevState,
        showPersons: !doesShow
      };
    });
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
    setState((prevState, props) => {
      return {
        ...prevState,
        persons: personsArray
      };
    });
  }

  let persons = null;

  if (state.showPersons) {
    persons = <PersonsList
      personsList={state.persons}
      onChange={onChangeHandler}
      onClick={deletePersonHandler}>
    </PersonsList>;
  }


  return (
    <div className="App">
      <button onClick={() => setState({ ...state, showCockpit: !state.showCockpit })}> Show cockpit</button>
      {state.showCockpit ? (

        <Cockpit
          title={props.appTitle}
          showPersons={state.showPersons}
          personsLength={state.persons.length}
          onClick={togglePersonHandler}>
        </Cockpit>) : null
      }
      {persons}
    </div>
  );
}

export default app;
