
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-background border-b border-border">
      <div className="container px-4 sm:px-6 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-2xl font-semibold text-primary">Вечность</span>
        </Link>

        {/* Мобильная навигация */}
        <div className="lg:hidden flex items-center">
          <Button 
            variant="ghost" 
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Закрыть меню" : "Открыть меню"}
            className="p-2"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {/* Десктопная навигация */}
        <nav className="hidden lg:flex items-center space-x-8">
          <Link to="/" className="text-foreground hover:text-primary transition-colors">
            Главная
          </Link>
          <Link to="/services" className="text-foreground hover:text-primary transition-colors">
            Услуги
          </Link>
          <Link to="/about" className="text-foreground hover:text-primary transition-colors">
            О нас
          </Link>
          <Link to="/memorials" className="text-foreground hover:text-primary transition-colors">
            Памятники
          </Link>
          <Link to="/contacts" className="text-foreground hover:text-primary transition-colors">
            Контакты
          </Link>
        </nav>

        <div className="hidden lg:flex items-center">
          <Button variant="ghost" className="flex items-center gap-2">
            <Phone size={18} />
            <span>8 (800) 555-35-35</span>
          </Button>
        </div>
      </div>

      {/* Мобильное меню */}
      {isMenuOpen && (
        <div className="lg:hidden bg-background border-b border-border">
          <div className="container px-4 py-4 flex flex-col space-y-4">
            <Link 
              to="/" 
              className="text-foreground hover:text-primary transition-colors py-2"
              onClick={toggleMenu}
            >
              Главная
            </Link>
            <Link 
              to="/services" 
              className="text-foreground hover:text-primary transition-colors py-2"
              onClick={toggleMenu}
            >
              Услуги
            </Link>
            <Link 
              to="/about" 
              className="text-foreground hover:text-primary transition-colors py-2"
              onClick={toggleMenu}
            >
              О нас
            </Link>
            <Link 
              to="/memorials" 
              className="text-foreground hover:text-primary transition-colors py-2"
              onClick={toggleMenu}
            >
              Памятники
            </Link>
            <Link 
              to="/contacts" 
              className="text-foreground hover:text-primary transition-colors py-2"
              onClick={toggleMenu}
            >
              Контакты
            </Link>
            <Button variant="outline" className="flex items-center justify-center gap-2 w-full">
              <Phone size={18} />
              <span>8 (800) 555-35-35</span>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
