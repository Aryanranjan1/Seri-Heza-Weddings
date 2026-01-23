import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const IntroSection = () => {
  const mainImage = PlaceHolderImages.find((img) => img.id === 'intro-main');
  const floatingImage = PlaceHolderImages.find((img) => img.id === 'intro-floating');

  return (
    <section id="intro" className="bg-background py-20 md:py-32">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-[5%] lg:grid-cols-2 lg:gap-24">
        <div className="relative lg:pr-8">
          <div className="absolute left-[-30px] top-[10px] hidden h-[100px] w-px bg-muted-gold lg:block" />

          <span className="mb-6 block font-ui text-xs uppercase tracking-[0.25em] text-muted-gold">
            Who We Are
          </span>

          <h2 className="mb-8 font-serif text-4xl leading-snug text-foreground">
            Your Journey To <br />
            <span className="font-signature text-5xl text-muted-gold block mt-6 ml-8">
              Flawless Celebration
            </span>
          </h2>

          <p className="mb-12 text-justify font-sans text-sm leading-relaxed text-gray-500">
            As a premier <strong>wedding planner in Shah Alam and Kuala Lumpur</strong>, we bring a sense of
            calm professionalism to the chaos of planning. Founder <strong>Izza Seriheza</strong> specializes
            in curating <strong>luxury Malay weddings</strong>, translating your unique love story into an
            unforgettable reality.
            <br />
            <br />
            From <strong>full-service coordination</strong> to bespoke event styling, we manage the
            intricate logistics across the <strong>Klang Valley</strong>, allowing you to simply immerse
            yourself in the joy of your day. We believe your wedding is a story waiting to be told, and
            our role is to write it with precision and grace.
          </p>

          <div className="mt-8 flex flex-col gap-3">
            <span className="font-signature text-4xl text-foreground">Izza Seriheza</span>
            <span className="block font-ui text-xs uppercase tracking-wide-ui text-muted-foreground">
              Founder & Creative Director
            </span>
          </div>
        </div>

        <div className="group relative order-first flex h-[700px] items-center justify-center lg:order-last">
          {mainImage && (
            <div className="absolute right-0 top-0 z-10 h-[90%] w-[80%] overflow-hidden">
              <Image
                src={mainImage.imageUrl}
                alt={mainImage.description}
                fill
                className="object-cover grayscale-[.20] transition-all duration-1000 ease-in-out group-hover:scale-105 group-hover:grayscale-0"
                sizes="(max-width: 1024px) 100vw, 50vw"
                data-ai-hint={mainImage.imageHint}
              />
            </div>
          )}

          {floatingImage && (
            <div className="absolute bottom-12 left-0 z-20 aspect-[3/4] w-1/2 overflow-hidden border border-muted-gold bg-white p-1.5 shadow-2xl">
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
