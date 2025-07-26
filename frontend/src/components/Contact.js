import React from 'react';
import './Contact.css'; // Be sure to style this

function Contact() {
  return (
    <div className="contact-page">
      <header className="contact-header">
        <h1>Contact Me</h1>
        <p>If you're interested in working together or have an opportunity in mind, feel free to reach out.</p>
      </header>

      <div className="contact-methods">
        <div className="contact-card">
          <h3>Email</h3>
          <a href="mailto:pac.tylerj@gmail.com">pac.tylerj@gmail.com</a>
        </div>

        <div className="contact-card">
          <h3>LinkedIn</h3>
          <a
            href="https://www.linkedin.com/in/tylerpac"
            target="_blank"
            rel="noopener noreferrer"
          >
            View My Profile
          </a>
        </div>

        <div className="contact-card">
          <h3>GitHub</h3>
          <a
            href="https://github.com/TylerPac"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/TylerPac
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
