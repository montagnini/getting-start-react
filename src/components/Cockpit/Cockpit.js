import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import PropsTypes from 'prop-types';

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

const cockpit = props => {
  const buttonRef = useRef(null);

/**
 useEffect(() => {
   //buttonRef.current.onClick();
   return () => {
   };
 }, []);
 */

  const classes = [];
  if (props.personsLength < 2) {
    classes.push('red');
  }
  if (props.personsLength === 1) {
    classes.push('bold');
  }
  return (
    <div>
      <h1>{props.title}</h1>
      <p className={classes.join(' ')}>It is really working!!!</p>
      <StyledButton
        ref={buttonRef}
        alt={props.showPersons ? 1 : 0}
        onClick={props.onClick} >
        Toggle Persons
    </StyledButton>
    </div>
  );
}

cockpit.propsTypes = {
  title: PropsTypes.string,
  personsLength: PropsTypes.number,
  showPersons: PropsTypes.bool,
  onClick: PropsTypes.func
}

//Using react memo here to improve our app performance.
export default React.memo(cockpit);