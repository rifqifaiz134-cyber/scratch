import React, { useState } from 'react';

const COURSES = [
  'Aseptik Dispensing',
  'Kimia Medisinal',
  'Teknologi Sediaan Steril',
  'Modul Terapi Gangguan Muskuloskeletal',
  'Modul Terapi Gangguan Ginjal & Saluran Kemih',
  'Modul Terapi Gangguan Endokrin dan Reproduksi',
  'Prakt. Teknologi Sediaan Steril',
  'Prakt. Analisis Sediaan Farmasi',
];

export default function ScheduleManager() {
  const [view, setView] = useState('calendar');
  const [showModal, setShowModal] = useState(false);
  const [kpList, setKpList] = useState([
    {
      id: 1,
      course: 'Kimia Medisinal',
      date: '2026-05-09',
      time: '09:00 - 11:30',
      room: 'Ruang Sidang Baru FF UI',
      status: 'CONFIRMED',
      proposedBy: 'Dosen'
    }
  ]);

  const [formData, setFormData] = useState({
    course: COURSES[0],
    date: '',
    timeStart: '',
    timeEnd: '',
    room: '',
    status: 'PROPOSED'
  });

  const handleAddKp = (e) => {
    e.preventDefault();
    const newKp = {
      id: Date.now(),
      course: formData.course,
      date: formData.date,
      time: `${formData.timeStart} - ${formData.timeEnd}`,
      room: formData.room || 'TBD',
      status: formData.status,
      proposedBy: 'User'
    };
    const newList = [...kpList, newKp].sort((a,b) => new Date(a.date) - new Date(b.date));
    setKpList(newList);
    setShowModal(false);
    setFormData({ ...formData, date: '', timeStart: '', timeEnd: '', room: '', status: 'PROPOSED' });
  };

  const today = new Date();
  const currentYear = today.getFullYear();
  const currentMonth = today.getMonth(); // 0-11
  
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDayIndex = new Date(currentYear, currentMonth, 1).getDay(); // 0 (Sun) - 6 (Sat)
  
  const calendarDays = [];
  for(let i=0; i<firstDayIndex; i++) calendarDays.push(null);
  for(let i=1; i<=daysInMonth; i++) calendarDays.push(i);

  const getKpForDay = (day) => {
    if (!day) return [];
    const m = (currentMonth+1).toString().padStart(2, '0');
    const d = day.toString().padStart(2, '0');
    const dateStr = `${currentYear}-${m}-${d}`;
    return kpList.filter(kp => kp.date === dateStr);
  };

  const renderCalendar = () => (
    <div className="glass rounded-lg shadow-ambient" style={{ padding: '16px', background: 'white' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
         <h2 className="h2" style={{ fontSize: '18px' }}>
           {new Date(currentYear, currentMonth).toLocaleString('default', { month: 'long', year: 'numeric' })}
         </h2>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '8px', textAlign: 'center', fontWeight: 'bold', marginBottom: '8px', color: 'var(--on-surface-variant)' }}>
        <div>S</div><div>M</div><div>T</div><div>W</div><div>T</div><div>F</div><div>S</div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '8px' }}>
        {calendarDays.map((day, idx) => {
          const dayKps = getKpForDay(day);
          const isToday = day === today.getDate();
          return (
            <div key={idx} style={{ 
              height: '60px', 
              border: '1px solid var(--outline-variant)', 
              borderRadius: '8px', 
              padding: '4px',
              display: 'flex',
              flexDirection: 'column',
              background: isToday ? 'var(--primary-container)' : 'transparent',
              borderColor: isToday ? 'var(--primary)' : 'var(--outline-variant)'
            }}>
              <span style={{ fontSize: '12px', fontWeight: 'bold', alignSelf: 'flex-start', color: isToday ? 'var(--on-primary-container)' : 'var(--on-surface)' }}>
                {day || ''}
              </span>
              <div style={{ display: 'flex', gap: '4px', flexWrap: 'wrap', marginTop: 'auto', justifyContent: 'flex-end' }}>
                {dayKps.map(kp => (
                  <div key={kp.id} title={kp.course} style={{
                    width: '8px', height: '8px', borderRadius: '50%',
                    background: kp.status === 'CONFIRMED' ? 'var(--primary)' : 'var(--secondary)'
                  }}></div>
                ))}
              </div>
            </div>
          )
        })}
      </div>
      <div style={{ display: 'flex', gap: '16px', marginTop: '16px', fontSize: '12px', color: 'var(--on-surface-variant)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
           <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--primary)' }}></div> Confirmed
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
           <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--secondary)' }}></div> Proposed
        </div>
      </div>
      
      <div style={{ marginTop: '24px' }}>
        <h3 className="label-caps" style={{ marginBottom: '12px', color: 'var(--on-surface-variant)' }}>Bulan Ini</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
           {kpList.length === 0 && <p className="body-md">Tidak ada KP bulan ini.</p>}
           {kpList.map(kp => (
             <div key={kp.id} style={{ display: 'flex', gap: '12px', borderBottom: '1px solid var(--outline-variant)', paddingBottom: '12px' }}>
               <div style={{ background: kp.status === 'CONFIRMED' ? 'var(--primary-container)' : 'var(--secondary-container)', color: kp.status === 'CONFIRMED' ? 'var(--on-primary-container)' : 'var(--on-secondary-container)', padding: '8px', borderRadius: '8px', minWidth: '48px', textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <span style={{ fontSize: '12px', fontWeight: 'bold' }}>{new Date(kp.date).toLocaleString('default', { month: 'short' })}</span>
                  <span style={{ fontSize: '16px', fontWeight: '900' }}>{new Date(kp.date).getDate()}</span>
               </div>
               <div>
                  <h4 className="h2" style={{ fontSize: '14px', marginBottom: '2px' }}>{kp.course}</h4>
                  <p className="body-md" style={{ fontSize: '12px', color: 'var(--on-surface-variant)' }}>{kp.time} • {kp.room}</p>
                  <span className="label-caps" style={{ fontSize: '10px', color: kp.status === 'CONFIRMED' ? 'var(--primary)' : 'var(--secondary)' }}>{kp.status}</span>
               </div>
             </div>
           ))}
        </div>
      </div>
    </div>
  );

  const renderList = () => (
    <>
      <section style={{ marginBottom: '32px' }}>
        <h2 className="label-caps" style={{ color: 'var(--on-surface-variant)', marginBottom: '12px' }}>TODAY'S REGULAR CLASSES</h2>
        <div className="cards-grid">
          <div className="glass rounded-lg shadow-ambient" style={{ padding: '16px', borderLeft: '4px solid var(--primary)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <h3 className="h2" style={{ fontSize: '16px' }}>Prakt. Analisis Sediaan Farmasi</h3>
              <span className="label-caps" style={{ color: 'var(--primary)' }}>08:00</span>
            </div>
            <p className="body-md" style={{ color: 'var(--on-surface-variant)' }}>Gedung Pascasarjana FF UI</p>
          </div>
          <div className="glass rounded-lg shadow-ambient" style={{ padding: '16px', borderLeft: '4px solid var(--secondary)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <h3 className="h2" style={{ fontSize: '16px' }}>Modul Terapi Gangguan Muskuloskeletal</h3>
              <span className="label-caps" style={{ color: 'var(--secondary)' }}>13:00</span>
            </div>
            <p className="body-md" style={{ color: 'var(--on-surface-variant)' }}>Ruang Sidang Baru FF UI</p>
          </div>
        </div>
      </section>

      <section>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
          <h2 className="label-caps" style={{ color: 'var(--on-surface-variant)' }}>KELAS PENGGANTI (KP)</h2>
        </div>
        <div className="cards-grid">
          {kpList.length === 0 ? (
            <p className="body-md" style={{ color: 'var(--on-surface-variant)' }}>Belum ada Kelas Pengganti yang diajukan.</p>
          ) : kpList.map(kp => (
            <div key={kp.id} className="glass rounded-lg" style={{ padding: '16px', border: '1px solid var(--outline-variant)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div>
                  <span className="label-caps" style={{ 
                    background: kp.status === 'CONFIRMED' ? 'var(--primary-container)' : 'var(--secondary-container)', 
                    color: kp.status === 'CONFIRMED' ? 'var(--on-primary-container)' : 'var(--on-secondary-container)', 
                    padding: '2px 8px', borderRadius: '4px' 
                  }}>
                    {kp.status}
                  </span>
                  <h3 className="h2" style={{ fontSize: '16px', marginTop: '8px' }}>{kp.course}</h3>
                  <p className="body-md" style={{ color: 'var(--on-surface-variant)' }}>{new Date(kp.date).toLocaleDateString('id-ID', {weekday:'long', month:'short', day:'numeric'})} • {kp.time}</p>
                  <p className="body-md" style={{ color: 'var(--on-surface-variant)', fontSize: '12px', marginTop: '4px' }}>📍 {kp.room}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );

  return (
    <main className="main-content" style={{ padding: '24px 20px', paddingBottom: '100px' }}>
      <header style={{ marginBottom: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1 className="h1" style={{ fontSize: '24px' }}>Schedule & KP</h1>
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
          <button 
            onClick={() => setShowModal(true)}
            style={{ display: 'flex', alignItems: 'center', gap: '4px', background: 'var(--primary)', color: 'white', border: 'none', padding: '6px 12px', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer', boxShadow: 'var(--shadow-ambient)' }}>
            + KP
          </button>
          <div style={{ display: 'flex', background: 'var(--surface-container-high)', borderRadius: '8px', padding: '4px' }}>
            <button 
              onClick={() => setView('list')}
              style={{ padding: '4px 12px', border: 'none', background: view === 'list' ? 'var(--surface-container-lowest)' : 'transparent', borderRadius: '4px', fontWeight: 'bold', cursor: 'pointer', boxShadow: view === 'list' ? 'var(--shadow-ambient)' : 'none' }}>
              List
            </button>
            <button 
              onClick={() => setView('calendar')}
              style={{ padding: '4px 12px', border: 'none', background: view === 'calendar' ? 'var(--surface-container-lowest)' : 'transparent', borderRadius: '4px', fontWeight: 'bold', cursor: 'pointer', boxShadow: view === 'calendar' ? 'var(--shadow-ambient)' : 'none' }}>
              Cal
            </button>
          </div>
        </div>
      </header>

      {view === 'list' ? renderList() : renderCalendar()}

      {showModal && (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.6)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px', backdropFilter: 'blur(4px)' }}>
          <div style={{ width: '100%', maxWidth: '400px', background: 'var(--surface)', borderRadius: '16px', padding: '24px', position: 'relative' }}>
            <button 
              onClick={() => setShowModal(false)}
              style={{ position: 'absolute', top: '16px', right: '16px', border: 'none', background: 'var(--surface-container-high)', width: '32px', height: '32px', borderRadius: '50%', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
            <h2 className="h2" style={{ marginBottom: '20px' }}>Ajukan Kelas Pengganti</h2>
            
            <form onSubmit={handleAddKp} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <label className="label-caps" style={{ display: 'block', marginBottom: '8px' }}>Mata Kuliah</label>
                <select className="styled-select-full" style={{ padding: '12px', width: '100%', borderRadius: '8px', border: '1px solid var(--outline-variant)' }} value={formData.course} onChange={e => setFormData({...formData, course: e.target.value})} required>
                  {COURSES.map(c => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>
              
              <div>
                <label className="label-caps" style={{ display: 'block', marginBottom: '8px' }}>Tanggal</label>
                <input type="date" className="styled-input" style={{ width: '100%', padding: '12px', border: '1px solid var(--outline-variant)', borderRadius: '8px' }} value={formData.date} onChange={e => setFormData({...formData, date: e.target.value})} required />
              </div>
              
              <div style={{ display: 'flex', gap: '12px' }}>
                <div style={{ flex: 1 }}>
                  <label className="label-caps" style={{ display: 'block', marginBottom: '8px' }}>Waktu Mulai</label>
                  <input type="time" className="styled-input" style={{ width: '100%', padding: '12px', border: '1px solid var(--outline-variant)', borderRadius: '8px' }} value={formData.timeStart} onChange={e => setFormData({...formData, timeStart: e.target.value})} required />
                </div>
                <div style={{ flex: 1 }}>
                  <label className="label-caps" style={{ display: 'block', marginBottom: '8px' }}>Selesai</label>
                  <input type="time" className="styled-input" style={{ width: '100%', padding: '12px', border: '1px solid var(--outline-variant)', borderRadius: '8px' }} value={formData.timeEnd} onChange={e => setFormData({...formData, timeEnd: e.target.value})} required />
                </div>
              </div>

              <div>
                <label className="label-caps" style={{ display: 'block', marginBottom: '8px' }}>Ruangan / Catatan Tambahan</label>
                <input type="text" className="styled-input" style={{ width: '100%', padding: '12px', border: '1px solid var(--outline-variant)', borderRadius: '8px' }} placeholder="Contoh: RIK Lt. 3 / Dosen bisanya sore" value={formData.room} onChange={e => setFormData({...formData, room: e.target.value})} />
              </div>

              <div>
                <label className="label-caps" style={{ display: 'block', marginBottom: '8px' }}>Status Jadwal</label>
                <div style={{ display: 'flex', gap: '16px' }}>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                    <input type="radio" name="status" value="PROPOSED" checked={formData.status === 'PROPOSED'} onChange={e => setFormData({...formData, status: e.target.value})} />
                    <span className="body-md">Proposed (Pengajuan)</span>
                  </label>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                    <input type="radio" name="status" value="CONFIRMED" checked={formData.status === 'CONFIRMED'} onChange={e => setFormData({...formData, status: e.target.value})} />
                    <span className="body-md">Confirmed (Pasti)</span>
                  </label>
                </div>
              </div>

              <button type="submit" className="gradient-bg w-full btn-text rounded-lg shadow-ambient" style={{ color: 'white', padding: '16px', border: 'none', marginTop: '16px', cursor: 'pointer', fontWeight: 'bold' }}>
                Tambahkan ke Kalender
              </button>
            </form>
          </div>
        </div>
      )}
    </main>
  );
}
