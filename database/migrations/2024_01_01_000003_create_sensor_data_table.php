<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('sensor_data', function (Blueprint $table) {
            $table->id();
            $table->decimal('soil_moisture', 5, 2)->comment('Kelembaban tanah (%)');
            $table->decimal('raindrop_count', 5, 2)->comment('Curah hujan (mm/h)');
            $table->decimal('land_shift', 5, 2)->comment('Pergeseran tanah (mm)');
            $table->string('location')->default('Desa Aribaya')->comment('Lokasi sensor');
            $table->string('sensor_id')->nullable()->comment('ID sensor fisik');
            $table->timestamps();
            
            // Index untuk query performa
            $table->index('created_at');
            $table->index('sensor_id');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('sensor_data');
    }
};

