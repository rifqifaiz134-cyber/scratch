import React from 'react';

export default function Tasks() {
  return (
    <main className="main-content" style={{ padding: '24px 20px', paddingBottom: '100px' }}>
      <header style={{ marginBottom: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1 className="h1" style={{ fontSize: '24px' }}>Tasks</h1>
        <button style={{ background: 'var(--primary)', color: 'white', border: 'none', width: '32px', height: '32px', borderRadius: '50%', fontSize: '20px', cursor: 'pointer' }}>+</button>
      </header>

      <section style={{ marginBottom: '32px' }}>
        <h2 className="label-caps" style={{ color: 'var(--error)', marginBottom: '12px' }}>URGENT</h2>
        <div className="cards-grid">
          <div className="glass rounded-lg shadow-ambient" style={{ padding: '16px', borderLeft: '4px solid var(--error)' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
              <input type="checkbox" style={{ width: '20px', height: '20px', marginTop: '2px', accentColor: 'var(--primary)' }} />
              <div>
                <h3 className="h2" style={{ fontSize: '16px', textDecoration: 'none' }}>PPT Modul Terapi Gangguan Endokrin dan Reproduksi</h3>
                <p className="body-md" style={{ color: 'var(--on-surface-variant)', marginTop: '4px' }}>Due Today, 23:59</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="label-caps" style={{ color: 'var(--on-surface-variant)', marginBottom: '12px' }}>UPCOMING</h2>
        <div className="cards-grid">
          <div className="glass rounded-lg shadow-ambient" style={{ padding: '16px', borderLeft: '4px solid var(--primary)' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
              <input type="checkbox" style={{ width: '20px', height: '20px', marginTop: '2px', accentColor: 'var(--primary)' }} />
              <div>
                <h3 className="h2" style={{ fontSize: '16px' }}>Review Jurnal Kimia Medisinal</h3>
                <p className="body-md" style={{ color: 'var(--on-surface-variant)', marginTop: '4px' }}>2 days left</p>
              </div>
            </div>
          </div>
          
          <div className="glass rounded-lg shadow-ambient" style={{ padding: '16px', borderLeft: '4px solid var(--primary)' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
              <input type="checkbox" style={{ width: '20px', height: '20px', marginTop: '2px', accentColor: 'var(--primary)' }} />
              <div>
                <h3 className="h2" style={{ fontSize: '16px' }}>Quiz Farmasetika Sediaan Solid</h3>
                <p className="body-md" style={{ color: 'var(--on-surface-variant)', marginTop: '4px' }}>4 days left</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
