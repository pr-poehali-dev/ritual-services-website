
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Phone } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative bg-background py-20 overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=2070')] bg-cover bg-center opacity-10"></div>
      <div className="container px-4 sm:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Ритуальные услуги с заботой и уважением</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Помощь и поддержка в трудную минуту. Профессиональная организация похорон и ритуальных мероприятий с учетом всех ваших пожеланий.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/services">Наши услуги</Link>
            </Button>
            <Button size="lg" variant="outline" className="gap-2">
              <Phone size={20} />
              <span>8 (800) 555-35-35</span>
            </Button>
          </div>
          <p className="mt-6 text-sm text-muted-foreground">
            Круглосуточная поддержка и консультация
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
