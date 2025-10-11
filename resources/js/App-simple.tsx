// Simple test version of App
const AppSimple = () => {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ color: '#4A5568' }}>🎉 Geosafe Laravel + React</h1>
      <p style={{ color: '#718096' }}>Jika Anda melihat pesan ini, React berhasil ter-mount!</p>
      <div style={{ marginTop: '20px', padding: '15px', backgroundColor: '#EDF2F7', borderRadius: '8px' }}>
        <h2 style={{ color: '#2D3748' }}>Status:</h2>
        <ul style={{ color: '#4A5568' }}>
          <li>✅ Vite dev server: Running</li>
          <li>✅ Laravel server: Running</li>
          <li>✅ React: Mounted</li>
          <li>✅ TypeScript: Working</li>
        </ul>
      </div>
      <div style={{ marginTop: '20px' }}>
        <p style={{ fontSize: '14px', color: '#A0AEC0' }}>
          Timestamp: {new Date().toLocaleString()}
        </p>
      </div>
    </div>
  );
};

export default AppSimple;

