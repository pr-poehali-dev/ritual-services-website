
import { Link } from 'react-router-dom';
import { Heart, Car, Phone, Users, FileText, Flower, Calendar, MapPin } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import ServiceCard from '@/components/ServiceCard';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        
        {/* Секция услуг */}
        <section className="py-16 bg-secondary/50">
          <div className="container px-4 sm:px-6">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold mb-4">Наши услуги</h2>
              <p className="text-muted-foreground">
                Мы предлагаем полный спектр ритуальных услуг, чтобы облегчить организацию прощания и отдать дань уважения вашим близким
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ServiceCard 
                title="Организация похорон" 
                description="Комплексная организация церемонии прощания, подготовка и проведение похорон"
                icon={<Heart className="text-primary h-6 w-6" />}
                link="/services/funeral"
              />
              <ServiceCard 
                title="Ритуальный транспорт" 
                description="Предоставление специализированного транспорта для перевозки усопшего и сопровождающих"
                icon={<Car className="text-primary h-6 w-6" />}
                link="/services/transport"
              />
              <ServiceCard 
                title="Изготовление памятников" 
                description="Создание и установка памятников, надгробий и мемориальных комплексов"
                icon={<MapPin className="text-primary h-6 w-6" />}
                link="/services/memorials"
              />
              <ServiceCard 
                title="Ритуальные принадлежности" 
                description="Гробы, венки, ритуальные товары и принадлежности для проведения церемонии"
                icon={<Flower className="text-primary h-6 w-6" />}
                link="/services/accessories"
              />
              <ServiceCard 
                title="Бальзамирование" 
                description="Профессиональное бальзамирование и подготовка тела к погребению"
                icon={<Users className="text-primary h-6 w-6" />}
                link="/services/embalming"
              />
              <ServiceCard 
                title="Оформление документов" 
                description="Помощь в оформлении всех необходимых документов и справок"
                icon={<FileText className="text-primary h-6 w-6" />}
                link="/services/documents"
              />
            </div>
            
            <div className="text-center mt-10">
              <Button asChild>
                <Link to="/services">Все услуги</Link>
              </Button>
            </div>
          </div>
        </section>
        
        {/* Секция о компании */}
        <section className="py-16">
          <div className="container px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">О компании «Вечность»</h2>
                <p className="text-muted-foreground mb-4">
                  Более 15 лет мы помогаем людям в трудную минуту, когда требуется организовать достойные похороны для близкого человека. Наша команда профессионалов готова взять на себя все заботы, связанные с организацией ритуальных мероприятий.
                </p>
                <p className="text-muted-foreground mb-6">
                  Мы придерживаемся принципов уважения, сострадания и внимания к деталям, чтобы церемония прощания прошла достойно и в соответствии с вашими пожеланиями.
                </p>
                <div className="flex flex-wrap gap-6 mb-6">
                  <div className="flex flex-col">
                    <span className="text-3xl font-bold text-primary">15+</span>
                    <span className="text-sm text-muted-foreground">лет опыта</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-3xl font-bold text-primary">24/7</span>
                    <span className="text-sm text-muted-foreground">режим работы</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-3xl font-bold text-primary">5000+</span>
                    <span className="text-sm text-muted-foreground">довольных клиентов</span>
                  </div>
                </div>
                <Button variant="outline" asChild>
                  <Link to="/about">Подробнее о нас</Link>
                </Button>
              </div>
              <div className="relative rounded-lg overflow-hidden h-[400px]">
                <img 
                  src="https://images.unsplash.com/photo-1617804856346-8c6ca9516161?q=80&w=1974" 
                  alt="Команда ритуальной службы Вечность" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Секция преимуществ */}
        <section className="py-16 bg-secondary/50">
          <div className="container px-4 sm:px-6">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold mb-4">Почему выбирают нас</h2>
              <p className="text-muted-foreground">
                Мы стремимся обеспечить максимальную поддержку и высокое качество услуг в трудный момент
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-background p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 flex items-center justify-center bg-primary/10 rounded-full mb-4">
                  <Calendar className="text-primary h-6 w-6" />
                </div>
                <h3 className="text-xl font-medium mb-2">Круглосуточная поддержка</h3>
                <p className="text-muted-foreground">
                  Мы работаем 24/7, чтобы оказать помощь в любое время дня и ночи
                </p>
              </div>
              
              <div className="bg-background p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 flex items-center justify-center bg-primary/10 rounded-full mb-4">
                  <Users className="text-primary h-6 w-6" />
                </div>
                <h3 className="text-xl font-medium mb-2">Опытные специалисты</h3>
                <p className="text-muted-foreground">
                  Наша команда состоит из профессионалов с многолетним опытом работы
                </p>
              </div>
              
              <div className="bg-background p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 flex items-center justify-center bg-primary/10 rounded-full mb-4">
                  <Heart className="text-primary h-6 w-6" />
                </div>
                <h3 className="text-xl font-medium mb-2">Индивидуальный подход</h3>
                <p className="text-muted-foreground">
                  Учитываем все пожелания и особенности при организации церемонии
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Секция звонка */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container px-4 sm:px-6">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-4">Нужна помощь прямо сейчас?</h2>
              <p className="text-primary-foreground/80 mb-8">
                Мы готовы оказать поддержку в любое время. Позвоните нам для консультации или вызова агента
              </p>
              <Button size="lg" variant="secondary" className="gap-2">
                <Phone size={20} />
                <span>8 (800) 555-35-35</span>
              </Button>
              <p className="mt-6 text-sm text-primary-foreground/70">
                Специалист ответит на все ваши вопросы и поможет в организации похорон
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
