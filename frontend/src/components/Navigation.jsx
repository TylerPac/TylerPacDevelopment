import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <Link to="/" onClick={closeMenu} className="logo-link">
            <div className="logo-placeholder">
              <span className="logo-text">PAC</span>
            </div>
          </Link>
        </div>

        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link">About</Link>
          </li>
          <li className="nav-item">
            <Link to="/projects" className="nav-link">Projects</Link>
          </li>
          <li className="nav-item">
            <Link to="/resume" className="nav-link">Resume</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link">Contact</Link>
          </li>
          <li className="nav-item">
            <a href="https://github.com/TylerPac" target="_blank" rel="noopener noreferrer" className="nav-link">
              Github
            </a>
          </li>
        </ul>

        <div className="hamburger" onClick={toggleMenu}>
          <div className={`hamburger-line ${isMenuOpen ? 'active' : ''}`}></div>
          <div className={`hamburger-line ${isMenuOpen ? 'active' : ''}`}></div>
          <div className={`hamburger-line ${isMenuOpen ? 'active' : ''}`}></div>
        </div>

        <div className={`mobile-menu-overlay ${isMenuOpen ? 'active' : ''}`} onClick={closeMenu}></div>

        <div className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}>
          <div className="mobile-menu-header">
            <div className="mobile-logo">
              <span className="logo-text">PAC</span>
            </div>
          </div>
          <ul className="mobile-nav-list">
            <li className="mobile-nav-item">
              <Link to="/" className="mobile-nav-link" onClick={closeMenu}>Home</Link>
            </li>
            <li className="mobile-nav-item">
              <Link to="/about" className="mobile-nav-link" onClick={closeMenu}>About</Link>
            </li>
            <li className="mobile-nav-item">
              <Link to="/projects" className="mobile-nav-link" onClick={closeMenu}>Projects</Link>
            </li>
            <li className="mobile-nav-item">
              <Link to="/resume" className="mobile-nav-link" onClick={closeMenu}>Resume</Link>
            </li>
            <li className="mobile-nav-item">
              <Link to="/contact" className="mobile-nav-link" onClick={closeMenu}>Contact</Link>
            </li>
            <li className="mobile-nav-item">
              <a
                href="https://github.com/TylerPac"
                target="_blank"
                rel="noopener noreferrer"
                className="mobile-nav-link"
                onClick={closeMenu}
              >
                Github
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
