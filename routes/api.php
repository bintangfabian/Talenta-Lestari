<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\SensorDataController;
use App\Http\Controllers\Auth\AdminAuthController;

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
    // Admin Authentication Routes
    Route::prefix('admin')->group(function () {
        Route::post('/login', [AdminAuthController::class, 'login']);
        Route::post('/logout', [AdminAuthController::class, 'logout'])->middleware('auth:sanctum');
        Route::get('/user', [AdminAuthController::class, 'user'])->middleware('auth:sanctum');
    });

    // Sensor Data Routes
    Route::prefix('sensor')->group(function () {
        Route::get('/current', [SensorDataController::class, 'current']);
        Route::get('/history', [SensorDataController::class, 'history']);
        Route::get('/status', [SensorDataController::class, 'status']);
        Route::post('/store', [SensorDataController::class, 'store']);
    });
});

