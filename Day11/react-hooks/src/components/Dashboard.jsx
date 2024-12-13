import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './dashboard.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Dashboard = ({ regDash }) => {
  const [weatherData, setWeatherData] = useState(null); // State to hold weather data
  const [loading, setLoading] = useState(false); // State to track loading status
  const [error, setError] = useState(null); // State to track errors
  const [city, setCity] = useState('London'); // Default city

  const fetchWeather = async () => {
    setLoading(true); // Set loading state to true before starting the fetch
    setError(null); // Reset error state before fetching
    
    try {
      // First, fetch WOEID for the city
      const woeidResponse = await fetch(`https://www.metaweather.com/api/location/search/?query=${city}`);
      if (!woeidResponse.ok) {
        throw new Error('Failed to fetch city data');
      }
      const woeidData = await woeidResponse.json();
      const woeid = woeidData[0]?.woeid; // Get the WOEID for the city

      if (!woeid) {
        throw new Error('City not found');
      }

      // Fetch weather data using the WOEID
      const weatherResponse = await fetch(`https://www.metaweather.com/api/location/${woeid}/`);
      if (!weatherResponse.ok) {
        throw new Error('Failed to fetch weather data');
      }
      const weatherData = await weatherResponse.json();
      setWeatherData(weatherData); // Set the fetched weather data to state
      setLoading(false); // Set loading state to false after fetching data
    } catch (err) {
      setError(err.message); // Set the error state if something goes wrong
      setLoading(false); // Set loading state to false even if there was an error
    }
  };

  return (
    <div className="dashboard-container">
      <div className="jumbotron" style={{ color: 'white', backgroundColor: 'darkkhaki' }}>
        <div className="header">
          <h1>User Dashboard</h1>
          <div className="logout-link">
            <Link to="/logout">Logout</Link>
          </div>
        </div>
        <div className="welcome-section">
          <h2>Welcome {regDash.name}</h2>
          <p>Your Login Email: {regDash.email}</p>
        </div>
      </div>

      <div className="weather-section">
        <p>Enter city and click the button to fetch weather:</p>
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city name"
          className="weather-input"
        />
        <button className="fetch-weather-button" onClick={fetchWeather}>
          Fetch Weather
        </button>

        {/* Loading Spinner */}
        {loading && <p>Loading weather data...</p>}

        {/* Display error if any */}
        {error && <p className="text-danger">{error}</p>}

        {/* Display weather data if available */}
        {weatherData && !loading && !error && (
          <div className="weather-info">
            <h3>{weatherData.title}</h3>
            <p>Weather: {weatherData.consolidated_weather[0].weather_state_name}</p>
            <p>Temperature: {weatherData.consolidated_weather[0].the_temp}°C</p>
            <p>Humidity: {weatherData.consolidated_weather[0].humidity}%</p>
            <p>Wind Speed: {weatherData.consolidated_weather[0].wind_speed} m/s</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
