import React from 'react';
import './AITutorModal.css';

export default function AITutorModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="ai-modal-overlay">
      <div className="ai-modal glass shadow-ambient">
        <div className="ai-modal-header gradient-bg">
          <h3 className="h2" style={{ color: 'white', fontSize: '18px' }}>AI Tutor</h3>
          <button className="icon-btn close-btn" onClick={onClose}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>
        </div>
        
        <div className="ai-modal-body">
          <div className="chat-bubble ai">
            Hello Nasya! I'm your PharmAssist AI Tutor. What clinical topic would you like to discuss today?
          </div>
        </div>

        <div className="ai-modal-footer">
          <input type="text" placeholder="Type your question..." className="chat-input" />
          <button className="send-btn gradient-bg">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
          </button>
        </div>
      </div>
    </div>
  );
}
