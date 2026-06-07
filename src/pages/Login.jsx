import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();
  const [ssoId, setSsoId] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (ssoId && password) {
      // In a real app, you would validate credentials here.
      // For now, any input proceeds to home.
      navigate('/home');
    }
  };

  return (
    <main className="app-layout" style={{ 
      alignItems: 'center', 
      justifyContent: 'center', 
      padding: '24px', 
      background: 'linear-gradient(180deg, var(--surface) 0%, var(--surface-container-low) 100%)',
    }}>
      <div style={{
        width: '100%',
        maxWidth: '360px',
        background: 'var(--surface-container)',
        padding: '32px',
        borderRadius: '24px',
        boxShadow: 'var(--shadow-ambient)',
        display: 'flex',
        flexDirection: 'column',
        gap: '24px'
      }}>
        <div style={{ textAlign: 'center' }}>
          <h1 className="h1" style={{ fontSize: '28px', color: 'var(--primary)', marginBottom: '8px' }}>
            SSO UI Login
          </h1>
          <p className="body-sm" style={{ color: 'var(--on-surface-variant)' }}>
            Gunakan akun Single Sign-On Universitas Indonesia untuk melanjutkan.
          </p>
        </div>

        <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div>
            <label className="label" style={{ display: 'block', marginBottom: '8px', color: 'var(--on-surface)' }}>
              Username SSO
            </label>
            <input 
              type="text" 
              placeholder="contoh: rifqifaiz@ui.ac.id"
              value={ssoId}
              onChange={(e) => setSsoId(e.target.value)}
              style={{
                width: '100%',
                padding: '16px',
                borderRadius: '12px',
                border: '1px solid var(--outline)',
                background: 'var(--surface)',
                color: 'var(--on-surface)',
                fontSize: '16px'
              }}
              required
            />
          </div>

          <div>
            <label className="label" style={{ display: 'block', marginBottom: '8px', color: 'var(--on-surface)' }}>
              Password
            </label>
            <input 
              type="password" 
              placeholder="Masukkan password Anda"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                width: '100%',
                padding: '16px',
                borderRadius: '12px',
                border: '1px solid var(--outline)',
                background: 'var(--surface)',
                color: 'var(--on-surface)',
                fontSize: '16px'
              }}
              required
            />
          </div>

          <button 
            type="submit"
            style={{ 
              marginTop: '16px',
              width: '100%', 
              padding: '16px', 
              borderRadius: '16px', 
              border: 'none', 
              background: 'var(--primary)', 
              color: 'white', 
              fontSize: '16px', 
              fontWeight: 'bold', 
              cursor: 'pointer',
              boxShadow: 'var(--shadow-ambient)'
            }}>
            Login
          </button>
        </form>
      </div>
    </main>
  );
}
