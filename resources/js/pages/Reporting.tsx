import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { 
  FileText, 
  Download, 
  Calendar,
  Filter,
  Search
} from 'lucide-react';
import { generateMockData } from '@/utils/mockData';
import { SensorData } from '@/types/monitoring';
import { cn } from '@/lib/utils';

const Reporting = () => {
  const [data] = useState(() => generateMockData(100));
  const [filteredData, setFilteredData] = useState(data);
  const [statusFilter, setStatusFilter] = useState<'all' | 'Aman' | 'Waspada' | 'Bahaya'>('all');
  const [dateRange, setDateRange] = useState({ start: '', end: '' });

  const filterData = (statusFilter: string, searchTerm: string = '') => {
    let filtered = data;
    
    if (statusFilter !== 'all') {
      filtered = filtered.filter(item => item.status === statusFilter);
    }
    
    if (searchTerm) {
      const search = searchTerm.toLowerCase();
      filtered = filtered.filter(item => 
        item.status.toLowerCase().includes(search) ||
        item.timestamp.toLocaleDateString().includes(search)
      );
    }
    
    setFilteredData(filtered);
  };

  const getStatusBadge = (status: 'Aman' | 'Waspada' | 'Bahaya') => {
    const variants = {
      'Aman': 'bg-status-aman text-white',
      'Waspada': 'bg-status-waspada text-black',
      'Bahaya': 'bg-status-bahaya text-white'
    };
    
    return (
      <Badge className={cn('font-medium', variants[status])}>
        {status}
      </Badge>
    );
  };

  const exportData = () => {
    const csvContent = [
      ['Tanggal', 'Waktu', 'Kelembaban (%)', 'Curah Hujan (mm/h)', 'Pergeseran (mm)', 'Status'],
      ...filteredData.map(row => [
        row.timestamp.toLocaleDateString('id-ID'),
        row.timestamp.toLocaleTimeString('id-ID'),
        row.soilMoisture.toString(),
        row.raindropCount.toString(),
        row.landShift.toString(),
        row.status
      ])
    ].map(row => row.join(',')).join('\n');
    
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `laporan-monitoring-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
  };

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-foreground">
              Laporan Data Monitoring
            </h1>
            <p className="text-muted-foreground flex items-center mt-2">
              <FileText className="h-4 w-4 mr-2" />
              Riwayat data sensor dan status monitoring
            </p>
          </div>
          
          <Button onClick={exportData} className="flex items-center space-x-2">
            <Download className="h-4 w-4" />
            <span>Export CSV</span>
          </Button>
        </div>

        {/* Statistics Cards */}
        <div className="grid md:grid-cols-4 gap-4">
          <Card className="bg-card border-border">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Total Data</p>
                  <p className="text-2xl font-bold text-foreground">{data.length}</p>
                </div>
                <FileText className="h-8 w-8 text-primary" />
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-card border-border">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Status Aman</p>
                  <p className="text-2xl font-bold text-status-aman">
                    {data.filter(d => d.status === 'Aman').length}
                  </p>
                </div>
                <div className="w-3 h-8 bg-status-aman rounded" />
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-card border-border">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Status Waspada</p>
                  <p className="text-2xl font-bold text-status-waspada">
                    {data.filter(d => d.status === 'Waspada').length}
                  </p>
                </div>
                <div className="w-3 h-8 bg-status-waspada rounded" />
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-card border-border">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Status Bahaya</p>
                  <p className="text-2xl font-bold text-status-bahaya">
                    {data.filter(d => d.status === 'Bahaya').length}
                  </p>
                </div>
                <div className="w-3 h-8 bg-status-bahaya rounded" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Filters */}
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Filter className="h-5 w-5" />
              <span>Filter Data</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Cari berdasarkan status atau tanggal..."
                    className="pl-10"
                    onChange={(e) => filterData(statusFilter, e.target.value)}
                  />
                </div>
              </div>
              
              <div className="flex gap-2">
                {['all', 'Aman', 'Waspada', 'Bahaya'].map((status) => (
                  <Button
                    key={status}
                    variant={statusFilter === status ? "default" : "outline"}
                    size="sm"
                    onClick={() => {
                      setStatusFilter(status as any);
                      filterData(status);
                    }}
                  >
                    {status === 'all' ? 'Semua' : status}
                  </Button>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Data Table */}
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle>
              Data Monitoring ({filteredData.length} records)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Tanggal & Waktu</TableHead>
                    <TableHead>Kelembaban Tanah</TableHead>
                    <TableHead>Curah Hujan</TableHead>
                    <TableHead>Pergeseran Tanah</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredData.slice(0, 50).map((row) => (
                    <TableRow key={row.id}>
                      <TableCell>
                        <div>
                          <div className="font-medium">
                            {row.timestamp.toLocaleDateString('id-ID')}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {row.timestamp.toLocaleTimeString('id-ID')}
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <span className={cn(
                          "font-mono",
                          row.soilMoisture > 80 ? "text-status-bahaya" :
                          row.soilMoisture > 60 ? "text-status-waspada" :
                          "text-status-aman"
                        )}>
                          {row.soilMoisture.toFixed(1)}%
                        </span>
                      </TableCell>
                      <TableCell>
                        <span className={cn(
                          "font-mono",
                          row.raindropCount > 15 ? "text-status-bahaya" :
                          row.raindropCount > 10 ? "text-status-waspada" :
                          "text-status-aman"
                        )}>
                          {row.raindropCount.toFixed(1)} mm/h
                        </span>
                      </TableCell>
                      <TableCell>
                        <span className={cn(
                          "font-mono",
                          row.landShift > 5 ? "text-status-bahaya" :
                          row.landShift > 3 ? "text-status-waspada" :
                          "text-status-aman"
                        )}>
                          {row.landShift.toFixed(1)} mm
                        </span>
                      </TableCell>
                      <TableCell>
                        {getStatusBadge(row.status)}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
            
            {filteredData.length > 50 && (
              <div className="mt-4 text-center text-sm text-muted-foreground">
                Menampilkan 50 dari {filteredData.length} data. 
                Gunakan filter untuk mempersempit pencarian.
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Reporting;