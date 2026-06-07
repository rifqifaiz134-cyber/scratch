import React from 'react';
import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar glass">
      <div className="navbar-container">
        <div className="navbar-logo">
          <div className="logo-icon"></div>
          <span className="h2">PharmAssist</span>
        </div>
        <div className="navbar-actions">
          <button className="icon-btn">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
              <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
            </svg>
          </button>
          <div className="avatar">A</div>
        </div>
      </div>
    </nav>
  );
}
