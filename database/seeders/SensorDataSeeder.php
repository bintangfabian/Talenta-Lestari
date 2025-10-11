<?php

namespace Database\Seeders;

use App\Models\SensorData;
use Illuminate\Database\Seeder;

class SensorDataSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Generate historical data for the last 7 days
        // 70% normal, 20% warning, 10% critical
        
        SensorData::factory()
            ->count(700)
            ->normal()
            ->create();
            
        SensorData::factory()
            ->count(200)
            ->warning()
            ->create();
            
        SensorData::factory()
            ->count(100)
            ->critical()
            ->create();
    }
}

