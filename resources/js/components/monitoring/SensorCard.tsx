import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SensorCardProps {
  title: string;
  value: number;
  unit: string;
  icon: React.ReactNode;
  trend?: 'up' | 'down' | 'stable';
  trendValue?: number;
  status?: 'normal' | 'warning' | 'critical';
}

const SensorCard = ({ 
  title, 
  value, 
  unit, 
  icon, 
  trend = 'stable', 
  trendValue = 0,
  status = 'normal' 
}: SensorCardProps) => {
  const getTrendIcon = () => {
    switch (trend) {
      case 'up':
        return <TrendingUp className="h-4 w-4" />;
      case 'down':
        return <TrendingDown className="h-4 w-4" />;
      default:
        return <Minus className="h-4 w-4" />;
    }
  };

  const getStatusColor = () => {
    switch (status) {
      case 'critical':
        return 'bg-status-bahaya';
      case 'warning':
        return 'bg-status-waspada';
      default:
        return 'bg-status-aman';
    }
  };

  return (
    <Card className="bg-sensor-bg border-border relative overflow-hidden">
      <div className={cn("absolute top-0 left-0 w-full h-1", getStatusColor())} />
      
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
        <div className="text-muted-foreground">
          {icon}
        </div>
      </CardHeader>
      
      <CardContent>
        <div className="flex items-baseline space-x-2">
          <div className="text-2xl font-bold text-foreground">
            {value.toFixed(1)}
          </div>
          <div className="text-sm text-muted-foreground">
            {unit}
          </div>
        </div>
        
        {trendValue !== 0 && (
          <div className="flex items-center mt-2">
            <Badge
              variant="secondary"
              className={cn(
                "flex items-center space-x-1",
                trend === 'up' ? 'text-red-400' : 
                trend === 'down' ? 'text-green-400' : 'text-muted-foreground'
              )}
            >
              {getTrendIcon()}
              <span className="text-xs">
                {Math.abs(trendValue).toFixed(1)}%
              </span>
            </Badge>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default SensorCard;