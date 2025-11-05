import { Mountain, Mail, MapPin, Phone } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Mountain className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold text-foreground">
                Geosafe
              </span>
            </div>
            <p className="text-muted-foreground max-w-sm">
              Sistem monitoring tanah longsor real-time untuk pencegahan bencana dengan teknologi sensor canggih dan analisis data terintegrasi.
            </p>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Kontak</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Mail className="h-4 w-4 text-primary" />
                <span>info@geosafe.com</span>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Phone className="h-4 w-4 text-primary" />
                <span>+62 812 3456 7890</span>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Phone className="h-4 w-4 text-primary" />
                <span>+62 821 9876 5432</span>
              </div>
            </div>
          </div>

          {/* Address Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Alamat</h3>
            <div className="flex items-start space-x-3 text-muted-foreground">
              <MapPin className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
              <div>
                <p>Jl. Teknologi No. 123</p>
                <p>Desa Aribaya, Kec. Madukara</p>
                <p>Kabupaten Banjarnegara</p>
                <p>Jawa Tengah 53466</p>
                <p>Indonesia</p>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col sm:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © 2024 Geosafe. Semua hak dilindungi undang-undang.
          </p>
          <p className="text-muted-foreground text-sm mt-4 sm:mt-0">
            Sistem Monitoring Tanah Longsor Indonesia
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
