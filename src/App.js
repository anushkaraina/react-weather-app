import React, { useState } from 'react';
import './App.css';

const API_KEY = 'YOUR_API_KEY_HERE';

function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);

  const fetchWeather = async () => {
    if (!city) return;
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );
    const data = await response.json();
    setWeather(data);
  };

  return (
    <div className="app">
      <h2>React Weather App 🌦️</h2>
      <input
        type="text"
        placeholder="Enter city name..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={fetchWeather}>Get Weather</button>
      {weather && weather.main && (
        <div className="weather-card">
          <h3>{weather.name}</h3>
          <p>🌡 Temp: {weather.main.temp} °C</p>
          <p>💧 Humidity: {weather.main.humidity}%</p>
          <p>🌥 Condition: {weather.weather[0].description}</p>
        </div>
      )}
    </div>
  );
}

export default App;
