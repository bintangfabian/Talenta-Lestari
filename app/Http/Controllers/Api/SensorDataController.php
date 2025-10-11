<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;

class SensorDataController extends Controller
{
    /**
     * Get current sensor readings
     * 
     * @return JsonResponse
     */
    public function current(): JsonResponse
    {
        // Generate mock data untuk saat ini
        // Nanti bisa diganti dengan data real dari database
        $data = $this->generateMockData();
        
        return response()->json([
            'success' => true,
            'data' => $data,
            'timestamp' => now()->toIso8601String()
        ]);
    }

    /**
     * Get historical sensor data
     * 
     * @param Request $request
     * @return JsonResponse
     */
    public function history(Request $request): JsonResponse
    {
        $hours = $request->input('hours', 24);
        $interval = $request->input('interval', 60); // minutes
        
        $data = $this->generateHistoricalData($hours, $interval);
        
        return response()->json([
            'success' => true,
            'data' => $data,
            'meta' => [
                'hours' => $hours,
                'interval' => $interval,
                'count' => count($data)
            ]
        ]);
    }

    /**
     * Store new sensor reading (untuk testing)
     * 
     * @param Request $request
     * @return JsonResponse
     */
    public function store(Request $request): JsonResponse
    {
        $validated = $request->validate([
            'soil_moisture' => 'required|numeric|min:0|max:100',
            'raindrop_count' => 'required|numeric|min:0',
            'land_shift' => 'required|numeric|min:0',
        ]);

        // Simpan ke database (untuk implementasi nanti)
        // $sensorData = SensorData::create($validated);

        return response()->json([
            'success' => true,
            'message' => 'Sensor data recorded successfully',
            'data' => $validated
        ], 201);
    }

    /**
     * Get sensor status
     * 
     * @return JsonResponse
     */
    public function status(): JsonResponse
    {
        $currentData = $this->generateMockData();
        $status = $this->calculateStatus(
            $currentData['soilMoisture'],
            $currentData['raindropCount'],
            $currentData['landShift']
        );

        return response()->json([
            'success' => true,
            'data' => [
                'status' => $status,
                'current_readings' => $currentData
            ]
        ]);
    }

    /**
     * Generate mock sensor data
     * 
     * @return array
     */
    private function generateMockData(): array
    {
        return [
            'soilMoisture' => round(rand(30, 85) + (rand(0, 100) / 100), 2),
            'raindropCount' => round(rand(0, 20) + (rand(0, 100) / 100), 2),
            'landShift' => round(rand(0, 8) + (rand(0, 100) / 100), 2),
        ];
    }

    /**
     * Generate historical mock data
     * 
     * @param int $hours
     * @param int $interval
     * @return array
     */
    private function generateHistoricalData(int $hours, int $interval): array
    {
        $data = [];
        $points = ($hours * 60) / $interval;
        
        for ($i = 0; $i < $points; $i++) {
            $timestamp = now()->subMinutes($interval * ($points - $i - 1));
            $data[] = array_merge(
                $this->generateMockData(),
                ['timestamp' => $timestamp->toIso8601String()]
            );
        }
        
        return $data;
    }

    /**
     * Calculate status based on sensor readings
     * 
     * @param float $soilMoisture
     * @param float $raindropCount
     * @param float $landShift
     * @return string
     */
    private function calculateStatus(float $soilMoisture, float $raindropCount, float $landShift): string
    {
        // Critical conditions
        if ($soilMoisture > 80 || $raindropCount > 15 || $landShift > 5) {
            return 'bahaya';
        }
        
        // Warning conditions
        if ($soilMoisture > 60 || $raindropCount > 10 || $landShift > 3) {
            return 'waspada';
        }
        
        // Normal conditions
        return 'aman';
    }
}

