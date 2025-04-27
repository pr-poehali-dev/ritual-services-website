
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Separator } from '@/components/ui/separator';
import { Clock, Heart, MapPin, Phone } from 'lucide-react';

const About = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {/* Шапка страницы */}
        <section className="bg-primary/10 py-12">
          <div className="container px-4 sm:px-6">
            <h1 className="text-4xl font-bold mb-4">О нашей компании</h1>
            <p className="text-lg text-muted-foreground max-w-3xl">
              Ритуальная служба «Вечность» — это многолетний опыт, забота и поддержка в трудный момент
            </p>
          </div>
        </section>

        {/* История компании */}
        <section className="py-16">
          <div className="container px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">История компании</h2>
                <p className="text-muted-foreground mb-4">
                  Ритуальная служба «Вечность» была основана в 2008 году группой профессионалов, 
                  которые видели необходимость в создании службы, предоставляющей комплексные 
                  ритуальные услуги высокого качества.
                </p>
                <p className="text-muted-foreground mb-4">
                  За более чем 15 лет работы мы помогли тысячам семей организовать достойные 
                  похороны для их близких, уделяя особое внимание каждой детали и относясь 
                  с глубоким уважением к пожеланиям клиентов.
                </p>
                <p className="text-muted-foreground">
                  Сегодня «Вечность» — это признанный лидер на рынке ритуальных услуг, 
                  с собственным производством ритуальных принадлежностей и памятников, 
                  парком специализированного транспорта и командой профессионалов.
                </p>
              </div>
              <div className="relative rounded-lg overflow-hidden h-[400px]">
                <img 
                  src="https://images.unsplash.com/photo-1504198266287-0659a8ae549c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" 
                  alt="История ритуальной службы Вечность" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Миссия и ценности */}
        <section className="py-16 bg-secondary/50">
          <div className="container px-4 sm:px-6">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold mb-4">Наша миссия и ценности</h2>
              <p className="text-muted-foreground">
                Мы стремимся помочь людям пройти через тяжелый период утраты с достоинством и уважением
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-background p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 flex items-center justify-center bg-primary/10 rounded-full mb-4">
                  <Heart className="text-primary h-6 w-6" />
                </div>
                <h3 className="text-xl font-medium mb-2">Сострадание</h3>
                <p className="text-muted-foreground">
                  Мы подходим к каждому случаю с искренним сочувствием и пониманием, осознавая всю сложность момента
                </p>
              </div>
              
              <div className="bg-background p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 flex items-center justify-center bg-primary/10 rounded-full mb-4">
                  <Clock className="text-primary h-6 w-6" />
                </div>
                <h3 className="text-xl font-medium mb-2">Ответственность</h3>
                <p className="text-muted-foreground">
                  Мы берем на себя полную ответственность за организацию церемонии, обеспечивая внимание к каждой детали
                </p>
              </div>
              
              <div className="bg-background p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 flex items-center justify-center bg-primary/10 rounded-full mb-4">
                  <Heart className="text-primary h-6 w-6" />
                </div>
                <h3 className="text-xl font-medium mb-2">Достоинство</h3>
                <p className="text-muted-foreground">
                  Мы обеспечиваем проведение церемонии прощания на высоком уровне, сохраняя достоинство и память об ушедшем
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Наша команда */}
        <section className="py-16">
          <div className="container px-4 sm:px-6">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold mb-4">Наша команда</h2>
              <p className="text-muted-foreground">
                Профессионалы, которые работают для вас круглосуточно
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-background p-6 rounded-lg shadow-sm text-center">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" 
                    alt="Сотрудник компании" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-medium mb-1">Иванов Иван</h3>
                <p className="text-primary mb-3">Директор</p>
                <p className="text-muted-foreground">
                  Более 20 лет опыта в сфере ритуальных услуг
                </p>
              </div>
              
              <div className="bg-background p-6 rounded-lg shadow-sm text-center">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" 
                    alt="Сотрудник компании" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-medium mb-1">Петрова Анна</h3>
                <p className="text-primary mb-3">Руководитель службы поддержки</p>
                <p className="text-muted-foreground">
                  Специалист по психологической поддержке в трудных ситуациях
                </p>
              </div>
              
              <div className="bg-background p-6 rounded-lg shadow-sm text-center">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" 
                    alt="Сотрудник компании" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-medium mb-1">Сидоров Алексей</h3>
                <p className="text-primary mb-3">Руководитель производства</p>
                <p className="text-muted-foreground">
                  Отвечает за изготовление памятников и ритуальных принадлежностей
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Контактная информация */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Свяжитесь с нами</h2>
                <p className="mb-8">
                  Мы доступны 24 часа в сутки, 7 дней в неделю, чтобы оказать вам поддержку в трудный момент
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 flex items-center justify-center bg-primary-foreground/10 rounded-full">
                      <Phone className="text-primary-foreground h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium">Телефон</p>
                      <p>8 (800) 555-35-35</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 flex items-center justify-center bg-primary-foreground/10 rounded-full">
                      <MapPin className="text-primary-foreground h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium">Адрес</p>
                      <p>г. Москва, ул. Примерная, д. 123</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 flex items-center justify-center bg-primary-foreground/10 rounded-full">
                      <Clock className="text-primary-foreground h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium">Время работы</p>
                      <p>Круглосуточно, без выходных</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative rounded-lg overflow-hidden h-[400px]">
                <img 
                  src="https://images.unsplash.com/photo-1577415124269-fc1140a69e91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" 
                  alt="Офис ритуальной службы Вечность" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
