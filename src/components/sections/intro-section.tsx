import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const IntroSection = () => {
  const mainImage = PlaceHolderImages.find((img) => img.id === 'intro-main');
  const floatingImage = PlaceHolderImages.find((img) => img.id === 'intro-floating');

  return (
    <section id="about" className="py-20 md:py-32 bg-background flex items-center justify-center">
        <div className="max-w-7xl w-full mx-auto px-[5%] grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            
            <div className="lg:pr-8 relative">
                <div className="hidden lg:block absolute left-[-30px] top-[10px] w-px h-[100px] bg-muted-gold" />
                
                <span className="font-ui text-xs uppercase tracking-[0.25em] text-muted-gold mb-6 block">Who We Are</span>
                
                <h2 className="font-serif text-4xl text-foreground leading-snug mb-8">
                    Your Journey To <br />
                    <span className="font-signature text-5xl text-muted-gold block -mt-2 ml-4">
                        Flawless Celebration
                    </span>
                </h2>
                
                <p className="font-sans text-sm text-gray-500 leading-relaxed mb-12 text-justify">
                    As a premier <strong>wedding planner in Shah Alam and Kuala Lumpur</strong>, we bring a sense of calm professionalism to the chaos of planning. Founder <strong>Izza Seriheza</strong> specializes in curating <strong>luxury Malay weddings</strong>, translating your unique love story into an unforgettable reality.
                    <br/><br/>
                    From <strong>full-service coordination</strong> to bespoke event styling, we manage the intricate logistics across the <strong>Klang Valley</strong>, allowing you to simply immerse yourself in the joy of your day. We believe your wedding is a story waiting to be told, and our role is to write it with precision and grace.
                </p>

                <div className="mt-8">
                    <span className="font-signature text-4xl text-foreground">Izza Seriheza</span>
                    <span className="font-ui text-xs uppercase tracking-wide-ui text-muted-foreground block -mt-4">
                        Founder & Creative Director
                    </span>
                </div>
            </div>

            <div className="relative h-[700px] flex items-center justify-center group order-first lg:order-last">
              {mainImage && (
                <div className="w-[80%] h-[90%] absolute top-0 right-0 overflow-hidden z-10">
                  <Image
                    src={mainImage.imageUrl}
                    alt={mainImage.description}
                    fill
                    className="object-cover grayscale-[.20] group-hover:grayscale-0 transition-all duration-1000 ease-in-out group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    data-ai-hint={mainImage.imageHint}
                  />
                </div>
              )}

              {floatingImage && (
                <div className="w-1/2 aspect-[3/4] absolute bottom-12 left-0 z-20 overflow-hidden border border-muted-gold shadow-2xl bg-white p-1.5">
                  <Image
                    src={floatingImage.imageUrl}
                    alt={floatingImage.description}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                    data-ai-hint={floatingImage.imageHint}
                  />
                </div>
              )}
            </div>

        </div>
    </section>
  );
};

export default IntroSection;
