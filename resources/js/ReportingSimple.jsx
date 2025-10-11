import React, { useState } from 'react';

const ReportingSimple = () => {
  // Generate mock data
  const generateData = () => {
    const data = [];
    const now = new Date();
    
    for (let i = 0; i < 50; i++) {
      const timestamp = new Date(now.getTime() - i * 3600000); // Every hour
      const soilMoisture = Math.random() * 100;
      const rainfall = Math.random() * 20;
      const landShift = Math.random() * 8;
      
      let status = 'Aman';
      if (soilMoisture > 80 || rainfall > 15 || landShift > 5) {
        status = 'Bahaya';
      } else if (soilMoisture > 60 || rainfall > 10 || landShift > 3) {
        status = 'Waspada';
      }
      
      data.push({
        id: i,
        timestamp,
        soilMoisture,
        rainfall,
        landShift,
        status
      });
    }
    
    return data;
  };
  
  const [data] = useState(generateData());
  const [filter, setFilter] = useState('all');
  
  const filteredData = filter === 'all' 
    ? data 
    : data.filter(d => d.status === filter);
  
  const statusCount = {
    aman: data.filter(d => d.status === 'Aman').length,
    waspada: data.filter(d => d.status === 'Waspada').length,
    bahaya: data.filter(d => d.status === 'Bahaya').length
  };
  
  const exportCSV = () => {
    const csv = [
      ['Tanggal', 'Waktu', 'Kelembaban (%)', 'Curah Hujan (mm/h)', 'Pergeseran (mm)', 'Status'],
      ...filteredData.map(row => [
        row.timestamp.toLocaleDateString('id-ID'),
        row.timestamp.toLocaleTimeString('id-ID'),
        row.soilMoisture.toFixed(1),
        row.rainfall.toFixed(1),
        row.landShift.toFixed(1),
        row.status
      ])
    ].map(row => row.join(',')).join('\n');
    
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `laporan-geosafe-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
  };
  
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
            📈 Laporan Data Monitoring
          </h1>
          <p style={{ color: '#64748b' }}>
            Riwayat data sensor dan status monitoring
          </p>
        </div>
        
        <button
          onClick={exportCSV}
          style={{
            padding: '0.75rem 1.5rem',
            backgroundColor: '#2563eb',
            color: 'white',
            border: 'none',
            borderRadius: '0.5rem',
            cursor: 'pointer',
            fontWeight: '500',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}
        >
          📥 Export CSV
        </button>
      </div>
      
      {/* Statistics */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
        <div style={{
          backgroundColor: 'white',
          padding: '1.5rem',
          borderRadius: '1rem',
          border: '1px solid #e2e8f0'
        }}>
          <div style={{ color: '#64748b', fontSize: '0.875rem', marginBottom: '0.5rem' }}>Total Data</div>
          <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#1e293b' }}>{data.length}</div>
        </div>
        
        <div style={{
          backgroundColor: 'white',
          padding: '1.5rem',
          borderRadius: '1rem',
          border: '1px solid #e2e8f0'
        }}>
          <div style={{ color: '#64748b', fontSize: '0.875rem', marginBottom: '0.5rem' }}>Status Aman</div>
          <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#22c55e' }}>{statusCount.aman}</div>
        </div>
        
        <div style={{
          backgroundColor: 'white',
          padding: '1.5rem',
          borderRadius: '1rem',
          border: '1px solid #e2e8f0'
        }}>
          <div style={{ color: '#64748b', fontSize: '0.875rem', marginBottom: '0.5rem' }}>Status Waspada</div>
          <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#eab308' }}>{statusCount.waspada}</div>
        </div>
        
        <div style={{
          backgroundColor: 'white',
          padding: '1.5rem',
          borderRadius: '1rem',
          border: '1px solid #e2e8f0'
        }}>
          <div style={{ color: '#64748b', fontSize: '0.875rem', marginBottom: '0.5rem' }}>Status Bahaya</div>
          <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#ef4444' }}>{statusCount.bahaya}</div>
        </div>
      </div>
      
      {/* Filters */}
      <div style={{
        backgroundColor: 'white',
        padding: '1.5rem',
        borderRadius: '1rem',
        border: '1px solid #e2e8f0',
        marginBottom: '2rem'
      }}>
        <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: '#1e293b', marginBottom: '1rem' }}>
          🔍 Filter Data
        </h3>
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          {['all', 'Aman', 'Waspada', 'Bahaya'].map(status => (
            <button
              key={status}
              onClick={() => setFilter(status)}
              style={{
                padding: '0.5rem 1rem',
                backgroundColor: filter === status ? '#2563eb' : 'white',
                color: filter === status ? 'white' : '#64748b',
                border: '1px solid #e2e8f0',
                borderRadius: '0.5rem',
                cursor: 'pointer',
                fontWeight: '500'
              }}
            >
              {status === 'all' ? 'Semua' : status}
            </button>
          ))}
        </div>
      </div>
      
      {/* Data Table */}
      <div style={{
        backgroundColor: 'white',
        borderRadius: '1rem',
        border: '1px solid #e2e8f0',
        overflow: 'hidden'
      }}>
        <div style={{ padding: '1.5rem', borderBottom: '1px solid #e2e8f0' }}>
          <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: '#1e293b', margin: 0 }}>
            Data Monitoring ({filteredData.length} records)
          </h3>
        </div>
        
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead style={{ backgroundColor: '#f8f9fa' }}>
              <tr>
                <th style={{ padding: '1rem', textAlign: 'left', fontWeight: '600', color: '#1e293b', borderBottom: '1px solid #e2e8f0' }}>
                  Tanggal & Waktu
                </th>
                <th style={{ padding: '1rem', textAlign: 'left', fontWeight: '600', color: '#1e293b', borderBottom: '1px solid #e2e8f0' }}>
                  Kelembaban
                </th>
                <th style={{ padding: '1rem', textAlign: 'left', fontWeight: '600', color: '#1e293b', borderBottom: '1px solid #e2e8f0' }}>
                  Curah Hujan
                </th>
                <th style={{ padding: '1rem', textAlign: 'left', fontWeight: '600', color: '#1e293b', borderBottom: '1px solid #e2e8f0' }}>
                  Pergeseran
                </th>
                <th style={{ padding: '1rem', textAlign: 'left', fontWeight: '600', color: '#1e293b', borderBottom: '1px solid #e2e8f0' }}>
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredData.slice(0, 20).map((row, index) => (
                <tr key={row.id} style={{ backgroundColor: index % 2 === 0 ? 'white' : '#f8f9fa' }}>
                  <td style={{ padding: '1rem', borderBottom: '1px solid #e2e8f0' }}>
                    <div style={{ fontWeight: '500', color: '#1e293b' }}>
                      {row.timestamp.toLocaleDateString('id-ID')}
                    </div>
                    <div style={{ fontSize: '0.875rem', color: '#64748b' }}>
                      {row.timestamp.toLocaleTimeString('id-ID')}
                    </div>
                  </td>
                  <td style={{ padding: '1rem', fontFamily: 'monospace', color: '#2563eb', borderBottom: '1px solid #e2e8f0' }}>
                    {row.soilMoisture.toFixed(1)}%
                  </td>
                  <td style={{ padding: '1rem', fontFamily: 'monospace', color: '#2563eb', borderBottom: '1px solid #e2e8f0' }}>
                    {row.rainfall.toFixed(1)} mm/h
                  </td>
                  <td style={{ padding: '1rem', fontFamily: 'monospace', color: '#2563eb', borderBottom: '1px solid #e2e8f0' }}>
                    {row.landShift.toFixed(1)} mm
                  </td>
                  <td style={{ padding: '1rem', borderBottom: '1px solid #e2e8f0' }}>
                    <span style={{
                      padding: '0.25rem 0.75rem',
                      backgroundColor: getStatusColor(row.status) + '20',
                      color: getStatusColor(row.status),
                      borderRadius: '0.5rem',
                      fontSize: '0.875rem',
                      fontWeight: '500'
                    }}>
                      {row.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {filteredData.length > 20 && (
          <div style={{ padding: '1rem', textAlign: 'center', color: '#64748b', fontSize: '0.875rem', borderTop: '1px solid #e2e8f0' }}>
            Menampilkan 20 dari {filteredData.length} data
          </div>
        )}
      </div>
    </div>
  );
};

export default ReportingSimple;

