import React, { useState, useEffect } from 'react';

const MonitoringSimple = () => {
  const [currentData, setCurrentData] = useState({
    soilMoisture: 45,
    rainfall: 8,
    landShift: 2.1,
    status: 'Aman'
  });
  
  const [isLive, setIsLive] = useState(true);
  const [lastUpdate, setLastUpdate] = useState(new Date());
  
  useEffect(() => {
    if (!isLive) return;
    
    const interval = setInterval(() => {
      // Simulasi data sensor
      const newData = {
        soilMoisture: Math.random() * 100,
        rainfall: Math.random() * 20,
        landShift: Math.random() * 8,
      };
      
      // Tentukan status
      let status = 'Aman';
      if (newData.soilMoisture > 80 || newData.rainfall > 15 || newData.landShift > 5) {
        status = 'Bahaya';
      } else if (newData.soilMoisture > 60 || newData.rainfall > 10 || newData.landShift > 3) {
        status = 'Waspada';
      }
      
      setCurrentData({ ...newData, status });
      setLastUpdate(new Date());
    }, 3000);
    
    return () => clearInterval(interval);
  }, [isLive]);
  
  const getStatusColor = (status) => {
    if (status === 'Aman') return '#22c55e';
    if (status === 'Waspada') return '#eab308';
    return '#ef4444';
  };
  
  return (
    <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
      {/* Header */}
      <div style={{ marginBottom: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h1 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#1e293b', marginBottom: '0.5rem' }}>
            📊 Monitoring Real-time
          </h1>
          <p style={{ color: '#64748b' }}>
            Terakhir diperbarui: {lastUpdate.toLocaleString('id-ID')}
          </p>
        </div>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '0.5rem',
            padding: '0.5rem 1rem',
            backgroundColor: isLive ? '#dcfce7' : '#f1f5f9',
            borderRadius: '0.5rem'
          }}>
            <div style={{ 
              width: '8px', 
              height: '8px', 
              borderRadius: '50%', 
              backgroundColor: isLive ? '#22c55e' : '#94a3b8',
              animation: isLive ? 'pulse 2s infinite' : 'none'
            }} />
            <span style={{ fontWeight: '500', color: '#1e293b' }}>
              {isLive ? 'LIVE' : 'PAUSED'}
            </span>
          </div>
          
          <button
            onClick={() => setIsLive(!isLive)}
            style={{
              padding: '0.5rem 1rem',
              backgroundColor: 'white',
              border: '1px solid #e2e8f0',
              borderRadius: '0.5rem',
              cursor: 'pointer',
              fontWeight: '500'
            }}
          >
            {isLive ? '⏸️ Pause' : '▶️ Resume'}
          </button>
        </div>
      </div>
      
      {/* Status Card */}
      <div style={{
        backgroundColor: getStatusColor(currentData.status),
        color: 'white',
        padding: '2rem',
        borderRadius: '1rem',
        marginBottom: '2rem',
        textAlign: 'center',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
      }}>
        <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', margin: 0 }}>
          Status: {currentData.status}
        </h2>
        <p style={{ marginTop: '0.5rem', opacity: 0.9 }}>
          {currentData.status === 'Aman' && 'Kondisi normal, tidak ada ancaman'}
          {currentData.status === 'Waspada' && 'Perlu perhatian khusus, pantau terus'}
          {currentData.status === 'Bahaya' && 'PERINGATAN! Segera lakukan evakuasi'}
        </p>
      </div>
      
      {/* Sensor Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
        {/* Kelembaban Tanah */}
        <div style={{
          backgroundColor: 'white',
          padding: '1.5rem',
          borderRadius: '1rem',
          border: '1px solid #e2e8f0',
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
            <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: '#1e293b', margin: 0 }}>
              💧 Kelembaban Tanah
            </h3>
            <span style={{ 
              fontSize: '0.875rem', 
              padding: '0.25rem 0.75rem',
              backgroundColor: currentData.soilMoisture > 80 ? '#fee2e2' : currentData.soilMoisture > 60 ? '#fef3c7' : '#dcfce7',
              color: currentData.soilMoisture > 80 ? '#ef4444' : currentData.soilMoisture > 60 ? '#eab308' : '#22c55e',
              borderRadius: '0.5rem',
              fontWeight: '500'
            }}>
              {currentData.soilMoisture > 80 ? 'Tinggi' : currentData.soilMoisture > 60 ? 'Sedang' : 'Normal'}
            </span>
          </div>
          <div style={{ fontSize: '3rem', fontWeight: 'bold', color: '#2563eb' }}>
            {currentData.soilMoisture.toFixed(1)}%
          </div>
          <p style={{ color: '#64748b', fontSize: '0.875rem', marginTop: '0.5rem' }}>
            Ambang batas: {'<'} 60% (Normal), 60-80% (Waspada), {'>'} 80% (Bahaya)
          </p>
        </div>
        
        {/* Curah Hujan */}
        <div style={{
          backgroundColor: 'white',
          padding: '1.5rem',
          borderRadius: '1rem',
          border: '1px solid #e2e8f0',
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
            <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: '#1e293b', margin: 0 }}>
              ☁️ Curah Hujan
            </h3>
            <span style={{ 
              fontSize: '0.875rem', 
              padding: '0.25rem 0.75rem',
              backgroundColor: currentData.rainfall > 15 ? '#fee2e2' : currentData.rainfall > 10 ? '#fef3c7' : '#dcfce7',
              color: currentData.rainfall > 15 ? '#ef4444' : currentData.rainfall > 10 ? '#eab308' : '#22c55e',
              borderRadius: '0.5rem',
              fontWeight: '500'
            }}>
              {currentData.rainfall > 15 ? 'Tinggi' : currentData.rainfall > 10 ? 'Sedang' : 'Normal'}
            </span>
          </div>
          <div style={{ fontSize: '3rem', fontWeight: 'bold', color: '#2563eb' }}>
            {currentData.rainfall.toFixed(1)} <span style={{ fontSize: '1.5rem' }}>mm/h</span>
          </div>
          <p style={{ color: '#64748b', fontSize: '0.875rem', marginTop: '0.5rem' }}>
            Ambang batas: {'<'} 10 (Normal), 10-15 (Waspada), {'>'} 15 (Bahaya)
          </p>
        </div>
        
        {/* Pergeseran Tanah */}
        <div style={{
          backgroundColor: 'white',
          padding: '1.5rem',
          borderRadius: '1rem',
          border: '1px solid #e2e8f0',
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
            <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: '#1e293b', margin: 0 }}>
              📏 Pergeseran Tanah
            </h3>
            <span style={{ 
              fontSize: '0.875rem', 
              padding: '0.25rem 0.75rem',
              backgroundColor: currentData.landShift > 5 ? '#fee2e2' : currentData.landShift > 3 ? '#fef3c7' : '#dcfce7',
              color: currentData.landShift > 5 ? '#ef4444' : currentData.landShift > 3 ? '#eab308' : '#22c55e',
              borderRadius: '0.5rem',
              fontWeight: '500'
            }}>
              {currentData.landShift > 5 ? 'Tinggi' : currentData.landShift > 3 ? 'Sedang' : 'Normal'}
            </span>
          </div>
          <div style={{ fontSize: '3rem', fontWeight: 'bold', color: '#2563eb' }}>
            {currentData.landShift.toFixed(1)} <span style={{ fontSize: '1.5rem' }}>mm</span>
          </div>
          <p style={{ color: '#64748b', fontSize: '0.875rem', marginTop: '0.5rem' }}>
            Ambang batas: {'<'} 3 (Normal), 3-5 (Waspada), {'>'} 5 (Bahaya)
          </p>
        </div>
      </div>
      
      {/* Info Card */}
      <div style={{
        backgroundColor: 'white',
        padding: '1.5rem',
        borderRadius: '1rem',
        border: '1px solid #e2e8f0'
      }}>
        <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#1e293b', marginBottom: '1rem' }}>
          ℹ️ Informasi Monitoring
        </h3>
        <ul style={{ color: '#64748b', lineHeight: '1.8', paddingLeft: '1.5rem' }}>
          <li>Data diperbarui setiap 3 detik secara otomatis</li>
          <li>Status ditentukan berdasarkan kombinasi ketiga sensor</li>
          <li>Notifikasi otomatis akan dikirim saat status Bahaya terdeteksi</li>
          <li>Klik tombol Pause untuk menghentikan pembaruan data sementara</li>
        </ul>
      </div>
    </div>
  );
};

export default MonitoringSimple;

