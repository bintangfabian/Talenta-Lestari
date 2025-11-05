import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const navItems = [
    { path: '/', label: 'Beranda' },
    { path: '/monitoring', label: 'Monitoring' },
    { path: '/reporting', label: 'Laporan' },
    { path: '/notifications', label: 'Notifikasi' },
  ];

  return (
    <nav style={{
      backgroundColor: '#ffffff',
      borderBottom: '1px solid #e5e7eb',
      padding: '0',
      boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
      position: 'sticky',
      top: 0,
      zIndex: 1000
    }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '4rem' }}>
          {/* Logo */}
          <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="#B31741" opacity="0.3" />
              <path d="M2 17L12 22L22 17" stroke="#B31741" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M2 12L12 17L22 12" stroke="#B31741" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#B31741' }}>
              Geosafe
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                style={{
                  textDecoration: 'none',
                  color: isActive(item.path) ? 'white' : '#B31741',
                  fontWeight: '500',
                  padding: '0.5rem 1rem',
                  borderRadius: '0.575rem',
                  backgroundColor: isActive(item.path) ? '#B31741' : 'transparent',
                  transition: 'all 0.2s',
                  fontSize: '0.9375rem',
                }}
                onMouseEnter={(e) => {
                  if (!isActive(item.path)) {
                    e.currentTarget.style.backgroundColor = '#B31741';
                    e.currentTarget.style.color = 'white';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive(item.path)) {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.color = '#B31741';
                  }
                }}
              >
                {item.label}
              </Link>
            ))}

            {/* Admin Link */}
            <Link
              to="/admin/login"
              style={{
                textDecoration: 'none',
                color: isActive('/admin/login') || isActive('/admin/dashboard') ? 'white' : '#B31741',
                fontWeight: '500',
                padding: '0.5rem 1rem',
                borderRadius: '0.575rem',
                backgroundColor: isActive('/admin/login') || isActive('/admin/dashboard') ? '#B31741' : 'transparent',
                border: '1px solid #B31741',
                transition: 'all 0.2s',
                fontSize: '0.9375rem',
                marginLeft: '0.5rem'
              }}
              onMouseEnter={(e) => {
                if (!isActive('/admin/login') && !isActive('/admin/dashboard')) {
                  e.currentTarget.style.backgroundColor = '#B31741';
                  e.currentTarget.style.color = 'white';
                }
              }}
              onMouseLeave={(e) => {
                if (!isActive('/admin/login') && !isActive('/admin/dashboard')) {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = '#B31741';
                }
              }}
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
