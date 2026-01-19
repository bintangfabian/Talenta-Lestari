/**
 * Utility functions untuk konversi nilai ADC (0-1023) ke satuan yang mudah dipahami
 * berdasarkan karakteristik sensor yang digunakan
 */

/**
 * Konversi ADC sensor kelembaban tanah FC-28 ke persentase (%)
 * 
 * Karakteristik:
 * - Output: Analog, Tegangan (lembab = rendah resistansi -> tegangan tinggi -> ADC tinggi)
 * - Sensor FC-28: ADC tinggi = tanah lembab = persentase tinggi
 * 
 * Threshold berdasarkan ADC:
 * - Aman: ADC ≥ 476
 * - Waspada: ADC 340-475
 * - Bahaya: ADC ≤ 339
 * 
 * @param adc - Nilai ADC dari sensor (0-1023)
 * @returns Persentase kelembaban tanah (0-100%)
 */
export function convertSoilMoistureADC(adc: number): number {
  // Validasi input
  const clampedADC = Math.max(0, Math.min(1023, adc));
  
  // Konversi linear: ADC tinggi = kelembaban tinggi
  // Mapping: ADC 0 = 0%, ADC 1023 = 100%
  const percentage = (clampedADC / 1023) * 100;
  
  return Math.round(percentage * 10) / 10; // Round to 1 decimal
}

/**
 * Konversi ADC sensor rintik hujan ke mm/h
 * 
 * Karakteristik:
 * - Output: Analog, Tegangan Proporsional Basah/Kering
 * - Basah = konduktivitas tinggi = tegangan rendah = ADC rendah
 * - ADC tinggi = cuaca cerah (sedikit/tidak ada hujan)
 * - ADC rendah = hujan deras
 * 
 * Threshold berdasarkan ADC:
 * - Aman: ADC > 900 (cerah, 0-5 mm/h)
 * - Waspada: ADC 600-900 (gerimis, 5-15 mm/h)
 * - Bahaya: ADC < 600 (deras, >15 mm/h)
 * 
 * @param adc - Nilai ADC dari sensor (0-1023)
 * @returns Curah hujan dalam mm/h
 */
export function convertRainfallADC(adc: number): number {
  // Validasi input
  const clampedADC = Math.max(0, Math.min(1023, adc));
  
  let mmPerHour: number;
  
  if (clampedADC > 900) {
    // Aman: cuaca cerah, 0-5 mm/h
    // Mapping: ADC 1023 = 0 mm/h, ADC 900 = 5 mm/h
    mmPerHour = ((1023 - clampedADC) / (1023 - 900)) * 5;
  } else if (clampedADC >= 600) {
    // Waspada: gerimis, 5-15 mm/h
    // Mapping: ADC 900 = 5 mm/h, ADC 600 = 15 mm/h
    mmPerHour = 5 + ((900 - clampedADC) / (900 - 600)) * 10;
  } else {
    // Bahaya: hujan deras, 15-30 mm/h
    // Mapping: ADC 600 = 15 mm/h, ADC 0 = 30 mm/h
    mmPerHour = 15 + ((600 - clampedADC) / 600) * 15;
  }
  
  return Math.round(Math.max(0, mmPerHour) * 10) / 10; // Round to 1 decimal, min 0
}

/**
 * Konversi ADC sensor potensiometer geser (pergeseran tanah) ke mm
 * 
 * Karakteristik:
 * - Potensiometer geser: 10kΩ, panjang 60mm (6cm), 5V, ADC 10-bit (0-1023)
 * - ADC proporsional dengan panjang pergeseran
 * 
 * Threshold berdasarkan ADC:
 * - Aman: ADC ≤ 676 (≤ 40mm atau ≤ 4cm)
 * - Waspada: ADC 677-852 (40-50mm atau 4-5cm)
 * - Bahaya: ADC ≥ 853 (≥ 50mm atau ≥ 5cm)
 * 
 * @param adc - Nilai ADC dari sensor (0-1023)
 * @returns Pergeseran tanah dalam mm
 */
export function convertLandShiftADC(adc: number): number {
  // Validasi input
  const clampedADC = Math.max(0, Math.min(1023, adc));
  
  let mm: number;
  
  if (clampedADC <= 676) {
    // Aman: 0-40mm (0-4cm)
    // Linear mapping: ADC 0 = 0mm, ADC 676 = 40mm
    mm = (clampedADC / 676) * 40;
  } else if (clampedADC <= 852) {
    // Waspada: 40-50mm (4-5cm)
    // Linear mapping: ADC 676 = 40mm, ADC 852 = 50mm
    mm = 40 + ((clampedADC - 676) / (852 - 676)) * 10;
  } else {
    // Bahaya: 50-60mm (5-6cm)
    // Linear mapping: ADC 852 = 50mm, ADC 1023 = 60mm
    mm = 50 + ((clampedADC - 852) / (1023 - 852)) * 10;
  }
  
  return Math.round(mm * 10) / 10; // Round to 1 decimal
}

/**
 * Mendapatkan status berdasarkan nilai ADC sensor kelembaban tanah
 * 
 * @param adc - Nilai ADC dari sensor (0-1023)
 * @returns Status: 'aman' | 'waspada' | 'bahaya'
 */
export function getSoilMoistureStatus(adc: number): 'aman' | 'waspada' | 'bahaya' {
  if (adc >= 476) return 'aman';
  if (adc >= 340) return 'waspada';
  return 'bahaya';
}

/**
 * Mendapatkan status berdasarkan nilai ADC sensor rintik hujan
 * 
 * @param adc - Nilai ADC dari sensor (0-1023)
 * @returns Status: 'aman' | 'waspada' | 'bahaya'
 */
export function getRainfallStatus(adc: number): 'aman' | 'waspada' | 'bahaya' {
  if (adc > 900) return 'aman';
  if (adc >= 600) return 'waspada';
  return 'bahaya';
}

/**
 * Mendapatkan status berdasarkan nilai ADC sensor pergeseran tanah
 * 
 * @param adc - Nilai ADC dari sensor (0-1023)
 * @returns Status: 'aman' | 'waspada' | 'bahaya'
 */
export function getLandShiftStatus(adc: number): 'aman' | 'waspada' | 'bahaya' {
  if (adc <= 676) return 'aman';
  if (adc <= 852) return 'waspada';
  return 'bahaya';
}

/**
 * Generate nilai ADC random untuk testing
 * 
 * @param sensorType - Jenis sensor: 'soil' | 'rain' | 'land'
 * @returns Nilai ADC (0-1023)
 */
export function generateRandomADC(sensorType: 'soil' | 'rain' | 'land'): number {
  switch (sensorType) {
    case 'soil':
      // Generate ADC untuk kelembaban tanah (biasanya 200-800)
      return Math.floor(Math.random() * 600) + 200;
    case 'rain':
      // Generate ADC untuk rintik hujan (biasanya 400-1023)
      return Math.floor(Math.random() * 623) + 400;
    case 'land':
      // Generate ADC untuk pergeseran tanah (biasanya 0-900)
      return Math.floor(Math.random() * 900);
    default:
      return Math.floor(Math.random() * 1024);
  }
}
