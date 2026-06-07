import React from 'react';
import './StudyChip.css';

export default function StudyChip({ label, type = 'primary' }) {
  return (
    <span className={`study-chip label-caps rounded-full ${type}`}>
      {label}
    </span>
  );
}
