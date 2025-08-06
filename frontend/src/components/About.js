import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about-page">
      <header className="about-header">
        <h1>About Me</h1>
        <p>Driven by Curiosity | Built through Experience</p>
      </header>
      <div className="background-section">
          <h2>My Journey</h2>
          <p>
            I'm a <strong>Software Engineer</strong> with a comprehensive background in full-stack development, systems architecture, and deployment automation. I have a <strong>Bachelor of Applied Science in Computing Technology and Software Development</strong>, equipping me with both theoretical knowledge and practical experience across modern software ecosystems.
          </p>
          <p>
            My expertise spans a wide range of technologies including <strong>React</strong>, <strong>Spring Boot</strong>, <strong>MySQL</strong>, <strong>Docker</strong>, <strong>Kubernetes</strong>, and <strong>Jenkins</strong>. I have experience designing and deploying scalable applications, streamlining CI/CD pipelines, and implementing infrastructure solutions that support long-term growth and maintainability.
          </p>
        </div>

        <div className="philosophy-section">
          <h2>Technical Philosophy</h2>
          <p>
            Beyond formal projects, I love exploring technology hands-on, whether it's setting up a home lab, automating workflows with <strong>n8n</strong>, creating mods for games like DayZ and Unreal Engine, or optimizing pipelines and systems for performance and resilience. I'm constantly building, refining, and learning.
          </p>
          <p>
            What drives me most is problem-solving. I enjoy diving deep into complex systems, thinking through design patterns, and writing clean, efficient code that delivers real-world impact. Whether collaborating on a team or working independently, I bring persistence, attention to detail, and a solutions-first mindset.
          </p>
        </div>

        <div className="goals-section">
          <h2>What I'm Looking For</h2>
          <p>
            I'm actively seeking opportunities where I can contribute to impactful projects, collaborate with innovative teams, and apply my skills to drive measurable results. I'm particularly interested in roles that allow me to grow while making meaningful contributions, ideally with teams that value innovation, continuous improvement, and a deep respect for good engineering.
          </p>
          <p>
            Thank you for your time, for more info <a href="/projects" className="highlight-link">check out my work</a>, <a href="/resume" className="highlight-link">view my resume</a>, or <a href="/contact" className="highlight-link">reach out</a> if you'd like to connect.
          </p>
        </div>
    </div>
  );
}

export default About;
