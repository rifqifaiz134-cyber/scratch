import React from 'react';
import { Link } from 'react-router-dom';
import './ActionCard.css';

export default function ActionCard({ to, title, description, icon, primary, onClick }) {
  const content = (
    <>
      <div className="card-icon">{icon}</div>
      <div className="card-content">
        <h3 className="h2">{title}</h3>
        <p className="body-md card-desc">{description}</p>
      </div>
      <div className="card-arrow">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </div>
    </>
  );

  const className = `action-card rounded-lg shadow-ambient ${primary ? 'primary' : ''}`;

  if (to) {
    return (
      <Link to={to} className={className} style={{ textDecoration: 'none' }} onClick={onClick}>
        {content}
      </Link>
    );
  }

  return (
    <div className={className} onClick={onClick} style={onClick ? {cursor: 'pointer'} : {}}>
      {content}
    </div>
  );
}
