import React from 'react';
import './Country.css';

const Country = (props) => {
    const {name, population, region, flags} = props.country;
    const flagStyle = {
        height: '50px',
    };
    const countryStyle = {
        border: '2px solid red',
        margin: '10px',
        padding: '10px',
    };
    return (
        <div style={countryStyle}>
            <img style={flagStyle} src={flags.png} alt="" />
            <h4>This is {name.common}</h4>
            <p>Population: {population}</p>
            <p><small>Region: {region}</small></p>
            <button onClick={() => props.handleAddCountry(props.country)}>Add Country</button>
        </div>
    );
};

export default Country;