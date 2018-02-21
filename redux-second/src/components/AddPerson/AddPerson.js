import React from 'react';

import './AddPerson.css';

const addPerson = (props) => (
    <div className="AddPerson">
        <button onClick={props.addPrsn}>Add Person</button>
    </div>
);

export default addPerson;