import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import BottomNav from './components/BottomNav';
import Splash from './pages/Splash';
import Dashboard from './pages/Dashboard';
import ScheduleManager from './pages/ScheduleManager';
import GPATracker from './pages/GPATracker';
import Tasks from './pages/Tasks';
import More from './pages/More';
import Converter from './pages/Converter';
import PackagingMockup from './pages/PackagingMockup';
import Login from './pages/Login';

function AppContent() {
  const location = useLocation();
  const isSplash = location.pathname === '/';
  const isLogin = location.pathname === '/login';
  const noNav = isSplash || isLogin;

  return (
    <div className="app-layout" style={{ background: noNav ? 'transparent' : 'var(--background)' }}>
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Dashboard />} />
        <Route path="/schedule" element={<ScheduleManager />} />
        <Route path="/gpa" element={<GPATracker />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/more" element={<More />} />
        <Route path="/converter" element={<Converter />} />
        <Route path="/packaging" element={<PackagingMockup />} />
      </Routes>
      {!noNav && <BottomNav />}
    </div>
  );
}

function App() {
  return (
    <Router basename="/scratch/">
      <AppContent />
    </Router>
  );
}

export default App;
