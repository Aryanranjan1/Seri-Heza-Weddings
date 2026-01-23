'use client';
import Link from 'next/link';
import { Menu } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetClose,
  SheetTrigger,
  SheetTitle,
  SheetDescription,
} from '@/components/ui/sheet';

const Header = () => {
  return (
    <header className="absolute top-0 z-50 w-full px-[6%] py-6 md:px-[5%] md:py-10">
      <nav className="relative flex items-center justify-between">
        <div className="hidden flex-1 items-center gap-12 md:flex">
          <Link
            href="#home"
            className="font-ui text-xs uppercase tracking-[0.2em] text-gray-200 opacity-80 transition-colors hover:text-white hover:opacity-100"
          >
            Home
          </Link>
          <Link
            href="#services"
            className="font-ui text-xs uppercase tracking-[0.2em] text-gray-200 opacity-80 transition-colors hover:text-white hover:opacity-100"
          >
            Services
          </Link>
        </div>

        <div className="flex flex-1 items-center justify-start md:absolute md:left-1/2 md:top-1/2 md:flex-initial md:-translate-x-1/2 md:-translate-y-1/2">
          <Link href="/" className="flex flex-col items-start text-gray-200 md:items-center">
            <div className="font-serif text-[1.3rem] leading-none tracking-[0.1em] md:text-4xl md:leading-none whitespace-nowrap">SERIHEZA</div>
            <div className="my-1 flex w-full max-w-[120px] items-center justify-start gap-1.5 md:my-2 md:max-w-none md:gap-2.5">
              <div className="h-px flex-1 bg-white/70" />
              <span className="text-[0.6rem] text-white/80 md:text-sm">✦</span>
              <div className="h-px flex-1 bg-white/70" />
            </div>
            <div className="font-ui text-[0.45rem] uppercase tracking-[0.2em] opacity-90 md:text-[0.6rem] md:tracking-[0.4em]">
              The Amazing Wedding
            </div>
          </Link>
        </div>

        <div className="hidden flex-1 items-center justify-end gap-12 md:flex">
          <Link
            href="#journal"
            className="font-ui text-xs uppercase tracking-[0.2em] text-gray-200 opacity-80 transition-colors hover:text-white hover:opacity-100"
          >
            Blog
          </Link>
          <Link
            href="#contact"
            className="font-ui text-xs uppercase tracking-[0.2em] text-gray-200 opacity-80 transition-colors hover:text-white hover:opacity-100"
          >
            Contact
          </Link>
        </div>
        
        <div className="flex flex-1 justify-end md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <button aria-label="Open menu">
                <Menu className="h-7 w-7 text-white" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-black/95 flex h-full w-full flex-col items-center justify-center gap-8 border-none p-0">
                <SheetTitle className="sr-only">Mobile Navigation</SheetTitle>
                <SheetDescription className="sr-only">Navigation links for mobile view.</SheetDescription>
                <SheetClose asChild>
                    <Link href="#home" className="font-serif text-4xl text-white transition-colors hover:text-muted-gold animate-in fade-in slide-in-from-bottom-5 duration-300" style={{animationDelay: '200ms'}}>Home</Link>
                </SheetClose>
                <SheetClose asChild>
                    <Link href="#services" className="font-serif text-4xl text-white transition-colors hover:text-muted-gold animate-in fade-in slide-in-from-bottom-5 duration-300" style={{animationDelay: '300ms'}}>Services</Link>
                </SheetClose>
                <SheetClose asChild>
                    <Link href="#journal" className="font-serif text-4xl text-white transition-colors hover:text-muted-gold animate-in fade-in slide-in-from-bottom-5 duration-300" style={{animationDelay: '400ms'}}>Blog</Link>
                </SheetClose>
                <SheetClose asChild>
                    <Link href="#contact" className="font-serif text-4xl text-white transition-colors hover:text-muted-gold animate-in fade-in slide-in-from-bottom-5 duration-300" style={{animationDelay: '500ms'}}>Contact</Link>
                </SheetClose>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
};

export default Header;
