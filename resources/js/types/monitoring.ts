export interface SensorData {
  id: string;
  timestamp: Date;
  soilMoisture: number;
  raindropCount: number;
  landShift: number;
  status: 'Aman' | 'Waspada' | 'Bahaya';
  // Raw ADC values (0-1023)
  rawADC?: {
    soilMoisture: number;
    rainfall: number;
    landShift: number;
  };
}

export interface MonitoringStatus {
  level: 'Aman' | 'Waspada' | 'Bahaya';
  color: 'status-aman' | 'status-waspada' | 'status-bahaya';
  description: string;
}

/**
 * Mendapatkan status monitoring berdasarkan nilai sensor yang sudah dikonversi
 * 
 * Threshold berdasarkan nilai yang dikonversi:
 * - Kelembaban tanah: <33.1% (bahaya), 33.1-46.4% (waspada), >46.4% (aman)
 * - Curah hujan: >15 mm/h (bahaya), 5-15 mm/h (waspada), 0-5 mm/h (aman)
 * - Pergeseran tanah: ≥50mm (bahaya), 40-50mm (waspada), ≤40mm (aman)
 */
export const getStatusInfo = (soilMoisture: number, raindropCount: number, landShift: number): MonitoringStatus => {
  // Threshold berdasarkan nilai yang dikonversi dari ADC
  const isSoilMoistureDanger = soilMoisture < 33.1; // ADC ≤ 339
  const isSoilMoistureWarning = soilMoisture >= 33.1 && soilMoisture < 46.5; // ADC 340-475
  
  const isRainfallDanger = raindropCount > 15; // ADC < 600
  const isRainfallWarning = raindropCount >= 5 && raindropCount <= 15; // ADC 600-900
  
  const isLandShiftDanger = landShift >= 50; // ADC ≥ 853
  const isLandShiftWarning = landShift >= 40 && landShift < 50; // ADC 677-852
  
  // Hitung jumlah kondisi bahaya dan waspada
  const dangerCount = [
    isSoilMoistureDanger,
    isRainfallDanger,
    isLandShiftDanger
  ].filter(Boolean).length;
  
  const warningCount = [
    isSoilMoistureWarning,
    isRainfallWarning,
    isLandShiftWarning
  ].filter(Boolean).length;

  // Status bahaya jika ada minimal 1 kondisi bahaya atau pergeseran tanah sangat tinggi
  if (dangerCount >= 1 || landShift >= 60) {
    return {
      level: 'Bahaya',
      color: 'status-bahaya',
      description: 'Kondisi berbahaya - Segera evakuasi!'
    };
  }
  
  // Status waspada jika ada minimal 1 kondisi waspada atau bahaya
  if (warningCount >= 1 || dangerCount >= 1) {
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