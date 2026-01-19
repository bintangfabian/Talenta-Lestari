# Talenta Lestari - Sistem Monitoring Tanah Longsor

Sistem monitoring tanah longsor real-time untuk Desa Aribaya dengan teknologi sensor canggih dan analisis data terintegrasi.

## Tech Stack

### Backend
- **Laravel 11** - PHP Framework untuk backend API dan routing
- **MySQL/SQLite** - Database untuk menyimpan data sensor

### Frontend
- **React 18** - JavaScript library untuk membangun UI
- **TypeScript** - Type-safe JavaScript
- **Vite** - Build tool dan dev server
- **React Router** - Client-side routing
- **TanStack Query** - Data fetching dan caching
- **Recharts** - Library untuk charts dan visualisasi data

### UI Components
- **Radix UI** - Headless UI components
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Icon library
- **shadcn/ui** - Re-usable component collection

## Fitur Utama

1. **Monitoring Real-time**
   - Kelembaban Tanah
   - Curah Hujan
   - Pergeseran Tanah

2. **Sistem Peringatan**
   - Status Aman (Hijau)
   - Status Waspada (Kuning)
   - Status Bahaya (Merah)

3. **Visualisasi Data**
   - Grafik real-time
   - Historical data (24 jam)
   - Trend analysis

4. **Reporting & Notifications**
   - Laporan berkala
   - Notifikasi peringatan
   - Export data

## Instalasi

### Prerequisites
- PHP >= 8.2
- Composer
- Node.js >= 18
- NPM atau Yarn

### Setup Backend (Laravel)

1. Clone repository dan masuk ke direktori project:
```bash
cd Talenta-Lestari-V2
```

2. Install dependencies PHP:
```bash
composer install
```

3. Copy file environment:
```bash
cp .env.example .env
```

4. Generate application key:
```bash
php artisan key:generate
```

5. Konfigurasi database di file `.env`:
```env
DB_CONNECTION=sqlite
# Atau untuk MySQL:
# DB_CONNECTION=mysql
# DB_HOST=127.0.0.1
# DB_PORT=3306
# DB_DATABASE=talenta_lestari
# DB_USERNAME=root
# DB_PASSWORD=
```

6. Jalankan migrasi dan seeder:
```bash
php artisan migrate --seed
```

### Setup Frontend (React)

1. Install dependencies Node.js:
```bash
npm install
```

2. Build assets atau jalankan dev server:
```bash
# Development
npm run dev

# Production build
npm run build
```

### Menjalankan Aplikasi

1. Start Laravel development server:
```bash
php artisan serve
```

2. Di terminal terpisah, jalankan Vite dev server:
```bash
npm run dev
```

3. Buka browser dan akses:
```
http://localhost:8000
```

## Struktur Project

```
Talenta-Lestari-V2/
├── app/
│   ├── Http/
│   │   └── Controllers/
│   │       ├── PageController.php          # Handle main view
│   │       └── Api/
│   │           └── SensorDataController.php # API untuk sensor data
│   └── Models/
│       └── SensorData.php                   # Model untuk data sensor
├── database/
│   ├── migrations/
│   │   └── *_create_sensor_data_table.php  # Migration untuk tabel sensor
│   ├── factories/
│   │   └── SensorDataFactory.php           # Factory untuk testing
│   └── seeders/
│       └── SensorDataSeeder.php            # Seeder untuk sample data
├── resources/
│   ├── css/
│   │   └── app.css                         # Tailwind CSS
│   ├── js/
│   │   ├── App.tsx                         # Main React component
│   │   ├── app.tsx                         # Entry point
│   │   ├── components/
│   │   │   ├── ui/                         # Shadcn UI components
│   │   │   ├── layout/                     # Navigation, Footer
│   │   │   └── monitoring/                 # SensorCard, StatusIndicator
│   │   ├── pages/
│   │   │   ├── Home.tsx
│   │   │   ├── Monitoring.tsx
│   │   │   ├── Reporting.tsx
│   │   │   ├── Notifications.tsx
│   │   │   └── NotFound.tsx
│   │   ├── lib/                            # Utility functions
│   │   ├── hooks/                          # Custom React hooks
│   │   ├── types/                          # TypeScript types
│   │   └── utils/                          # Helper functions
│   └── views/
│       └── app.blade.php                   # Main Blade template
└── routes/
    ├── web.php                             # Web routes
    └── api.php                             # API routes
```

## API Endpoints

### Sensor Data API

Base URL: `http://localhost:8000/api/v1/sensor`

#### Get Current Reading
```http
GET /current
```
Response:
```json
{
  "success": true,
  "data": {
    "soilMoisture": 65.23,
    "raindropCount": 8.45,
    "landShift": 2.15
  },
  "timestamp": "2024-01-15T10:30:00Z"
}
```

#### Get Historical Data
```http
GET /history?hours=24&interval=60
```
Parameters:
- `hours` (optional): Jumlah jam data historis (default: 24)
- `interval` (optional): Interval dalam menit (default: 60)

#### Get Status
```http
GET /status
```
Response:
```json
{
  "success": true,
  "data": {
    "status": "aman|waspada|bahaya",
    "current_readings": { ... }
  }
}
```

#### Store Reading (Testing)
```http
POST /store
Content-Type: application/json

{
  "soil_moisture": 65.5,
  "raindrop_count": 8.2,
  "land_shift": 2.1
}
```

## Routing Pattern (MVC)

### Laravel Routes (Backend)
- **Web Routes** (`routes/web.php`): Catch-all route yang mengarah ke React SPA
- **API Routes** (`routes/api.php`): RESTful API untuk data sensor

### React Routes (Frontend)
- `/` - Home page
- `/monitoring` - Real-time monitoring dashboard
- `/reporting` - Laporan dan analytics
- `/notifications` - Notifikasi dan alerts

## Development

### Menambah Halaman Baru

1. Buat component di `resources/js/pages/NamaHalaman.tsx`
2. Tambahkan route di `resources/js/App.tsx`:
```tsx
<Route path="/nama-halaman" element={<NamaHalaman />} />
```
3. Update navigation di `resources/js/components/layout/Navigation.tsx`

### Menambah API Endpoint

1. Tambahkan method di `app/Http/Controllers/Api/SensorDataController.php`
2. Daftarkan route di `routes/api.php`:
```php
Route::get('/endpoint-baru', [SensorDataController::class, 'methodBaru']);
```

### Database

Menjalankan migration:
```bash
php artisan migrate
```

Rollback migration:
```bash
php artisan migrate:rollback
```

Refresh database dengan seed:
```bash
php artisan migrate:fresh --seed
```

## Production Build

1. Build frontend assets:
```bash
npm run build
```

2. Optimize Laravel:
```bash
php artisan config:cache
php artisan route:cache
php artisan view:cache
```

3. Set environment ke production di `.env`:
```env
APP_ENV=production
APP_DEBUG=false
```

## Testing

Jalankan PHP tests:
```bash
php artisan test
```

## Troubleshooting

### Port sudah digunakan
Jika port 8000 atau 5173 sudah digunakan:
```bash
# Laravel
php artisan serve --port=8001

# Vite
npm run dev -- --port=5174
```

### Vite tidak bisa connect
Pastikan kedua server (Laravel dan Vite) berjalan bersamaan.

### Error "Class not found"
```bash
composer dump-autoload
```

### Asset tidak dimuat
```bash
npm run build
php artisan config:clear
```

## Contributors

Developed for Desa Aribaya landslide monitoring system.

## License

Proprietary - All rights reserved.
