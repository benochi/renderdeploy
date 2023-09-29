import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [animals, setAnimals] = useState([]);
  console.log(import.meta.env.VITE_REACT_APP_BASE_URL);

  useEffect(() => {
    // Fetch the animals from the backend
    axios.get(`${import.meta.env.VITE_REACT_APP_BASE_URL}/api/animals`).then(response => {
        setAnimals(response.data);
    });
}, []);



  return (
    <div className="App">
      <div className="content-container">
        <h1>Animals</h1>
        <ul>
          {animals.map(animal => (
            <li key={animal.id}>{animal.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
