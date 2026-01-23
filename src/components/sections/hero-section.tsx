'use client';
import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

const HeroSection = () => {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero');
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsMounted(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const fadeUp = (delay: string) =>
    cn('transition-all transform-gpu duration-1000', isMounted ? `opacity-100 translate-y-0 ${delay}` : 'opacity-0 translate-y-8');

  return (
    <section id="home" className="relative h-screen w-full bg-black flex items-center justify-center overflow-hidden">
      {heroImage && (
        <div className="absolute inset-0 z-10 animate-kenBurns">
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover grayscale"
            priority
            data-ai-hint={heroImage.imageHint}
          />
        </div>
      )}
      <div className="absolute inset-0 z-20 bg-[radial-gradient(circle,rgba(0,0,0,0.3)_0%,rgba(0,0,0,0.7)_100%)]" />
      
      <div className="relative z-30 flex flex-col items-center justify-center text-center text-white px-4 max-w-4xl mt-[-20px]">
        <span className={cn('font-ui text-sm uppercase tracking-[0.3em] mb-6', fadeUp('delay-200'))}>
          Established Elegance
        </span>
        <h1 className={cn('font-headline text-[2.52rem] md:text-[4.05rem] leading-tight mb-4 drop-shadow-lg', fadeUp('delay-500'))}>
          Dimana Impian Raja<br/>Seharimu Terlaksana
        </h1>
        <h2 className={cn('font-ui text-[0.7rem] md:text-[0.9rem] uppercase tracking-[0.15em] font-light mb-14', fadeUp('delay-800'))}>
          Premier Wedding Planner & Stylist for Amazing Weddings
        </h2>
        <Link href="#intro" className={cn('inline-block border border-white px-8 py-3.5 md:px-11 md:py-4 font-ui text-[0.7rem] md:text-xs uppercase tracking-[0.2em] transition-colors hover:bg-white hover:text-black', fadeUp('delay-1000'))}>
          Start Your Journey
        </Link>
      </div>

      <Link href="#intro" aria-label="Scroll Down" className={cn(
        'absolute bottom-12 left-1/2 -translate-x-1/2 z-30 w-[40px] h-[40px] flex items-center justify-center transition-opacity duration-1000',
        isMounted ? 'opacity-100 animate-bounce-custom delay-[2s]' : 'opacity-0'
        )}>
        <div className="w-3 h-3 border-b-2 border-r-2 border-white transform rotate-45" />
      </Link>
    </section>
  );
};

export default HeroSection;
