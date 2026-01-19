import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navigation from './components/layout/Navigation';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import MonitoringSimple from './pages/MonitoringSimple';
import ReportingSimple from './pages/ReportingSimple';
import NotificationsSimple from './pages/NotificationsSimple';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';

// Error Boundary Component
class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean; error: Error | null }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('React Error Boundary caught an error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '4rem 2rem', textAlign: 'center', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          <h1 style={{ fontSize: '2rem', color: '#ef4444', marginBottom: '1rem' }}>Something went wrong</h1>
          <p style={{ color: '#6b7280', marginBottom: '2rem' }}>
            {this.state.error?.message || 'An unexpected error occurred'}
          </p>
          <button
            onClick={() => window.location.reload()}
            style={{
              padding: '0.75rem 1.5rem',
              backgroundColor: '#B31741',
              color: 'white',
              border: 'none',
              borderRadius: '0.5rem',
              cursor: 'pointer',
              fontWeight: '500'
            }}
          >
            Reload Page
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
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

const MainApp: React.FC = () => {
  console.log('MainApp component rendering...');
  
  try {
    return (
      <ErrorBoundary>
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
      </ErrorBoundary>
    );
  } catch (error) {
    console.error('Error in MainApp:', error);
    return (
      <div style={{ padding: '4rem 2rem', textAlign: 'center' }}>
        <h1 style={{ fontSize: '2rem', color: '#ef4444', marginBottom: '1rem' }}>Error Loading Application</h1>
        <p style={{ color: '#6b7280' }}>{error instanceof Error ? error.message : 'Unknown error'}</p>
        <p style={{ color: '#9ca3af', fontSize: '0.875rem', marginTop: '1rem' }}>Check browser console for details</p>
      </div>
    );
  }
};

export default MainApp;
