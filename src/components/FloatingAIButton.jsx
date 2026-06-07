import React, { useState } from 'react';
import './FloatingAIButton.css';
import AITutorModal from './AITutorModal';

export default function FloatingAIButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="fab-container">
        <button className="fab glass gradient-bg shadow-ambient" onClick={() => setIsOpen(true)}>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2v20"></path>
            <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
          </svg>
          <span className="btn-text" style={{color: 'white', marginLeft: '8px'}}>Ask AI Tutor</span>
        </button>
      </div>
      
      <AITutorModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
