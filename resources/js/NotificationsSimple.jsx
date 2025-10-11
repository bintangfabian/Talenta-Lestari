import React, { useState } from 'react';

const NotificationsSimple = () => {
  // Generate mock notifications
  const generateNotifications = () => {
    const notifications = [];
    const now = new Date();
    
    for (let i = 0; i < 15; i++) {
      const timestamp = new Date(now.getTime() - i * 7200000); // Every 2 hours
      const soilMoisture = 80 + Math.random() * 20;
      const rainfall = 15 + Math.random() * 10;
      const landShift = 5 + Math.random() * 3;
      
      notifications.push({
        id: `notif-${i}`,
        timestamp,
        title: 'Peringatan Bahaya Tanah Longsor',
        message: `Status bahaya terdeteksi di Desa Aribaya. Segera lakukan tindakan pencegahan dan evakuasi jika diperlukan.`,
        soilMoisture,
        rainfall,
        landShift,
        read: Math.random() > 0.4 // 60% chance of being read
      });
    }
    
    return notifications;
  };
  
  const [notifications] = useState(generateNotifications());
  const [filter, setFilter] = useState('all');
  
  const filteredNotifications = filter === 'all'
    ? notifications
    : filter === 'unread'
    ? notifications.filter(n => !n.read)
    : notifications.filter(n => n.read);
  
  const unreadCount = notifications.filter(n => !n.read).length;
  
  return (
    <div style={{ padding: '2rem', maxWidth: '1000px', margin: '0 auto' }}>
      {/* Header */}
      <div style={{ marginBottom: '2rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
          <h1 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#1e293b', margin: 0 }}>
            🔔 Notifikasi Peringatan
          </h1>
          {unreadCount > 0 && (
            <span style={{
              padding: '0.5rem 1rem',
              backgroundColor: '#ef4444',
              color: 'white',
              borderRadius: '0.5rem',
              fontWeight: '600',
              fontSize: '0.875rem'
            }}>
              {unreadCount} belum dibaca
            </span>
          )}
        </div>
        <p style={{ color: '#64748b', margin: 0 }}>
          Notifikasi untuk status bahaya tanah longsor
        </p>
      </div>
      
      {/* Statistics */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
        <div style={{
          backgroundColor: 'white',
          padding: '1.5rem',
          borderRadius: '1rem',
          border: '1px solid #e2e8f0'
        }}>
          <div style={{ color: '#64748b', fontSize: '0.875rem', marginBottom: '0.5rem' }}>Total Notifikasi</div>
          <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#1e293b' }}>{notifications.length}</div>
        </div>
        
        <div style={{
          backgroundColor: 'white',
          padding: '1.5rem',
          borderRadius: '1rem',
          border: '1px solid #e2e8f0'
        }}>
          <div style={{ color: '#64748b', fontSize: '0.875rem', marginBottom: '0.5rem' }}>Belum Dibaca</div>
          <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#ef4444' }}>{unreadCount}</div>
        </div>
        
        <div style={{
          backgroundColor: 'white',
          padding: '1.5rem',
          borderRadius: '1rem',
          border: '1px solid #e2e8f0'
        }}>
          <div style={{ color: '#64748b', fontSize: '0.875rem', marginBottom: '0.5rem' }}>Sudah Dibaca</div>
          <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#22c55e' }}>{notifications.length - unreadCount}</div>
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
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          {[
            { key: 'all', label: 'Semua' },
            { key: 'unread', label: 'Belum Dibaca' },
            { key: 'read', label: 'Sudah Dibaca' }
          ].map(item => (
            <button
              key={item.key}
              onClick={() => setFilter(item.key)}
              style={{
                padding: '0.5rem 1rem',
                backgroundColor: filter === item.key ? '#2563eb' : 'white',
                color: filter === item.key ? 'white' : '#64748b',
                border: '1px solid #e2e8f0',
                borderRadius: '0.5rem',
                cursor: 'pointer',
                fontWeight: '500'
              }}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
      
      {/* Notifications List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {filteredNotifications.length === 0 ? (
          <div style={{
            backgroundColor: 'white',
            padding: '3rem',
            borderRadius: '1rem',
            border: '1px solid #e2e8f0',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🔔</div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#1e293b', marginBottom: '0.5rem' }}>
              Tidak ada notifikasi
            </h3>
            <p style={{ color: '#64748b' }}>
              {filter === 'unread' 
                ? 'Semua notifikasi sudah dibaca'
                : filter === 'read'
                ? 'Belum ada notifikasi yang dibaca'
                : 'Belum ada notifikasi peringatan'
              }
            </p>
          </div>
        ) : (
          filteredNotifications.map(notif => (
            <div
              key={notif.id}
              style={{
                backgroundColor: 'white',
                padding: '1.5rem',
                borderRadius: '1rem',
                border: !notif.read ? '2px solid #ef4444' : '1px solid #e2e8f0',
                borderLeft: !notif.read ? '4px solid #ef4444' : '1px solid #e2e8f0',
                boxShadow: !notif.read ? '0 4px 6px rgba(239, 68, 68, 0.1)' : 'none'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '1rem' }}>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                    <span style={{ fontSize: '1.5rem' }}>⚠️</span>
                    <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: '#1e293b', margin: 0 }}>
                      {notif.title}
                    </h3>
                    {!notif.read && (
                      <div style={{
                        width: '8px',
                        height: '8px',
                        backgroundColor: '#ef4444',
                        borderRadius: '50%'
                      }} />
                    )}
                  </div>
                  
                  <p style={{ color: '#64748b', marginBottom: '1rem', lineHeight: '1.6' }}>
                    {notif.message}
                  </p>
                  
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#64748b', fontSize: '0.875rem' }}>
                    <span>🕐</span>
                    <span>{notif.timestamp.toLocaleString('id-ID')}</span>
                  </div>
                </div>
                
                <span style={{
                  padding: '0.5rem 1rem',
                  backgroundColor: '#ef4444',
                  color: 'white',
                  borderRadius: '0.5rem',
                  fontWeight: '600',
                  fontSize: '0.875rem',
                  whiteSpace: 'nowrap'
                }}>
                  BAHAYA
                </span>
              </div>
              
              {/* Sensor Details */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '1rem',
                padding: '1rem',
                backgroundColor: '#fef2f2',
                borderRadius: '0.5rem',
                marginTop: '1rem'
              }}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '0.75rem', color: '#64748b', marginBottom: '0.25rem' }}>Kelembaban</div>
                  <div style={{ fontSize: '1.125rem', fontWeight: 'bold', color: '#ef4444', fontFamily: 'monospace' }}>
                    {notif.soilMoisture.toFixed(1)}%
                  </div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '0.75rem', color: '#64748b', marginBottom: '0.25rem' }}>Curah Hujan</div>
                  <div style={{ fontSize: '1.125rem', fontWeight: 'bold', color: '#ef4444', fontFamily: 'monospace' }}>
                    {notif.rainfall.toFixed(1)} mm/h
                  </div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '0.75rem', color: '#64748b', marginBottom: '0.25rem' }}>Pergeseran</div>
                  <div style={{ fontSize: '1.125rem', fontWeight: 'bold', color: '#ef4444', fontFamily: 'monospace' }}>
                    {notif.landShift.toFixed(1)} mm
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
      
      {filteredNotifications.length > 0 && (
        <div style={{ marginTop: '2rem', textAlign: 'center', color: '#64748b', fontSize: '0.875rem' }}>
          Menampilkan {filteredNotifications.length} notifikasi
        </div>
      )}
    </div>
  );
};

export default NotificationsSimple;

