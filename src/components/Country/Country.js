import React from 'react';
import './Country.css';

const Country = (props) => {
    return (
        <div>
            <h4>This is {props.name}</h4>
        </div>
    );
};

export default Country;