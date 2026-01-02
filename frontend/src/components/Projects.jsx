import React from 'react';
import './Projects.css';

const projects = [
  {
    id: 4,
    title: 'Dynamic Crates CICD Pipeline Automation',
    description:
      'This project automates the creation, updating, and deployment of dynamic loot tables and crate positions for a game server. It integrates Python, Flask, JavaScript, and batch scripting, and is designed for easy triggering and extensibility. The system can be controlled via Google Sheets, making it accessible for both technical and non-technical users.',
    languages: ['Python', 'JavaScript', 'Batch'],
    tools: ['Flask', 'Node.js', 'Google Sheets API', 'Batch Scripts'],
    githubUrl: 'https://github.com/TylerPac/DynamincCratesCICDPipelines',
    demoUrl:
      'https://docs.google.com/spreadsheets/d/10n0FIkA1bNESDSjaIBXvgCDc1ckrdhkermn4zsnXZPE/edit?usp=sharing',
    image: '/Projects/DynamicCratesCICD.png',
  },
  {
    id: 2,
    title: 'Momentum Workout and Data Tracking App',
    description:
      'A comprehensive fitness tracking application built with Java servlets and JSP. Features user authentication, workout logging, data analytics, and progress tracking with Hibernate ORM for database management. Use Username: admin / Password: admin to log in and explore the application.',
    languages: ['Java', 'JavaScript', 'HTML', 'CSS', 'SQL'],
    tools: ['Java Servlets', 'JSP', 'Hibernate', 'MySQL', 'Maven', 'Docker', 'Tomcat', 'Git', 'Jenkins'],
    githubUrl: 'https://github.com/TylerPac/MomentumDocker/',
    demoUrl: 'https://momentum.tylerpac.dev/',
    image: '/Projects/Momentum.png',
  },
  {
    id: 3,
    title: 'ETL Pipeline Automation with Apache Airflow and Kubernetes',
    description: 'Containerized Apache Airflow workflow using Kubernetes (Kind in Docker) for photovoltaic research data.',
    languages: ['Python', 'MySQL', 'SQL'],
    tools: ['Docker', 'MySQL', 'Kubernetes', 'Helm', 'Airflow', 'Git'],
    githubUrl: 'https://github.com/TylerPac/airflow',
    demoUrl: null,
    image: '/Projects/FSEClogo.jpg',
    imageClass: 'etl-image',
  },
  {
    id: 1,
    title: 'TylerPac Development Site',
    description:
      'A full-stack web application showcasing my development portfolio. Features a React frontend with Spring Boot backend, containerized with Docker for seamless deployment.',
    languages: ['JavaScript', 'Java', 'CSS', 'HTML'],
    tools: ['React', 'Spring Boot', 'Docker', 'Maven', 'Git', 'Jenkins'],
    githubUrl: 'https://github.com/TylerPac/TylerPacDevelopment',
    demoUrl: null,
    image: '/Projects/TylerPacDevelopmentSite.png',
  },
];

function Projects() {
  const handleGitHubClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleDemoClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="projects">
      <div className="projects-container">
        <header className="projects-header">
          <h1>My Projects</h1>
          <p>Explore my portfolio of full-stack applications and development work</p>
        </header>

        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  decoding="async"
                  className={project.imageClass || ''}
                  onError={(e) => {
                    e.target.src =
                      'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjI1MCIgdmlld0JveD0iMCAwIDQwMCAyNTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMjUwIiBmaWxsPSIjZjVmNWY1Ii8+CjxwYXRoIGQ9Ik0xNzUgMTAwSDIyNVYxNTBIMTc1VjEwMFoiIGZpbGw9IiNkZGRkZGQiLz4KPC9zdmc+';
                  }}
                />
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-tech">
                  <div className="tech-section">
                    <h4>Languages:</h4>
                    <div className="tech-tags">
                      {project.languages.map((lang, index) => (
                        <span key={index} className="tech-tag language-tag">
                          {lang}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="tech-section">
                    <h4>Tools & Frameworks:</h4>
                    <div className="tech-tags">
                      {project.tools.map((tool, index) => (
                        <span key={index} className="tech-tag tool-tag">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="project-actions">
                  <button className="btn btn-primary" onClick={() => handleGitHubClick(project.githubUrl)}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                    View Code
                  </button>
                  {project.demoUrl && (
                    <button className="btn btn-secondary" onClick={() => handleDemoClick(project.demoUrl)}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z" />
                      </svg>
                      Live Demo
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
