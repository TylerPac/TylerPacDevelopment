import React from 'react';
import './Projects.css';

// Data-driven UI: each object becomes one card via map().
const projects = [
  {
    id: 1,
    title: 'OverKill Development — Software Distribution Platform',
    description:
      'Founded and led the development of a full-stack software distribution platform serving a large multiplayer community. The platform combines secure authentication, digital commerce, automated customer provisioning, and production deployment infrastructure.',
    highlights: [
      'Supported 10,000+ players across 8–15 active game servers',
      'Generated approximately $5K–10K through digital product sales',
      'Led a team of 4–5 developers and mentored 12–15 aspiring engineers',
      'Automated Docker deployments using GitHub Actions and Jenkins',
    ],
    languages: ['Java', 'JavaScript', 'HTML', 'CSS', 'SQL'],
    tools: [
      'Spring Boot',
      'Spring Security',
      'React',
      'Vite',
      'Stripe',
      'Steam OAuth',
      'JPA/Hibernate',
      'MySQL',
      'Docker',
      'Jenkins',
      'GitHub Actions',
      'Traefik',
    ],
    githubUrl: 'https://github.com/TylerPac/OverKillDevelopment',
    demoUrl: 'https://overkilldayz.com/',
    image: '/Projects/OverKillDayZ.png',
  },
  {
    id: 2,
    title: 'Momentum — Fitness Analytics Platform',
    description:
      'Developed a production-style full-stack platform that enables users to securely log workouts, review exercise history, and visualize long-term performance trends through an interactive analytics dashboard.',
    highlights: [
      'Designed a normalized relational database schema using MySQL',
      'Implemented RESTful backend services with Spring Boot and JPA/Hibernate',
      'Built interactive React dashboards for workout trends and historical analytics',
      'Automated containerized production deployments through Jenkins CI/CD',
    ],
    languages: ['Java', 'JavaScript', 'HTML', 'CSS', 'SQL'],
    tools: [
      'Spring Boot',
      'Spring Security',
      'React',
      'Vite',
      'JSON Web Token',
      'JPA/Hibernate',
      'MySQL',
      'Docker',
      'Nginx',
      'Maven',
      'Jenkins',
    ],
    githubUrl: 'https://github.com/TylerPac/MomentumDocker/',
    demoUrl: 'https://momentum.tylerpac.dev/',
    image: '/Projects/Momentum.png',
  },
  {
    id: 3,
    title: 'DARTS — Research Data Infrastructure',
    description:
      'Helped deliver reproducible data-processing infrastructure for photovoltaic researchers by deploying Apache Airflow workflows on Kubernetes and automating ingestion into PostgreSQL.',
    highlights: [
      'Supported 50+ continuously updated research datasets',
      'Eliminated manual weekly processing through automated ingestion pipelines',
      'Standardized environments using Kubernetes, Docker, and persistent storage',
      'Documented FAIR deployment procedures for long-term research adoption',
    ],
    languages: ['Python', 'SQL', 'YAML'],
    tools: [
      'Apache Airflow',
      'Kubernetes',
      'Docker',
      'PostgreSQL',
      'Helm',
      'GitHub Actions',
      'CI/CD',
      'Linux',
    ],
    githubUrl: 'https://github.com/TylerPac/airflow',
    demoUrl: null,
    image: '/Projects/FSEClogo.jpg',
    imageClass: 'etl-image',
  },
  {
    id: 4,
    title: 'Self-Hosted AI & Infrastructure Platform',
    description:
      'Designed and maintain a production-style Ubuntu homelab used to operate development tools, AI services, networking infrastructure, private Git hosting, security systems, and knowledge-management workflows.',
    highlights: [
      'Operates 20+ containerized services across multiple infrastructure stacks',
      'Runs GPU-accelerated local LLM inference using llama.cpp',
      'Provides private cross-device synchronization through CouchDB and Obsidian LiveSync',
      'Centralizes Git hosting, reverse proxy routing, networking, media, and security services',
    ],
    languages: ['Bash', 'YAML', 'Markdown'],
    tools: [
      'Ubuntu',
      'Docker',
      'Docker Compose',
      'llama.cpp',
      'Traefik',
      'CouchDB',
      'Gitea',
      'Cloudflare',
      'Linux',
      'Networking',
    ],
    githubUrl: 'https://github.com/TylerPac/HomeLab',
    demoUrl: null,
    image: '/Projects/HomeLab.png',
  },
  {
    id: 5,
    title: 'TylerPac.dev — Software Engineering Portfolio',
    description:
      'Created a centralized portfolio for presenting software engineering experience, live applications, architecture documentation, and source code across backend, full-stack, and infrastructure projects.',
    highlights: [
      'Built a responsive frontend using React and Vite',
      'Automated production deployments using Jenkins and Docker',
      'Deployed to a self-hosted Ubuntu VPS behind Traefik',
      'Provides direct access to live applications, GitHub repositories, and resume content',
    ],
    languages: ['JavaScript', 'HTML', 'CSS'],
    tools: [
      'React',
      'Vite',
      'Docker',
      'Nginx',
      'Jenkins',
      'Traefik',
      'Git',
    ],
    githubUrl: 'https://github.com/TylerPac/TylerPacDevelopment',
    demoUrl: 'https://tylerpac.dev/',
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
          {/* map() loops through projects and returns one JSX card per item. */}
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
                    // If an image fails to load, replace it with an inline placeholder.
                    e.target.src =
                      'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjI1MCIgdmlld0JveD0iMCAwIDQwMCAyNTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMjUwIiBmaWxsPSIjZjVmNWY1Ii8+CjxwYXRoIGQ9Ik0xNzUgMTAwSDIyNVYxNTBIMTc1VjEwMFoiIGZpbGw9IiNkZGRkZGQiLz4KPC9zdmc+';
                  }}
                />
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <ul className="project-highlights">
                  {project.highlights.map((highlight, index) => (
                    <li key={index}>{highlight}</li>
                  ))}
                </ul>

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
                      View Website
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
