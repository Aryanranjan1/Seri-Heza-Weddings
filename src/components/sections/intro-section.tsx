import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const IntroSection = () => {
  const portraitImage = PlaceHolderImages.find((img) => img.id === 'intro-portrait');
  const detailImage = PlaceHolderImages.find((img) => img.id === 'intro-detail');

  return (
    <section id="about" className="py-20 md:py-32 container mx-auto px-4">
      <div className="relative grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        {portraitImage && (
          <div className="md:col-span-4 relative h-[400px] md:h-[600px] -ml-4 md:-ml-16">
            <Image
              src={portraitImage.imageUrl}
              alt={portraitImage.description}
              fill
              className="object-cover rounded-md shadow-lg"
              data-ai-hint={portraitImage.imageHint}
            />
          </div>
        )}

        <div className="md:col-span-5 md:col-start-5 text-center md:text-left relative z-10 bg-background/80 backdrop-blur-sm p-8 rounded-md">
          <h2 className="text-4xl md:text-5xl leading-tight mb-6" style={{lineHeight: 1.3}}>
            Your Journey To A Flawless Celebration
          </h2>
          <p className="font-body text-lg text-muted-foreground leading-relaxed">
            With years of experience under her belt, founder Izza Seriheza brings a sense of calm professionalism to every event. We believe your wedding day is a story waiting to be told, and our role is to translate your vision into an unforgettable reality. We handle everything, so you can immerse yourself in the joy of your day.
          </p>
        </div>

        {detailImage && (
          <div className="hidden md:block md:col-span-3 md:col-start-10 relative h-[300px] self-end mb-16">
            <Image
              src={detailImage.imageUrl}
              alt={detailImage.description}
              fill
              className="object-cover rounded-md shadow-lg"
              data-ai-hint={detailImage.imageHint}
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default IntroSection;
