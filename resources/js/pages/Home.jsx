import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div style={{ backgroundColor: '#fff' }}>

      {/* Hero Section */}
      <section style={{ padding: '5rem 2rem 4rem', textAlign: 'center', backgroundColor: '#fff' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          {/* Icon */}
          <div style={{ marginBottom: '2rem' }}>
            <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ margin: '0 auto' }}>
              <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="#B31741" opacity="0.3"/>
              <path d="M2 17L12 22L22 17" stroke="#B31741" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 12L12 17L22 12" stroke="#B31741" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          
          <h1 style={{ 
            fontSize: '2.5rem', 
            fontWeight: 'bold', 
            color: '#B31741',
            marginBottom: '0.5rem',
            lineHeight: '1.2'
          }}>
            Geosafe
          </h1>
          
          <h2 style={{ 
            fontSize: '1.75rem', 
            fontWeight: '600', 
            color: '#B31741',
            marginBottom: '1.5rem',
            lineHeight: '1.3'
          }}>
            Sistem Monitoring Tanah Longsor
          </h2>
          
          <p style={{ 
            fontSize: '1rem', 
            color: '#6b7280', 
            marginBottom: '2.5rem',
            lineHeight: '1.6',
            maxWidth: '600px',
            margin: '0 auto 2.5rem'
          }}>
            Sistem monitoring tanah longsor real-time untuk melindungi masyarakat Desa Aribaya, 
            Banjarnegara dengan teknologi sensor canggih dan analisis data terintegrasi.
          </p>
          
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button 
              onClick={() => navigate('/monitoring')}
              style={{
                backgroundColor: '#B31741',
                color: 'white',
                padding: '0.875rem 2rem',
                fontSize: '1rem',
                border: 'none',
                borderRadius: '0.5rem',
                cursor: 'pointer',
                fontWeight: '500',
                boxShadow: '0 2px 8px rgba(179, 23, 65, 0.3)',
                transition: 'all 0.3s'
              }}
            >
              Mulai Monitoring
            </button>
            <button 
              onClick={() => navigate('/reporting')}
              style={{
                backgroundColor: 'white',
                color: '#B31741',
                padding: '0.875rem 2rem',
                fontSize: '1rem',
                border: '2px solid #B31741',
                borderRadius: '0.5rem',
                cursor: 'pointer',
                fontWeight: '500',
                transition: 'all 0.3s'
              }}
            >
              Lihat Laporan
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section style={{ padding: '4rem 2rem', backgroundColor: '#fafafa' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h2 style={{ 
            fontSize: '1.875rem', 
            fontWeight: 'bold', 
            textAlign: 'center',
            color: '#1f2937',
            marginBottom: '3rem'
          }}>
            Fitur Monitoring Canggih
          </h2>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2.5rem'
          }}>
            {/* Feature 1 */}
            <div style={{
              backgroundColor: 'white',
              padding: '2rem 1.5rem',
              borderRadius: '0.75rem',
              border: '1px solid #e5e7eb',
              textAlign: 'center',
              boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
            }}>
              <div style={{ 
                width: '60px', 
                height: '60px', 
                margin: '0 auto 1.25rem',
                backgroundColor: 'rgba(179, 23, 65, 0.1)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2.69L17 7.19V13.69C17 17.69 14 21.19 12 22.19C10 21.19 7 17.69 7 13.69V7.19L12 2.69Z" stroke="#B31741" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: '#1f2937', marginBottom: '0.75rem' }}>
                Kelembaban Tanah
              </h3>
              <p style={{ color: '#6b7280', lineHeight: '1.6', fontSize: '0.9375rem' }}>
                Monitoring kelembaban tanah secara real-time untuk mendeteksi 
                perubahan kondisi yang dapat memicu tanah longsor.
              </p>
            </div>

            {/* Feature 2 */}
            <div style={{
              backgroundColor: 'white',
              padding: '2rem 1.5rem',
              borderRadius: '0.75rem',
              border: '1px solid #e5e7eb',
              textAlign: 'center',
              boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
            }}>
              <div style={{ 
                width: '60px', 
                height: '60px', 
                margin: '0 auto 1.25rem',
                backgroundColor: 'rgba(179, 23, 65, 0.1)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 16V8C21 6.9 20.1 6 19 6H5C3.9 6 3 6.9 3 8V16C3 17.1 3.9 18 5 18H19C20.1 18 21 17.1 21 16Z" stroke="#B31741" strokeWidth="2"/>
                  <path d="M12 12H12.01" stroke="#B31741" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: '#1f2937', marginBottom: '0.75rem' }}>
                Pergeseran Tanah
              </h3>
              <p style={{ color: '#6b7280', lineHeight: '1.6', fontSize: '0.9375rem' }}>
                Deteksi pergeseran tanah dengan sensor presisi tinggi untuk 
                peringatan dini bencana tanah longsor.
              </p>
            </div>

            {/* Feature 3 */}
            <div style={{
              backgroundColor: 'white',
              padding: '2rem 1.5rem',
              borderRadius: '0.75rem',
              border: '1px solid #e5e7eb',
              textAlign: 'center',
              boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
            }}>
              <div style={{ 
                width: '60px', 
                height: '60px', 
                margin: '0 auto 1.25rem',
                backgroundColor: 'rgba(179, 23, 65, 0.1)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.29 3.86L1.82 18C1.64 18.3 1.54 18.65 1.53 19C1.53 20.1 2.43 21 3.53 21H20.47C20.82 21 21.17 20.9 21.47 20.71C22.42 20.12 22.73 18.88 22.14 17.93L13.71 3.86C13.32 3.18 12.65 2.75 11.93 2.75C11.21 2.75 10.54 3.18 10.29 3.86Z" stroke="#B31741" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 9V13" stroke="#B31741" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M12 17H12.01" stroke="#B31741" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: '#1f2937', marginBottom: '0.75rem' }}>
                Sistem Peringatan
              </h3>
              <p style={{ color: '#6b7280', lineHeight: '1.6', fontSize: '0.9375rem' }}>
                Sistem peringatan otomatis dengan tiga level: Aman, Waspada, 
                dan Bahaya untuk respons cepat.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section style={{ padding: '4rem 2rem', backgroundColor: 'white' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h2 style={{ 
            fontSize: '1.875rem', 
            fontWeight: 'bold', 
            textAlign: 'center',
            color: '#1f2937',
            marginBottom: '3rem'
          }}>
            Cara Kerja Sistem
          </h2>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0', maxWidth: '900px', margin: '0 auto' }}>
            {/* Left side - Steps */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem' }}>
              {/* Step 1 */}
              <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  backgroundColor: '#B31741',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '1.25rem',
                  fontWeight: 'bold',
                  flexShrink: 0
                }}>
                  1
                </div>
                <div style={{ flex: 1 }}>
                  <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: '#1f2937', marginBottom: '0.5rem' }}>
                    Pengumpulan Data Sensor
                  </h3>
                  <p style={{ color: '#6b7280', lineHeight: '1.6', fontSize: '0.9375rem' }}>
                    Sensor IoT mengumpulkan data kelembaban tanah, curah hujan, dan pergeseran tanah secara kontinyu 
                    di Desa Aribaya, Banjarnegara untuk monitoring kondisi tanah secara real-time.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  backgroundColor: '#B31741',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '1.25rem',
                  fontWeight: 'bold',
                  flexShrink: 0
                }}>
                  2
                </div>
                <div style={{ flex: 1 }}>
                  <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: '#1f2937', marginBottom: '0.5rem' }}>
                    Analisis Real-time
                  </h3>
                  <p style={{ color: '#6b7280', lineHeight: '1.6', fontSize: '0.9375rem' }}>
                    Data dianalisis secara real-time menggunakan algoritma canggih untuk menentukan tingkat risiko 
                    longsor dan memberikan status peringatan yang akurat.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  backgroundColor: '#B31741',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '1.25rem',
                  fontWeight: 'bold',
                  flexShrink: 0
                }}>
                  3
                </div>
                <div style={{ flex: 1 }}>
                  <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: '#1f2937', marginBottom: '0.5rem' }}>
                    Peringatan & Notifikasi
                  </h3>
                  <p style={{ color: '#6b7280', lineHeight: '1.6', fontSize: '0.9375rem' }}>
                    Sistem memberikan peringatan otomatis kepada warga Desa Aribaya, Banjarnegara dan pihak berwenang 
                    untuk respons cepat dalam menghadapi potensi bencana tanah longsor.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Landslide Mitigation Guide Section */}
      <section style={{ padding: '4rem 2rem', backgroundColor: '#fafafa' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 style={{ 
            fontSize: '1.875rem', 
            fontWeight: 'bold', 
            textAlign: 'center',
            color: '#1f2937',
            marginBottom: '3rem'
          }}>
            Panduan Mitigasi Tanah Longsor untuk Desa Aribaya
          </h2>
          
          <div style={{ display: 'grid', gap: '2rem' }}>
            {/* Guide 1 */}
            <div style={{
              backgroundColor: 'white',
              borderRadius: '0.75rem',
              padding: '2rem',
              border: '1px solid #e5e7eb',
              boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
            }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', marginBottom: '1rem' }}>
                <div style={{
                  width: '36px',
                  height: '36px',
                  backgroundColor: 'rgba(179, 23, 65, 0.1)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <span style={{ color: '#B31741', fontWeight: 'bold', fontSize: '1.125rem' }}>1</span>
                </div>
                <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: '#1f2937', margin: 0 }}>
                  Pemantauan Cuaca dan Curah Hujan
                </h3>
              </div>
              <p style={{ color: '#6b7280', marginBottom: '1rem', lineHeight: '1.6', fontSize: '0.9375rem' }}>
                Selalu pantau kondisi cuaca dan tingkat curah hujan, terutama saat musim hujan. 
                Hujan lebat berkepanjangan dapat memicu tanah longsor.
              </p>
              <ul style={{ color: '#6b7280', paddingLeft: '1.25rem', lineHeight: '1.6', fontSize: '0.9375rem', margin: 0 }}>
                <li style={{ marginBottom: '0.5rem' }}>Gunakan sistem peringatan dini Geosafe untuk monitoring real-time</li>
                <li style={{ marginBottom: '0.5rem' }}>Perhatikan peringatan cuaca dari BMKG</li>
                <li>Catat dan laporkan perubahan kondisi tanah setelah hujan lebat</li>
              </ul>
            </div>

            {/* Guide 2 */}
            <div style={{
              backgroundColor: 'white',
              borderRadius: '0.75rem',
              padding: '2rem',
              border: '1px solid #e5e7eb',
              boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
            }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', marginBottom: '1rem' }}>
                <div style={{
                  width: '36px',
                  height: '36px',
                  backgroundColor: 'rgba(179, 23, 65, 0.1)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <span style={{ color: '#B31741', fontWeight: 'bold', fontSize: '1.125rem' }}>2</span>
                </div>
                <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: '#1f2937', margin: 0 }}>
                  Identifikasi Tanda-tanda Bahaya
                </h3>
              </div>
              <p style={{ color: '#6b7280', marginBottom: '1rem', lineHeight: '1.6', fontSize: '0.9375rem' }}>
                Kenali tanda-tanda awal yang mengindikasikan potensi tanah longsor di area Desa Aribaya:
              </p>
              <ul style={{ color: '#6b7280', paddingLeft: '1.25rem', lineHeight: '1.6', fontSize: '0.9375rem', margin: 0 }}>
                <li style={{ marginBottom: '0.5rem' }}>Retakan pada tanah, dinding rumah, atau jalan</li>
                <li style={{ marginBottom: '0.5rem' }}>Air yang keluar dari lereng atau tanah</li>
                <li style={{ marginBottom: '0.5rem' }}>Pohon atau tiang listrik yang miring</li>
                <li style={{ marginBottom: '0.5rem' }}>Suara gemuruh dari dalam tanah</li>
                <li>Perubahan aliran air sungai atau mata air</li>
              </ul>
            </div>

            {/* Guide 3 */}
            <div style={{
              backgroundColor: 'white',
              borderRadius: '0.75rem',
              padding: '2rem',
              border: '1px solid #e5e7eb',
              boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
            }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', marginBottom: '1rem' }}>
                <div style={{
                  width: '36px',
                  height: '36px',
                  backgroundColor: 'rgba(179, 23, 65, 0.1)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <span style={{ color: '#B31741', fontWeight: 'bold', fontSize: '1.125rem' }}>3</span>
                </div>
                <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: '#1f2937', margin: 0 }}>
                  Langkah Pencegahan di Rumah
                </h3>
              </div>
              <p style={{ color: '#6b7280', marginBottom: '1rem', lineHeight: '1.6', fontSize: '0.9375rem' }}>
                Tindakan pencegahan yang dapat dilakukan warga Desa Aribaya:
              </p>
              <ul style={{ color: '#6b7280', paddingLeft: '1.25rem', lineHeight: '1.6', fontSize: '0.9375rem', margin: 0 }}>
                <li style={{ marginBottom: '0.5rem' }}>Tanam tanaman berakar kuat di sekitar rumah dan lereng</li>
                <li style={{ marginBottom: '0.5rem' }}>Buat saluran drainase yang baik untuk mengalirkan air hujan</li>
                <li style={{ marginBottom: '0.5rem' }}>Hindari membuang sampah di saluran air</li>
                <li style={{ marginBottom: '0.5rem' }}>Jangan membangun di daerah lereng curam tanpa izin</li>
                <li>Lakukan penghijauan di area yang rawan longsor</li>
              </ul>
            </div>

            {/* Guide 4 */}
            <div style={{
              backgroundColor: 'white',
              borderRadius: '0.75rem',
              padding: '2rem',
              border: '1px solid #e5e7eb',
              boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
            }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', marginBottom: '1rem' }}>
                <div style={{
                  width: '36px',
                  height: '36px',
                  backgroundColor: 'rgba(179, 23, 65, 0.1)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <span style={{ color: '#B31741', fontWeight: 'bold', fontSize: '1.125rem' }}>4</span>
                </div>
                <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: '#1f2937', margin: 0 }}>
                  Rencana Evakuasi Darurat
                </h3>
              </div>
              <p style={{ color: '#6b7280', marginBottom: '1rem', lineHeight: '1.6', fontSize: '0.9375rem' }}>
                Siapkan rencana evakuasi untuk keluarga dan komunitas:
              </p>
              <ul style={{ color: '#6b7280', paddingLeft: '1.25rem', lineHeight: '1.6', fontSize: '0.9375rem', margin: 0 }}>
                <li style={{ marginBottom: '0.5rem' }}>Kenali jalur evakuasi teraman menuju tempat yang lebih tinggi</li>
                <li style={{ marginBottom: '0.5rem' }}>Siapkan tas siaga berisi dokumen penting dan kebutuhan darurat</li>
                <li style={{ marginBottom: '0.5rem' }}>Tentukan titik kumpul keluarga jika terpisah</li>
                <li style={{ marginBottom: '0.5rem' }}>Simpan nomor kontak darurat desa dan instansi terkait</li>
                <li>Ikuti simulasi evakuasi yang diadakan pemerintah desa</li>
              </ul>
            </div>

            {/* Guide 5 */}
            <div style={{
              backgroundColor: 'white',
              borderRadius: '0.75rem',
              padding: '2rem',
              border: '1px solid #e5e7eb',
              boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
            }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', marginBottom: '1rem' }}>
                <div style={{
                  width: '36px',
                  height: '36px',
                  backgroundColor: 'rgba(179, 23, 65, 0.1)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <span style={{ color: '#B31741', fontWeight: 'bold', fontSize: '1.125rem' }}>5</span>
                </div>
                <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: '#1f2937', margin: 0 }}>
                  Koordinasi dengan Pemerintah Desa
                </h3>
              </div>
              <p style={{ color: '#6b7280', marginBottom: '1rem', lineHeight: '1.6', fontSize: '0.9375rem' }}>
                Jalin koordinasi yang baik dengan pemerintah Desa Aribaya:
              </p>
              <ul style={{ color: '#6b7280', paddingLeft: '1.25rem', lineHeight: '1.6', fontSize: '0.9375rem', margin: 0 }}>
                <li style={{ marginBottom: '0.5rem' }}>Laporkan segera jika menemukan tanda-tanda bahaya longsor</li>
                <li style={{ marginBottom: '0.5rem' }}>Ikuti sosialisasi dan pelatihan mitigasi bencana</li>
                <li style={{ marginBottom: '0.5rem' }}>Patuhi himbauan dan arahan dari petugas</li>
                <li style={{ marginBottom: '0.5rem' }}>Berpartisipasi dalam kegiatan gotong royong pencegahan bencana</li>
                <li>Gunakan sistem Geosafe untuk mendapat informasi terkini</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
