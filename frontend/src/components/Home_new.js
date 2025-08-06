import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  const handleResumeView = () => {
    window.open('/resume/Tyler_Pac_Resume.pdf', '_blank');
  };

  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = '/resume/Tyler_Pac_Resume.pdf';
    link.download = 'Tyler_Pac_Resume.pdf';
    link.click();
  };

  return (
    <div className="home">
      <header className="App-header">
        <div className="hero-section">
          <h1>Tyler Pac</h1>
          <p className="tagline">DevOps Software Engineer | Full-Stack Developer | CI/CD & Infrastructure Specialist</p>
          
          <div className="achievements">
            <div className="achievement-item">
              <span className="number">3+</span>
              <span className="label">Full-Stack Projects</span>
            </div>
            <div className="achievement-item">
              <span className="number">100%</span>
              <span className="label">Containerized Deployments</span>
            </div>
            <div className="achievement-item">
              <span className="number">5+</span>
              <span className="label">Technologies Mastered</span>
            </div>
          </div>
        </div>

        <div className="home-content">
          <div className="intro-summary">
            <p>
              Recent <strong>Computer Science graduate</strong> specializing in DevOps and full-stack development. 
              Experienced in building scalable applications with <strong>React</strong>, <strong>Spring Boot</strong>, 
              and <strong>Docker</strong>, with hands-on expertise in <strong>CI/CD pipelines</strong> and 
              <strong>Kubernetes orchestration</strong>.
            </p>
          </div>

          <div className="skills-preview">
            <div className="skill-category">
              <h3>Frontend</h3>
              <span>React • JavaScript • CSS3 • HTML5</span>
            </div>
            <div className="skill-category">
              <h3>Backend</h3>
              <span>Java • Spring Boot • Node.js • MySQL</span>
            </div>
            <div className="skill-category">
              <h3>DevOps</h3>
              <span>Docker • Kubernetes • Jenkins • Git</span>
            </div>
          </div>

          <div className="cta-section">
            <div className="cta-buttons">
              <Link to="/projects" className="cta-btn primary">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C3.89,3 19,3.89 19,3M19,5V19H5V5H19Z"/>
                </svg>
                View Projects
              </Link>
              
              <button onClick={handleResumeView} className="cta-btn secondary">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
                </svg>
                View Resume
              </button>
              
              <button onClick={handleResumeDownload} className="cta-btn outline">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M12,19L8,15H10.5V12H13.5V15H16L12,19Z"/>
                </svg>
                Download Resume
              </button>
              
              <Link to="/contact" className="cta-btn primary">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20,4H4A2,2 0 0,0 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6A2,2 0 0,0 20,4M20,18H4V8L12,13L20,8V18M20,6L12,11L4,6V6H20V6Z"/>
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
