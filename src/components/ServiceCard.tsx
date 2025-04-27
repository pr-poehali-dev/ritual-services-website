
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
}

const ServiceCard = ({ title, description, icon, link }: ServiceCardProps) => {
  return (
    <Card className="service-card animate-fade-in">
      <CardHeader>
        <div className="w-12 h-12 flex items-center justify-center bg-primary/10 rounded-md mb-4">
          {icon}
        </div>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardFooter>
        <Button variant="outline" asChild>
          <Link to={link}>Подробнее</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ServiceCard;
