import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about-page">
      <header className="about-header">
        <h1>About Me</h1>
        <p>Backend Engineer | Full-Stack Builder | Infrastructure-Focused</p>
      </header>

      <section className="about-section">
        <h2>Who I Am</h2>
        <p>
          I am a <strong>software engineer</strong> focused on backend development, full-stack applications, and
          production-ready infrastructure. Throughout my software engineering journey, I have built software ranging from Java web
          applications and RESTful APIs to automated deployment pipelines and distributed systems.
        </p>
        <p>
          As founder of <strong>OverKill Development</strong>, I have led teams of <strong>4-5 developers</strong>,
          mentored <strong>12-15 aspiring engineers</strong>, and built systems supporting <strong>10,000+ players</strong> across active server communities. I enjoy solving complex engineering problems and building platforms that
          are scalable, maintainable, and reliable.
        </p>
      </section>

      <section className="about-section">
        <h2>Engineering Philosophy</h2>
        <p>
          I enjoy building systems end-to-end, from backend APIs and relational data models to Docker-based
          infrastructure, CI/CD pipelines, and deployment automation. My best projects combine software engineering
          with infrastructure design to improve reliability, reduce manual operations, and simplify complex workflows.
        </p>
        <p>
          I am continuously learning through hands-on work, whether building production-style web applications,
          operating self-hosted services, supporting research infrastructure with FSEC/UCF, or exploring distributed
          systems and AI-backed tooling.
        </p>
      </section>

      <section className="highlights-section">
        <h2>Engineering Highlights</h2>
        <div className="highlights-grid">
          <article className="highlight-card">
            <h3>10,000+</h3>
            <p>Players Supported</p>
          </article>
          <article className="highlight-card">
            <h3>50+</h3>
            <p>Software Projects</p>
          </article>
          <article className="highlight-card">
            <h3>20+</h3>
            <p>Containerized Services</p>
          </article>
          <article className="highlight-card">
            <h3>12-15</h3>
            <p>Developers Mentored</p>
          </article>
          <article className="highlight-card">
            <h3>4+</h3>
            <p>Years Building Software</p>
          </article>
        </div>
      </section>

      <section className="about-section">
        <h2>Outside of Work</h2>
        <p>
          Outside of professional work, I continue building personal projects that sharpen my engineering skillset.
          My home lab operates as a production-style environment where I run containerized applications, AI services,
          Git hosting, networking tools, and automation workflows.
        </p>
        <p>
          I actively maintain personal open-source projects, experiment with new technologies, and continuously refine my development workflow to stay practical, fast, and reliable in real-world environments.
        </p>
      </section>

      <section className="focus-section">
        <h2>Current Focus</h2>
        <ul className="focus-list">
          <li>Backend Engineering with Java and Spring Boot</li>
          <li>Distributed Systems and Infrastructure</li>
          <li>Self-Hosted AI Platforms</li>
          <li>Containerized Deployments</li>
          <li>Cloud-Native Development</li>
          <li>Performance Optimization</li>
        </ul>
        <p>
          To learn more, <a href="/projects" className="highlight-link">explore my projects</a>,
          <a href="/resume" className="highlight-link"> view my resume</a>, or
          <a href="/contact" className="highlight-link"> reach out</a> to connect.
        </p>
      </section>
    </div>
  );
}

export default About;
