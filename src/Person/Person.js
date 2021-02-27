import React from 'react';
import styled from 'styled-components';
//import './Person.css';

const Person = (props) => {
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
    return (
         <StyledDiv>
             <p onClick={props.onClick}> I'm {props.name} and I'm {props.age} years old.</p>
             <p>{props.children}</p>
             <input type="text" onChange={props.onChange} value={props.name}></input>
         </StyledDiv>

    )
};

export default Person;