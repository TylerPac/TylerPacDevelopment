import React, { useEffect, useState } from 'react';

function Home() {
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
  }, [apiBase]);

  return (
    <div className="home">
      <header className="App-header">
        <h1>Welcome to TylerPac Development</h1>
        <p>{message}</p>
        <div className="home-content">
          <h2>Full Stack Developer</h2>
          <p>Building modern web applications with React, Spring Boot, and more.</p>
        </div>
      </header>
    </div>
  );
}

export default Home;
