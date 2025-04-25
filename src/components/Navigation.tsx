import { useState } from 'react';
import { Book, Briefcase, Mail, User } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', () => {
      setIsScrolled(window.scrollY > 20);
    });
  }

  const navItems = [
    { label: 'About', href: '#about', icon: User },
    { label: 'Skills', href: '#skills', icon: Book },
    { label: 'Projects', href: '#projects', icon: Briefcase },
    { label: 'Contact', href: '#contact', icon: Mail },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 dark-mode-transition ${isScrolled ? 'bg-background/90 dark:bg-navy/90 backdrop-blur-md py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-foreground dark:text-white font-bold text-xl dark-mode-transition">
          Portfolio
        </a>
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-foreground/80 dark:text-white/80 hover:text-foreground dark:hover:text-white flex items-center gap-2 dark-mode-transition"
            >
              <item.icon className="w-4 h-4" />
              {item.label}
            </a>
          ))}
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
