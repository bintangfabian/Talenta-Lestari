# Struktur Project Talenta Lestari

## Perubahan yang Dilakukan

Project telah direstrukturisasi untuk memanfaatkan komponen-komponen yang sudah ada dengan lebih baik.

### Struktur Folder

```
resources/js/
├── components/
│   ├── layout/
│   │   ├── Navigation.jsx    # Komponen navigasi (JSX)
│   │   ├── Navigation.tsx    # Komponen navigasi (TypeScript)
│   │   ├── Footer.jsx        # Komponen footer (JSX)
│   │   └── Footer.tsx        # Komponen footer (TypeScript)
│   ├── monitoring/           # Komponen khusus monitoring
│   └── ui/                   # Komponen UI reusable (shadcn/ui)
├── pages/
│   ├── Home.jsx              # Halaman beranda
│   ├── MonitoringSimple.jsx  # Halaman monitoring
│   ├── ReportingSimple.jsx   # Halaman laporan
│   ├── NotificationsSimple.jsx # Halaman notifikasi
│   ├── AdminLogin.jsx        # Halaman login admin
│   ├── AdminDashboard.jsx    # Dashboard admin
│   └── *.tsx                 # Versi TypeScript dari halaman
├── hooks/                    # Custom React hooks
├── lib/                      # Library utilities
├── types/                    # TypeScript type definitions
├── utils/                    # Utility functions
├── MainApp.jsx               # Main app component (entry point)
├── App.tsx                   # TypeScript version
└── app.jsx                   # Bootstrap file

```

### Komponen Utama

#### 1. Navigation Component (`components/layout/Navigation.jsx`)
- Navigasi utama aplikasi
- Menggunakan warna brand #B31741
- Active state untuk halaman yang sedang dibuka
- Responsive design
- Link ke: Beranda, Monitoring, Laporan, Notifikasi, Admin

#### 2. Footer Component (`components/layout/Footer.jsx`)
- Footer aplikasi
- Informasi copyright
- Informasi tentang Desa Aribaya, Banjarnegara

#### 3. MainApp Component (`MainApp.jsx`)
- Entry point aplikasi
- Menggunakan React Router untuk routing
- Mengintegrasikan Navigation dan Footer
- Mengelola semua routes

### Halaman-halaman

#### 1. Home (`pages/Home.jsx`)
- Hero section dengan branding Talenta Lestari
- Fitur monitoring canggih (3 cards)
- Cara kerja sistem (3 steps)
- Panduan mitigasi tanah longsor (5 panduan lengkap)

#### 2. Monitoring (`pages/MonitoringSimple.jsx`)
- Real-time monitoring dengan Chart.js
- 4 sensor cards (Status, Kelembaban, Curah Hujan, Pergeseran)
- 2 grafik interaktif (24 jam)
- Ambang batas peringatan
- Live/Pause toggle

#### 3. Reporting (`pages/ReportingSimple.jsx`)
- Laporan data monitoring
- Statistics cards (Total, Aman, Waspada, Bahaya)
- Tabel data harian (30 hari)
- Filter berdasarkan periode
- Export to CSV
- Rata-rata pembacaan sensor

#### 4. Notifications (`pages/NotificationsSimple.jsx`)
- Notifikasi peringatan
- Statistics cards (Total, Belum Dibaca, Sudah Dibaca)
- Filter (Semua, Belum Dibaca, Sudah Dibaca)
- Notification cards dengan sensor details
- Tandai sebagai dibaca

#### 5. Admin Login (`pages/AdminLogin.jsx`)
- Form login untuk administrator
- Validasi credentials
- Redirect ke dashboard setelah login

#### 6. Admin Dashboard (`pages/AdminDashboard.jsx`)
- Dashboard administrator
- Statistics overview
- Quick actions
- System information

### Color Scheme

Aplikasi menggunakan color scheme yang konsisten:

- **Primary**: #B31741 (Merah Marun - Brand Talenta Lestari)
- **Success**: #22c55e (Hijau - Status Aman)
- **Warning**: #eab308 (Kuning - Status Waspada)
- **Danger**: #ef4444 (Merah - Status Bahaya)
- **Background**: #fafafa (Abu-abu sangat muda)
- **Card**: #ffffff (Putih)
- **Text**: 
  - Dark: #1f2937
  - Medium: #6b7280
  - Light: #9ca3af
- **Border**: #e5e7eb

### Routing

```javascript
/ - Home
/monitoring - Monitoring Real-time
/reporting - Laporan Data
/notifications - Notifikasi Peringatan
/admin/login - Login Admin
/admin/dashboard - Dashboard Admin
* - 404 Not Found
```

### Dependencies

- **React 18**: UI library
- **React Router**: Client-side routing
- **Chart.js & react-chartjs-2**: Grafik interaktif
- **Tailwind CSS**: Utility-first CSS (via app.css)

### Build & Development

```bash
# Development
npm run dev

# Production build
npm run build

# Laravel server
php artisan serve
```

### Entry Point

File `resources/js/app.jsx` adalah entry point yang me-render `MainApp.jsx` ke dalam DOM element dengan id `app`.

### Keuntungan Struktur Baru

1. **Reusability**: Komponen Navigation dan Footer dapat digunakan di berbagai tempat
2. **Maintainability**: Perubahan pada Navigation/Footer otomatis berlaku di semua halaman
3. **Consistency**: Semua halaman menggunakan komponen yang sama
4. **Scalability**: Mudah menambah halaman atau komponen baru
5. **Organization**: File terorganisir dengan baik berdasarkan fungsinya
6. **Type Safety**: Tersedia versi TypeScript untuk type checking

### Catatan

- Versi JSX digunakan untuk MainApp.jsx dan halaman-halaman utama
- Versi TypeScript (TSX) tersedia untuk development yang lebih type-safe
- Komponen UI dari shadcn/ui tersedia di `components/ui/`
- Custom hooks tersedia di `hooks/`
- Utility functions tersedia di `lib/` dan `utils/`
