'use client';
import Link from 'next/link';
import { Diamond } from 'lucide-react';

const Header = () => {
  return (
    <header className="absolute top-0 z-50 w-full px-[5%] py-6 md:py-10">
      <nav className="flex flex-col items-center justify-between gap-4 md:flex-row md:gap-0">
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

        <div className="flex-shrink-0">
          <Link href="/" className="flex flex-col items-center text-gray-200">
            <div className="font-serif text-4xl tracking-[0.1em]">SERIHEZA</div>
            <div className="my-3 flex w-full items-center justify-center gap-2.5">
              <div className="h-px w-8 bg-white/70" />
              <Diamond className="h-2 w-2 text-white" />
              <div className="h-px w-8 bg-white/70" />
            </div>
            <div className="font-ui text-[0.6rem] uppercase tracking-[0.4em] opacity-90">
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
      </nav>
    </header>
  );
};

export default Header;
