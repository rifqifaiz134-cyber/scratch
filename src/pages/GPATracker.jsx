import React, { useState } from 'react';

const GRADE_POINTS = {
  'A': 4.0,
  'A-': 3.7,
  'B+': 3.3,
  'B': 3.0,
  'B-': 2.7,
  'C+': 2.3,
  'C': 2.0,
  'D': 1.0,
  'E': 0.0,
  '-': 0
};

export default function GPATracker() {
  const [target, setTarget] = useState(3.85);

  const [nextSemester, setNextSemester] = useState([
    { id: 1, name: 'Aseptik Dispensing', sks: 2, grade: '-' },
    { id: 2, name: 'Kimia Medisinal', sks: 2, grade: '-' },
    { id: 3, name: 'Teknologi Sediaan Steril', sks: 2, grade: '-' },
    { id: 4, name: 'Modul Terapi Gangguan Muskuloskeletal', sks: 3, grade: '-' },
    { id: 5, name: 'Modul Terapi Gangguan Ginjal & Saluran Kemih', sks: 3, grade: '-' },
    { id: 6, name: 'Modul Terapi Gangguan Endokrin dan Reproduksi', sks: 3, grade: '-' },
    { id: 7, name: 'Prakt. Teknologi Sediaan Steril', sks: 1, grade: '-' },
    { id: 8, name: 'Prakt. Analisis Sediaan Farmasi', sks: 1, grade: '-' },
  ]);

  const handleGradeChange = (id, newGrade) => {
    setNextSemester(prev => prev.map(course => course.id === id ? { ...course, grade: newGrade } : course));
  };
  
  const handleSksChange = (id, newSks) => {
    setNextSemester(prev => prev.map(course => course.id === id ? { ...course, sks: parseInt(newSks) || 0 } : course));
  };

  const totalSksSemester = nextSemester.filter(c => c.grade !== '-').reduce((sum, c) => sum + c.sks, 0);
  const totalPointsSemester = nextSemester.filter(c => c.grade !== '-').reduce((sum, c) => sum + (c.sks * GRADE_POINTS[c.grade]), 0);
  const predictedSemesterGpa = totalSksSemester > 0 ? (totalPointsSemester / totalSksSemester) : 0;

  return (
    <main className="main-content" style={{ padding: '24px 20px', paddingBottom: '100px' }}>
      <header style={{ marginBottom: '24px' }}>
        <h1 className="h1" style={{ fontSize: '24px' }}>GPA Tracker</h1>
      </header>

      <section className="glass rounded-lg shadow-ambient" style={{ padding: '24px', textAlign: 'center', marginBottom: '24px', background: 'linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%)', color: 'white' }}>
        <p className="label-caps" style={{ opacity: 0.8 }}>CURRENT GPA (IPK)</p>
        <h2 className="h1" style={{ fontSize: '48px', margin: '8px 0' }}>3.78</h2>
        <p className="body-md" style={{ opacity: 0.9 }}>Total SKS: 102</p>
      </section>

      <section className="glass rounded-lg shadow-ambient" style={{ padding: '24px', marginBottom: '24px' }}>
        <h3 className="h2" style={{ fontSize: '18px', marginBottom: '16px' }}>Target Simulator</h3>
        
        <div style={{ marginBottom: '16px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
            <span className="body-md">Target IPK Lulus</span>
            <span className="h2" style={{ fontSize: '16px' }}>{target.toFixed(2)}</span>
          </div>
          <input 
            type="range" 
            min="3.00" 
            max="4.00" 
            step="0.01" 
            value={target} 
            onChange={(e) => setTarget(parseFloat(e.target.value))}
            style={{ width: '100%', accentColor: 'var(--primary)' }}
          />
        </div>

        <div style={{ background: 'var(--surface-container-low)', padding: '16px', borderRadius: '12px', textAlign: 'center' }}>
          <p className="body-md" style={{ color: 'var(--on-surface-variant)' }}>To achieve this, you need an average of</p>
          <h4 className="h1" style={{ fontSize: '28px', color: 'var(--primary)', margin: '8px 0' }}>3.92</h4>
          <p className="body-md" style={{ color: 'var(--on-surface-variant)' }}>for the remaining 42 SKS.</p>
        </div>
      </section>
      
      <section className="glass rounded-lg shadow-ambient" style={{ padding: '24px', marginBottom: '24px' }}>
        <h3 className="h2" style={{ fontSize: '18px', marginBottom: '8px' }}>Prediksi Semester Depan</h3>
        <p className="body-md" style={{ color: 'var(--on-surface-variant)', marginBottom: '16px', fontSize: '14px' }}>Simulasikan nilai untuk mengetahui prediksi IPS.</p>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '20px' }}>
          {nextSemester.map(course => (
            <div key={course.id} style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '12px', background: 'var(--surface-container-lowest)', border: '1px solid var(--outline-variant)', borderRadius: '12px' }}>
              <div style={{ flex: 1 }}>
                <p className="body-md" style={{ fontWeight: '600', fontSize: '14px', marginBottom: '4px', lineHeight: '1.3' }}>{course.name}</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <span className="label-caps" style={{ color: 'var(--outline)' }}>SKS:</span>
                  <input 
                    type="number" 
                    value={course.sks} 
                    onChange={(e) => handleSksChange(course.id, e.target.value)}
                    style={{ width: '40px', padding: '2px 4px', border: '1px solid var(--outline-variant)', borderRadius: '4px', fontSize: '12px', outline: 'none' }}
                  />
                </div>
              </div>
              <select 
                value={course.grade} 
                onChange={(e) => handleGradeChange(course.id, e.target.value)}
                style={{ 
                  padding: '8px 12px', 
                  border: 'none', 
                  borderRadius: '8px', 
                  background: course.grade !== '-' ? 'var(--primary-container)' : 'var(--surface-container)', 
                  color: course.grade !== '-' ? 'var(--on-primary-container)' : 'var(--on-surface)',
                  fontWeight: 'bold',
                  outline: 'none',
                  cursor: 'pointer'
                }}
              >
                <option value="-">-</option>
                <option value="A">A</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B">B</option>
                <option value="B-">B-</option>
                <option value="C+">C+</option>
                <option value="C">C</option>
                <option value="D">D</option>
                <option value="E">E</option>
              </select>
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px', background: 'rgba(16, 185, 129, 0.1)', border: '1px dashed var(--primary-container)', borderRadius: '12px' }}>
          <div>
            <p className="label-caps" style={{ color: 'var(--primary)' }}>Prediksi IPS</p>
            <p className="body-md" style={{ fontSize: '13px', color: 'var(--on-surface-variant)' }}>Berdasarkan {totalSksSemester} SKS</p>
          </div>
          <h4 className="h1" style={{ color: 'var(--primary)', fontSize: '32px' }}>
            {predictedSemesterGpa.toFixed(2)}
          </h4>
        </div>
      </section>

    </main>
  );
}
