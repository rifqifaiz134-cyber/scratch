import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

export default function CaseStudies() {
  return (
    <div className="app-layout">
      <Navbar />
      <main className="main-content">
        <header className="page-header">
          <Link to="/" className="btn-text" style={{ color: 'var(--primary)', textDecoration: 'none', marginBottom: '16px', display: 'inline-block' }}>
            &larr; Back
          </Link>
          <h1 className="h1">Case Studies</h1>
          <p className="body-md" style={{ color: 'var(--on-surface-variant)' }}>Select a clinical scenario to practice.</p>
        </header>
        
        <div className="cards-grid">
          <div className="glass rounded-lg" style={{ padding: '16px', border: '1px solid var(--outline-variant)' }}>
            <h3 className="h2" style={{ fontSize: '18px' }}>Case #101: Hypertension</h3>
            <p className="body-md" style={{ color: 'var(--on-surface-variant)', marginTop: '8px' }}>A 45-year-old male presents with BP 150/95...</p>
          </div>
          <div className="glass rounded-lg" style={{ padding: '16px', border: '1px solid var(--outline-variant)' }}>
            <h3 className="h2" style={{ fontSize: '18px' }}>Case #102: Type 2 Diabetes</h3>
            <p className="body-md" style={{ color: 'var(--on-surface-variant)', marginTop: '8px' }}>Managing metformin side effects in elderly...</p>
          </div>
        </div>
      </main>
    </div>
  );
}
