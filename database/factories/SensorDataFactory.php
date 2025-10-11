<?php

namespace Database\Factories;

use App\Models\SensorData;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\SensorData>
 */
class SensorDataFactory extends Factory
{
    protected $model = SensorData::class;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'soil_moisture' => fake()->randomFloat(2, 30, 85),
            'raindrop_count' => fake()->randomFloat(2, 0, 20),
            'land_shift' => fake()->randomFloat(2, 0, 8),
            'location' => 'Desa Aribaya',
            'sensor_id' => 'SENSOR-' . fake()->numberBetween(1, 5),
            'created_at' => fake()->dateTimeBetween('-7 days', 'now'),
        ];
    }

    /**
     * Indicate that the sensor data is in critical state.
     */
    public function critical(): static
    {
        return $this->state(fn (array $attributes) => [
            'soil_moisture' => fake()->randomFloat(2, 80, 95),
            'raindrop_count' => fake()->randomFloat(2, 15, 25),
            'land_shift' => fake()->randomFloat(2, 5, 10),
        ]);
    }

    /**
     * Indicate that the sensor data is in warning state.
     */
    public function warning(): static
    {
        return $this->state(fn (array $attributes) => [
            'soil_moisture' => fake()->randomFloat(2, 60, 80),
            'raindrop_count' => fake()->randomFloat(2, 10, 15),
            'land_shift' => fake()->randomFloat(2, 3, 5),
        ]);
    }

    /**
     * Indicate that the sensor data is in normal state.
     */
    public function normal(): static
    {
        return $this->state(fn (array $attributes) => [
            'soil_moisture' => fake()->randomFloat(2, 30, 60),
            'raindrop_count' => fake()->randomFloat(2, 0, 10),
            'land_shift' => fake()->randomFloat(2, 0, 3),
        ]);
    }
}

