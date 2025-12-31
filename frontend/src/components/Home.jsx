import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  const handleResumeView = () => {
    window.open('/resume/Tyler_Pac_Resume.pdf', '_blank');
  };

  return (
    <div className="home">
      <header className="App-header">
        <div className="hero-section">
          <h1>Tyler Pac</h1>
          <p className="tagline">Software Engineer | DevOps Specialist | Full-Stack Developer</p>
        </div>
        <div className="intro-message">
          <p>
            Graduated with my B.A.S. in Computing Technology and Software Development. I found my passion in coding 4
            years ago and have been pursuing it ever since.
          </p>
        </div>
        <div className="home-content">
          <div className="cta-section">
            <div className="cta-buttons">
              <Link to="/contact" className="cta-btn secondary">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20,4H4A2,2 0 0,0 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6A2,2 0 0,0 20,4M20,18H4V8L12,13L20,8V18M20,6L12,11L4,6V6H20V6Z" />
                </svg>
                Contact Me
              </Link>

              <button onClick={handleResumeView} className="cta-btn secondary">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
                </svg>
                View Resume
              </button>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Home;
