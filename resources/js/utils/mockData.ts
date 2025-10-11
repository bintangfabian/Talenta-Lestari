import { SensorData, getStatusInfo } from '@/types/monitoring';

// Generate realistic mock data for landslide monitoring
export const generateMockData = (count: number = 50): SensorData[] => {
  const data: SensorData[] = [];
  const now = new Date();

  for (let i = 0; i < count; i++) {
    const timestamp = new Date(now.getTime() - (i * 60 * 60 * 1000)); // Every hour
    
    // Generate realistic sensor values with some correlation
    const baseRain = Math.random() * 20;
    const soilMoisture = Math.min(100, 30 + baseRain * 2.5 + (Math.random() - 0.5) * 15);
    const raindropCount = baseRain + (Math.random() - 0.5) * 5;
    const landShift = Math.max(0, (soilMoisture > 70 ? Math.random() * 8 : Math.random() * 3));

    const status = getStatusInfo(soilMoisture, raindropCount, landShift);

    data.push({
      id: `sensor-${i}`,
      timestamp,
      soilMoisture: Math.round(soilMoisture * 10) / 10,
      raindropCount: Math.round(raindropCount * 10) / 10,
      landShift: Math.round(landShift * 10) / 10,
      status: status.level
    });
  }

  return data.reverse(); // Oldest first
};

// Get current/latest sensor readings
export const getCurrentReading = (): SensorData => {
  const data = generateMockData(1);
  return data[0];
};

// Simulate real-time updates
export const useRealTimeData = () => {
  const [currentData, setCurrentData] = useState<SensorData>(getCurrentReading());
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentData(getCurrentReading());
    }, 5000); // Update every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return currentData;
};

import { useState, useEffect } from 'react';