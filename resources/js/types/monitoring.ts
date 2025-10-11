export interface SensorData {
  id: string;
  timestamp: Date;
  soilMoisture: number;
  raindropCount: number;
  landShift: number;
  status: 'Aman' | 'Waspada' | 'Bahaya';
}

export interface MonitoringStatus {
  level: 'Aman' | 'Waspada' | 'Bahaya';
  color: 'status-aman' | 'status-waspada' | 'status-bahaya';
  description: string;
}

export const getStatusInfo = (soilMoisture: number, raindropCount: number, landShift: number): MonitoringStatus => {
  // Threshold logic for status determination
  const criticalCount = [
    soilMoisture > 80,
    raindropCount > 15,
    landShift > 5
  ].filter(Boolean).length;

  if (criticalCount >= 2 || landShift > 10) {
    return {
      level: 'Bahaya',
      color: 'status-bahaya',
      description: 'Kondisi berbahaya - Segera evakuasi!'
    };
  }
  
  if (criticalCount === 1 || soilMoisture > 60 || raindropCount > 10 || landShift > 3) {
    return {
      level: 'Waspada',
      color: 'status-waspada',
      description: 'Waspada - Pantau kondisi secara berkala'
    };
  }

  return {
    level: 'Aman',
    color: 'status-aman',
    description: 'Kondisi normal dan aman'
  };
};