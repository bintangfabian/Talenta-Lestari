import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navigation from './components/layout/Navigation.jsx';
import Footer from './components/layout/Footer.jsx';
import Home from './pages/Home.jsx';
import MonitoringSimple from './pages/MonitoringSimple.jsx';
import ReportingSimple from './pages/ReportingSimple.jsx';
import NotificationsSimple from './pages/NotificationsSimple.jsx';
import AdminLogin from './pages/AdminLogin.jsx';
import AdminDashboard from './pages/AdminDashboard.jsx';

const Layout = ({ children }) => {
  const location = useLocation();
  
  // Hide navbar and footer on admin login page
  const hideNavAndFooter = location.pathname === '/admin/login';
  
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#fafafa' }}>
      {!hideNavAndFooter && <Navigation />}
      <main style={{ flex: 1 }}>
        {children}
      </main>
      {!hideNavAndFooter && <Footer />}
    </div>
  );
};

const MainApp = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/monitoring" element={<MonitoringSimple />} />
          <Route path="/reporting" element={<ReportingSimple />} />
          <Route path="/notifications" element={<NotificationsSimple />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="*" element={
            <div style={{ padding: '4rem 2rem', textAlign: 'center' }}>
              <h1 style={{ fontSize: '3rem', color: '#6b7280', marginBottom: '1rem' }}>404</h1>
              <p style={{ fontSize: '1.25rem', color: '#9ca3af', marginBottom: '2rem' }}>Halaman tidak ditemukan</p>
              <a href="/" style={{ 
                color: '#B31741', 
                textDecoration: 'none', 
                fontWeight: '500',
                padding: '0.75rem 1.5rem',
                border: '2px solid #B31741',
                borderRadius: '0.5rem',
                display: 'inline-block'
              }}>
                Kembali ke Beranda
              </a>
            </div>
          } />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default MainApp;
