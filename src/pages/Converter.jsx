import React, { useState } from 'react';
import './Converter.css';

export default function Converter() {
  // Concentration State
  const [concFrom, setConcFrom] = useState('Molarity (M)');
  const [concTo, setConcTo] = useState('PPM');
  const [concValue, setConcValue] = useState('');
  const [concMr, setConcMr] = useState('');
  const [concResult, setConcResult] = useState('');

  const needsMr = (concFrom === 'Molarity (M)' && (concTo === 'PPM' || concTo === 'Percentage (%)')) || 
                  (concTo === 'Molarity (M)' && (concFrom === 'PPM' || concFrom === 'Percentage (%)'));

  // Dilution State
  const [dilC1, setDilC1] = useState('');
  const [dilV1, setDilV1] = useState('');
  const [dilC2, setDilC2] = useState('');
  const [dilV2, setDilV2] = useState('');

  // Dosage State
  const [doseDesired, setDoseDesired] = useState('');
  const [doseUnit, setDoseUnit] = useState('mg');
  const [stockMass, setStockMass] = useState('');
  const [stockVol, setStockVol] = useState('');
  const [doseResult, setDoseResult] = useState('');

  const handleSwapConc = () => {
    setConcFrom(concTo);
    setConcTo(concFrom);
    setConcResult('');
  };

  const handleCalculateAll = () => {
    // 1. Concentration
    if (concValue !== '') {
      const val = parseFloat(concValue);
      if (!isNaN(val)) {
        let result = 0;
        let valid = true;
        
        if (concFrom === concTo) {
          result = val;
        } else if (concFrom === 'Percentage (%)' && concTo === 'PPM') {
          result = val * 10000;
        } else if (concFrom === 'PPM' && concTo === 'Percentage (%)') {
          result = val / 10000;
        } else {
          const mr = parseFloat(concMr);
          if (isNaN(mr) || mr <= 0) {
            setConcResult('Please enter valid Mr (g/mol)');
            valid = false;
          } else {
            if (concFrom === 'Molarity (M)' && concTo === 'PPM') {
              result = val * mr * 1000;
            } else if (concFrom === 'PPM' && concTo === 'Molarity (M)') {
              result = val / (mr * 1000);
            } else if (concFrom === 'Molarity (M)' && concTo === 'Percentage (%)') {
              result = (val * mr) / 10;
            } else if (concFrom === 'Percentage (%)' && concTo === 'Molarity (M)') {
              result = (val * 10) / mr;
            }
          }
        }
        
        if (valid) {
          setConcResult(`${Number(result.toPrecision(5))} ${concTo === 'Percentage (%)' ? '%' : concTo === 'Molarity (M)' ? 'M' : 'PPM'}`);
        }
      }
    }

    // 2. Dilution
    const c1 = parseFloat(dilC1);
    const v1 = parseFloat(dilV1);
    const c2 = parseFloat(dilC2);
    const v2 = parseFloat(dilV2);
    
    let countEmpty = 0;
    if (isNaN(c1)) countEmpty++;
    if (isNaN(v1)) countEmpty++;
    if (isNaN(c2)) countEmpty++;
    if (isNaN(v2)) countEmpty++;

    if (countEmpty === 1) {
      if (isNaN(c1)) setDilC1(Number(((c2 * v2) / v1).toPrecision(5)).toString());
      if (isNaN(v1)) setDilV1(Number(((c2 * v2) / c1).toPrecision(5)).toString());
      if (isNaN(c2)) setDilC2(Number(((c1 * v1) / v2).toPrecision(5)).toString());
      if (isNaN(v2)) setDilV2(Number(((c1 * v1) / c2).toPrecision(5)).toString());
    }

    // 3. Dosage
    if (doseDesired !== '' && stockMass !== '' && stockVol !== '') {
      const d = parseFloat(doseDesired);
      const sM = parseFloat(stockMass);
      const sV = parseFloat(stockVol);
      if (!isNaN(d) && !isNaN(sM) && !isNaN(sV) && sM > 0) {
        const amount = (d / sM) * sV;
        setDoseResult(`${Number(amount.toPrecision(5))} ml`);
      }
    }
  };

  return (
    <main className="main-content" style={{ padding: '24px 20px', paddingBottom: '100px' }}>
      <header className="page-header">
        <h1 className="h1" style={{ color: 'var(--primary)', marginBottom: '8px' }}>Unit Converter</h1>
        <p className="body-md" style={{ color: 'var(--on-surface-variant)' }}>Precision calculations for pharmaceutical excellence.</p>
      </header>

      {/* Section 1: Concentration */}
      <section className="section-block">
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 2v7.31"></path><path d="M14 9.3V2"></path><path d="M8.5 2h7"></path><path d="M14 9.3a6.5 6.5 0 1 1-4 0"></path><path d="M5.52 16h12.96"></path></svg>
          <h2 className="h2" style={{ fontSize: '18px' }}>Concentration Converter</h2>
        </div>
        <div className="converter-card glass shadow-ambient rounded-lg">
          <div className="input-group">
            <label className="label-caps" style={{ color: 'var(--outline)', marginBottom: '4px', display: 'block' }}>FROM</label>
            <div className="input-wrapper">
              <input type="number" placeholder="Enter value" className="styled-input" value={concValue} onChange={e => setConcValue(e.target.value)} />
              <select className="styled-select" value={concFrom} onChange={e => setConcFrom(e.target.value)}>
                <option>Molarity (M)</option>
                <option>PPM</option>
                <option>Percentage (%)</option>
              </select>
            </div>
          </div>
          
          <div style={{ display: 'flex', justifyContent: 'center', margin: '12px 0' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--outline-variant)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ cursor: 'pointer' }} onClick={handleSwapConc}><polyline points="21 8 17 4 13 8"></polyline><line x1="17" y1="12" x2="17" y2="4"></line><polyline points="3 16 7 20 11 16"></polyline><line x1="7" y1="12" x2="7" y2="20"></line></svg>
          </div>
          
          <div className="input-group">
            <label className="label-caps" style={{ color: 'var(--outline)', marginBottom: '4px', display: 'block' }}>TO</label>
            <div className="input-wrapper">
              <div className="styled-input result-box" style={{ paddingRight: '120px', overflow: 'hidden' }}>
                <span style={{ color: concResult ? 'var(--primary)' : 'var(--on-surface-variant)', fontWeight: concResult ? 'bold' : 'normal' }}>
                  {concResult || 'Result will appear here'}
                </span>
              </div>
              <select className="styled-select" value={concTo} onChange={e => setConcTo(e.target.value)}>
                <option>PPM</option>
                <option>Molarity (M)</option>
                <option>Percentage (%)</option>
              </select>
            </div>
          </div>

          {needsMr && (
            <div className="input-group" style={{ marginTop: '16px' }}>
              <label className="label-caps" style={{ color: 'var(--outline)', marginBottom: '4px', display: 'block' }}>Molecular Weight (Mr)</label>
              <input type="number" placeholder="g/mol" className="styled-input" value={concMr} onChange={e => setConcMr(e.target.value)} />
            </div>
          )}
        </div>
      </section>

      {/* Section 2: Dilution */}
      <section className="section-block">
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"></path></svg>
          <h2 className="h2" style={{ fontSize: '18px' }}>Dilution Calculator (C1V1 = C2V2)</h2>
        </div>
        <p className="body-md" style={{ color: 'var(--on-surface-variant)', marginBottom: '12px', fontSize: '13px' }}>Leave exactly one field empty to calculate.</p>
        <div className="converter-card glass shadow-ambient rounded-lg">
          <div className="grid-2">
            <div className="input-group">
              <label className="label-caps" style={{ color: 'var(--outline)', marginBottom: '4px', display: 'block' }}>CONC. 1 (C1)</label>
              <input type="number" placeholder="mg/ml" className="styled-input" value={dilC1} onChange={e => setDilC1(e.target.value)} />
            </div>
            <div className="input-group">
              <label className="label-caps" style={{ color: 'var(--outline)', marginBottom: '4px', display: 'block' }}>VOL. 1 (V1)</label>
              <input type="number" placeholder="ml" className="styled-input" value={dilV1} onChange={e => setDilV1(e.target.value)} />
            </div>
            <div className="input-group">
              <label className="label-caps" style={{ color: 'var(--outline)', marginBottom: '4px', display: 'block' }}>CONC. 2 (C2)</label>
              <input type="number" placeholder="mg/ml" className="styled-input" value={dilC2} onChange={e => setDilC2(e.target.value)} />
            </div>
            <div className="input-group">
              <label className="label-caps" style={{ color: 'var(--outline)', marginBottom: '4px', display: 'block' }}>VOL. 2 (V2)</label>
              <input type="number" placeholder="ml" className={dilV2 && !dilC1 && !dilV1 && !dilC2 ? "styled-input result-input" : "styled-input"} value={dilV2} onChange={e => setDilV2(e.target.value)} style={dilV2 && document.activeElement !== document.getElementById('v2') ? { fontWeight: 'bold', color: 'var(--primary)' } : {}} id="v2" />
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Dosage */}
      <section className="section-block" style={{ marginBottom: '32px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="8" width="18" height="14" rx="2"></rect><path d="M12 5v3"></path><path d="M19 5v3"></path><path d="M5 5v3"></path><path d="M8 5a4 4 0 0 1 8 0v3"></path><path d="M12 11v6"></path><path d="M9 14h6"></path></svg>
          <h2 className="h2" style={{ fontSize: '18px' }}>Dosage Calculation</h2>
        </div>
        <div className="converter-card glass shadow-ambient rounded-lg">
          <div style={{ display: 'flex', gap: '16px', marginBottom: '16px' }}>
            <div className="input-group" style={{ flex: 1 }}>
              <label className="label-caps" style={{ color: 'var(--outline)', marginBottom: '4px', display: 'block' }}>DESIRED DOSE</label>
              <input type="number" placeholder="500" className="styled-input" value={doseDesired} onChange={e => setDoseDesired(e.target.value)} />
            </div>
            <div className="input-group" style={{ width: '80px' }}>
              <label className="label-caps" style={{ color: 'var(--outline)', marginBottom: '4px', display: 'block' }}>UNIT</label>
              <select className="styled-select-full" value={doseUnit} onChange={e => setDoseUnit(e.target.value)}>
                <option>mg</option>
                <option>mcg</option>
                <option>g</option>
              </select>
            </div>
          </div>
          <div className="input-group">
            <label className="label-caps" style={{ color: 'var(--outline)', marginBottom: '4px', display: 'block' }}>STOCK CONC. ({doseUnit})</label>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <input type="number" placeholder="250" className="styled-input" style={{ flex: 1 }} value={stockMass} onChange={e => setStockMass(e.target.value)} />
              <span className="body-md" style={{ color: 'var(--outline)' }}>per</span>
              <input type="number" placeholder="5" className="styled-input text-center" style={{ width: '60px' }} value={stockVol} onChange={e => setStockVol(e.target.value)} />
              <span className="body-md" style={{ color: 'var(--outline)' }}>ml</span>
            </div>
          </div>
          
          {doseResult && (
            <div style={{ marginTop: '16px', padding: '12px', backgroundColor: 'rgba(16, 185, 129, 0.1)', borderRadius: '12px', border: '1px dashed var(--primary-container)', textAlign: 'center' }}>
              <span className="h2" style={{ color: 'var(--primary)', fontSize: '18px' }}>{doseResult}</span>
            </div>
          )}
        </div>
      </section>

      <button className="gradient-bg w-full btn-text rounded-lg shadow-ambient" style={{ color: 'white', padding: '16px', border: 'none', marginBottom: '24px', cursor: 'pointer' }} onClick={handleCalculateAll}>
        Calculate Results
      </button>

      <div className="tooltip-card">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--secondary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
        <p className="body-md" style={{ color: 'var(--on-secondary-container)', fontSize: '13px' }}>
          Ensure all input values match the prescribed units before calculating to avoid medication errors. Double-check all decimal points.
        </p>
      </div>
    </main>
  );
}
