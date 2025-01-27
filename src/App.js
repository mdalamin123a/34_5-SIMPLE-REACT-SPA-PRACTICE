import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(()=>{
    fetch("https://api.countrylayer.com/v2/all?access_key=b39e2fdecb06fad84fbcd49ae78751e6")
    .then(response => response.json())
    .then(data => setCountries(data));
  }, []);
  
  return (
    <div className="App">
      <h1>Country Loaded: {countries.length}</h1>
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
