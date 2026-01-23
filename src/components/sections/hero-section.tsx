import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero');

  return (
    <section id="home" className="relative h-screen w-full">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover"
          priority
          data-ai-hint={heroImage.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-black/30" />
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-primary-foreground px-4">
        <p className="font-ui uppercase tracking-wider-ui text-sm md:text-base">
          Premier Wedding Planner & Stylist
        </p>
        <h1
          className="font-headline text-5xl md:text-7xl lg:text-8xl leading-tight md:leading-snug mt-4"
          style={{ lineHeight: 1.2 }}
        >
          Crafting Exquisite Celebrations
        </h1>
        <p className="font-body text-lg md:text-xl mt-4 max-w-2xl">
          Specializing in luxury Malay & modern editorial weddings in Kuala Lumpur and Shah Alam.
        </p>
        <Button asChild variant="ghost" className="mt-8 border rounded-full px-8 py-6 text-sm uppercase font-ui tracking-wide-ui hover:bg-white/10 hover:text-white">
          <Link href="#contact">
            Start Your Journey <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
