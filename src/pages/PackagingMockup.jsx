import React, { useState, useRef } from 'react';
import html2canvas from 'html2canvas';
import { PDFDocument } from 'pdf-lib';
import './PackagingMockup.css';

export default function PackagingMockup() {
  const [sediaan, setSediaan] = useState('Sirup');
  const [length, setLength] = useState('15');
  const [width, setWidth] = useState('5');
  const previewRef = useRef(null);

  const handleDownload = async () => {
    if (previewRef.current) {
      const canvas = await html2canvas(previewRef.current, { scale: 3, useCORS: true });
      const dataUrl = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.href = dataUrl;
      link.download = `Mockup_${sediaan}_${length}x${width}.png`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  const handleDownloadPDF = async () => {
    if (previewRef.current) {
      const canvas = await html2canvas(previewRef.current, { scale: 3, useCORS: true });
      const imgData = canvas.toDataURL('image/png');
      
      const pdfDoc = await PDFDocument.create();
      const pngImage = await pdfDoc.embedPng(imgData);
      
      const pngDims = pngImage.scale(1);
      const page = pdfDoc.addPage([pngDims.width, pngDims.height]);
      
      page.drawImage(pngImage, {
        x: 0,
        y: 0,
        width: pngDims.width,
        height: pngDims.height,
      });
      
      const pdfBytes = await pdfDoc.save();
      const blob = new Blob([pdfBytes], { type: 'application/pdf' });
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = `Mockup_${sediaan}_${length}x${width}.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  const getTemplate = () => {
    switch (sediaan) {
      case 'Sirup':
        return (
          <div className="mockup-template sirup-template">
            <div className="section-left">
              <div className="m-text title-small">KOMPOSISI</div>
              <div className="m-text desc">Tiap 5 ml mengandung:<br/>Bahan Aktif ... 120mg</div>
              <div className="m-text title-small mt-auto">INDIKASI</div>
              <div className="m-text desc">Meredakan gejala yang berhubungan dengan kondisi tersebut.</div>
            </div>
            <div className="section-center">
              <div className="brand-logo">PHARMASSIST</div>
              <div className="brand-name">SYRUPOX</div>
              <div className="brand-generic">Nama Generik Sirup 120mg/5ml</div>
              <div className="brand-netto">Netto: 60 ml</div>
            </div>
            <div className="section-right">
              <div className="m-text title-small">ATURAN PAKAI</div>
              <div className="m-text desc">Dewasa: 3x sehari 1 sendok takar<br/>Anak: 3x sehari 1/2 sendok takar</div>
              <div className="m-text title-small mt-auto">Pabrik</div>
              <div className="m-text desc">PT. Farmasi AI<br/>Depok, Indonesia</div>
            </div>
          </div>
        );
      case 'Tablet':
        return (
          <div className="mockup-template tablet-template">
             <div className="brand-circle"></div>
             <div className="tablet-header">
                <div className="brand-name">TABLETOX</div>
                <div className="brand-generic">Bahan Aktif 500mg</div>
             </div>
             <div className="tablet-footer">
                <div className="m-text">Isi: 10 Blister @ 10 Tablet</div>
                <div className="m-text">PT. Farmasi AI</div>
             </div>
          </div>
        );
      case 'Salep':
        return (
          <div className="mockup-template salep-template">
            <div className="salep-cap-area">Tutup</div>
            <div className="salep-body">
              <div className="brand-name">OINTMENTOX</div>
              <div className="brand-generic">Bahan Aktif 2%</div>
              <div className="brand-netto">Netto: 15g</div>
            </div>
            <div className="salep-crimp">Klip</div>
          </div>
        );
      case 'Ampul':
      case 'Vial':
        return (
          <div className="mockup-template vial-template">
            <div className="vial-top">
               <div className="m-text title-small">Untuk Injeksi IV/IM</div>
            </div>
            <div className="vial-middle">
               <div className="brand-name">{sediaan.toUpperCase()}OX</div>
               <div className="brand-generic">Bahan Aktif 10mg/ml</div>
            </div>
            <div className="vial-bottom">
               <div className="m-text desc">Volume: 10 ml</div>
               <div className="m-text desc">PT. Farmasi AI</div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  const l = parseFloat(length) || 1;
  const w = parseFloat(width) || 1;

  return (
    <main className="main-content" style={{ padding: '24px 20px', paddingBottom: '100px' }}>
      <header className="page-header">
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
          <div style={{ width: '48px', height: '48px', borderRadius: '16px', background: 'var(--primary-container)', color: 'var(--on-primary-container)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line></svg>
          </div>
          <h1 className="h1" style={{ color: 'var(--primary)', fontSize: '24px' }}>Packaging Mockup</h1>
        </div>
        <p className="body-md" style={{ color: 'var(--on-surface-variant)' }}>Buat dan unduh desain kemasan untuk sediaan praktikummu.</p>
      </header>

      <section className="section-block">
        <div className="converter-card glass shadow-ambient rounded-lg">
          <div className="input-group">
            <label className="label-caps" style={{ color: 'var(--outline)', marginBottom: '4px', display: 'block' }}>JENIS SEDIAAN</label>
            <select className="styled-select-full" value={sediaan} onChange={(e) => setSediaan(e.target.value)}>
              <option value="Sirup">Sirup (Label Botol)</option>
              <option value="Tablet">Tablet (Kotak Dus)</option>
              <option value="Salep">Salep (Tube)</option>
              <option value="Ampul">Ampul (Label)</option>
              <option value="Vial">Vial (Label)</option>
            </select>
          </div>
          
          <div style={{ display: 'flex', gap: '16px', marginTop: '16px' }}>
            <div className="input-group" style={{ flex: 1 }}>
              <label className="label-caps" style={{ color: 'var(--outline)', marginBottom: '4px', display: 'block' }}>PANJANG (CM)</label>
              <input type="number" className="styled-input" value={length} onChange={(e) => setLength(e.target.value)} />
            </div>
            <div className="input-group" style={{ flex: 1 }}>
              <label className="label-caps" style={{ color: 'var(--outline)', marginBottom: '4px', display: 'block' }}>LEBAR/TINGGI (CM)</label>
              <input type="number" className="styled-input" value={width} onChange={(e) => setWidth(e.target.value)} />
            </div>
          </div>
        </div>
      </section>

      <section className="section-block" style={{ marginTop: '24px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
          <h2 className="h2" style={{ fontSize: '18px' }}>Preview Desain</h2>
          <span className="label-caps" style={{ color: 'var(--primary)' }}>Ratio {l}:{w}</span>
        </div>
        
        <div className="preview-container glass rounded-lg shadow-ambient">
          <div className="aspect-ratio-wrapper" style={{ aspectRatio: `${l} / ${w}` }}>
            <div className="mockup-content" ref={previewRef}>
              {getTemplate()}
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '12px', marginTop: '24px' }}>
          <button className="gradient-bg w-full btn-text rounded-lg shadow-ambient" style={{ flex: 1, color: 'white', padding: '16px', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }} onClick={handleDownload}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
            Unduh Gambar (PNG)
          </button>
          
          <button className="glass w-full btn-text rounded-lg shadow-ambient" style={{ flex: 1, background: 'var(--primary-container)', color: 'var(--on-primary-container)', padding: '16px', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }} onClick={handleDownloadPDF}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
            Unduh PDF
          </button>
        </div>
      </section>
    </main>
  );
}
