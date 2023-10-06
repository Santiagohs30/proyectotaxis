import React, { useState } from 'react'; // Importa React y el hook useState desde React

import './App.css'; // Importa estilos desde el archivo App.css

const TAXI_RATE_PER_KM = 1.5; // Tarifa por kilómetro en dólares

const App = () => { // Declara un componente funcional llamado App
  const [distance, setDistance] = useState(''); // Estado para la distancia ingresada
  const [estimatedFare, setEstimatedFare] = useState(0); // Estado para la tarifa estimada

  const handleDistanceChange = (e) => { 
    setDistance(e.target.value); // Actualiza el estado distance cuando el campo de entrada cambia
  };

  const calculateFare = () => { 
    if (!isNaN(distance)) { // Verifica si la distancia ingresada es un número válido
      const fare = parseFloat(distance) * TAXI_RATE_PER_KM; // Calcula la tarifa multiplicando la distancia por la tarifa por kilómetro
      setEstimatedFare(fare.toFixed(2)); // Actualiza el estado estimatedFare con el resultado redondeado a 2 decimales
    } else {
      setEstimatedFare(0); // Si la entrada no es válida, establece la tarifa en 0
    }
  };

  return ( 
    <div className="App"> {/* Contenedor principal con la clase CSS App */}
      <h1>Taxi Fare Estimator</h1> {/* Encabezado */}
      <label>
        Distance (in kilometers):
        <input type="text" value={distance} onChange={handleDistanceChange} /> {/* Campo de entrada controlado por el estado distance */}
      </label>
      <button onClick={calculateFare}>Calculate Fare</button> {/* Botón para calcular la tarifa */}
      <h2>Estimated Fare: ${estimatedFare}</h2> {/* Muestra la tarifa estimada */}
    </div>
  );
};

export default App; // Exporta el componente App para su uso en otros archivos
