import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Shield, AlertTriangle, AlertCircle } from 'lucide-react';
import { MonitoringStatus } from '@/types/monitoring';
import { cn } from '@/lib/utils';

interface StatusIndicatorProps {
  status: MonitoringStatus;
}

const StatusIndicator = ({ status }: StatusIndicatorProps) => {
  const getIcon = () => {
    switch (status.level) {
      case 'Bahaya':
        return <AlertCircle className="h-6 w-6" />;
      case 'Waspada':
        return <AlertTriangle className="h-6 w-6" />;
      default:
        return <Shield className="h-6 w-6" />;
    }
  };

  const getStatusStyles = () => {
    switch (status.level) {
      case 'Bahaya':
        return 'bg-status-bahaya text-white';
      case 'Waspada':
        return 'bg-status-waspada text-black';
      default:
        return 'bg-status-aman text-white';
    }
  };

  return (
    <Card className="bg-sensor-bg border-border">
      <CardHeader className="pb-3">
        <CardTitle className="text-sm font-medium text-muted-foreground text-center">
          Status Monitoring
        </CardTitle>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className={cn(
          "flex items-center justify-center p-4 rounded-lg",
          getStatusStyles()
        )}>
          <div className="flex items-center space-x-3">
            <div>
              <div className="text-xl font-bold py-3">
                {status.level.toUpperCase()}
              </div>
            </div>
          </div>
        </div>
        
        {/* <div className="text-center text-sm text-muted-foreground">
          {status.description}
        </div> */}
        
        <div className="grid grid-cols-3 gap-5 text-xs pt-5">
          <div className="text-center">
            <div className="w-4 h-4 bg-status-aman rounded-full mx-auto mb-1" />
            <div>Aman</div>
          </div>
          <div className="text-center">
            <div className="w-4 h-4 bg-status-waspada rounded-full mx-auto mb-1" />
            <div>Waspada</div>
          </div>
          <div className="text-center">
            <div className="w-4 h-4 bg-status-bahaya rounded-full mx-auto mb-1" />
            <div>Bahaya</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default StatusIndicator;