import React, { useState } from 'react';
import './App.css';

const TAXI_RATE_PER_KM = 1.5; // Tarifa por kilómetro en dólares

const App = () => {
  const [distance, setDistance] = useState('');
  const [estimatedFare, setEstimatedFare] = useState(0);

  const handleDistanceChange = (e) => {
    setDistance(e.target.vagitlue);
  };

  const calculateFare = () => {
    if (!isNaN(distance)) {
      const fare = parseFloat(distance) * TAXI_RATE_PER_KM;
      setEstimatedFare(fare.toFixed(2));
    } else {
      // Si la entrada no es un número válido, puedes mostrar un mensaje de error
      // o simplemente establecer la tarifa en 0
      setEstimatedFare(0);
    }
  };

  return (
    <div className="App">
      <h1>Taxi Fare Estimator</h1>
      <label>
        Distance (in kilometers):
        <input type="text" value={distance} onChange={handleDistanceChange} />
      </label>
      <button onClick={calculateFare}>Calculate Fare</button>
      <h2>Estimated Fare: ${estimatedFare}</h2>
    </div>
  );
};

export default App;
