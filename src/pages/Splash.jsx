import React from 'react';
import { useNavigate } from 'react-router-dom';
import mascotImg from '../assets/mascot_snake.jpg';

export default function Splash() {
  const navigate = useNavigate();

  return (
    <main className="app-layout" style={{ 
      alignItems: 'center', 
      justifyContent: 'center', 
      padding: '24px', 
      background: 'linear-gradient(180deg, var(--surface) 0%, var(--surface-container-low) 100%)',
      textAlign: 'center',
      paddingBottom: '40px'
    }}>
      
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <img 
          src={mascotImg} 
          alt="PharmAssist Mascot" 
          style={{ width: '280px', height: '280px', objectFit: 'contain', marginBottom: '24px', animation: 'float 3s ease-in-out infinite', borderRadius: '40px' }} 
        />
        
        <h1 className="h1" style={{ fontSize: '32px', color: 'var(--primary)', marginBottom: '8px' }}>
          PharmAssist
        </h1>
        <p className="body-md" style={{ color: 'var(--on-surface-variant)', fontSize: '16px', maxWidth: '300px' }}>
          Your smart survival tool for Pharmacy UI. Keep track of your schedule, GPA, and lost lab tools!
        </p>
      </div>

      <button 
        onClick={() => navigate('/login')}
        style={{ 
          width: '100%', 
          maxWidth: '320px', 
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
        Get Started
      </button>

      <style>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
      `}</style>
    </main>
  );
}
