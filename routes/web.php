<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PageController;
use App\Http\Controllers\Api\SensorDataController;

// Main Application Routes - Semua route akan diarahkan ke React Router
Route::get('/{any}', [PageController::class, 'index'])->where('any', '.*');
