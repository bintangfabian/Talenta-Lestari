// Test App version - Testing components step by step
import { useState } from 'react';

// Step 1: Test basic routing
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

// Step 2: Test UI components (uncomment one by one)
// import { Button } from '@/components/ui/button';
// import { Card } from '@/components/ui/card';

const AppTest = () => {
  const [step, setStep] = useState(1);

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ color: '#2D3748', marginBottom: '20px' }}>
        🧪 Geosafe Component Testing
      </h1>
      
      <div style={{ marginBottom: '20px', padding: '15px', backgroundColor: '#EDF2F7', borderRadius: '8px' }}>
        <h2>Current Step: {step}</h2>
        <button 
          onClick={() => setStep(step + 1)}
          style={{ padding: '10px 20px', margin: '5px', cursor: 'pointer' }}
        >
          Next Step
        </button>
        <button 
          onClick={() => setStep(1)}
          style={{ padding: '10px 20px', margin: '5px', cursor: 'pointer' }}
        >
          Reset
        </button>
      </div>

      {step >= 1 && (
        <div style={{ marginBottom: '20px', padding: '15px', border: '1px solid #E2E8F0', borderRadius: '8px' }}>
          <h3>✅ Step 1: React State Working</h3>
          <p>Counter: {step}</p>
        </div>
      )}

      {step >= 2 && (
        <BrowserRouter>
          <div style={{ marginBottom: '20px', padding: '15px', border: '1px solid #E2E8F0', borderRadius: '8px' }}>
            <h3>✅ Step 2: React Router Working</h3>
            <nav style={{ marginBottom: '10px' }}>
              <Link to="/" style={{ margin: '0 10px', color: '#3182CE' }}>Home</Link>
              <Link to="/test" style={{ margin: '0 10px', color: '#3182CE' }}>Test</Link>
            </nav>
            <Routes>
              <Route path="/" element={<div>📍 Home Route</div>} />
              <Route path="/test" element={<div>📍 Test Route</div>} />
            </Routes>
          </div>
        </BrowserRouter>
      )}

      {step >= 3 && (
        <div style={{ marginBottom: '20px', padding: '15px', border: '1px solid #E2E8F0', borderRadius: '8px' }}>
          <h3>Step 3: Test UI Components</h3>
          <p>Uncomment imports in App-test.tsx to test</p>
          {/* <Button>Test Button</Button> */}
        </div>
      )}

      <div style={{ marginTop: '30px', padding: '15px', backgroundColor: '#FFF5F5', border: '1px solid #FC8181', borderRadius: '8px' }}>
        <h3 style={{ color: '#C53030' }}>Debug Info:</h3>
        <ul style={{ fontSize: '14px' }}>
          <li>Current Step: {step}</li>
          <li>React: ✅ Working</li>
          <li>Routing: {step >= 2 ? '✅ Loaded' : '⏳ Not tested yet'}</li>
          <li>UI Components: {step >= 3 ? '⏳ Ready to test' : '⏳ Not tested yet'}</li>
        </ul>
      </div>
    </div>
  );
};

export default AppTest;

