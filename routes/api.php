<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\SensorDataController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('api')->prefix('v1')->group(function () {
    // Sensor Data Routes
    Route::prefix('sensor')->group(function () {
        Route::get('/current', [SensorDataController::class, 'current']);
        Route::get('/history', [SensorDataController::class, 'history']);
        Route::get('/status', [SensorDataController::class, 'status']);
        Route::post('/store', [SensorDataController::class, 'store']);
    });
});

