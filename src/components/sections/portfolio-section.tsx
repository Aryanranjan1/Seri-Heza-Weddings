import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent } from '../ui/card';

const portfolioItems = [
  { imageId: 'portfolio-1', coupleName: 'Aiman & Bella' },
  { imageId: 'portfolio-2', coupleName: 'Farid & Lisa' },
  { imageId: 'portfolio-3', coupleName: 'Rizal & Yasmin' },
  { imageId: 'portfolio-4', coupleName: 'Daniel & Sofea' },
];

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-20 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-4xl md:text-5xl mb-12">Enchanted Events</h2>
        <div className="gap-8 space-y-8 md:columns-2">
          {portfolioItems.map((item) => {
            const image = PlaceHolderImages.find((img) => img.id === item.imageId);
            if (!image || !image.width || !image.height) return null;
            
            return (
              <div key={item.imageId} className="break-inside-avoid">
                <Card className="overflow-hidden border-none shadow-xl rounded-lg group">
                  <div className="overflow-hidden">
                    <Image
                      src={image.imageUrl}
                      alt={image.description}
                      width={image.width}
                      height={image.height}
                      className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                      data-ai-hint={image.imageHint}
                    />
                  </div>
                  <CardContent className="p-6 bg-background">
                    <div className="flex justify-between items-center">
                      <p className="font-body text-lg">{item.coupleName}</p>
                      <Link href="#" className="font-ui uppercase tracking-wide-ui text-sm text-muted-gold hover:text-foreground transition-colors">
                        Explore Event
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
