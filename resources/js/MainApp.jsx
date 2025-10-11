import React from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './Home.jsx';
import MonitoringSimple from './MonitoringSimple.jsx';
import ReportingSimple from './ReportingSimple.jsx';
import NotificationsSimple from './NotificationsSimple.jsx';

const Navigation = () => {
  const location = useLocation();
  
  const isActive = (path) => location.pathname === path;
  
  const linkStyle = (path) => ({
    color: isActive(path) ? '#2563eb' : '#64748b',
    textDecoration: 'none',
    fontWeight: isActive(path) ? '600' : '500',
    borderBottom: isActive(path) ? '2px solid #2563eb' : 'none',
    paddingBottom: '0.5rem'
  });
  
  return (
    <nav style={{
      backgroundColor: '#ffffff',
      borderBottom: '1px solid #e2e8f0',
      padding: '1rem 2rem',
      boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
      position: 'sticky',
      top: 0,
      zIndex: 1000
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#2563eb', margin: 0 }}>
          🏔️ Geosafe
        </h1>
        <div style={{ display: 'flex', gap: '2rem' }}>
          <Link to="/" style={linkStyle('/')}>Home</Link>
          <Link to="/monitoring" style={linkStyle('/monitoring')}>Monitoring</Link>
          <Link to="/reporting" style={linkStyle('/reporting')}>Reporting</Link>
          <Link to="/notifications" style={linkStyle('/notifications')}>Notifikasi</Link>
        </div>
      </div>
    </nav>
  );
};

const Footer = () => (
  <footer style={{
    backgroundColor: 'white',
    borderTop: '1px solid #e2e8f0',
    padding: '2rem',
    textAlign: 'center',
    color: '#64748b',
    marginTop: 'auto'
  }}>
    <p>© 2024 Geosafe - Sistem Monitoring Tanah Longsor Desa Aribaya</p>
  </footer>
);

const MainApp = () => {
  return (
    <BrowserRouter>
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#f8f9fa' }}>
        <Navigation />
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/monitoring" element={<MonitoringSimple />} />
            <Route path="/reporting" element={<ReportingSimple />} />
            <Route path="/notifications" element={<NotificationsSimple />} />
            <Route path="*" element={
              <div style={{ padding: '4rem 2rem', textAlign: 'center' }}>
                <h1 style={{ fontSize: '3rem', color: '#64748b' }}>404</h1>
                <p style={{ fontSize: '1.25rem', color: '#94a3b8' }}>Halaman tidak ditemukan</p>
                <Link to="/" style={{ color: '#2563eb', textDecoration: 'none', marginTop: '1rem', display: 'inline-block' }}>
                  Kembali ke Home
                </Link>
              </div>
            } />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default MainApp;

