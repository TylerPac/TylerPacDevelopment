import React, { useEffect, useState } from 'react';
import './Home.css'; // Optional: for clean styling

function Home() {
  const [message, setMessage] = useState('Loading...');
  const apiBase = process.env.REACT_APP_API_URL;

  useEffect(() => {
    fetch(`${apiBase}/api/hello`)
      .then(res => res.json())
      .then(data => setMessage(data.message))
      .catch(err => {
        console.error('Failed to fetch:', err);
        setMessage('🚧 Backend currently unavailable. Check back soon!');
      });
  }, [apiBase]);

  return (
    <div className="home">
      <header className="App-header">
        <h1>Tyler Pac</h1>
        <p className="tagline">DevOps Software Engineer | Full-Stack Developer | CI/CD & Infrastructure Specialist</p>

        
        <div className="home-content">
          <p>
            I’m a <strong>DevOps Software Engineer</strong> with a comprehensive background in full-stack development, systems architecture, and deployment automation. I recently completed a <strong>Bachelor of Applied Science in Computing Technology and Software Development</strong>, equipping me with both theoretical knowledge and practical experience across modern software ecosystems.
          </p>
          <p>
            My expertise spans a wide range of technologies including <strong>React</strong>, <strong>Spring Boot</strong>, <strong>MySQL</strong>, <strong>Docker</strong>, <strong>Kubernetes</strong>, and <strong>Jenkins</strong>. I have experience designing and deploying scalable applications, streamlining CI/CD pipelines, and implementing infrastructure solutions that support long-term growth and maintainability.
          </p>
          <p>
            I’m actively seeking opportunities where I can contribute to impactful projects, collaborate with innovative teams, and apply my skills to drive measurable results. Please feel free to explore my <a href="/projects" className="highlight-link">projects</a>, view my <a href="/resume" className="highlight-link">resume</a>, or <a href="/contact" className="highlight-link">connect with me</a> to discuss potential collaborations or employment opportunities.
          </p>
        </div>
        <div className="intro-message">
          <p>{message}</p>
        </div>
        

      </header>
    </div>
  );
}

export default Home;