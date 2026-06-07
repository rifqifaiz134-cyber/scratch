import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

export default function Flashcards() {
  return (
    <div className="app-layout">
      <Navbar />
      <main className="main-content" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '60vh', paddingBottom: '100px' }}>
        <h1 className="h1" style={{ marginBottom: '16px' }}>Flashcards: Beta-Blockers</h1>
        
        <div className="glass shadow-ambient rounded-lg" style={{ width: '100%', maxWidth: '400px', padding: '48px 24px', textAlign: 'center', minHeight: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <h2 className="h2">Propranolol</h2>
        </div>
        
        <p className="body-md" style={{ color: 'var(--on-surface-variant)', marginTop: '24px' }}>
          Tap to flip card
        </p>

        <div style={{ marginTop: '32px' }}>
          <Link to="/" className="btn-text" style={{ color: 'var(--primary)', textDecoration: 'none' }}>
            &larr; Back to Dashboard
          </Link>
        </div>
      </main>
    </div>
  );
}
