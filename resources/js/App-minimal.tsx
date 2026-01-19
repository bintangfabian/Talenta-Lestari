// Minimal version of full App - testing imports gradually
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Test 1: Simple page without UI components
const SimplePage = () => (
  <div style={{ padding: '20px' }}>
    <h1>Simple Page Works!</h1>
    <p>If you see this, routing works.</p>
  </div>
);

const AppMinimal = () => {
  return (
    <BrowserRouter>
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <nav style={{ 
          padding: '1rem', 
          backgroundColor: '#f7fafc', 
          borderBottom: '1px solid #e2e8f0' 
        }}>
          <h2>Talenta Lestari Minimal Test</h2>
        </nav>
        
        <main style={{ flex: 1, padding: '2rem' }}>
          <Routes>
            <Route path="/" element={<SimplePage />} />
            <Route path="*" element={<div>404 - Page not found</div>} />
          </Routes>
        </main>
        
        <footer style={{ 
          padding: '1rem', 
          backgroundColor: '#f7fafc', 
          borderTop: '1px solid #e2e8f0',
          textAlign: 'center'
        }}>
          © 2024 Talenta Lestari
        </footer>
      </div>
    </BrowserRouter>
  );
};

export default AppMinimal;

