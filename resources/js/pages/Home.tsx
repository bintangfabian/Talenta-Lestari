import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  Mountain, 
  Shield, 
  Activity, 
  AlertTriangle, 
  Droplets, 
  Gauge,
  TrendingUp
} from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-primary/10 rounded-full">
              <Mountain className="h-16 w-16 text-primary" />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            <span className="text-primary block">Geosafe</span>
            Sistem Monitoring Tanah Longsor
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Sistem monitoring tanah longsor real-time untuk melindungi masyarakat 
            <strong className="text-primary"> Desa Aribaya, Banjarnegara</strong> dengan 
            teknologi sensor canggih dan analisis data terintegrasi.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-lg px-8">
              <Link to="/monitoring">
                <Activity className="mr-2 h-5 w-5" />
                Mulai Monitoring
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg px-8">
              <Link to="/reporting">
                <TrendingUp className="mr-2 h-5 w-5" />
                Lihat Laporan
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Fitur Monitoring Canggih
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-card border-border">
              <CardHeader className="text-center">
                <div className="mx-auto p-3 bg-primary/10 rounded-full w-fit mb-4">
                  <Droplets className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Kelembaban Tanah</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  Monitoring kelembaban tanah secara real-time untuk mendeteksi 
                  perubahan kondisi yang dapat memicu tanah longsor.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardHeader className="text-center">
                <div className="mx-auto p-3 bg-primary/10 rounded-full w-fit mb-4">
                  <Gauge className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Pergeseran Tanah</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  Deteksi pergeseran tanah dengan sensor presisi tinggi untuk 
                  peringatan dini bencana tanah longsor.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardHeader className="text-center">
                <div className="mx-auto p-3 bg-primary/10 rounded-full w-fit mb-4">
                  <AlertTriangle className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Sistem Peringatan</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  Sistem peringatan otomatis dengan tiga level: Aman, Waspada, 
                  dan Bahaya untuk respons cepat.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-8">
            Cara Kerja Sistem
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6 text-left">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
                  1
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    Pengumpulan Data Sensor
                  </h3>
                  <p className="text-muted-foreground">
                    Sensor IoT mengumpulkan data kelembaban tanah, curah hujan, 
                    dan pergeseran tanah secara kontinyu di <strong>Desa Aribaya, Banjarnegara</strong>.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
                  2
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    Analisis Real-time
                  </h3>
                  <p className="text-muted-foreground">
                    Data dianalisis secara real-time menggunakan algoritma 
                    untuk menentukan tingkat risiko longsor.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
                  3
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    Peringatan & Notifikasi
                  </h3>
                  <p className="text-muted-foreground">
                    Sistem memberikan peringatan otomatis kepada warga <strong>Desa Aribaya, Banjarnegara</strong> 
                    dan pihak berwenang untuk respons cepat.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-64 h-64 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center">
                  <Shield className="h-24 w-24 text-primary" />
                </div>
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-status-aman rounded-full flex items-center justify-center">
                  <Activity className="h-8 w-8 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 bg-primary/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-8">
            Tentang Geosafe Aribaya
          </h2>
          <div className="bg-card rounded-lg p-8 border border-border">
            <p className="text-lg text-muted-foreground mb-6">
              Website ini didedikasikan khusus untuk melayani masyarakat <strong className="text-primary">Desa Aribaya, 
              Kabupaten Banjarnegara</strong> dalam upaya mitigasi dan monitoring bencana tanah longsor.
            </p>
            <p className="text-muted-foreground mb-6">
              Desa Aribaya yang terletak di daerah perbukitan memiliki potensi risiko tanah longsor, 
              terutama pada musim hujan. Sistem Geosafe hadir sebagai solusi teknologi untuk memberikan 
              peringatan dini dan membantu masyarakat dalam mengantisipasi bencana.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-2">24/7</div>
                <p className="text-sm text-muted-foreground">Monitoring Berkelanjutan</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-2">Real-time</div>
                <p className="text-sm text-muted-foreground">Data Sensor Langsung</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-2">Komunitas</div>
                <p className="text-sm text-muted-foreground">Fokus Desa Aribaya</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Landslide Mitigation Guide Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Panduan Mitigasi Tanah Longsor untuk Desa Aribaya
          </h2>
          
          <div className="grid gap-8">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary font-bold">1</span>
                  </div>
                  Pemantauan Cuaca dan Curah Hujan
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Selalu pantau kondisi cuaca dan tingkat curah hujan, terutama saat musim hujan. 
                  Hujan lebat berkepanjangan dapat memicu tanah longsor.
                </p>
                <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                  <li>Gunakan sistem peringatan dini Geosafe untuk monitoring real-time</li>
                  <li>Perhatikan peringatan cuaca dari BMKG</li>
                  <li>Catat dan laporkan perubahan kondisi tanah setelah hujan lebat</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary font-bold">2</span>
                  </div>
                  Identifikasi Tanda-tanda Bahaya
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Kenali tanda-tanda awal yang mengindikasikan potensi tanah longsor di area Desa Aribaya:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                  <li>Retakan pada tanah, dinding rumah, atau jalan</li>
                  <li>Air yang keluar dari lereng atau tanah</li>
                  <li>Pohon atau tiang listrik yang miring</li>
                  <li>Suara gemuruh dari dalam tanah</li>
                  <li>Perubahan aliran air sungai atau mata air</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary font-bold">3</span>
                  </div>
                  Langkah Pencegahan di Rumah
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Tindakan pencegahan yang dapat dilakukan warga Desa Aribaya:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                  <li>Tanam tanaman berakar kuat di sekitar rumah dan lereng</li>
                  <li>Buat saluran drainase yang baik untuk mengalirkan air hujan</li>
                  <li>Hindari membuang sampah di saluran air</li>
                  <li>Jangan membangun di daerah lereng curam tanpa izin</li>
                  <li>Lakukan penghijauan di area yang rawan longsor</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary font-bold">4</span>
                  </div>
                  Rencana Evakuasi Darurat
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Siapkan rencana evakuasi untuk keluarga dan komunitas:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                  <li>Kenali jalur evakuasi teraman menuju tempat yang lebih tinggi</li>
                  <li>Siapkan tas siaga berisi dokumen penting dan kebutuhan darurat</li>
                  <li>Tentukan titik kumpul keluarga jika terpisah</li>
                  <li>Simpan nomor kontak darurat desa dan instansi terkait</li>
                  <li>Ikuti simulasi evakuasi yang diadakan pemerintah desa</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary font-bold">5</span>
                  </div>
                  Koordinasi dengan Pemerintah Desa
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Jalin koordinasi yang baik dengan pemerintah Desa Aribaya:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                  <li>Laporkan segera jika menemukan tanda-tanda bahaya longsor</li>
                  <li>Ikuti sosialisasi dan pelatihan mitigasi bencana</li>
                  <li>Patuhi himbauan dan arahan dari petugas</li>
                  <li>Berpartisipasi dalam kegiatan gotong royong pencegahan bencana</li>
                  <li>Gunakan sistem Geosafe untuk mendapat informasi terkini</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;