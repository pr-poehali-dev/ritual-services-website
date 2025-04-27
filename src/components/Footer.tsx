
import { Link } from 'react-router-dom';
import { Phone, MapPin, Mail, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-xl font-semibold mb-4">Вечность</h3>
            <p className="text-primary-foreground/80 mb-6">
              Ритуальная служба с многолетним опытом работы. Мы оказываем профессиональную помощь в организации похорон в сложный для вас период.
            </p>
            <p className="flex items-center gap-2 mb-2">
              <Phone size={16} />
              <span>8 (800) 555-35-35</span>
            </p>
            <p className="flex items-center gap-2 mb-2">
              <MapPin size={16} />
              <span>г. Москва, ул. Примерная, д. 123</span>
            </p>
            <p className="flex items-center gap-2">
              <Mail size={16} />
              <span>info@vechnost.ru</span>
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Услуги</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services/funeral" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Организация похорон
                </Link>
              </li>
              <li>
                <Link to="/services/transport" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Ритуальный транспорт
                </Link>
              </li>
              <li>
                <Link to="/services/memorials" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Изготовление памятников
                </Link>
              </li>
              <li>
                <Link to="/services/floral" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Венки и цветы
                </Link>
              </li>
              <li>
                <Link to="/services/documents" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Оформление документов
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Режим работы</h3>
            <div className="flex items-start gap-2 mb-4">
              <Clock size={16} className="mt-1" />
              <div>
                <p className="font-medium">Круглосуточно</p>
                <p className="text-primary-foreground/80">Без выходных</p>
                <p className="text-primary-foreground/80 mt-4">Вызов специалиста на дом доступен в любое время суток</p>
              </div>
            </div>
            
            <h3 className="text-xl font-semibold mb-4 mt-6">Полезные ссылки</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  О компании
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Частые вопросы
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Политика конфиденциальности
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/70">© {new Date().getFullYear()} Вечность. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
