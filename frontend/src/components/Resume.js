import React from 'react';
import './Resume.css';

function Resume() {
  const handleDownloadResume = () => {
    const resumeUrl = '/resume/Tyler_Pac_Resume.pdf';
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Tyler_Pac_Resume.pdf';
    link.click();
  };

  return (
    <div className="resume">
      <div className="resume-container">
        <header className="resume-header">
          <h1>My Resume</h1>
          <p>View and download my professional experience and qualifications</p>
        </header>

        <div className="resume-content">
          <div className="resume-actions">
            <button 
              className="btn btn-primary"
              onClick={handleDownloadResume}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z M12,19L8,15H10.5V12H13.5V15H16L12,19Z"/>
              </svg>
              Download PDF
            </button>
          </div>

          <div className="pdf-container">
            <iframe
              src="/resume/Tyler_Pac_Resume.pdf#toolbar=0&navpanes=0&scrollbar=0"
              width="100%"
              height="1000px"
              style={{
                border: 'none',
                borderRadius: '8px',
                backgroundColor: '#282c34'
              }}
              title="Tyler Pac Resume"
            >
              <p>
                Your browser does not support PDFs. 
                <button onClick={handleDownloadResume} style={{marginLeft: '10px', color: '#667eea'}}>
                  Download the PDF here
                </button>
              </p>
            </iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
