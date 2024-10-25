import React from 'react';
import './Country.css';

const Country = (props) => {
    console.log(props.country);
    const {name, population, region, flags} = props.country;
    const flagStyle = {
        height: '50px',
    };
    return (
        <div>
            <img style={flagStyle} src={flags.png} alt="" />
            <h4>This is {name.common}</h4>
            <p>Population: {population}</p>
            <p><small>Region: {region}</small></p>
        </div>
    );
};

export default Country;