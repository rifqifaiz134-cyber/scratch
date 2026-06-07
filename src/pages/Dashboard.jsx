import React from 'react';
import { useNavigate } from 'react-router-dom';
import ActionCard from '../components/ActionCard';

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <main className="main-content" style={{ padding: '24px 20px', paddingBottom: '100px' }}>
      <header style={{ marginBottom: '24px' }}>
        <h1 className="h1">Hi, ready to survive today? 🚀</h1>
        <p className="body-md" style={{ color: 'var(--on-surface-variant)' }}>
          Let's crush those deadlines!
        </p>
      </header>

      <section style={{ marginBottom: '24px' }}>
        <h2 className="h2" style={{ fontSize: '18px', marginBottom: '12px' }}>Today's Schedule</h2>
        <div className="glass rounded-lg shadow-ambient" style={{ padding: '16px', borderLeft: '4px solid var(--primary)', cursor: 'pointer' }} onClick={() => navigate('/schedule')}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h3 className="h2" style={{ fontSize: '16px' }}>Prakt. Analisis Sediaan Farmasi</h3>
            <span className="label-caps" style={{ color: 'var(--primary)' }}>08:00 - 11:00</span>
          </div>
          <p className="body-md" style={{ color: 'var(--on-surface-variant)', marginTop: '4px' }}>Gedung Pascasarjana FF UI</p>
        </div>
      </section>

      <section style={{ marginBottom: '24px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
          <h2 className="h2" style={{ fontSize: '18px' }}>Upcoming Deadlines</h2>
          <span className="label-caps" style={{ color: 'var(--error)' }}>2 Urgent</span>
        </div>
        <div className="cards-grid">
          <div className="glass rounded-lg" style={{ padding: '16px', border: '1px solid var(--error-container)', backgroundColor: 'var(--error-container)', cursor: 'pointer' }} onClick={() => navigate('/tasks')}>
            <h3 className="h2" style={{ fontSize: '16px', color: 'var(--on-error-container)' }}>PPT Modul Terapi Gangguan Endokrin dan Reproduksi</h3>
            <p className="body-md" style={{ color: 'var(--on-error-container)', marginTop: '4px' }}>Due Today, 23:59</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="h2" style={{ fontSize: '18px', marginBottom: '12px' }}>Quick Actions</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px', rowGap: '16px' }}>
          <button className="glass rounded-lg shadow-ambient" onClick={() => navigate('/tasks')} style={{ padding: '16px 4px', border: 'none', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'var(--primary-container)', color: 'var(--on-primary-container)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
            </div>
            <span className="label-caps" style={{ fontSize: '11px', textAlign: 'center' }}>Add Task</span>
          </button>
          
          <button className="glass rounded-lg shadow-ambient" onClick={() => navigate('/schedule')} style={{ padding: '16px 4px', border: 'none', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'var(--secondary-container)', color: 'var(--on-secondary-container)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
            </div>
            <span className="label-caps" style={{ fontSize: '11px', textAlign: 'center' }}>Schedule</span>
          </button>

          <button className="glass rounded-lg shadow-ambient" onClick={() => navigate('/gpa')} style={{ padding: '16px 4px', border: 'none', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'var(--tertiary-container)', color: 'var(--on-tertiary-container)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
            </div>
            <span className="label-caps" style={{ fontSize: '11px', textAlign: 'center' }}>GPA</span>
          </button>

          <button className="glass rounded-lg shadow-ambient" onClick={() => navigate('/converter')} style={{ padding: '16px 4px', border: 'none', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'var(--primary-container)', color: 'var(--on-primary-container)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 2v7.31"></path><path d="M14 9.3V2"></path><path d="M8.5 2h7"></path><path d="M14 9.3a6.5 6.5 0 1 1-4 0"></path><path d="M5.52 16h12.96"></path></svg>
            </div>
            <span className="label-caps" style={{ fontSize: '11px', textAlign: 'center' }}>Converter</span>
          </button>

          <button className="glass rounded-lg shadow-ambient" onClick={() => navigate('/more')} style={{ padding: '16px 4px', border: 'none', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'var(--secondary-container)', color: 'var(--on-secondary-container)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
               <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
            </div>
            <span className="label-caps" style={{ fontSize: '11px', textAlign: 'center' }}>Find Tools</span>
          </button>

          <button className="glass rounded-lg shadow-ambient" onClick={() => navigate('/packaging')} style={{ padding: '16px 4px', border: 'none', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'var(--tertiary-container)', color: 'var(--on-tertiary-container)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
               <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
            </div>
            <span className="label-caps" style={{ fontSize: '11px', textAlign: 'center' }}>Mockups</span>
          </button>
        </div>
      </section>
    </main>
  );
}
