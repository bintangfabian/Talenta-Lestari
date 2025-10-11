import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Area,
  AreaChart
} from 'recharts';
import { 
  Droplets, 
  Cloud, 
  Mountain, 
  RefreshCw,
  Calendar,
  TrendingUp 
} from 'lucide-react';
import SensorCard from '@/components/monitoring/SensorCard';
import StatusIndicator from '@/components/monitoring/StatusIndicator';
import { generateMockData, getCurrentReading } from '@/utils/mockData';
import { getStatusInfo } from '@/types/monitoring';
import { SensorData } from '@/types/monitoring';

const Monitoring = () => {
  const [currentData, setCurrentData] = useState<SensorData>(getCurrentReading());
  const [historicalData] = useState(() => generateMockData(24)); // Last 24 hours
  const [lastUpdate, setLastUpdate] = useState(new Date());
  const [isLive, setIsLive] = useState(true);

  useEffect(() => {
    if (!isLive) return;
    
    const interval = setInterval(() => {
      setCurrentData(getCurrentReading());
      setLastUpdate(new Date());
    }, 5000); // Update every 5 seconds

    return () => clearInterval(interval);
  }, [isLive]);

  const currentStatus = getStatusInfo(
    currentData.soilMoisture,
    currentData.raindropCount,
    currentData.landShift
  );

  const chartData = historicalData.map((data) => ({
    time: data.timestamp.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' }),
    soilMoisture: data.soilMoisture,
    raindrop: data.raindropCount,
    landShift: data.landShift,
  }));

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-foreground">
              Monitoring Real-time
            </h1>
            <p className="text-muted-foreground flex items-center mt-2">
              <Calendar className="h-4 w-4 mr-2" />
              Terakhir diperbarui: {lastUpdate.toLocaleString('id-ID')}
            </p>
          </div>
          
          <div className="flex items-center space-x-4">
            <Badge 
              variant={isLive ? "default" : "secondary"}
              className="flex items-center space-x-2"
            >
              <div className={`w-2 h-2 rounded-full ${isLive ? 'bg-green-400 animate-pulse' : 'bg-gray-400'}`} />
              <span>{isLive ? 'LIVE' : 'PAUSED'}</span>
            </Badge>
            
            <Button
              variant="outline"
              size="sm"
              onClick={() => setIsLive(!isLive)}
            >
              <RefreshCw className="h-4 w-4 mr-2" />
              {isLive ? 'Pause' : 'Resume'}
            </Button>
          </div>
        </div>

        {/* Current Status and Sensor Cards */}
        <div className="grid lg:grid-cols-4 gap-6">
          <div className="lg:col-span-1">
            <StatusIndicator status={currentStatus} />
          </div>
          
          <div className="lg:col-span-3 grid md:grid-cols-3 gap-4">
            <SensorCard
              title="Kelembaban Tanah"
              value={currentData.soilMoisture}
              unit="%"
              icon={<Droplets className="h-5 w-5" />}
              trend={currentData.soilMoisture > 70 ? 'up' : 'stable'}
              status={currentData.soilMoisture > 80 ? 'critical' : currentData.soilMoisture > 60 ? 'warning' : 'normal'}
            />
            
            <SensorCard
              title="Curah Hujan"
              value={currentData.raindropCount}
              unit="mm/h"
              icon={<Cloud className="h-5 w-5" />}
              trend={currentData.raindropCount > 10 ? 'up' : 'stable'}
              status={currentData.raindropCount > 15 ? 'critical' : currentData.raindropCount > 10 ? 'warning' : 'normal'}
            />
            
            <SensorCard
              title="Pergeseran Tanah"
              value={currentData.landShift}
              unit="mm"
              icon={<Mountain className="h-5 w-5" />}
              trend={currentData.landShift > 3 ? 'up' : 'stable'}
              status={currentData.landShift > 5 ? 'critical' : currentData.landShift > 3 ? 'warning' : 'normal'}
            />
          </div>
        </div>

        {/* Charts */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Soil Moisture & Rainfall Chart */}
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <TrendingUp className="h-5 w-5" />
                <span>Kelembaban & Curah Hujan (24 Jam)</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--chart-grid))" />
                  <XAxis 
                    dataKey="time" 
                    stroke="hsl(var(--muted-foreground))"
                    fontSize={12}
                  />
                  <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'hsl(var(--card))',
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px'
                    }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="soilMoisture" 
                    stroke="hsl(var(--primary))" 
                    strokeWidth={2}
                    name="Kelembaban (%)"
                  />
                  <Line 
                    type="monotone" 
                    dataKey="raindrop" 
                    stroke="hsl(var(--status-waspada))" 
                    strokeWidth={2}
                    name="Curah Hujan (mm/h)"
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Land Shift Chart */}
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Mountain className="h-5 w-5" />
                <span>Pergeseran Tanah (24 Jam)</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--chart-grid))" />
                  <XAxis 
                    dataKey="time" 
                    stroke="hsl(var(--muted-foreground))"
                    fontSize={12}
                  />
                  <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'hsl(var(--card))',
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px'
                    }}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="landShift" 
                    stroke="hsl(var(--status-bahaya))" 
                    fill="hsl(var(--status-bahaya))"
                    fillOpacity={0.3}
                    strokeWidth={2}
                    name="Pergeseran (mm)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Alert Thresholds Info */}
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle>Ambang Batas Peringatan</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <h4 className="font-medium text-foreground">Kelembaban Tanah</h4>
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span>Normal:</span>
                    <span className="text-status-aman">{'< 60%'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Waspada:</span>
                    <span className="text-status-waspada">60-80%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Bahaya:</span>
                    <span className="text-status-bahaya">{'> 80%'}</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-2">
                <h4 className="font-medium text-foreground">Curah Hujan</h4>
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span>Normal:</span>
                    <span className="text-status-aman">{'< 10 mm/h'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Waspada:</span>
                    <span className="text-status-waspada">10-15 mm/h</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Bahaya:</span>
                    <span className="text-status-bahaya">{'> 15 mm/h'}</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-2">
                <h4 className="font-medium text-foreground">Pergeseran Tanah</h4>
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span>Normal:</span>
                    <span className="text-status-aman">{'< 3 mm'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Waspada:</span>
                    <span className="text-status-waspada">3-5 mm</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Bahaya:</span>
                    <span className="text-status-bahaya">{'> 5 mm'}</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Monitoring;