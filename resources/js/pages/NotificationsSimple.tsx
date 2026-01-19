import React, { useState } from 'react';
import { Bell, AlertTriangle, CheckCircle2 } from 'lucide-react';

interface Notification {
  id: number;
  timestamp: Date;
  title: string;
  message: string;
  soilMoisture: number;
  rainfall: number;
  landShift: number;
  status: string;
  read: boolean;
}

const NotificationsSimple: React.FC = () => {
  // Generate mock notifications
  const generateNotifications = (): Notification[] => {
    const notifications = [];
    const now = new Date();
    
    // Notification 1 - Bahaya
    notifications.push({
      id: 1,
      timestamp: new Date('2025-01-17T21:49:38'),
      title: 'Peringatan Bahaya Tanah Longsor',
      message: 'Status bahaya terdeteksi - Kelembaban: 84.2%, Curah Hujan: 19.3 mm/h, Pergeseran: 7.8 mm',
      soilMoisture: 84.2,
      rainfall: 19.3,
      landShift: 7.8,
      status: 'Bahaya',
      read: false
    });
    
    // Notification 2 - Bahaya
    notifications.push({
      id: 2,
      timestamp: new Date('2025-01-17T09:49:38'),
      title: 'Peringatan Bahaya Tanah Longsor',
      message: 'Status bahaya terdeteksi - Kelembaban: 82.8%, Curah Hujan: 19.5 mm/h, Pergeseran: 3.4 mm',
      soilMoisture: 82.8,
      rainfall: 19.5,
      landShift: 3.4,
      status: 'Bahaya',
      read: false
    });
    
    return notifications;
  };
  
  const [notifications] = useState<Notification[]>(generateNotifications());
  const [filter, setFilter] = useState<string>('all');
  
  const filteredNotifications = filter === 'all'
    ? notifications
    : filter === 'unread'
    ? notifications.filter(n => !n.read)
    : notifications.filter(n => n.read);
  
  const totalCount = notifications.length;
  const unreadCount = notifications.filter(n => !n.read).length;
  const readCount = notifications.filter(n => n.read).length;
  
  const markAllAsRead = (): void => {
    // In real app, this would update the state
    alert('Semua notifikasi telah ditandai sebagai sudah dibaca');
  };
  
  return (
    <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto', backgroundColor: '#fafafa', minHeight: '100vh' }}>
      {/* Header */}
      <div style={{ marginBottom: '2rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '0.5rem' }}>
          <div>
            <h1 style={{ fontSize: '1.75rem', fontWeight: 'bold', color: '#B31741', margin: 0, marginBottom: '0.5rem' }}>
              Notifikasi Peringatan
            </h1>
            <p style={{ color: '#6b7280', margin: 0, fontSize: '0.9375rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Bell className="h-4 w-4" /> Notifikasi untuk status bahaya tanah longsor
            </p>
          </div>
          
          {unreadCount > 0 && (
            <button
              onClick={markAllAsRead}
              style={{
                padding: '0.75rem 1.5rem',
                backgroundColor: '#B31741',
                color: 'white',
                border: 'none',
                borderRadius: '0.5rem',
                cursor: 'pointer',
                fontWeight: '500',
                fontSize: '0.9375rem',
                boxShadow: '0 2px 4px rgba(179, 23, 65, 0.2)'
              }}
            >
              Tandai Dibaca
            </button>
          )}
        </div>
      </div>
      
      {/* Statistics Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
        <div style={{
          backgroundColor: 'white',
          padding: '1.5rem',
          borderRadius: '0.75rem',
          border: '1px solid #e5e7eb',
          boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
            <div style={{
              width: '40px',
              height: '40px',
              backgroundColor: 'rgba(179, 23, 65, 0.1)',
              borderRadius: '0.5rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Bell className="h-5 w-5" style={{ color: '#B31741' }} />
            </div>
            <div style={{ color: '#6b7280', fontSize: '0.875rem', fontWeight: '500' }}>Total Notifikasi</div>
          </div>
          <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#1f2937' }}>{totalCount}</div>
        </div>
        
        <div style={{
          backgroundColor: 'white',
          padding: '1.5rem',
          borderRadius: '0.75rem',
          border: '1px solid #e5e7eb',
          boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
            <div style={{
              width: '40px',
              height: '40px',
              backgroundColor: 'rgba(239, 68, 68, 0.1)',
              borderRadius: '0.5rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <AlertTriangle className="h-5 w-5" style={{ color: '#ef4444' }} />
            </div>
            <div style={{ color: '#6b7280', fontSize: '0.875rem', fontWeight: '500' }}>Belum Dibaca</div>
          </div>
          <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#ef4444' }}>{unreadCount}</div>
        </div>
        
        <div style={{
          backgroundColor: 'white',
          padding: '1.5rem',
          borderRadius: '0.75rem',
          border: '1px solid #e5e7eb',
          boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
            <div style={{
              width: '40px',
              height: '40px',
              backgroundColor: 'rgba(34, 197, 94, 0.1)',
              borderRadius: '0.5rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <CheckCircle2 className="h-5 w-5" style={{ color: '#22c55e' }} />
            </div>
            <div style={{ color: '#6b7280', fontSize: '0.875rem', fontWeight: '500' }}>Sudah Dibaca</div>
          </div>
          <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#22c55e' }}>{readCount}</div>
        </div>
      </div>
      
      {/* Filters */}
      <div style={{
        backgroundColor: 'white',
        padding: '1.25rem',
        borderRadius: '0.75rem',
        border: '1px solid #e5e7eb',
        marginBottom: '2rem',
        boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
      }}>
        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
          {[
            { key: 'all', label: 'Semua' },
            { key: 'unread', label: 'Belum Dibaca' },
            { key: 'read', label: 'Sudah Dibaca' }
          ].map(item => (
            <button
              key={item.key}
              onClick={() => setFilter(item.key)}
              style={{
                padding: '0.625rem 1.25rem',
                backgroundColor: filter === item.key ? '#B31741' : 'white',
                color: filter === item.key ? 'white' : '#6b7280',
                border: '1px solid #e5e7eb',
                borderRadius: '0.5rem',
                cursor: 'pointer',
                fontWeight: '500',
                fontSize: '0.875rem',
                transition: 'all 0.2s'
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
            borderRadius: '0.75rem',
            border: '1px solid #e5e7eb',
            textAlign: 'center',
            boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
          }}>
            <div style={{ marginBottom: '1rem', display: 'flex', justifyContent: 'center' }}>
              <Bell className="h-12 w-12" style={{ color: '#9ca3af' }} />
            </div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#1f2937', marginBottom: '0.5rem' }}>
              Tidak ada notifikasi
            </h3>
            <p style={{ color: '#6b7280' }}>
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
                borderRadius: '0.75rem',
                border: '1px solid #e5e7eb',
                borderLeft: !notif.read ? '4px solid #ef4444' : '1px solid #e5e7eb',
                boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
                position: 'relative'
              }}
            >
              {/* Header */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '1rem' }}>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                    <div style={{
                      width: '32px',
                      height: '32px',
                      backgroundColor: 'rgba(239, 68, 68, 0.1)',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <AlertTriangle className="h-4 w-4" style={{ color: '#ef4444' }} />
                    </div>
                    <h3 style={{ fontSize: '1.0625rem', fontWeight: '600', color: '#1f2937', margin: 0 }}>
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
                  
                  <p style={{ color: '#6b7280', marginBottom: '0.75rem', lineHeight: '1.6', fontSize: '0.9375rem' }}>
                    {notif.message}
                  </p>
                  
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#9ca3af', fontSize: '0.8125rem' }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                      <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                    <span>{notif.timestamp.toLocaleDateString('id-ID')} {notif.timestamp.toLocaleTimeString('id-ID')}</span>
                  </div>
                </div>
                
                <span style={{
                  padding: '0.5rem 1rem',
                  backgroundColor: '#ef4444',
                  color: 'white',
                  borderRadius: '0.5rem',
                  fontWeight: '600',
                  fontSize: '0.8125rem',
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
                padding: '1.25rem',
                backgroundColor: '#fef2f2',
                borderRadius: '0.5rem',
                marginTop: '1rem'
              }}>
                <div>
                  <div style={{ fontSize: '0.75rem', color: '#9ca3af', marginBottom: '0.375rem', fontWeight: '500' }}>
                    Kelembaban
                  </div>
                  <div style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#ef4444', fontFamily: 'monospace' }}>
                    {notif.soilMoisture}%
                  </div>
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', color: '#9ca3af', marginBottom: '0.375rem', fontWeight: '500' }}>
                    Curah Hujan
                  </div>
                  <div style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#ef4444', fontFamily: 'monospace' }}>
                    {notif.rainfall} mm/h
                  </div>
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', color: '#9ca3af', marginBottom: '0.375rem', fontWeight: '500' }}>
                    Pergeseran
                  </div>
                  <div style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#ef4444', fontFamily: 'monospace' }}>
                    {notif.landShift} mm
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
      
      {filteredNotifications.length > 0 && (
        <div style={{ marginTop: '2rem', textAlign: 'center', color: '#9ca3af', fontSize: '0.875rem' }}>
          Menampilkan {filteredNotifications.length} notifikasi
        </div>
      )}
    </div>
  );
};

export default NotificationsSimple;
