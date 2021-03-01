import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import AuthContext from '../../../context/auth-context.js';

const StyledDiv = styled.div`
width: 60%;
margin: 16px auto;
border: 1px solid black;
box-shadow: 0 2px 3px black;
padding: 16px;
text-align:center;

:hover{
background-color: aqua;
}

@media (min-width: 500px){
width: 450px;
}`
const person = (props) => {
    return (
        < StyledDiv >
            <AuthContext.Consumer>
                {(context) => context.authenticated ? <p> Authenticated!!!</p> : <p> Please log in!!! </p>}
            </AuthContext.Consumer>
            < p onClick={props.onClick} > I'm {props.name} and I'm {props.age} years old.</p >
            <p>{props.children}</p>
            <input type="text" onChange={props.onChange} value={props.name}></input>
        </StyledDiv >
    )
};

/**
 * Define withe the type of the props received in this component.
 */
person.propTypes = {
    onClick: PropTypes.func,
    onChange: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number
};

export default person;