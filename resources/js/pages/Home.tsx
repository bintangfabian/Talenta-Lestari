import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Droplets, Cloud, Mountain, Newspaper, Image as ImageIcon, Calendar, ArrowRight } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Home: React.FC = () => {
  const navigate = useNavigate();
  const howItWorksRef = useRef<HTMLDivElement>(null);
  const [lineHeight, setLineHeight] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!howItWorksRef.current) return;

      const rect = howItWorksRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Hitung posisi section relatif terhadap viewport
      const sectionTop = rect.top;
      const sectionHeight = rect.height;
      
      // Tinggi garis maksimal (dari center step 1 ke center step 3)
      // Step 1 center: 24px (half of 48px circle)
      // Step 2: marginBottom 4rem (64px) + konten step 1 (~120px) = ~184px, center circle: ~184px + 24px = ~208px
      // Step 3: marginBottom 4rem (64px) + konten step 2 (~120px) = ~352px, center circle: ~352px + 24px = ~376px
      // Total tinggi garis: 376px - 24px = 352px
      const maxLineHeight = 352;
      
      // Jika section sudah masuk viewport
      if (sectionTop < windowHeight && sectionTop + sectionHeight > 0) {
        // Hitung progress scroll (0 sampai 1)
        // Mulai animasi ketika section masuk 30% dari atas viewport
        // Selesai animasi ketika section mencapai 70% dari atas viewport
        const startOffset = windowHeight * 0.3;
        const endOffset = windowHeight * 0.7;
        const visibleHeight = windowHeight - startOffset;
        
        // Progress berdasarkan seberapa jauh section sudah terlihat
        let scrollProgress = 0;
        if (sectionTop < startOffset) {
          // Section sudah melewati start point
          const scrolled = startOffset - sectionTop;
          scrollProgress = Math.min(1, scrolled / visibleHeight);
        }
        
        const currentHeight = scrollProgress * maxLineHeight;
        setLineHeight(currentHeight);
      } else if (sectionTop > windowHeight) {
        // Jika section belum masuk viewport, reset tinggi
        setLineHeight(0);
      } else if (sectionTop + sectionHeight < 0) {
        // Jika section sudah lewat, set tinggi maksimal
        setLineHeight(maxLineHeight);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div style={{ backgroundColor: '#fff' }}>

      {/* Hero Section */}
      <section style={{ padding: '5rem 2rem 4rem', textAlign: 'center', backgroundColor: '#fff' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h1 style={{
            fontSize: '3.5rem',
            fontWeight: 'bold',
            color: '#B31741',
            marginBottom: '0.5rem',
            lineHeight: '1.2'
          }}>
            Talenta Lestari
          </h1>

          <h2 style={{
            fontSize: '2.25rem',
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
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#8d1233';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(179, 23, 65, 0.4)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#B31741';
                e.currentTarget.style.boxShadow = '0 2px 8px rgba(179, 23, 65, 0.3)';
                e.currentTarget.style.transform = 'translateY(0)';
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
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#B31741';
                e.currentTarget.style.color = 'white';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(179, 23, 65, 0.15)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'white';
                e.currentTarget.style.color = '#B31741';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.transform = 'translateY(0)';
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
            Fitur Monitoring
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
              boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
              transition: 'all 0.3s',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(179, 23, 65, 0.15)';
              e.currentTarget.style.transform = 'translateY(-4px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.05)';
              e.currentTarget.style.transform = 'translateY(0)';
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
                <Droplets size={32} color="#B31741" />
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
              boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
              transition: 'all 0.3s',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(179, 23, 65, 0.15)';
              e.currentTarget.style.transform = 'translateY(-4px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.05)';
              e.currentTarget.style.transform = 'translateY(0)';
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
                <Cloud size={32} color="#B31741" />
              </div>
              <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: '#1f2937', marginBottom: '0.75rem' }}>
                Curah Hujan
              </h3>
              <p style={{ color: '#6b7280', lineHeight: '1.6', fontSize: '0.9375rem' }}>
                Monitoring curah hujan secara real-time untuk mendeteksi
                kondisi cuaca yang dapat memicu tanah longsor.
              </p>
            </div>

            {/* Feature 3 */}
            <div style={{
              backgroundColor: 'white',
              padding: '2rem 1.5rem',
              borderRadius: '0.75rem',
              border: '1px solid #e5e7eb',
              textAlign: 'center',
              boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
              transition: 'all 0.3s',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(179, 23, 65, 0.15)';
              e.currentTarget.style.transform = 'translateY(-4px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.05)';
              e.currentTarget.style.transform = 'translateY(0)';
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
                <Mountain size={32} color="#B31741" />
              </div>
              <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: '#1f2937', marginBottom: '0.75rem' }}>
                Pergeseran Tanah
              </h3>
              <p style={{ color: '#6b7280', lineHeight: '1.6', fontSize: '0.9375rem' }}>
                Deteksi pergeseran tanah dengan sensor presisi tinggi untuk
                peringatan dini bencana tanah longsor.
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

          <div ref={howItWorksRef} style={{ position: 'relative', maxWidth: '900px', margin: '0 auto' }}>
            {/* Vertical Line - from Step 1 center to Step 3 center */}
            <div style={{
              position: 'absolute',
              left: '50%',
              top: '24px', // Center of step 1 circle (24px = half of 48px circle height)
              width: '3px',
              height: `${lineHeight}px`,
              backgroundColor: '#B31741',
              transform: 'translateX(-50%)',
              zIndex: 0,
              transition: 'height 0.1s ease-out',
              borderRadius: '2px'
            }} />

            {/* Step 1 - Right */}
            <div style={{ position: 'relative', marginBottom: '4rem', zIndex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.5rem' }}>
                <div style={{ flex: 1, textAlign: 'right', paddingRight: '3rem' }}>
                  <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: '#1f2937', marginBottom: '0.5rem' }}>
                    Pengumpulan Data Sensor
                  </h3>
                  <p style={{ color: '#6b7280', lineHeight: '1.6', fontSize: '0.9375rem' }}>
                    Sensor IoT mengumpulkan data kelembaban tanah, curah hujan, dan pergeseran tanah secara kontinyu
                    di Desa Aribaya, Banjarnegara untuk monitoring kondisi tanah secara real-time.
                  </p>
                </div>
                <div style={{
                  position: 'absolute',
                  left: '50%',
                  transform: 'translateX(-50%)',
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
                  border: '4px solid white',
                  boxShadow: '0 0 0 2px #B31741',
                  zIndex: 2
                }}>
                  1
                </div>
                <div style={{ flex: 1 }}></div>
              </div>
            </div>

            {/* Step 2 - Left */}
            <div style={{ position: 'relative', marginBottom: '4rem', zIndex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.5rem' }}>
                <div style={{ flex: 1 }}></div>
                <div style={{
                  position: 'absolute',
                  left: '50%',
                  transform: 'translateX(-50%)',
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
                  border: '4px solid white',
                  boxShadow: '0 0 0 2px #B31741',
                  zIndex: 2
                }}>
                  2
                </div>
                <div style={{ flex: 1, textAlign: 'left', paddingLeft: '3rem' }}>
                  <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: '#1f2937', marginBottom: '0.5rem' }}>
                    Analisis Real-time
                  </h3>
                  <p style={{ color: '#6b7280', lineHeight: '1.6', fontSize: '0.9375rem' }}>
                    Data dianalisis secara real-time menggunakan algoritma canggih untuk menentukan tingkat risiko
                    longsor dan memberikan status peringatan yang akurat.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 3 - Right */}
            <div style={{ position: 'relative', zIndex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.5rem' }}>
                <div style={{ flex: 1, textAlign: 'right', paddingRight: '3rem' }}>
                  <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: '#1f2937', marginBottom: '0.5rem' }}>
                    Peringatan & Notifikasi
                  </h3>
                  <p style={{ color: '#6b7280', lineHeight: '1.6', fontSize: '0.9375rem' }}>
                    Sistem memberikan peringatan otomatis kepada warga Desa Aribaya, Banjarnegara dan pihak berwenang
                    untuk respons cepat dalam menghadapi potensi bencana tanah longsor.
                  </p>
                </div>
                <div style={{
                  position: 'absolute',
                  left: '50%',
                  transform: 'translateX(-50%)',
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
                  border: '4px solid white',
                  boxShadow: '0 0 0 2px #B31741',
                  zIndex: 2
                }}>
                  3
                </div>
                <div style={{ flex: 1 }}></div>
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

          <Accordion type="single" collapsible className="w-full space-y-4">
            {/* Guide 1 */}
            <AccordionItem
              value="item-1"
              className="bg-white rounded-lg border border-gray-200 border-b shadow-sm px-6"
            >
              <AccordionTrigger className="hover:no-underline py-4">
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', width: '100%' }}>
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
                  <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: '#1f2937', margin: 0, textAlign: 'left' }}>
                    Pemantauan Cuaca dan Curah Hujan
                  </h3>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pb-4">
                <div style={{ paddingLeft: '52px' }}>
                  <p style={{ color: '#6b7280', marginBottom: '1rem', lineHeight: '1.6', fontSize: '0.9375rem' }}>
                    Selalu pantau kondisi cuaca dan tingkat curah hujan, terutama saat musim hujan.
                    Hujan lebat berkepanjangan dapat memicu tanah longsor.
                  </p>
                  <ul style={{ color: '#6b7280', paddingLeft: '1.25rem', lineHeight: '1.6', fontSize: '0.9375rem', margin: 0 }}>
                    <li style={{ marginBottom: '0.5rem' }}>Gunakan sistem peringatan dini Talenta Lestari untuk monitoring real-time</li>
                    <li style={{ marginBottom: '0.5rem' }}>Perhatikan peringatan cuaca dari BMKG</li>
                    <li>Catat dan laporkan perubahan kondisi tanah setelah hujan lebat</li>
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Guide 2 */}
            <AccordionItem
              value="item-2"
              className="bg-white rounded-lg border border-gray-200 border-b shadow-sm px-6"
            >
              <AccordionTrigger className="hover:no-underline py-4">
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', width: '100%' }}>
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
                  <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: '#1f2937', margin: 0, textAlign: 'left' }}>
                    Identifikasi Tanda-tanda Bahaya
                  </h3>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pb-4">
                <div style={{ paddingLeft: '52px' }}>
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
              </AccordionContent>
            </AccordionItem>

            {/* Guide 3 */}
            <AccordionItem
              value="item-3"
              className="bg-white rounded-lg border border-gray-200 border-b shadow-sm px-6"
            >
              <AccordionTrigger className="hover:no-underline py-4">
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', width: '100%' }}>
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
                  <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: '#1f2937', margin: 0, textAlign: 'left' }}>
                    Langkah Pencegahan di Rumah
                  </h3>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pb-4">
                <div style={{ paddingLeft: '52px' }}>
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
              </AccordionContent>
            </AccordionItem>

            {/* Guide 4 */}
            <AccordionItem
              value="item-4"
              className="bg-white rounded-lg border border-gray-200 border-b shadow-sm px-6"
            >
              <AccordionTrigger className="hover:no-underline py-4">
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', width: '100%' }}>
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
                  <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: '#1f2937', margin: 0, textAlign: 'left' }}>
                    Rencana Evakuasi Darurat
                  </h3>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pb-4">
                <div style={{ paddingLeft: '52px' }}>
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
              </AccordionContent>
            </AccordionItem>

            {/* Guide 5 */}
            <AccordionItem
              value="item-5"
              className="bg-white rounded-lg border border-gray-200 border-b shadow-sm px-6"
            >
              <AccordionTrigger className="hover:no-underline py-4">
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', width: '100%' }}>
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
                  <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: '#1f2937', margin: 0, textAlign: 'left' }}>
                    Koordinasi dengan Pemerintah Desa
                  </h3>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pb-4">
                <div style={{ paddingLeft: '52px' }}>
                  <p style={{ color: '#6b7280', marginBottom: '1rem', lineHeight: '1.6', fontSize: '0.9375rem' }}>
                    Jalin koordinasi yang baik dengan pemerintah Desa Aribaya:
                  </p>
                  <ul style={{ color: '#6b7280', paddingLeft: '1.25rem', lineHeight: '1.6', fontSize: '0.9375rem', margin: 0 }}>
                    <li style={{ marginBottom: '0.5rem' }}>Laporkan segera jika menemukan tanda-tanda bahaya longsor</li>
                    <li style={{ marginBottom: '0.5rem' }}>Ikuti sosialisasi dan pelatihan mitigasi bencana</li>
                    <li style={{ marginBottom: '0.5rem' }}>Patuhi himbauan dan arahan dari petugas</li>
                    <li style={{ marginBottom: '0.5rem' }}>Berpartisipasi dalam kegiatan gotong royong pencegahan bencana</li>
                    <li>Gunakan sistem Talenta Lestari untuk mendapat informasi terkini</li>
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* News Section */}
      <section style={{ padding: '4rem 2rem', backgroundColor: 'white' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.75rem',
            marginBottom: '3rem'
          }}>
            <Newspaper size={32} color="#B31741" />
            <h2 style={{
              fontSize: '1.875rem',
              fontWeight: 'bold',
              color: '#1f2937',
              margin: 0
            }}>
              Berita & Informasi
            </h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem'
          }}>
            {/* News Card 1 */}
            <div style={{
              backgroundColor: 'white',
              borderRadius: '0.75rem',
              border: '1px solid #e5e7eb',
              boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
              overflow: 'hidden',
              transition: 'all 0.3s',
              cursor: 'pointer'
            }}
              onClick={() => window.open('https://jateng.tribunnews.com/pendidikan/1236152/telkom-university-purwokerto-luncurkan-talenta-lestari-untuk-sistem-peringatan-dini-longsor-aribaya', '_blank')}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(179, 23, 65, 0.15)';
                e.currentTarget.style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.05)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}>
              <div style={{
                width: '100%',
                height: '200px',
                backgroundColor: '#f3f4f6',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden'
              }}>
                <img 
                  src="/images/news/news1.png" 
                  alt="Telkom University Purwokerto luncurkan TALENTA LESTARI"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
              </div>
              <div style={{ padding: '1.5rem' }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  marginBottom: '0.75rem',
                  color: '#6b7280',
                  fontSize: '0.875rem'
                }}>
                  <Calendar size={16} />
                  <span>11 Desember 2025</span>
                </div>
                <h3 style={{
                  fontSize: '1.125rem',
                  fontWeight: '600',
                  color: '#1f2937',
                  marginBottom: '0.5rem',
                  lineHeight: '1.4'
                }}>
                  Telkom University Purwokerto luncurkan TALENTA LESTARI untuk sistem peringatan dini longsor Aribaya
                </h3>
                <p style={{
                  color: '#6b7280',
                  lineHeight: '1.6',
                  fontSize: '0.9375rem',
                  marginBottom: '1rem'
                }}>
                  Telkom University Purwokerto sukses melaksanakan Program Pengabdian kepada Masyarakat (Pengmas) bertajuk TALENTA LESTARI di Desa Aribaya, Kabupaten Banjarnegara.
                </p>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  color: '#B31741',
                  fontWeight: '500',
                  fontSize: '0.9375rem'
                }}>
                  <span>Baca Selengkapnya</span>
                  <ArrowRight size={16} />
                </div>
              </div>
            </div>

            {/* News Card 2 */}
            <div style={{
              backgroundColor: 'white',
              borderRadius: '0.75rem',
              border: '1px solid #e5e7eb',
              boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
              overflow: 'hidden',
              transition: 'all 0.3s',
              cursor: 'pointer'
            }}
              onClick={() => window.open('https://youtu.be/uNx-0VgQ7Ek', '_blank')}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(179, 23, 65, 0.15)';
                e.currentTarget.style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.05)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}>
              <div style={{
                width: '100%',
                height: '200px',
                backgroundColor: '#f3f4f6',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden'
              }}>
                <img 
                  src="/images/news/news2.png" 
                  alt="Pelatihan Evakuasi Bencana Tanah Longsor"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
              </div>
              <div style={{ padding: '1.5rem' }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  marginBottom: '0.75rem',
                  color: '#6b7280',
                  fontSize: '0.875rem'
                }}>
                  <Calendar size={16} />
                  <span>10 Desember 2024</span>
                </div>
                <h3 style={{
                  fontSize: '1.125rem',
                  fontWeight: '600',
                  color: '#1f2937',
                  marginBottom: '0.5rem',
                  lineHeight: '1.4'
                }}>
                  Teknologi Alarm Longsor Berbasis Internet of Things (IoT)
                </h3>
                <p style={{
                  color: '#6b7280',
                  lineHeight: '1.6',
                  fontSize: '0.9375rem',
                  marginBottom: '1rem'
                }}>
                  Tim dari BPBD Banjarnegara memberikan pelatihan evakuasi bencana kepada warga Desa Aribaya untuk meningkatkan kesiapsiagaan.
                </p>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  color: '#B31741',
                  fontWeight: '500',
                  fontSize: '0.9375rem'
                }}>
                  <span>Baca Selengkapnya</span>
                  <ArrowRight size={16} />
                </div>
              </div>
            </div>

            {/* News Card 3 */}
            <div style={{
              backgroundColor: 'white',
              borderRadius: '0.75rem',
              border: '1px solid #e5e7eb',
              boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
              overflow: 'hidden',
              transition: 'all 0.3s',
              cursor: 'pointer'
            }}
              onClick={() => window.open('https://www.instagram.com/p/DSUy9TWgdzo/', '_blank')}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(179, 23, 65, 0.15)';
                e.currentTarget.style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.05)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}>
              <div style={{
                width: '100%',
                height: '200px',
                backgroundColor: '#f3f4f6',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden'
              }}>
                <img 
                  src="/images/news/news3.png" 
                  alt="Instalasi Sensor Monitoring di Titik Rawan Longsor"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
              </div>
              <div style={{ padding: '1.5rem' }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  marginBottom: '0.75rem',
                  color: '#6b7280',
                  fontSize: '0.875rem'
                }}>
                  <Calendar size={16} />
                  <span>5 Desember 2024</span>
                </div>
                <h3 style={{
                  fontSize: '1.125rem',
                  fontWeight: '600',
                  color: '#1f2937',
                  marginBottom: '0.5rem',
                  lineHeight: '1.4'
                }}>
                  Telkom University Purwokerto menghadirkan sistem peringatan dini longsor berbasis IoT
                </h3>
                <p style={{
                  color: '#6b7280',
                  lineHeight: '1.6',
                  fontSize: '0.9375rem',
                  marginBottom: '1rem'
                }}>
                  Tanah longsor bukan lagi sekadar ancaman, tapi tantangan yang harus dihadapi dengan kesiapsiagaan. 🌱
                </p>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  color: '#B31741',
                  fontWeight: '500',
                  fontSize: '0.9375rem'
                }}>
                  <span>Baca Selengkapnya</span>
                  <ArrowRight size={16} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section style={{ padding: '4rem 2rem', backgroundColor: '#fafafa' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.75rem',
            marginBottom: '3rem'
          }}>
            <ImageIcon size={32} color="#B31741" />
            <h2 style={{
              fontSize: '1.875rem',
              fontWeight: 'bold',
              color: '#1f2937',
              margin: 0
            }}>
              Galeri Kegiatan
            </h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '1.5rem'
          }}>
            {/* Gallery Item 1 */}
            <div style={{
              backgroundColor: 'white',
              borderRadius: '0.75rem',
              border: '1px solid #e5e7eb',
              boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
              overflow: 'hidden',
              transition: 'all 0.3s',
              cursor: 'pointer'
            }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(179, 23, 65, 0.15)';
                e.currentTarget.style.transform = 'scale(1.02)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.05)';
                e.currentTarget.style.transform = 'scale(1)';
              }}>
              <div style={{
                width: '100%',
                height: '250px',
                backgroundColor: '#f3f4f6',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden'
              }}>
                <img 
                  src="/images/galeries/p1.jpeg" 
                  alt="Galeri Kegiatan 1"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
              </div>
              <div style={{ padding: '1rem', textAlign: 'center' }}>
                <p style={{
                  color: '#1f2937',
                  fontWeight: '500',
                  fontSize: '0.9375rem',
                  margin: 0
                }}>
                  Sosialisasi Sistem Monitoring
                </p>
              </div>
            </div>

            {/* Gallery Item 2 */}
            <div style={{
              backgroundColor: 'white',
              borderRadius: '0.75rem',
              border: '1px solid #e5e7eb',
              boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
              overflow: 'hidden',
              transition: 'all 0.3s',
              cursor: 'pointer'
            }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(179, 23, 65, 0.15)';
                e.currentTarget.style.transform = 'scale(1.02)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.05)';
                e.currentTarget.style.transform = 'scale(1)';
              }}>
              <div style={{
                width: '100%',
                height: '250px',
                backgroundColor: '#f3f4f6',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden'
              }}>
                <img 
                  src="/images/galeries/p2.jpeg" 
                  alt="Galeri Kegiatan 2"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
              </div>
              <div style={{ padding: '1rem', textAlign: 'center' }}>
                <p style={{
                  color: '#1f2937',
                  fontWeight: '500',
                  fontSize: '0.9375rem',
                  margin: 0
                }}>
                  Pelatihan Evakuasi
                </p>
              </div>
            </div>

            {/* Gallery Item 3 */}
            <div style={{
              backgroundColor: 'white',
              borderRadius: '0.75rem',
              border: '1px solid #e5e7eb',
              boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
              overflow: 'hidden',
              transition: 'all 0.3s',
              cursor: 'pointer'
            }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(179, 23, 65, 0.15)';
                e.currentTarget.style.transform = 'scale(1.02)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.05)';
                e.currentTarget.style.transform = 'scale(1)';
              }}>
              <div style={{
                width: '100%',
                height: '250px',
                backgroundColor: '#f3f4f6',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden'
              }}>
                <img 
                  src="/images/galeries/p3.jpeg" 
                  alt="Galeri Kegiatan 3"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
              </div>
              <div style={{ padding: '1rem', textAlign: 'center' }}>
                <p style={{
                  color: '#1f2937',
                  fontWeight: '500',
                  fontSize: '0.9375rem',
                  margin: 0
                }}>
                  Instalasi Sensor
                </p>
              </div>
            </div>

            {/* Gallery Item 4 */}
            <div style={{
              backgroundColor: 'white',
              borderRadius: '0.75rem',
              border: '1px solid #e5e7eb',
              boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
              overflow: 'hidden',
              transition: 'all 0.3s',
              cursor: 'pointer'
            }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(179, 23, 65, 0.15)';
                e.currentTarget.style.transform = 'scale(1.02)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.05)';
                e.currentTarget.style.transform = 'scale(1)';
              }}>
              <div style={{
                width: '100%',
                height: '250px',
                backgroundColor: '#f3f4f6',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden'
              }}>
                <img 
                  src="/images/galeries/p4.jpeg" 
                  alt="Galeri Kegiatan 4"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
              </div>
              <div style={{ padding: '1rem', textAlign: 'center' }}>
                <p style={{
                  color: '#1f2937',
                  fontWeight: '500',
                  fontSize: '0.9375rem',
                  margin: 0
                }}>
                  Monitoring Real-time
                </p>
              </div>
            </div>

            {/* Gallery Item 5 */}
            <div style={{
              backgroundColor: 'white',
              borderRadius: '0.75rem',
              border: '1px solid #e5e7eb',
              boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
              overflow: 'hidden',
              transition: 'all 0.3s',
              cursor: 'pointer'
            }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(179, 23, 65, 0.15)';
                e.currentTarget.style.transform = 'scale(1.02)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.05)';
                e.currentTarget.style.transform = 'scale(1)';
              }}>
              <div style={{
                width: '100%',
                height: '250px',
                backgroundColor: '#f3f4f6',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden'
              }}>
                <img 
                  src="/images/galeries/p5.jpeg" 
                  alt="Galeri Kegiatan 5"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
              </div>
              <div style={{ padding: '1rem', textAlign: 'center' }}>
                <p style={{
                  color: '#1f2937',
                  fontWeight: '500',
                  fontSize: '0.9375rem',
                  margin: 0
                }}>
                  Gotong Royong Pencegahan
                </p>
              </div>
            </div>

            {/* Gallery Item 6 */}
            <div style={{
              backgroundColor: 'white',
              borderRadius: '0.75rem',
              border: '1px solid #e5e7eb',
              boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
              overflow: 'hidden',
              transition: 'all 0.3s',
              cursor: 'pointer'
            }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(179, 23, 65, 0.15)';
                e.currentTarget.style.transform = 'scale(1.02)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.05)';
                e.currentTarget.style.transform = 'scale(1)';
              }}>
              <div style={{
                width: '100%',
                height: '250px',
                backgroundColor: '#f3f4f6',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden'
              }}>
                <img 
                  src="/images/galeries/p6.jpeg" 
                  alt="Galeri Kegiatan 6"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
              </div>
              <div style={{ padding: '1rem', textAlign: 'center' }}>
                <p style={{
                  color: '#1f2937',
                  fontWeight: '500',
                  fontSize: '0.9375rem',
                  margin: 0
                }}>
                  Koordinasi dengan Pemerintah
                </p>
              </div>
            </div>

            {/* Gallery Item 7 */}
            <div style={{
              backgroundColor: 'white',
              borderRadius: '0.75rem',
              border: '1px solid #e5e7eb',
              boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
              overflow: 'hidden',
              transition: 'all 0.3s',
              cursor: 'pointer'
            }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(179, 23, 65, 0.15)';
                e.currentTarget.style.transform = 'scale(1.02)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.05)';
                e.currentTarget.style.transform = 'scale(1)';
              }}>
              <div style={{
                width: '100%',
                height: '250px',
                backgroundColor: '#f3f4f6',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden'
              }}>
                <img 
                  src="/images/galeries/p7.jpeg" 
                  alt="Galeri Kegiatan 7"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
              </div>
              <div style={{ padding: '1rem', textAlign: 'center' }}>
                <p style={{
                  color: '#1f2937',
                  fontWeight: '500',
                  fontSize: '0.9375rem',
                  margin: 0
                }}>
                  Galeri Kegiatan 7
                </p>
              </div>
            </div>

            {/* Gallery Item 8 */}
            <div style={{
              backgroundColor: 'white',
              borderRadius: '0.75rem',
              border: '1px solid #e5e7eb',
              boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
              overflow: 'hidden',
              transition: 'all 0.3s',
              cursor: 'pointer'
            }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(179, 23, 65, 0.15)';
                e.currentTarget.style.transform = 'scale(1.02)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.05)';
                e.currentTarget.style.transform = 'scale(1)';
              }}>
              <div style={{
                width: '100%',
                height: '250px',
                backgroundColor: '#f3f4f6',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden'
              }}>
                <img 
                  src="/images/galeries/p8.jpeg" 
                  alt="Galeri Kegiatan 8"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
              </div>
              <div style={{ padding: '1rem', textAlign: 'center' }}>
                <p style={{
                  color: '#1f2937',
                  fontWeight: '500',
                  fontSize: '0.9375rem',
                  margin: 0
                }}>
                  Galeri Kegiatan 8
                </p>
              </div>
            </div>

            {/* Gallery Item 9 */}
            <div style={{
              backgroundColor: 'white',
              borderRadius: '0.75rem',
              border: '1px solid #e5e7eb',
              boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
              overflow: 'hidden',
              transition: 'all 0.3s',
              cursor: 'pointer'
            }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(179, 23, 65, 0.15)';
                e.currentTarget.style.transform = 'scale(1.02)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.05)';
                e.currentTarget.style.transform = 'scale(1)';
              }}>
              <div style={{
                width: '100%',
                height: '250px',
                backgroundColor: '#f3f4f6',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden'
              }}>
                <img 
                  src="/images/galeries/p9.jpeg" 
                  alt="Galeri Kegiatan 9"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
              </div>
              <div style={{ padding: '1rem', textAlign: 'center' }}>
                <p style={{
                  color: '#1f2937',
                  fontWeight: '500',
                  fontSize: '0.9375rem',
                  margin: 0
                }}>
                  Galeri Kegiatan 9
                </p>
              </div>
            </div>

            {/* Gallery Item 10 */}
            <div style={{
              backgroundColor: 'white',
              borderRadius: '0.75rem',
              border: '1px solid #e5e7eb',
              boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
              overflow: 'hidden',
              transition: 'all 0.3s',
              cursor: 'pointer'
            }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(179, 23, 65, 0.15)';
                e.currentTarget.style.transform = 'scale(1.02)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.05)';
                e.currentTarget.style.transform = 'scale(1)';
              }}>
              <div style={{
                width: '100%',
                height: '250px',
                backgroundColor: '#f3f4f6',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden'
              }}>
                <img 
                  src="/images/galeries/p10.jpeg" 
                  alt="Galeri Kegiatan 10"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
              </div>
              <div style={{ padding: '1rem', textAlign: 'center' }}>
                <p style={{
                  color: '#1f2937',
                  fontWeight: '500',
                  fontSize: '0.9375rem',
                  margin: 0
                }}>
                  Galeri Kegiatan 10
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
