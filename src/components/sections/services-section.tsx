'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { Gem, Heart, Smile, ClipboardCheck } from 'lucide-react';

const sliderImageIds = [
  'service-slider-1',
  'service-slider-2',
  'service-slider-3',
  'service-slider-4',
];

const sliderImages = sliderImageIds
  .map((id) => PlaceHolderImages.find((img) => img.id === id))
  .filter(Boolean);

const services = [
  {
    icon: <Smile className="h-7 w-7 text-foreground" />,
    title: 'Bridal Makeup',
    description: 'Flawless, HD-ready looks by Izza Seriheza.',
  },
  {
    icon: <Gem className="h-7 w-7 text-foreground" />,
    title: 'Pelamin & Décor',
    description: 'Grand dais designs, fresh florals & cinematic lighting.',
  },
  {
    icon: <Heart className="h-7 w-7 text-foreground" />,
    title: 'Busana & Attire',
    description: 'Exclusive songket, bespoke gowns & traditional wear.',
  },
  {
    icon: <ClipboardCheck className="h-7 w-7 text-foreground" />,
    title: 'Full Planning',
    description: 'Seamless coordination from catering to logistics.',
  },
];

const ServicesSection = () => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    if (sliderImages.length <= 1) return;

    const intervalId = setInterval(() => {
      setCurrentIdx(prevIdx => (prevIdx + 1) % sliderImages.length);
    }, 10000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section id="services" className="grid w-full lg:min-h-[800px] lg:h-screen grid-cols-1 lg:grid-cols-2">
      <div className="relative h-[50vh] lg:h-full w-full overflow-hidden bg-black group">
        {sliderImages.map((image, index) => {
          if (!image) return null;

          const isActive = index === currentIdx;
          const prevIdx = (currentIdx - 1 + sliderImages.length) % sliderImages.length;
          const isExiting = isLoaded && index === prevIdx;

          return (
            <Image
              key={image.id}
              src={image.imageUrl}
              alt={image.description}
              fill
              priority={index < 2}
              className={cn(
                'absolute top-0 left-0 h-full w-full object-cover grayscale group-hover:grayscale-0',
                {
                  'z-20 translate-y-0 transition-transform duration-[1500ms] ease-[cubic-bezier(0.65,0,0.35,1)]': isActive,
                  'z-10 -translate-y-full transition-transform duration-[1500ms] ease-[cubic-bezier(0.65,0,0.35,1)]': isExiting,
                  'z-0 translate-y-full transition-none': !isActive && !isExiting,
                }
              )}
              data-ai-hint={image.imageHint}
            />
          );
        })}
      </div>

      <div className="bg-white px-[6%] lg:px-[8%] py-16 lg:py-12 flex flex-col justify-center">
        <div className="mb-10">
          <span className="font-ui text-xs uppercase tracking-[0.25em] text-muted-gold block mb-2">
            The Atelier
          </span>
          <h2 className="font-signature text-6xl md:text-7xl text-foreground leading-none mb-6">
            One-Stop Solution
          </h2>
          <p className="font-ui text-sm text-muted-foreground leading-relaxed max-w-lg">
            From the first sketch to the final vow, we curate every element under one roof. Experience the ease of a seamless journey to your dream celebration.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
          {services.map((service, index) => (
            <div key={index} className="group/card relative border border-muted-gold p-6 transition-all duration-400 ease-in-out hover:bg-latte hover:-translate-y-1 hover:shadow-lg">
              <div className="mb-4">{service.icon}</div>
              <h3 className="font-headline text-lg text-foreground mb-2">{service.title}</h3>
              <p className="font-body text-sm text-muted-foreground leading-snug">{service.description}</p>
            </div>
          ))}
        </div>

        <Button asChild className="bg-transparent border border-foreground text-foreground rounded-none px-8 py-6 hover:bg-foreground hover:text-background font-ui uppercase tracking-wide-ui text-xs w-fit">
          <Link href="#">Explore Full Services</Link>
        </Button>
      </div>
    </section>
  );
};

export default ServicesSection;
