import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Gem, Heart, Palette, ClipboardCheck } from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    icon: <Palette className="h-10 w-10 text-muted-gold" />,
    title: 'Bridal Makeup',
    description: 'Flawless, long-lasting looks by Izza Seriheza.',
  },
  {
    icon: <Gem className="h-10 w-10 text-muted-gold" />,
    title: 'Pelamin & Décor',
    description: 'Grand dais designs, florals & cinematic lighting.',
  },
  {
    icon: <Heart className="h-10 w-10 text-muted-gold" />,
    title: 'Busana & Attire',
    description: 'Exclusive songket, gowns & traditional wear.',
  },
  {
    icon: <ClipboardCheck className="h-10 w-10 text-muted-gold" />,
    title: 'Full Wedding Planning',
    description: 'From catering to coordination — handled seamlessly.',
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl mb-12">One-Stop Solution</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {services.map((service, index) => (
            <Card key={index} className="bg-transparent border-0 shadow-none text-center flex flex-col items-center">
              <CardHeader>
                <div className="mx-auto w-20 h-20 rounded-full border border-muted-gold/50 flex items-center justify-center bg-background">
                  {service.icon}
                </div>
              </CardHeader>
              <CardContent>
                <h3 className="font-ui uppercase tracking-wide-ui text-lg font-semibold mb-2">{service.title}</h3>
                <p className="font-body text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <Button asChild className="bg-transparent border border-foreground text-foreground rounded-full px-8 py-6 hover:bg-foreground hover:text-background font-ui uppercase tracking-wide-ui text-sm">
          <Link href="#">Explore Full Services</Link>
        </Button>
      </div>
    </section>
  );
};

export default ServicesSection;
