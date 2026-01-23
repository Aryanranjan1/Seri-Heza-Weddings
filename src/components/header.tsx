'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Logo from '@/components/logo';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetTrigger } from './ui/sheet';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#services', label: 'Services' },
  { href: '#portfolio', label: 'Portfolio' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
];

const Header = () => {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const NavLink = ({ href, label, onClick }: { href: string; label: string; onClick?: () => void }) => (
    <Link
      href={href}
      onClick={onClick}
      className="font-ui uppercase tracking-wide-ui text-sm transition-colors hover:text-muted-gold"
    >
      {label}
    </Link>
  );

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        hasScrolled ? 'bg-background/80 shadow-md backdrop-blur-sm' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          <div className="hidden md:flex flex-1 items-center justify-start gap-8">
            <NavLink href="#home" label="Home" />
            <NavLink href="#services" label="Services" />
            <NavLink href="#portfolio" label="Portfolio" />
          </div>

          <div className="flex-1 md:flex-initial md:flex-shrink-0 md:flex md:justify-center">
            <Logo className={cn(hasScrolled ? 'text-foreground' : 'text-primary-foreground')}/>
          </div>
          
          <div className="hidden md:flex flex-1 items-center justify-end gap-8">
            <NavLink href="#about" label="About" />
            <NavLink href="#contact" label="Contact" />
          </div>

          <div className="md:hidden flex-1 flex justify-end">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className={cn(hasScrolled ? 'text-foreground' : 'text-primary-foreground hover:bg-white/10 hover:text-white', 'md:hidden')}>
                  <Menu />
                  <span className="sr-only">Open Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-background w-[250px] sm:w-[300px]">
                <SheetHeader>
                  <SheetTitle className="sr-only">Mobile Menu</SheetTitle>
                  <SheetDescription className="sr-only">
                    A list of navigation links to sections of the page.
                  </SheetDescription>
                </SheetHeader>
                <div className="flex flex-col items-center justify-center h-full gap-8">
                  {navLinks.map((link) => (
                    <NavLink key={link.href} {...link} onClick={() => setIsMobileMenuOpen(false)} />
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
