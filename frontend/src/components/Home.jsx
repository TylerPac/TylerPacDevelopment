import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  // Cache-busting query param helps browsers fetch the newest PDF after updates.
  const resumeUrl = '/resume/Tyler_Pac_Resume.pdf?v=20260707';

  const handleResumeView = () => {
    // Open the resume in a new browser tab.
    window.open(resumeUrl, '_blank');
  };

  return (
    <div className="home">
      <header className="App-header">
        <div className="hero-section">
          <h1>Tyler Pac</h1>
          <p className="tagline">Software Engineer</p>
        </div>
        <div className="intro-message">
          <p>
            Building production-ready backend systems, full-stack applications, and self-hosted infrastructure with a focus on scalable architecture, automation, and maintainable software.
          </p>
        </div>
        <div className="home-content">
          <div className="cta-section">
            <div className="cta-buttons">
              
              <Link to="/projects" className="cta-btn secondary">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M10,4L12,6H20A2,2 0 0,1 22,8V18A2,2 0 0,1 20,20H4A2,2 0 0,1 2,18V6A2,2 0 0,1 4,4H10M4,8V18H20V8H4Z" />
                </svg>
                View Projects
              </Link>

              <button onClick={handleResumeView} className="cta-btn secondary">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
                </svg>
                View Resume
              </button>

              <Link to="/contact" className="cta-btn secondary">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20,4H4A2,2 0 0,0 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6A2,2 0 0,0 20,4M20,18H4V8L12,13L20,8V18M20,6L12,11L4,6V6H20V6Z" />
                </svg>
                Contact Me
              </Link>


            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Home;
