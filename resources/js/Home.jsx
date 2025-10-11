import React from 'react';

const Home = () => {
  return (
    <div style={{ backgroundColor: '#f8f9fa' }}>

      {/* Hero Section */}
      <section style={{ padding: '4rem 2rem', textAlign: 'center' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🏔️</div>
          
          <h1 style={{ 
            fontSize: '3rem', 
            fontWeight: 'bold', 
            color: '#1e293b',
            marginBottom: '1rem',
            lineHeight: '1.2'
          }}>
            <span style={{ color: '#2563eb', display: 'block' }}>Geosafe</span>
            Sistem Monitoring Tanah Longsor
          </h1>
          
          <p style={{ 
            fontSize: '1.25rem', 
            color: '#64748b', 
            marginBottom: '2rem',
            lineHeight: '1.6'
          }}>
            Sistem monitoring tanah longsor real-time untuk melindungi masyarakat 
            dengan teknologi sensor canggih dan analisis data terintegrasi.
          </p>
          
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button style={{
              backgroundColor: '#2563eb',
              color: 'white',
              padding: '0.75rem 2rem',
              fontSize: '1.125rem',
              border: 'none',
              borderRadius: '0.5rem',
              cursor: 'pointer',
              fontWeight: '500',
              boxShadow: '0 4px 6px rgba(37, 99, 235, 0.3)'
            }}>
              📊 Mulai Monitoring
            </button>
            <button style={{
              backgroundColor: 'white',
              color: '#2563eb',
              padding: '0.75rem 2rem',
              fontSize: '1.125rem',
              border: '2px solid #2563eb',
              borderRadius: '0.5rem',
              cursor: 'pointer',
              fontWeight: '500'
            }}>
              📈 Lihat Laporan
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section style={{ padding: '4rem 2rem', backgroundColor: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ 
            fontSize: '2.5rem', 
            fontWeight: 'bold', 
            textAlign: 'center',
            color: '#1e293b',
            marginBottom: '3rem'
          }}>
            Fitur Monitoring Canggih
          </h2>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem'
          }}>
            {/* Feature 1 */}
            <div style={{
              backgroundColor: '#f8f9fa',
              padding: '2rem',
              borderRadius: '1rem',
              border: '1px solid #e2e8f0',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>💧</div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1e293b', marginBottom: '1rem' }}>
                Kelembaban Tanah
              </h3>
              <p style={{ color: '#64748b', lineHeight: '1.6' }}>
                Monitoring kelembaban tanah secara real-time untuk mendeteksi 
                perubahan kondisi yang dapat memicu tanah longsor.
              </p>
            </div>

            {/* Feature 2 */}
            <div style={{
              backgroundColor: '#f8f9fa',
              padding: '2rem',
              borderRadius: '1rem',
              border: '1px solid #e2e8f0',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📏</div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1e293b', marginBottom: '1rem' }}>
                Pergeseran Tanah
              </h3>
              <p style={{ color: '#64748b', lineHeight: '1.6' }}>
                Deteksi pergeseran tanah dengan sensor presisi tinggi untuk 
                peringatan dini bencana tanah longsor.
              </p>
            </div>

            {/* Feature 3 */}
            <div style={{
              backgroundColor: '#f8f9fa',
              padding: '2rem',
              borderRadius: '1rem',
              border: '1px solid #e2e8f0',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>⚠️</div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1e293b', marginBottom: '1rem' }}>
                Sistem Peringatan
              </h3>
              <p style={{ color: '#64748b', lineHeight: '1.6' }}>
                Sistem peringatan otomatis dengan tiga level: Aman, Waspada, 
                dan Bahaya untuk respons cepat.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section style={{ padding: '4rem 2rem', backgroundColor: '#f8f9fa' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 style={{ 
            fontSize: '2.5rem', 
            fontWeight: 'bold', 
            textAlign: 'center',
            color: '#1e293b',
            marginBottom: '3rem'
          }}>
            Cara Kerja Sistem
          </h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
            {/* Step 1 */}
            <div style={{ textAlign: 'center' }}>
              <div style={{
                width: '60px',
                height: '60px',
                backgroundColor: '#2563eb',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1rem',
                color: 'white',
                fontSize: '1.5rem',
                fontWeight: 'bold'
              }}>
                1
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#1e293b', marginBottom: '0.5rem' }}>
                Pengumpulan Data
              </h3>
              <p style={{ color: '#64748b', lineHeight: '1.6' }}>
                Sensor IoT mengumpulkan data kelembaban, curah hujan, dan pergeseran tanah secara kontinyu.
              </p>
            </div>

            {/* Step 2 */}
            <div style={{ textAlign: 'center' }}>
              <div style={{
                width: '60px',
                height: '60px',
                backgroundColor: '#2563eb',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1rem',
                color: 'white',
                fontSize: '1.5rem',
                fontWeight: 'bold'
              }}>
                2
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#1e293b', marginBottom: '0.5rem' }}>
                Analisis Real-time
              </h3>
              <p style={{ color: '#64748b', lineHeight: '1.6' }}>
                Data dianalisis secara real-time untuk menentukan tingkat risiko longsor.
              </p>
            </div>

            {/* Step 3 */}
            <div style={{ textAlign: 'center' }}>
              <div style={{
                width: '60px',
                height: '60px',
                backgroundColor: '#2563eb',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1rem',
                color: 'white',
                fontSize: '1.5rem',
                fontWeight: 'bold'
              }}>
                3
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#1e293b', marginBottom: '0.5rem' }}>
                Peringatan & Notifikasi
              </h3>
              <p style={{ color: '#64748b', lineHeight: '1.6' }}>
                Sistem memberikan peringatan otomatis untuk respons cepat.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

