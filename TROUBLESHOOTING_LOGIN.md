# Troubleshooting Login Admin

## Masalah: "Invalid credentials" saat login

### Solusi yang sudah diterapkan:

1. **Controller diperbaiki** - Menggunakan `Hash::check()` langsung untuk validasi password
2. **Routes diperbaiki** - Menambahkan middleware `web` untuk mendukung session

### Langkah-langkah untuk memastikan login berfungsi:

#### 1. Pastikan User Admin sudah di-seed ke database:

```bash
php artisan migrate:fresh --seed
```

Atau jika database sudah ada:

```bash
php artisan db:seed --class=AdminUserSeeder
```

#### 2. Pastikan credentials yang benar:

**Email:** `admin@talentalestari.aribaya.id`  
**Password:** `admin123`

#### 3. Pastikan CSRF token terkirim:

Frontend harus mengirim CSRF token di header. Pastikan di `app.blade.php` ada:
```html
<meta name="csrf-token" content="{{ csrf_token() }}">
```

#### 4. Cek apakah user ada di database:

Jalankan di terminal:
```bash
php artisan tinker
```

Kemudian:
```php
App\Models\User::where('email', 'admin@talentalestari.aribaya.id')->first();
```

Jika user tidak ada, jalankan seeder:
```php
php artisan db:seed --class=AdminUserSeeder
```

#### 5. Cek log error:

```bash
tail -f storage/logs/laravel.log
```

### Jika masih error:

1. **Clear cache:**
```bash
php artisan config:clear
php artisan cache:clear
php artisan route:clear
```

2. **Pastikan session driver di `.env`:**
```env
SESSION_DRIVER=file
```

3. **Cek apakah cookies diaktifkan di browser**

4. **Cek network tab di browser** untuk melihat request/response yang sebenarnya
