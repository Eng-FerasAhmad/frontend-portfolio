import { useState } from 'react';
import { Book, Briefcase, Mail, Menu, User, Globe, FileText } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { t, i18n } = useTranslation();

  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', () => {
      setIsScrolled(window.scrollY > 20);
    });
  }

  const navItems = [
    { label: t('nav.about'), to: '/about', icon: User },
    { label: t('nav.skills'), to: '/skills', icon: Book },
    { label: t('nav.projects'), to: '/projects', icon: Briefcase },
    { label: t('nav.blog'), to: '/blog', icon: FileText },
    { label: t('nav.contact'), to: '/contact', icon: Mail },
  ];

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  const NavLinks = () => (
    <>
      {navItems.map((item) => (
        <Link
          key={item.label}
          to={item.to}
          className="text-foreground/80 dark:text-white/80 hover:text-foreground dark:hover:text-white flex items-center gap-2"
        >
          <item.icon className="w-4 h-4" />
          {item.label}
        </Link>
      ))}
      <DropdownMenu>
        <DropdownMenuTrigger className="text-foreground/80 dark:text-white/80 hover:text-foreground dark:hover:text-white flex items-center gap-2">
          <Globe className="w-4 h-4" />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem onClick={() => changeLanguage('en')}>
            English
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => changeLanguage('de')}>
            Deutsch
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <ThemeToggle />
    </>
  );

  return (
    <nav className={`fixed top-0 w-full z-50 ${isScrolled ? 'bg-background/90 dark:bg-navy/90 backdrop-blur-md py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="text-foreground dark:text-white font-bold text-xl">
          {t('nav.portfolio')}
        </Link>
        
        <div className="hidden md:flex items-center gap-8">
          <NavLinks />
        </div>

        <div className="md:hidden">
          <Drawer>
            <DrawerTrigger asChild>
              <button className="text-foreground/80 dark:text-white/80 hover:text-foreground dark:hover:text-white">
                <Menu className="w-6 h-6" />
              </button>
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle>{t('nav.portfolio')}</DrawerTitle>
              </DrawerHeader>
              <div className="px-6 pb-6 flex flex-col gap-6">
                <NavLinks />
              </div>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
