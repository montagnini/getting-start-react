import React from 'react';
import PropTypes from 'prop-types';

import Person from './Person/Person.js';

const personList = props => props.personsList.map((person) => {
    return <Person
        onClick={() => props.onClick(person.id)}
        name={person.name}
        age={person.age}
        key={person.id}
        onChange={(event) => props.onChange(event, person.id)}
    />
});

/**
 * Define withe the type of the props received in this component.
 */
personList.propTypes = {
    personsList: PropTypes.array,
    onClick: PropTypes.func,
    onChange: PropTypes.func
};

//Using memo here to improve performance  to our application.
export default React.memo(personList, (prevProps, nextProps)=> {
    return prevProps.personsList === nextProps.personsList &&
    prevProps.isAuth === nextProps.isAuth;
});