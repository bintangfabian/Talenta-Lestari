<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SensorData extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'soil_moisture',
        'raindrop_count',
        'land_shift',
        'location',
        'sensor_id',
        'status',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'soil_moisture' => 'decimal:2',
        'raindrop_count' => 'decimal:2',
        'land_shift' => 'decimal:2',
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];

    /**
     * Get the status based on sensor readings
     * 
     * @return string
     */
    public function getStatusAttribute(): string
    {
        if ($this->soil_moisture > 80 || $this->raindrop_count > 15 || $this->land_shift > 5) {
            return 'bahaya';
        }
        
        if ($this->soil_moisture > 60 || $this->raindrop_count > 10 || $this->land_shift > 3) {
            return 'waspada';
        }
        
        return 'aman';
    }
}

