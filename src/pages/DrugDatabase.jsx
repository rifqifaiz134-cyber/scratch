import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

export default function DrugDatabase() {
  return (
    <div className="app-layout">
      <Navbar />
      <main className="main-content">
        <header className="page-header">
          <Link to="/" className="btn-text" style={{ color: 'var(--primary)', textDecoration: 'none', marginBottom: '16px', display: 'inline-block' }}>
            &larr; Back
          </Link>
          <h1 className="h1">Drug Database</h1>
        </header>
        
        <div style={{ position: 'relative', marginBottom: '24px' }}>
          <input 
            type="text" 
            placeholder="Search for drugs, classes, or interactions..." 
            className="body-lg shadow-ambient"
            style={{ 
              width: '100%', 
              padding: '16px 16px 16px 48px', 
              borderRadius: '12px', 
              border: '1px solid var(--outline-variant)',
              outline: 'none'
            }} 
          />
          <svg style={{ position: 'absolute', left: '16px', top: '16px', color: 'var(--outline)' }} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
        </div>

        <div className="glass rounded-lg" style={{ padding: '24px', textAlign: 'center', color: 'var(--on-surface-variant)' }}>
          <p>Try searching for "Amoxicillin" or "Lisinopril"</p>
        </div>
      </main>
    </div>
  );
}
