import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer style={{
      backgroundColor: 'white',
      borderTop: '1px solid #e5e7eb',
      padding: '3rem 0',
      marginTop: 'auto'
    }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
          gap: '2rem',
          marginBottom: '2rem'
        }}>
          {/* Brand Section */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="#B31741" opacity="0.3"/>
                <path d="M2 17L12 22L22 17" stroke="#B31741" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 12L12 17L22 12" stroke="#B31741" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#1f2937' }}>
                Talenta Lestari
              </span>
            </div>
            <p style={{ color: '#6b7280', fontSize: '0.9375rem', lineHeight: '1.6', maxWidth: '350px' }}>
              Sistem monitoring tanah longsor real-time untuk pencegahan bencana dengan teknologi sensor canggih dan analisis data terintegrasi.
            </p>
          </div>

          {/* Contact Information */}
          <div>
            <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: '#1f2937', marginBottom: '1rem' }}>
              Kontak
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#6b7280', fontSize: '0.9375rem' }}>
                <Mail className="h-4 w-4" />
                <span>info@talentalestari.com</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#6b7280', fontSize: '0.9375rem' }}>
                <Phone className="h-4 w-4" />
                <span>+62 812 3456 7890</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#6b7280', fontSize: '0.9375rem' }}>
                <Phone className="h-4 w-4" />
                <span>+62 821 9876 5432</span>
              </div>
            </div>
          </div>

          {/* Address Information */}
          <div>
            <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: '#1f2937', marginBottom: '1rem' }}>
              Alamat
            </h3>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', color: '#6b7280', fontSize: '0.9375rem' }}>
              <MapPin className="h-4 w-4" style={{ marginTop: '0.125rem' }} />
              <div style={{ lineHeight: '1.6' }}>
                <p style={{ margin: 0 }}>Jl. Teknologi No. 123</p>
                <p style={{ margin: 0 }}>Desa Aribaya, Kec. Madukara</p>
                <p style={{ margin: 0 }}>Kabupaten Banjarnegara</p>
                <p style={{ margin: 0 }}>Jawa Tengah 53466</p>
                <p style={{ margin: 0 }}>Indonesia</p>
              </div>
            </div>
          </div>
        </div>

        <div style={{ borderTop: '1px solid #e5e7eb', paddingTop: '2rem', marginTop: '2rem' }}>
          <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            gap: '1rem',
            alignItems: 'center',
            textAlign: 'center'
          }}>
            <p style={{ color: '#6b7280', fontSize: '0.875rem', margin: 0 }}>
              © {new Date().getFullYear()} Talenta Lestari. Semua hak dilindungi undang-undang.
            </p>
            <p style={{ color: '#6b7280', fontSize: '0.875rem', margin: 0 }}>
              Sistem Monitoring Tanah Longsor Indonesia
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
