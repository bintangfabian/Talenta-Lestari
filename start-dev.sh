#!/bin/bash

# Geosafe Development Server Launcher
# This script starts both Laravel and Vite dev servers

echo "╔══════════════════════════════════════════════════════════╗"
echo "║         Geosafe Development Server Launcher              ║"
echo "╚══════════════════════════════════════════════════════════╝"
echo ""

# Check if we're in the correct directory
if [ ! -f "artisan" ]; then
    echo "❌ Error: artisan file not found!"
    echo "Please run this script from the Geosafe-V2 directory"
    exit 1
fi

echo "✅ Checking dependencies..."

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "⚠️  node_modules not found. Running npm install..."
    npm install
fi

# Check if vendor exists
if [ ! -d "vendor" ]; then
    echo "⚠️  vendor not found. Running composer install..."
    composer install
fi

echo ""
echo "🚀 Starting development servers..."
echo ""
echo "📌 Laravel server will run on: http://localhost:8000"
echo "📌 Vite dev server will run on: http://localhost:5173"
echo ""
echo "Press Ctrl+C to stop both servers"
echo ""
echo "════════════════════════════════════════════════════════════"
echo ""

# Run both servers using concurrently (if available) or fallback to manual
if command -v concurrently &> /dev/null; then
    npx concurrently "php artisan serve" "npm run dev"
else
    echo "ℹ️  Installing concurrently for better process management..."
    npm install --save-dev concurrently
    npx concurrently "php artisan serve" "npm run dev"
fi

