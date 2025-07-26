import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about-page">
      <header className="about-header">
        <h1>About Me</h1>
        <p>Driven by curiosity | Built through experience</p>
      </header>

      <div className="about-content">
        <p>
          I'm Tyler Pac, a passionate and versatile <strong>DevOps Software Engineer</strong> with a Bachelor of Applied Science in Computing Technology and Software Development. I thrive at the intersection of backend development, systems engineering, and automation — always looking for ways to build smarter and scale better.
        </p>

        <p>
          My professional journey has led me to develop full-stack applications using <strong>React</strong> and <strong>Spring Boot</strong>, build CI/CD pipelines with <strong>Jenkins</strong>, containerize and orchestrate services with <strong>Docker</strong> and <strong>Kubernetes</strong>, and architect end-to-end solutions hosted securely through tools like <strong>Cloudflare</strong>.
        </p>

        <p>
          Beyond formal projects, I love exploring technology hands-on — whether it’s setting up a home lab, automating workflows with <strong>n8n</strong>, creating mods for games like DayZ and Unreal Engine, or optimizing pipelines and systems for performance and resilience. I'm constantly building, refining, and learning.
        </p>

        <p>
          What drives me most is problem-solving. I enjoy diving deep into complex systems, thinking through design patterns, and writing clean, efficient code that delivers real-world impact. Whether collaborating on a team or working independently, I bring persistence, attention to detail, and a solutions-first mindset.
        </p>

        <p>
          I'm currently seeking opportunities where I can continue to grow while making meaningful contributions — ideally with teams that value innovation, continuous improvement, and a deep respect for good engineering.
        </p>

        <p>
          Thanks for taking the time to learn more about me. I invite you to <a href="/projects" className="highlight-link">check out my work</a>, <a href="/resume" className="highlight-link">view my resume</a>, or <a href="/contact" className="highlight-link">reach out</a> if you’d like to connect.
        </p>
      </div>
    </div>
  );
}

export default About;
