import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [message, setMessage] = useState('Loading...');
  const apiBase = process.env.REACT_APP_API_URL;
  
  useEffect(() => {
    fetch(`${apiBase}/api/hello`)
      .then(res => res.json())
      .then(data => setMessage(data.message))
      .catch(err => {
        console.error('Failed to fetch:', err);
        setMessage('Failed to connect to backend.');
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Frontend</h1>
        <p>{message}</p>
      </header>
    </div>
  );
}

export default App;
