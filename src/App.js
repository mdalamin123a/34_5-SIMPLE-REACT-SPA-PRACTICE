import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import Country from './components/Country/Country';
import './App.css';

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(()=>{
    fetch("https://restcountries.com/v3.1/all")
    .then(response => response.json())
    .then(data => setCountries(data))
    .catch(error => console.log(error));
  }, []);

  const handleAddCountry = (country) => {
    console.log(country);
  } 

  return (
    <div className="App">
      <h1>Country Loaded: {countries.length}</h1>
      <h4>Country Added: </h4>
        {
          countries.map(country => <Country key={country.cca3} handleAddCountry={handleAddCountry} country={country}></Country>)
        }
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
