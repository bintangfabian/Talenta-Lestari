import { SensorData, getStatusInfo } from '@/types/monitoring';
import { 
  convertSoilMoistureADC, 
  convertRainfallADC, 
  convertLandShiftADC,
  generateRandomADC 
} from './adcConverter';

// Generate realistic mock data for landslide monitoring
// Data dihasilkan dari nilai ADC yang kemudian dikonversi ke satuan yang mudah dipahami
export const generateMockData = (count: number = 50): SensorData[] => {
  const data: SensorData[] = [];
  const now = new Date();

  for (let i = 0; i < count; i++) {
    const timestamp = new Date(now.getTime() - (i * 60 * 60 * 1000)); // Every hour
    
    // Generate nilai ADC untuk setiap sensor
    const soilMoistureADC = generateRandomADC('soil');
    const rainfallADC = generateRandomADC('rain');
    const landShiftADC = generateRandomADC('land');
    
    // Konversi ADC ke satuan yang mudah dipahami
    const soilMoisture = convertSoilMoistureADC(soilMoistureADC);
    const raindropCount = convertRainfallADC(rainfallADC);
    const landShift = convertLandShiftADC(landShiftADC);

    const status = getStatusInfo(soilMoisture, raindropCount, landShift);

    data.push({
      id: `sensor-${i}`,
      timestamp,
      soilMoisture,
      raindropCount,
      landShift,
      status: status.level,
      rawADC: {
        soilMoisture: soilMoistureADC,
        rainfall: rainfallADC,
        landShift: landShiftADC
      }
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
// Note: This hook should be used in a component, not here
// Keeping for backward compatibility but recommend using useState/useEffect directly in components