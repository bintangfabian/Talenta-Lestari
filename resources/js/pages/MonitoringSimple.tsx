import React, { useState, useEffect, useRef } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { AlertTriangle, TrendingUp, BarChart3, Calendar, Pause, Play } from 'lucide-react';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

interface CurrentData {
  soilMoisture: number;
  rainfall: number;
  landShift: number;
  status: string;
}

interface ChartData {
  soilMoistureHistory: number[];
  rainfallHistory: number[];
  landShiftHistory: number[];
}

const MonitoringSimple: React.FC = () => {
  const [currentData, setCurrentData] = useState<CurrentData>({
    soilMoisture: 62.4,
    rainfall: 12.2,
    landShift: 1.0,
    status: 'Waspada'
  });
  
  const [isLive, setIsLive] = useState<boolean>(true);
  const [lastUpdate, setLastUpdate] = useState<Date>(new Date());
  
  // Data untuk grafik (24 jam terakhir)
  const [chartData, setChartData] = useState<ChartData>({
    soilMoistureHistory: Array(24).fill(0).map(() => Math.random() * 40 + 40),
    rainfallHistory: Array(24).fill(0).map(() => Math.random() * 15 + 5),
    landShiftHistory: Array(24).fill(0).map(() => Math.random() * 4 + 1)
  });
  
  useEffect(() => {
    if (!isLive) return;
    
    const interval = setInterval(() => {
      // Simulasi data sensor
      const newData = {
        soilMoisture: Math.random() * 30 + 50, // 50-80
        rainfall: Math.random() * 10 + 8, // 8-18
        landShift: Math.random() * 3 + 0.5, // 0.5-3.5
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
      
      // Update chart data
      setChartData(prev => ({
        soilMoistureHistory: [...prev.soilMoistureHistory.slice(1), newData.soilMoisture],
        rainfallHistory: [...prev.rainfallHistory.slice(1), newData.rainfall],
        landShiftHistory: [...prev.landShiftHistory.slice(1), newData.landShift]
      }));
    }, 3000);
    
    return () => clearInterval(interval);
  }, [isLive]);
  
  const getStatusColor = (status: string): string => {
    if (status === 'Aman') return '#22c55e';
    if (status === 'Waspada') return '#eab308';
    return '#ef4444';
  };
  
  const getStatusBgColor = (status: string): string => {
    if (status === 'Aman') return '#dcfce7';
    if (status === 'Waspada') return '#fef3c7';
    return '#fee2e2';
  };
  
  // Generate time labels (24 jam)
  const timeLabels = Array(24).fill(0).map((_, i) => {
    const hour = (new Date().getHours() - 23 + i + 24) % 24;
    return `${hour.toString().padStart(2, '0')}:00`;
  });
  
  // Chart options untuk Kelembaban & Curah Hujan
  const moistureRainfallChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: 'top',
        labels: {
          usePointStyle: true,
          padding: 15,
          font: {
            size: 12
          }
        }
      },
      tooltip: {
        mode: 'index',
        intersect: false,
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        grid: {
          color: '#f3f4f6'
        },
        ticks: {
          font: {
            size: 11
          }
        }
      },
      x: {
        grid: {
          display: false
        },
        ticks: {
          font: {
            size: 10
          },
          maxRotation: 0
        }
      }
    },
    interaction: {
      mode: 'nearest',
      axis: 'x',
      intersect: false
    }
  };
  
  const moistureRainfallData = {
    labels: timeLabels,
    datasets: [
      {
        label: 'Kelembaban Tanah (%)',
        data: chartData.soilMoistureHistory,
        borderColor: '#8b5cf6',
        backgroundColor: 'rgba(139, 92, 246, 0.1)',
        borderWidth: 2,
        tension: 0.4,
        pointRadius: 0,
        pointHoverRadius: 4
      },
      {
        label: 'Curah Hujan (mm/h)',
        data: chartData.rainfallHistory,
        borderColor: '#f59e0b',
        backgroundColor: 'rgba(245, 158, 11, 0.1)',
        borderWidth: 2,
        tension: 0.4,
        pointRadius: 0,
        pointHoverRadius: 4
      }
    ]
  };
  
  // Chart options untuk Pergeseran Tanah
  const landShiftChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        mode: 'index',
        intersect: false,
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 8,
        grid: {
          color: '#f3f4f6'
        },
        ticks: {
          font: {
            size: 11
          }
        }
      },
      x: {
        grid: {
          display: false
        },
        ticks: {
          font: {
            size: 10
          },
          maxRotation: 0
        }
      }
    }
  };
  
  const landShiftData = {
    labels: timeLabels,
    datasets: [
      {
        label: 'Pergeseran Tanah (mm)',
        data: chartData.landShiftHistory,
        borderColor: '#ef4444',
        backgroundColor: 'rgba(239, 68, 68, 0.3)',
        borderWidth: 2,
        fill: true,
        tension: 0.4,
        pointRadius: 0,
        pointHoverRadius: 4
      }
    ]
  };
  
  return (
    <div style={{ padding: '2rem', maxWidth: '1400px', margin: '0 auto', backgroundColor: '#fafafa', minHeight: '100vh' }}>
      {/* Header */}
      <div style={{ marginBottom: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <h1 style={{ fontSize: '1.75rem', fontWeight: 'bold', color: '#B31741', marginBottom: '0.5rem' }}>
            Monitoring Real-time
          </h1>
          <p style={{ color: '#6b7280', fontSize: '0.9375rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Calendar className="h-4 w-4" /> Terakhir diperbarui: {lastUpdate.toLocaleDateString('id-ID')} {lastUpdate.toLocaleTimeString('id-ID')}
          </p>
        </div>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '0.5rem',
            padding: '0.5rem 1rem',
            backgroundColor: isLive ? '#B31741' : '#f1f5f9',
            borderRadius: '0.5rem',
            color: 'white',
            fontSize: '0.875rem',
            fontWeight: '500'
          }}>
            <div style={{ 
              width: '8px', 
              height: '8px', 
              borderRadius: '50%', 
              backgroundColor: 'white',
              animation: isLive ? 'pulse 2s infinite' : 'none'
            }} />
            <span>
              {isLive ? 'LIVE' : 'PAUSED'}
            </span>
          </div>
          
          <button
            onClick={() => setIsLive(!isLive)}
            style={{
              padding: '0.5rem 1rem',
              backgroundColor: 'white',
              border: '1px solid #e5e7eb',
              borderRadius: '0.5rem',
              cursor: 'pointer',
              fontWeight: '500',
              fontSize: '0.875rem',
              color: '#374151'
            }}
          >
            {isLive ? (
              <>
                <Pause className="h-4 w-4" style={{ marginRight: '0.25rem' }} /> Pause
              </>
            ) : (
              <>
                <Play className="h-4 w-4" style={{ marginRight: '0.25rem' }} /> Resume
              </>
            )}
          </button>
        </div>
      </div>
      
      {/* Sensor Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
        {/* Status Monitoring */}
        <div style={{
          backgroundColor: getStatusBgColor(currentData.status),
          padding: '1.5rem',
          borderRadius: '0.75rem',
          border: `2px solid ${getStatusColor(currentData.status)}`,
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
        }}>
          <div style={{ marginBottom: '1rem' }}>
            <h3 style={{ fontSize: '0.875rem', fontWeight: '500', color: '#6b7280', margin: 0 }}>
              Status Monitoring
            </h3>
          </div>
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            padding: '1rem',
            backgroundColor: getStatusColor(currentData.status),
            borderRadius: '0.5rem',
            marginBottom: '0.75rem'
          }}>
            <AlertTriangle className="h-6 w-6" style={{ marginRight: '0.5rem', color: 'white' }} />
            <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'white' }}>
              {currentData.status.toUpperCase()}
            </span>
          </div>
          <p style={{ fontSize: '0.8125rem', color: '#6b7280', textAlign: 'center', margin: 0 }}>
            {currentData.status === 'Aman' && 'Status Saat Ini'}
            {currentData.status === 'Waspada' && 'Waspada - Pantau kondisi secara berkala'}
            {currentData.status === 'Bahaya' && 'Bahaya - Segera lakukan evakuasi'}
          </p>
          <div style={{ marginTop: '1rem', display: 'flex', justifyContent: 'space-around', fontSize: '0.75rem' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#22c55e', margin: '0 auto 0.25rem' }} />
              <span style={{ color: '#6b7280' }}>Aman</span>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#eab308', margin: '0 auto 0.25rem' }} />
              <span style={{ color: '#6b7280' }}>Waspada</span>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#ef4444', margin: '0 auto 0.25rem' }} />
              <span style={{ color: '#6b7280' }}>Bahaya</span>
            </div>
          </div>
        </div>
        
        {/* Kelembaban Tanah */}
        <div style={{
          backgroundColor: 'white',
          padding: '1.5rem',
          borderRadius: '0.75rem',
          border: '1px solid #e5e7eb',
          boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
          borderTop: '3px solid #8b5cf6'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
            <h3 style={{ fontSize: '0.875rem', fontWeight: '500', color: '#6b7280', margin: 0 }}>
              Kelembaban Tanah
            </h3>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2.69L17 7.19V13.69C17 17.69 14 21.19 12 22.19C10 21.19 7 17.69 7 13.69V7.19L12 2.69Z" stroke="#8b5cf6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#1f2937', marginBottom: '0.25rem' }}>
            {currentData.soilMoisture.toFixed(1)} <span style={{ fontSize: '1.25rem', color: '#6b7280' }}>%</span>
          </div>
        </div>
        
        {/* Curah Hujan */}
        <div style={{
          backgroundColor: 'white',
          padding: '1.5rem',
          borderRadius: '0.75rem',
          border: '1px solid #e5e7eb',
          boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
          borderTop: '3px solid #f59e0b'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
            <h3 style={{ fontSize: '0.875rem', fontWeight: '500', color: '#6b7280', margin: 0 }}>
              Curah Hujan
            </h3>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L8 8H16L12 2Z" fill="#f59e0b"/>
              <path d="M12 10V22" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
          <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#1f2937', marginBottom: '0.25rem' }}>
            {currentData.rainfall.toFixed(1)} <span style={{ fontSize: '1.25rem', color: '#6b7280' }}>mm/h</span>
          </div>
        </div>
        
        {/* Pergeseran Tanah */}
        <div style={{
          backgroundColor: 'white',
          padding: '1.5rem',
          borderRadius: '0.75rem',
          border: '1px solid #e5e7eb',
          boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
          borderTop: '3px solid #22c55e'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
            <h3 style={{ fontSize: '0.875rem', fontWeight: '500', color: '#6b7280', margin: 0 }}>
              Pergeseran Tanah
            </h3>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.29 3.86L1.82 18C1.64 18.3 1.54 18.65 1.53 19C1.53 20.1 2.43 21 3.53 21H20.47C20.82 21 21.17 20.9 21.47 20.71C22.42 20.12 22.73 18.88 22.14 17.93L13.71 3.86C13.32 3.18 12.65 2.75 11.93 2.75C11.21 2.75 10.54 3.18 10.29 3.86Z" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#1f2937', marginBottom: '0.25rem' }}>
            {currentData.landShift.toFixed(1)} <span style={{ fontSize: '1.25rem', color: '#6b7280' }}>mm</span>
          </div>
        </div>
      </div>
      
      {/* Charts */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
        {/* Kelembaban & Curah Hujan Chart */}
        <div style={{
          backgroundColor: 'white',
          padding: '1.5rem',
          borderRadius: '0.75rem',
          border: '1px solid #e5e7eb',
          boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
        }}>
          <h3 style={{ fontSize: '1rem', fontWeight: '600', color: '#B31741', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <TrendingUp className="h-5 w-5" /> Kelembaban & Curah Hujan (24 Jam)
          </h3>
          <div style={{ height: '300px' }}>
            <Line data={moistureRainfallData} options={moistureRainfallChartOptions} />
          </div>
        </div>
        
        {/* Pergeseran Tanah Chart */}
        <div style={{
          backgroundColor: 'white',
          padding: '1.5rem',
          borderRadius: '0.75rem',
          border: '1px solid #e5e7eb',
          boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
        }}>
          <h3 style={{ fontSize: '1rem', fontWeight: '600', color: '#B31741', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <BarChart3 className="h-5 w-5" /> Pergeseran Tanah (24 Jam)
          </h3>
          <div style={{ height: '300px' }}>
            <Line data={landShiftData} options={landShiftChartOptions} />
          </div>
        </div>
      </div>
      
      {/* Ambang Batas Peringatan */}
      <div style={{
        backgroundColor: 'white',
        padding: '1.5rem',
        borderRadius: '0.75rem',
        border: '1px solid #e5e7eb',
        boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
      }}>
        <h3 style={{ fontSize: '1rem', fontWeight: '600', color: '#1f2937', marginBottom: '1.25rem' }}>
          Ambang Batas Peringatan
        </h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
          {/* Kelembaban Tanah */}
          <div>
            <h4 style={{ fontSize: '0.9375rem', fontWeight: '600', color: '#1f2937', marginBottom: '0.75rem' }}>
              Kelembaban Tanah
            </h4>
            <div style={{ fontSize: '0.875rem', lineHeight: '1.8' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: '#6b7280' }}>Normal:</span>
                <span style={{ color: '#22c55e', fontWeight: '500' }}>{'<'} 60%</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: '#6b7280' }}>Waspada:</span>
                <span style={{ color: '#eab308', fontWeight: '500' }}>60-80%</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: '#6b7280' }}>Bahaya:</span>
                <span style={{ color: '#ef4444', fontWeight: '500' }}>{'>'} 80%</span>
              </div>
            </div>
          </div>
          
          {/* Curah Hujan */}
          <div>
            <h4 style={{ fontSize: '0.9375rem', fontWeight: '600', color: '#1f2937', marginBottom: '0.75rem' }}>
              Curah Hujan
            </h4>
            <div style={{ fontSize: '0.875rem', lineHeight: '1.8' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: '#6b7280' }}>Normal:</span>
                <span style={{ color: '#22c55e', fontWeight: '500' }}>{'<'} 10 mm/h</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: '#6b7280' }}>Waspada:</span>
                <span style={{ color: '#eab308', fontWeight: '500' }}>10-15 mm/h</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: '#6b7280' }}>Bahaya:</span>
                <span style={{ color: '#ef4444', fontWeight: '500' }}>{'>'} 15 mm/h</span>
              </div>
            </div>
          </div>
          
          {/* Pergeseran Tanah */}
          <div>
            <h4 style={{ fontSize: '0.9375rem', fontWeight: '600', color: '#1f2937', marginBottom: '0.75rem' }}>
              Pergeseran Tanah
            </h4>
            <div style={{ fontSize: '0.875rem', lineHeight: '1.8' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: '#6b7280' }}>Normal:</span>
                <span style={{ color: '#22c55e', fontWeight: '500' }}>{'<'} 3 mm</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: '#6b7280' }}>Waspada:</span>
                <span style={{ color: '#eab308', fontWeight: '500' }}>3-5 mm</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: '#6b7280' }}>Bahaya:</span>
                <span style={{ color: '#ef4444', fontWeight: '500' }}>{'>'} 5 mm</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MonitoringSimple;
