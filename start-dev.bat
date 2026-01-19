@echo off
REM Talenta Lestari Development Server Launcher (Windows)

echo ╔══════════════════════════════════════════════════════════╗
echo ║      Talenta Lestari Development Server Launcher          ║
echo ╚══════════════════════════════════════════════════════════╝
echo.

REM Check if we're in the correct directory
if not exist "artisan" (
    echo ❌ Error: artisan file not found!
    echo Please run this script from the Talenta-Lestari-V2 directory
    pause
    exit /b 1
)

echo ✅ Checking dependencies...

REM Check if node_modules exists
if not exist "node_modules" (
    echo ⚠️  node_modules not found. Running npm install...
    call npm install
)

REM Check if vendor exists
if not exist "vendor" (
    echo ⚠️  vendor not found. Running composer install...
    call composer install
)

echo.
echo 🚀 Starting development servers...
echo.
echo 📌 Laravel server will run on: http://localhost:8000
echo 📌 Vite dev server will run on: http://localhost:5173
echo.
echo Press Ctrl+C to stop both servers
echo.
echo ════════════════════════════════════════════════════════════
echo.

REM Install concurrently if not available
where concurrently >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo ℹ️  Installing concurrently for better process management...
    call npm install --save-dev concurrently
)

REM Run both servers
call npx concurrently "php artisan serve" "npm run dev"

