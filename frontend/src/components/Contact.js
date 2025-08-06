import React from 'react';
import './Contact.css'; // Be sure to style this

function Contact() {
  const handleEmailClick = () => {
    window.location.href = 'mailto:pac.tylerj@gmail.com';
  };

  const handleLinkedInClick = () => {
    window.open('https://www.linkedin.com/in/tylerpac', '_blank', 'noopener,noreferrer');
  };

  const handleGitHubClick = () => {
    window.open('https://github.com/TylerPac', '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="contact-page">
      <header className="contact-header">
        <h1>Contact Me</h1>
      </header>

      <div className="contact-methods">
        <div className="contact-card clickable-card" onClick={handleEmailClick}>
          <h3>Email</h3>
          <span className="contact-info">pac.tylerj@gmail.com</span>
        </div>

        <div className="contact-card clickable-card" onClick={handleLinkedInClick}>
          <h3>LinkedIn</h3>
          <span className="contact-info">View My Profile</span>
        </div>

        <div className="contact-card clickable-card" onClick={handleGitHubClick}>
          <h3>GitHub</h3>
          <span className="contact-info">github.com/TylerPac</span>
        </div>
      </div>
    </div>
  );
}

export default Contact;
