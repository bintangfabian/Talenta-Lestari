import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Bell, 
  AlertCircle, 
  Clock, 
  CheckCircle,
  Archive
} from 'lucide-react';
import { generateMockData } from '@/utils/mockData';
import { cn } from '@/lib/utils';

const Notifications = () => {
  const [allData] = useState(() => generateMockData(50));
  const dangerData = allData.filter(data => data.status === 'Bahaya');
  
  const [notifications] = useState(() => 
    dangerData.map((data, index) => ({
      id: `notif-${index}`,
      timestamp: data.timestamp,
      title: 'Peringatan Bahaya Tanah Longsor',
      message: `Status bahaya terdeteksi - Kelembaban: ${data.soilMoisture}%, Curah Hujan: ${data.raindropCount} mm/h, Pergeseran: ${data.landShift} mm`,
      severity: 'high' as const,
      read: Math.random() > 0.3, // 70% chance of being read
      data: data
    }))
  );

  const [filter, setFilter] = useState<'all' | 'unread' | 'read'>('all');

  const filteredNotifications = notifications.filter(notif => {
    if (filter === 'unread') return !notif.read;
    if (filter === 'read') return notif.read;
    return true;
  });

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-foreground">
              Notifikasi Peringatan
            </h1>
            <p className="text-muted-foreground flex items-center mt-2">
              <Bell className="h-4 w-4 mr-2" />
              Notifikasi untuk status bahaya tanah longsor
            </p>
          </div>
          
          <div className="flex items-center space-x-4">
            {unreadCount > 0 && (
              <Badge variant="destructive" className="px-3 py-1">
                {unreadCount} belum dibaca
              </Badge>
            )}
          </div>
        </div>

        {/* Statistics */}
        <div className="grid md:grid-cols-3 gap-4">
          <Card className="bg-card border-border">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Total Notifikasi</p>
                  <p className="text-2xl font-bold text-foreground">{notifications.length}</p>
                </div>
                <Bell className="h-8 w-8 text-primary" />
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-card border-border">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Belum Dibaca</p>
                  <p className="text-2xl font-bold text-status-bahaya">{unreadCount}</p>
                </div>
                <AlertCircle className="h-8 w-8 text-status-bahaya" />
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-card border-border">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Sudah Dibaca</p>
                  <p className="text-2xl font-bold text-status-aman">{notifications.length - unreadCount}</p>
                </div>
                <CheckCircle className="h-8 w-8 text-status-aman" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Filters */}
        <Card className="bg-card border-border">
          <CardContent className="p-4">
            <div className="flex gap-2">
              {[
                { key: 'all', label: 'Semua' },
                { key: 'unread', label: 'Belum Dibaca' },
                { key: 'read', label: 'Sudah Dibaca' }
              ].map((item) => (
                <Button
                  key={item.key}
                  variant={filter === item.key ? "default" : "outline"}
                  size="sm"
                  onClick={() => setFilter(item.key as any)}
                >
                  {item.label}
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Notifications List */}
        <div className="space-y-4">
          {filteredNotifications.length === 0 ? (
            <Card className="bg-card border-border">
              <CardContent className="p-8 text-center">
                <Bell className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-medium text-foreground mb-2">
                  Tidak ada notifikasi
                </h3>
                <p className="text-muted-foreground">
                  {filter === 'unread' 
                    ? 'Semua notifikasi sudah dibaca'
                    : filter === 'read'
                    ? 'Belum ada notifikasi yang dibaca'
                    : 'Belum ada notifikasi peringatan'
                  }
                </p>
              </CardContent>
            </Card>
          ) : (
            filteredNotifications.map((notification) => (
              <Card 
                key={notification.id} 
                className={cn(
                  "bg-card border-border transition-all hover:shadow-md",
                  !notification.read && "border-l-4 border-l-status-bahaya bg-card/50"
                )}
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <AlertCircle className="h-5 w-5 text-status-bahaya flex-shrink-0" />
                        <h3 className="font-semibold text-foreground">
                          {notification.title}
                        </h3>
                        {!notification.read && (
                          <div className="w-2 h-2 bg-status-bahaya rounded-full" />
                        )}
                      </div>
                      
                      <p className="text-muted-foreground mb-3">
                        {notification.message}
                      </p>
                      
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <div className="flex items-center space-x-1">
                          <Clock className="h-4 w-4" />
                          <span>
                            {notification.timestamp.toLocaleString('id-ID')}
                          </span>
                        </div>
                      </div>
                      
                      {/* Sensor Details */}
                      <div className="mt-4 grid grid-cols-3 gap-4 p-3 bg-muted/30 rounded-md">
                        <div className="text-center">
                          <div className="text-xs text-muted-foreground">Kelembaban</div>
                          <div className="font-mono text-sm font-medium text-status-bahaya">
                            {notification.data.soilMoisture.toFixed(1)}%
                          </div>
                        </div>
                        <div className="text-center">
                          <div className="text-xs text-muted-foreground">Curah Hujan</div>
                          <div className="font-mono text-sm font-medium text-status-bahaya">
                            {notification.data.raindropCount.toFixed(1)} mm/h
                          </div>
                        </div>
                        <div className="text-center">
                          <div className="text-xs text-muted-foreground">Pergeseran</div>
                          <div className="font-mono text-sm font-medium text-status-bahaya">
                            {notification.data.landShift.toFixed(1)} mm
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <Badge 
                      className="ml-4 bg-status-bahaya text-white"
                    >
                      BAHAYA
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>
        
        {filteredNotifications.length > 0 && (
          <div className="text-center text-sm text-muted-foreground">
            Menampilkan {filteredNotifications.length} notifikasi
          </div>
        )}
      </div>
    </div>
  );
};

export default Notifications;