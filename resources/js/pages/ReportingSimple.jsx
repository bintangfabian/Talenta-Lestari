import React, { useState } from 'react';

const ReportingSimple = () => {
  // Generate mock data untuk 30 hari terakhir
  const generateData = () => {
    const data = [];
    const now = new Date();
    
    for (let i = 0; i < 30; i++) {
      const date = new Date(now.getTime() - i * 86400000); // Every day
      const soilMoisture = Math.random() * 40 + 40; // 40-80
      const rainfall = Math.random() * 15 + 2; // 2-17
      const landShift = Math.random() * 6 + 0.5; // 0.5-6.5
      
      let status = 'Aman';
      if (soilMoisture > 80 || rainfall > 15 || landShift > 5) {
        status = 'Bahaya';
      } else if (soilMoisture > 60 || rainfall > 10 || landShift > 3) {
        status = 'Waspada';
      }
      
      data.push({
        id: i,
        date,
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
  const [dateRange, setDateRange] = useState('30');
  
  const filteredData = filter === 'all' 
    ? data 
    : data.filter(d => d.status === filter);
  
  const statusCount = {
    total: data.length,
    aman: data.filter(d => d.status === 'Aman').length,
    waspada: data.filter(d => d.status === 'Waspada').length,
    bahaya: data.filter(d => d.status === 'Bahaya').length
  };
  
  // Calculate averages
  const averages = {
    soilMoisture: (data.reduce((sum, d) => sum + d.soilMoisture, 0) / data.length).toFixed(1),
    rainfall: (data.reduce((sum, d) => sum + d.rainfall, 0) / data.length).toFixed(1),
    landShift: (data.reduce((sum, d) => sum + d.landShift, 0) / data.length).toFixed(1)
  };
  
  const exportCSV = () => {
    const csv = [
      ['Tanggal', 'Kelembaban Tanah (%)', 'Curah Hujan (mm/h)', 'Pergeseran Tanah (mm)', 'Status'],
      ...filteredData.map(row => [
        row.date.toLocaleDateString('id-ID'),
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
  
  const getStatusBgColor = (status) => {
    if (status === 'Aman') return '#dcfce7';
    if (status === 'Waspada') return '#fef3c7';
    return '#fee2e2';
  };
  
  return (
    <div style={{ padding: '2rem', maxWidth: '1400px', margin: '0 auto', backgroundColor: '#fafafa', minHeight: '100vh' }}>
      {/* Header */}
      <div style={{ marginBottom: '2rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1rem' }}>
          <div>
            <h1 style={{ fontSize: '1.75rem', fontWeight: 'bold', color: '#B31741', marginBottom: '0.5rem' }}>
              Laporan Data Monitoring
            </h1>
            <p style={{ color: '#6b7280', fontSize: '0.9375rem' }}>
              Riwayat data sensor dan analisis monitoring tanah longsor
            </p>
          </div>
          
          <button
            onClick={exportCSV}
            style={{
              padding: '0.75rem 1.5rem',
              backgroundColor: '#B31741',
              color: 'white',
              border: 'none',
              borderRadius: '0.5rem',
              cursor: 'pointer',
              fontWeight: '500',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontSize: '0.9375rem',
              boxShadow: '0 2px 4px rgba(179, 23, 65, 0.2)'
            }}
          >
            <span>📥</span> Export Data
          </button>
        </div>
      </div>
      
      {/* Info Cards */}
      <div style={{ marginBottom: '2rem' }}>
        <div style={{ 
          backgroundColor: 'white',
          padding: '1.5rem',
          borderRadius: '0.75rem',
          border: '1px solid #e5e7eb',
          boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
          marginBottom: '1rem'
        }}>
          <h3 style={{ fontSize: '0.875rem', fontWeight: '600', color: '#6b7280', marginBottom: '1rem' }}>
            📊 Filter Data
          </h3>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            <button
              onClick={() => setDateRange('7')}
              style={{
                padding: '0.5rem 1rem',
                backgroundColor: dateRange === '7' ? '#B31741' : 'white',
                color: dateRange === '7' ? 'white' : '#6b7280',
                border: '1px solid #e5e7eb',
                borderRadius: '0.5rem',
                cursor: 'pointer',
                fontWeight: '500',
                fontSize: '0.875rem'
              }}
            >
              7 Hari
            </button>
            <button
              onClick={() => setDateRange('30')}
              style={{
                padding: '0.5rem 1rem',
                backgroundColor: dateRange === '30' ? '#B31741' : 'white',
                color: dateRange === '30' ? 'white' : '#6b7280',
                border: '1px solid #e5e7eb',
                borderRadius: '0.5rem',
                cursor: 'pointer',
                fontWeight: '500',
                fontSize: '0.875rem'
              }}
            >
              30 Hari
            </button>
            <button
              onClick={() => setDateRange('90')}
              style={{
                padding: '0.5rem 1rem',
                backgroundColor: dateRange === '90' ? '#B31741' : 'white',
                color: dateRange === '90' ? 'white' : '#6b7280',
                border: '1px solid #e5e7eb',
                borderRadius: '0.5rem',
                cursor: 'pointer',
                fontWeight: '500',
                fontSize: '0.875rem'
              }}
            >
              90 Hari
            </button>
          </div>
        </div>
      </div>
      
      {/* Statistics Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
        <div style={{
          backgroundColor: 'white',
          padding: '1.25rem',
          borderRadius: '0.75rem',
          border: '1px solid #e5e7eb',
          boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
          borderTop: '3px solid #B31741'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
            <span style={{ fontSize: '1.25rem' }}>📋</span>
            <div style={{ color: '#6b7280', fontSize: '0.875rem', fontWeight: '500' }}>Total Data</div>
          </div>
          <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#1f2937' }}>{statusCount.total}</div>
          <div style={{ fontSize: '0.75rem', color: '#9ca3af', marginTop: '0.25rem' }}>records</div>
        </div>
        
        <div style={{
          backgroundColor: 'white',
          padding: '1.25rem',
          borderRadius: '0.75rem',
          border: '1px solid #e5e7eb',
          boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
          borderTop: '3px solid #22c55e'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
            <span style={{ fontSize: '1.25rem' }}>✅</span>
            <div style={{ color: '#6b7280', fontSize: '0.875rem', fontWeight: '500' }}>Status Aman</div>
          </div>
          <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#22c55e' }}>{statusCount.aman}</div>
          <div style={{ fontSize: '0.75rem', color: '#9ca3af', marginTop: '0.25rem' }}>
            {((statusCount.aman / statusCount.total) * 100).toFixed(0)}% dari total
          </div>
        </div>
        
        <div style={{
          backgroundColor: 'white',
          padding: '1.25rem',
          borderRadius: '0.75rem',
          border: '1px solid #e5e7eb',
          boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
          borderTop: '3px solid #eab308'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
            <span style={{ fontSize: '1.25rem' }}>⚠️</span>
            <div style={{ color: '#6b7280', fontSize: '0.875rem', fontWeight: '500' }}>Status Waspada</div>
          </div>
          <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#eab308' }}>{statusCount.waspada}</div>
          <div style={{ fontSize: '0.75rem', color: '#9ca3af', marginTop: '0.25rem' }}>
            {((statusCount.waspada / statusCount.total) * 100).toFixed(0)}% dari total
          </div>
        </div>
        
        <div style={{
          backgroundColor: 'white',
          padding: '1.25rem',
          borderRadius: '0.75rem',
          border: '1px solid #e5e7eb',
          boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
          borderTop: '3px solid #ef4444'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
            <span style={{ fontSize: '1.25rem' }}>🚨</span>
            <div style={{ color: '#6b7280', fontSize: '0.875rem', fontWeight: '500' }}>Status Bahaya</div>
          </div>
          <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#ef4444' }}>{statusCount.bahaya}</div>
          <div style={{ fontSize: '0.75rem', color: '#9ca3af', marginTop: '0.25rem' }}>
            {((statusCount.bahaya / statusCount.total) * 100).toFixed(0)}% dari total
          </div>
        </div>
      </div>
      
      {/* Data Table */}
      <div style={{
        backgroundColor: 'white',
        borderRadius: '0.75rem',
        border: '1px solid #e5e7eb',
        overflow: 'hidden',
        boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
      }}>
        <div style={{ padding: '1.5rem', borderBottom: '1px solid #e5e7eb', backgroundColor: '#fafafa' }}>
          <h3 style={{ fontSize: '1rem', fontWeight: '600', color: '#1f2937', margin: 0 }}>
            Data Harian (30 Hari Terakhir)
          </h3>
        </div>
        
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead style={{ backgroundColor: '#f9fafb' }}>
              <tr>
                <th style={{ 
                  padding: '1rem', 
                  textAlign: 'left', 
                  fontWeight: '600', 
                  color: '#374151', 
                  borderBottom: '2px solid #e5e7eb',
                  fontSize: '0.875rem'
                }}>
                  Tanggal
                </th>
                <th style={{ 
                  padding: '1rem', 
                  textAlign: 'center', 
                  fontWeight: '600', 
                  color: '#374151', 
                  borderBottom: '2px solid #e5e7eb',
                  fontSize: '0.875rem'
                }}>
                  Kelembaban Tanah
                </th>
                <th style={{ 
                  padding: '1rem', 
                  textAlign: 'center', 
                  fontWeight: '600', 
                  color: '#374151', 
                  borderBottom: '2px solid #e5e7eb',
                  fontSize: '0.875rem'
                }}>
                  Curah Hujan
                </th>
                <th style={{ 
                  padding: '1rem', 
                  textAlign: 'center', 
                  fontWeight: '600', 
                  color: '#374151', 
                  borderBottom: '2px solid #e5e7eb',
                  fontSize: '0.875rem'
                }}>
                  Pergeseran Tanah
                </th>
                <th style={{ 
                  padding: '1rem', 
                  textAlign: 'center', 
                  fontWeight: '600', 
                  color: '#374151', 
                  borderBottom: '2px solid #e5e7eb',
                  fontSize: '0.875rem'
                }}>
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((row, index) => (
                <tr key={row.id} style={{ 
                  backgroundColor: index % 2 === 0 ? 'white' : '#fafafa',
                  transition: 'background-color 0.2s'
                }}>
                  <td style={{ 
                    padding: '1rem', 
                    borderBottom: '1px solid #f3f4f6',
                    fontSize: '0.875rem'
                  }}>
                    <div style={{ fontWeight: '500', color: '#1f2937' }}>
                      {row.date.toLocaleDateString('id-ID', { 
                        weekday: 'short', 
                        year: 'numeric', 
                        month: 'short', 
                        day: 'numeric' 
                      })}
                    </div>
                  </td>
                  <td style={{ 
                    padding: '1rem', 
                    textAlign: 'center',
                    borderBottom: '1px solid #f3f4f6',
                    fontSize: '0.875rem'
                  }}>
                    <span style={{ 
                      fontFamily: 'monospace', 
                      color: row.soilMoisture > 80 ? '#ef4444' : row.soilMoisture > 60 ? '#eab308' : '#22c55e',
                      fontWeight: '600'
                    }}>
                      {row.soilMoisture.toFixed(1)}%
                    </span>
                  </td>
                  <td style={{ 
                    padding: '1rem', 
                    textAlign: 'center',
                    borderBottom: '1px solid #f3f4f6',
                    fontSize: '0.875rem'
                  }}>
                    <span style={{ 
                      fontFamily: 'monospace', 
                      color: row.rainfall > 15 ? '#ef4444' : row.rainfall > 10 ? '#eab308' : '#22c55e',
                      fontWeight: '600'
                    }}>
                      {row.rainfall.toFixed(1)} mm/h
                    </span>
                  </td>
                  <td style={{ 
                    padding: '1rem', 
                    textAlign: 'center',
                    borderBottom: '1px solid #f3f4f6',
                    fontSize: '0.875rem'
                  }}>
                    <span style={{ 
                      fontFamily: 'monospace', 
                      color: row.landShift > 5 ? '#ef4444' : row.landShift > 3 ? '#eab308' : '#22c55e',
                      fontWeight: '600'
                    }}>
                      {row.landShift.toFixed(1)} mm
                    </span>
                  </td>
                  <td style={{ 
                    padding: '1rem', 
                    textAlign: 'center',
                    borderBottom: '1px solid #f3f4f6'
                  }}>
                    <span style={{
                      padding: '0.375rem 0.75rem',
                      backgroundColor: getStatusBgColor(row.status),
                      color: getStatusColor(row.status),
                      borderRadius: '0.5rem',
                      fontSize: '0.8125rem',
                      fontWeight: '600',
                      display: 'inline-block',
                      minWidth: '80px'
                    }}>
                      {row.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
      {/* Summary Section */}
      <div style={{ 
        marginTop: '2rem',
        backgroundColor: 'white',
        padding: '1.5rem',
        borderRadius: '0.75rem',
        border: '1px solid #e5e7eb',
        boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
      }}>
        <h3 style={{ fontSize: '1rem', fontWeight: '600', color: '#1f2937', marginBottom: '1rem' }}>
          📊 Rata-rata Pembacaan Sensor (30 Hari)
        </h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
          <div>
            <div style={{ fontSize: '0.875rem', color: '#6b7280', marginBottom: '0.5rem' }}>
              Kelembaban Tanah
            </div>
            <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#8b5cf6' }}>
              {averages.soilMoisture}%
            </div>
          </div>
          <div>
            <div style={{ fontSize: '0.875rem', color: '#6b7280', marginBottom: '0.5rem' }}>
              Curah Hujan
            </div>
            <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#f59e0b' }}>
              {averages.rainfall} mm/h
            </div>
          </div>
          <div>
            <div style={{ fontSize: '0.875rem', color: '#6b7280', marginBottom: '0.5rem' }}>
              Pergeseran Tanah
            </div>
            <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#ef4444' }}>
              {averages.landShift} mm
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportingSimple;
