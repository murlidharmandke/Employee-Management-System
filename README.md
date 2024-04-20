import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [panchangData, setPanchangData] = useState(null);

  useEffect(() => {
    fetchPanchangData();
  }, []);

  const fetchPanchangData = async () => {
    try {
      // Mock API endpoint for demonstration purposes
      const response = await fetch('https://api.example.com/panchang');
      const data = await response.json();
      setPanchangData(data);
    } catch (error) {
      console.error('Error fetching panchang data:', error);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Bhartiya Panchang</h1>
      </header>
      <div className="Panchang-container">
        {panchangData ? (
          <>
            <div className="Panchang-section">
              <h2>Date:</h2>
              <p>{panchangData.date}</p>
            </div>
            <div className="Panchang-section">
              <h2>Festivals:</h2>
              <ul>
                {panchangData.festivals.map((festival, index) => (
                  <li key={index}>{festival}</li>
                ))}
              </ul>
            </div>
            <div className="Panchang-section">
              <h2>Auspicious Timings:</h2>
              <ul>
                {panchangData.auspiciousTimings.map((timing, index) => (
                  <li key={index}>{timing}</li>
                ))}
              </ul>
            </div>
            <div className="Panchang-section">
              <h2>Planetary Positions:</h2>
              <p>{panchangData.planetaryPositions}</p>
            </div>
          </>
        ) : (
          <p>Loading panchang data...</p>
        )}
      </div>
      <footer className="App-footer">
        <div className="User-input">
          {/* Add user input fields for selecting dates or locations */}
          <label htmlFor="date-input">Select Date:</label>
          <input type="date" id="date-input" />
          {/* Add more input fields for location selection if needed */}
        </div>
      </footer>
    </div>
  );
}

export default App;
