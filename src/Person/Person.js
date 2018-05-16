import React from 'react';

const person = (props) => {
    return (
      <div>
        <p>Hi! My name is {props.name}</p>
        <p>{props.children}</p>
      </div>
    );
}

export default person;
