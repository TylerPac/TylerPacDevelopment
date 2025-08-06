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
        
      </header>
    </div>
  );
}

export default Home;