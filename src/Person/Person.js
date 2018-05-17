import React from 'react';

const person = (props) => {
    return (
      <div onClick={props.click}>
        <p>Hi! My name is {props.name}</p>
        <p>{props.children}</p>
        <input type="text" onChange={props.changed} value={props.name}/>
      </div>
    );
}

export default person;
