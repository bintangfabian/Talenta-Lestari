import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Shield, CheckCircle2, BarChart3, Database, AlertTriangle, TrendingUp, Users, Settings, LogOut, Loader2 } from 'lucide-react';

interface AdminUser {
  name: string;
  role: string;
  email?: string;
}

const AdminDashboard: React.FC = () => {
  const [user, setUser] = useState<AdminUser | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is logged in
    const storedUser = localStorage.getItem('admin_user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      navigate('/admin/login');
    }
    setIsLoading(false);
  }, [navigate]);

  const handleLogout = async () => {
    try {
      await fetch('/api/v1/admin/logout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]')?.getAttribute('content') || '',
        },
      });
    } catch (err) {
      console.error('Logout error:', err);
    } finally {
      localStorage.removeItem('admin_user');
      alert('Logout Berhasil! Anda telah keluar dari sistem.');
      navigate('/');
    }
  };

  if (isLoading) {
    return (
      <div style={{
        minHeight: '100vh',
        backgroundColor: '#f8f9fa',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
          <div style={{ textAlign: 'center' }}>
            <Loader2 className="h-8 w-8 animate-spin" style={{ margin: '0 auto 1rem', color: '#6b7280' }} />
            <p style={{ color: '#6b7280' }}>Memuat dashboard...</p>
          </div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  const cardStyle = {
    backgroundColor: 'white',
    borderRadius: '0.75rem',
    padding: '1.5rem',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    border: '1px solid #e2e8f0'
  };

  const statCardStyle = {
    ...cardStyle,
    textAlign: 'center'
  };

  const buttonStyle = {
    padding: '0.75rem 1.5rem',
    backgroundColor: '#B31741',
    color: 'white',
    border: 'none',
    borderRadius: '0.375rem',
    fontSize: '0.875rem',
    fontWeight: '600',
    cursor: 'pointer',
    textDecoration: 'none',
    display: 'inline-block'
  };

  const outlineButtonStyle = {
    ...buttonStyle,
    backgroundColor: 'transparent',
    color: '#B31741',
    border: '1px solid #B31741'
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f8f9fa' }}>
      {/* Header */}
      <header style={{
        backgroundColor: 'white',
        borderBottom: '1px solid #e2e8f0',
        padding: '1rem 0'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 1rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <Shield className="h-8 w-8" style={{ color: '#B31741' }} />
            <div>
              <h1 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#1f2937', margin: 0 }}>
                Admin Dashboard
              </h1>
              <p style={{ fontSize: '0.875rem', color: '#6b7280', margin: 0 }}>
                Talenta Lestari Aribaya
              </p>
            </div>
          </div>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ textAlign: 'right' }}>
              <p style={{ fontSize: '0.875rem', fontWeight: '500', color: '#1f2937', margin: 0 }}>
                {user.name}
              </p>
              <span style={{
                fontSize: '0.75rem',
                backgroundColor: '#f3f4f6',
                color: '#374151',
                padding: '0.25rem 0.5rem',
                borderRadius: '0.25rem'
              }}>
                {user.role}
              </span>
            </div>
            <button 
              onClick={handleLogout}
              style={{
                ...outlineButtonStyle,
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                transition: 'all 0.2s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#B31741';
                e.currentTarget.style.color = 'white';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = '#B31741';
              }}
            >
              <LogOut className="h-4 w-4" style={{ marginRight: '0.25rem' }} /> Logout
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem 1rem' }}>
        <div style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1f2937', marginBottom: '0.5rem' }}>
            Selamat Datang, {user.name}
          </h2>
          <p style={{ color: '#6b7280' }}>
            Panel administrasi sistem monitoring tanah longsor Desa Aribaya, Banjarnegara
          </p>
        </div>

        {/* Stats Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '1.5rem',
          marginBottom: '2rem'
        }}>
          <div style={statCardStyle}>
            <CheckCircle2 className="h-8 w-8" style={{ margin: '0 auto 0.5rem', color: '#059669' }} />
            <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#059669', marginBottom: '0.25rem' }}>
              Aktif
            </div>
            <p style={{ fontSize: '0.875rem', color: '#6b7280', margin: 0 }}>
              Status Sistem
            </p>
          </div>

          <div style={statCardStyle}>
            <BarChart3 className="h-8 w-8" style={{ margin: '0 auto 0.5rem', color: '#1f2937' }} />
            <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1f2937', marginBottom: '0.25rem' }}>
              3
            </div>
            <p style={{ fontSize: '0.875rem', color: '#6b7280', margin: 0 }}>
              Sensor Aktif
            </p>
          </div>

          <div style={statCardStyle}>
            <Database className="h-8 w-8" style={{ margin: '0 auto 0.5rem', color: '#1f2937' }} />
            <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1f2937', marginBottom: '0.25rem' }}>
              1,440
            </div>
            <p style={{ fontSize: '0.875rem', color: '#6b7280', margin: 0 }}>
              Data Hari Ini
            </p>
          </div>

          <div style={statCardStyle}>
            <AlertTriangle className="h-8 w-8" style={{ margin: '0 auto 0.5rem', color: '#1f2937' }} />
            <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1f2937', marginBottom: '0.25rem' }}>
              0
            </div>
            <p style={{ fontSize: '0.875rem', color: '#6b7280', margin: 0 }}>
              Alert Aktif
            </p>
          </div>
        </div>

        {/* Quick Actions */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '1.5rem'
        }}>
          <div style={cardStyle}>
            <h3 style={{ 
              fontSize: '1.125rem', 
              fontWeight: '600', 
              color: '#1f2937',
              marginBottom: '0.5rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              <TrendingUp className="h-5 w-5" /> Monitoring Real-time
            </h3>
            <p style={{ color: '#6b7280', marginBottom: '1rem', fontSize: '0.875rem' }}>
              Pantau data sensor secara real-time dan status sistem monitoring.
            </p>
            <button 
              onClick={() => navigate('/monitoring')}
              style={buttonStyle}
            >
              Buka Monitoring
            </button>
          </div>

          <div style={cardStyle}>
            <h3 style={{ 
              fontSize: '1.125rem', 
              fontWeight: '600', 
              color: '#1f2937',
              marginBottom: '0.5rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              <Users className="h-5 w-5" /> Manajemen User
            </h3>
            <p style={{ color: '#6b7280', marginBottom: '1rem', fontSize: '0.875rem' }}>
              Kelola akun administrator dan hak akses sistem.
            </p>
            <button 
              style={{...outlineButtonStyle, cursor: 'not-allowed', opacity: 0.6}}
              disabled
            >
              Segera Hadir
            </button>
          </div>

          <div style={cardStyle}>
            <h3 style={{ 
              fontSize: '1.125rem', 
              fontWeight: '600', 
              color: '#1f2937',
              marginBottom: '0.5rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              <Settings className="h-5 w-5" /> Konfigurasi Sistem
            </h3>
            <p style={{ color: '#6b7280', marginBottom: '1rem', fontSize: '0.875rem' }}>
              Atur parameter sensor, threshold alert, dan konfigurasi sistem.
            </p>
            <button 
              style={{...outlineButtonStyle, cursor: 'not-allowed', opacity: 0.6}}
              disabled
            >
              Segera Hadir
            </button>
          </div>
        </div>

        {/* System Info */}
        <div style={{...cardStyle, marginTop: '2rem'}}>
          <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: '#1f2937', marginBottom: '1rem' }}>
            Informasi Sistem
          </h3>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1rem',
            fontSize: '0.875rem'
          }}>
            <div>
              <p style={{ fontWeight: '500', color: '#1f2937', margin: '0 0 0.25rem 0' }}>
                Lokasi Monitoring
              </p>
              <p style={{ color: '#6b7280', margin: 0 }}>
                Desa Aribaya, Banjarnegara
              </p>
            </div>
            <div>
              <p style={{ fontWeight: '500', color: '#1f2937', margin: '0 0 0.25rem 0' }}>
                Versi Sistem
              </p>
              <p style={{ color: '#6b7280', margin: 0 }}>
                Talenta Lestari v2.0
              </p>
            </div>
            <div>
              <p style={{ fontWeight: '500', color: '#1f2937', margin: '0 0 0.25rem 0' }}>
                Last Update
              </p>
              <p style={{ color: '#6b7280', margin: 0 }}>
                {new Date().toLocaleString('id-ID')}
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;