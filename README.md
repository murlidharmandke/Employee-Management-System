# Employee-Management-System
Basic EMP System 
import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [panchangData, setPanchangData] = useState(null);

  useEffect(() => {
    fetchPanchangData();
  }, []);

  const fetchPanchangData = async () => {
    try {
      const response = await fetch('https://api.example.com/panchang');
      const data = await response.json();
      setPanchangData(data);
    } catch (error) {
      console.error('Error fetching panchang data:', error);
    }
  };

  return (
    <div className="App">
      <h1>Bhartiya Panchang</h1>
      {panchangData ? (
        <>
          <h2>Date: {panchangData.date}</h2>
          <h3>Festivals:</h3>
          <ul>
            {panchangData.festivals.map((festival, index) => (
              <li key={index}>{festival}</li>
            ))}
          </ul>
          <h3>Auspicious Timings:</h3>
          <ul>
            {panchangData.auspiciousTimings.map((timing, index) => (
              <li key={index}>{timing}</li>
            ))}
          </ul>
          <h3>Planetary Positions:</h3>
          <p>{panchangData.planetaryPositions}</p>
        </>
      ) : (
        <p>Loading panchang data...</p>
      )}
    </div>
  );
}

export default App;
