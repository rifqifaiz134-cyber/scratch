import React, { useState } from 'react';
import ActionCard from '../components/ActionCard';
import book1Img from '../assets/book1.png';
import book2Img from '../assets/book2.png';

export default function More() {
  const [showBooksModal, setShowBooksModal] = useState(false);
  const [showSettingsModal, setShowSettingsModal] = useState(false);
  const [theme, setTheme] = useState(document.documentElement.getAttribute('data-theme') || 'light');

  const toggleTheme = (newTheme) => {
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('app-theme', newTheme);
  };

  return (
    <main className="main-content" style={{ padding: '24px 20px', paddingBottom: '100px' }}>
      <header style={{ marginBottom: '32px', display: 'flex', alignItems: 'center', gap: '16px' }}>
        <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'var(--primary-container)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px', fontWeight: 'bold', color: 'var(--on-primary-container)' }}>
          R
        </div>
        <div>
          <h1 className="h1" style={{ fontSize: '24px' }}>Rifqi</h1>
          <p className="body-md" style={{ color: 'var(--on-surface-variant)' }}>Pharmacy '24 • Universitas Indonesia</p>
        </div>
      </header>

      <section style={{ marginBottom: '32px' }}>
        <h2 className="label-caps" style={{ color: 'var(--on-surface-variant)', marginBottom: '12px' }}>LAB SURVIVAL KIT</h2>
        
        <div className="glass rounded-lg shadow-ambient" style={{ padding: '20px', border: '1px solid var(--outline-variant)', background: 'linear-gradient(180deg, var(--surface-container-lowest) 0%, var(--surface) 100%)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '12px', background: 'var(--secondary-container)', color: 'var(--on-secondary-container)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
            </div>
            <div>
              <h3 className="h2" style={{ fontSize: '18px' }}>Find My Alprak! 🥼</h3>
              <p className="body-md" style={{ color: 'var(--on-surface-variant)', fontSize: '14px' }}>Lost your lab tools? Search here.</p>
            </div>
          </div>
          
          <input 
            type="text" 
            placeholder="Search 'Jas Lab', 'Spatula', 'Pipet'..." 
            style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', border: '1px solid var(--outline-variant)', outline: 'none', fontFamily: 'var(--font-body)', marginBottom: '16px' }}
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <div style={{ padding: '12px', borderRadius: '8px', background: 'var(--surface-container)', display: 'flex', gap: '12px', alignItems: 'center' }}>
              <div style={{ width: '60px', height: '60px', borderRadius: '8px', background: 'var(--surface-dim)', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img src="/found_item.jpg" alt="Found item" style={{ width: '100%', height: '100%', objectFit: 'cover' }} onError={(e) => { e.target.style.display = 'none'; e.target.parentNode.innerHTML = '<span style="font-size: 24px">📷</span>' }} />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                  <p className="body-md" style={{ fontWeight: 'bold' }}>Botol Reagen (Barium Chloride)</p>
                  <span className="label-caps" style={{ color: 'var(--primary)', background: 'var(--primary-container)', padding: '2px 6px', borderRadius: '4px' }}>FOUND</span>
                </div>
                <p className="body-md" style={{ fontSize: '12px', color: 'var(--on-surface-variant)' }}>Location: Meja Lab Terpadu</p>
              </div>
            </div>
            
            <div style={{ padding: '12px', borderRadius: '8px', background: 'var(--surface-container)', display: 'flex', gap: '12px', alignItems: 'center' }}>
              <div style={{ width: '60px', height: '60px', borderRadius: '8px', background: 'var(--surface-dim)', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img src="/found_item2.png" alt="Found item" style={{ width: '100%', height: '100%', objectFit: 'cover' }} onError={(e) => { e.target.style.display = 'none'; e.target.parentNode.innerHTML = '<span style="font-size: 24px">📷</span>' }} />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                  <p className="body-md" style={{ fontWeight: 'bold', fontSize: '14px' }}>Botol Reagen (Sodium Nitrate)</p>
                  <span className="label-caps" style={{ color: 'var(--primary)', background: 'var(--primary-container)', padding: '2px 6px', borderRadius: '4px' }}>FOUND</span>
                </div>
                <p className="body-md" style={{ fontSize: '12px', color: 'var(--on-surface-variant)' }}>Location: Lemari Bahan Kimia (Rak 7)</p>
              </div>
            </div>
          </div>
        </div>
        <div className="cards-grid" style={{ marginTop: '16px' }}>
          <ActionCard 
            to="/converter"
            title="Unit Converter" 
            description="Molarity, PPM, Dilution & Dosage"
            icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>}
          />
          <ActionCard 
            to="/packaging"
            title="Packaging Mockup" 
            description="Generate design labels (Sirup, Tablet, Salep...)"
            icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>}
          />
        </div>
      </section>

      <section style={{ marginBottom: '32px' }}>
        <h2 className="label-caps" style={{ color: 'var(--on-surface-variant)', marginBottom: '12px' }}>ACADEMICS</h2>
        <div className="cards-grid">
          <ActionCard 
            title="Study Resources" 
            description="Books, journals, and slides"
            icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>}
            onClick={() => setShowBooksModal(true)}
          />
          <ActionCard 
            title="App Settings" 
            description="Notifications, theme, account"
            icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>}
            onClick={() => setShowSettingsModal(true)}
          />
        </div>
      </section>

      {showBooksModal && (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.8)', zIndex: 1000, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '24px', backdropFilter: 'blur(4px)' }} onClick={() => setShowBooksModal(false)}>
          <div style={{ maxWidth: '400px', width: '100%', background: 'var(--surface)', borderRadius: '24px', padding: '24px', position: 'relative' }} onClick={e => e.stopPropagation()}>
            <button style={{ position: 'absolute', top: '16px', right: '16px', background: 'var(--surface-container-high)', border: 'none', width: '32px', height: '32px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: 'var(--on-surface)' }} onClick={() => setShowBooksModal(false)}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
            <h2 className="h2" style={{ fontSize: '20px', marginBottom: '16px', color: 'var(--on-surface)' }}>Recommended Books</h2>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxHeight: '60vh', overflowY: 'auto', paddingRight: '4px' }}>
              <div style={{ borderRadius: '12px', overflow: 'hidden', boxShadow: 'var(--shadow-ambient)' }}>
                <img src={book1Img} alt="Goodman & Gilman's The Pharmacological Basis of Therapeutics" style={{ width: '100%', display: 'block' }} />
              </div>
              <div style={{ borderRadius: '12px', overflow: 'hidden', boxShadow: 'var(--shadow-ambient)' }}>
                <img src={book2Img} alt="Basic & Clinical Pharmacology" style={{ width: '100%', display: 'block' }} />
              </div>
            </div>
          </div>
        </div>
      )}

      {showSettingsModal && (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.8)', zIndex: 1000, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '24px', backdropFilter: 'blur(4px)' }} onClick={() => setShowSettingsModal(false)}>
          <div style={{ maxWidth: '400px', width: '100%', background: 'var(--surface)', borderRadius: '24px', padding: '24px', position: 'relative' }} onClick={e => e.stopPropagation()}>
            <button style={{ position: 'absolute', top: '16px', right: '16px', background: 'var(--surface-container-high)', border: 'none', width: '32px', height: '32px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: 'var(--on-surface)' }} onClick={() => setShowSettingsModal(false)}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
            
            <h2 className="h2" style={{ fontSize: '20px', marginBottom: '8px', color: 'var(--on-surface)' }}>App Settings</h2>
            <p className="body-sm" style={{ color: 'var(--on-surface-variant)', marginBottom: '24px' }}>Customize your app experience.</p>
            
            <div style={{ padding: '16px', borderRadius: '16px', background: 'var(--surface-container)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '12px', background: 'var(--primary-container)', color: 'var(--on-primary-container)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
                </div>
                <div>
                  <h3 className="body-md" style={{ fontWeight: 'bold' }}>App Theme</h3>
                  <p className="body-sm" style={{ color: 'var(--on-surface-variant)', fontSize: '12px' }}>{theme === 'dark' ? 'Dark Mode' : 'Light Mode'}</p>
                </div>
              </div>
              
              <div style={{ display: 'flex', gap: '8px', background: 'var(--surface)', padding: '4px', borderRadius: '12px', border: '1px solid var(--outline-variant)' }}>
                <button 
                  onClick={() => toggleTheme('light')}
                  style={{ padding: '6px 12px', borderRadius: '8px', border: 'none', background: theme === 'light' ? 'var(--primary)' : 'transparent', color: theme === 'light' ? 'white' : 'var(--on-surface-variant)', cursor: 'pointer', fontWeight: 'bold', fontSize: '14px', transition: 'all 0.2s' }}>
                  Light
                </button>
                <button 
                  onClick={() => toggleTheme('dark')}
                  style={{ padding: '6px 12px', borderRadius: '8px', border: 'none', background: theme === 'dark' ? 'var(--primary)' : 'transparent', color: theme === 'dark' ? 'white' : 'var(--on-surface-variant)', cursor: 'pointer', fontWeight: 'bold', fontSize: '14px', transition: 'all 0.2s' }}>
                  Dark
                </button>
              </div>
            </div>
            
            <button style={{ width: '100%', padding: '16px', borderRadius: '16px', background: 'var(--error-container)', color: 'var(--on-error-container)', border: 'none', fontWeight: 'bold', fontSize: '16px', cursor: 'pointer' }}>
              Log Out
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
