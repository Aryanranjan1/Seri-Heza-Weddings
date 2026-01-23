import Image from 'next/image';
import Link from 'next/link';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const faqs = [
  {
    question: "Do you cover Shah Alam & KL?",
    answer: "Yes. While our atelier is in Shah Alam, we craft weddings across the entire Klang Valley, including Kuala Lumpur and Selangor."
  },
  {
    question: "What is in the Pakej Lengkap?",
    answer: "Our Complete Package is comprehensive: Full Bridal Makeup, Attire Rental (L/P), Pelamin & Decor, Photography, and Catering options."
  },
  {
    question: "How early should we book?",
    answer: "To ensure availability for your preferred dates—especially during school holidays—we recommend securing your date 6 to 12 months in advance."
  },
  {
    question: "Can I customize packages?",
    answer: "Absolutely. We believe every wedding is unique. We can tailor our existing packages to align perfectly with your vision and budget."
  }
];

const recentArticles = [
  { date: "15", month: "APR", title: "How to Choose the Perfect Songket Color", href: "#" },
  { date: "01", month: "MAR", title: "Why a Professional Coordinator Matters", href: "#" },
  { date: "14", month: "FEB", title: "The Art of the Modern Pelamin", href: "#" },
  { date: "20", month: "JAN", title: "Beauty Prep: The 3-Month Countdown", href: "#" },
];

const SeoAuthoritySection = () => {
  const heroArticleImage = PlaceHolderImages.find((img) => img.id === 'journal-hero');

  return (
    <section className="py-20 md:py-32 px-[5%] max-w-[1400px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-12 lg:gap-24 items-start">
        
        {/* Journal Column */}
        <div className="lg:border-r lg:pr-16 lg:border-border">
          <span className="font-ui text-xs uppercase tracking-wider-ui text-muted-gold mb-8 block">Pesona Pengantin • Journal</span>
          
          {/* Hero Article */}
          <Link href="#" className="group block mb-20">
            {heroArticleImage && (
              <div className="w-full h-[450px] overflow-hidden mb-8 relative">
                <Image 
                  src={heroArticleImage.imageUrl} 
                  alt={heroArticleImage.description}
                  fill
                  className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                  data-ai-hint={heroArticleImage.imageHint}
                />
              </div>
            )}
            <div className="text-xs text-gray-500 uppercase tracking-wide mb-3">Featured • May 20, 2024</div>
            <h2 className="font-headline text-4xl leading-tight text-foreground mb-4 transition-colors group-hover:text-muted-gold">5 Malay Wedding Trends for 2025</h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-6">From the resurgence of bold Songket colors to the minimalist "Pelamin" aesthetic, discover what is defining the next season of royal celebrations.</p>
            <span className="font-ui text-xs font-semibold uppercase tracking-wide text-foreground border-b border-muted-gold pb-1">Read Full Story</span>
          </Link>

          {/* Recent Articles List */}
          <div className="flex flex-col gap-10">
            {recentArticles.map((article, index) => (
              <Link href={article.href} key={index} className={`group flex gap-8 items-center text-left ${index > 0 ? 'border-t border-border pt-8' : ''}`}>
                <div className="font-serif italic text-2xl text-muted-gold min-w-[60px] text-center leading-none">
                  {article.date}
                  <span className="block font-ui text-[0.6rem] not-italic uppercase tracking-wide text-gray-500 mt-1.5">{article.month}</span>
                </div>
                <div className="flex-1">
                  <h4 className="font-serif text-xl text-foreground transition-all duration-300 group-hover:text-muted-gold group-hover:translate-x-2">{article.title}</h4>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* FAQ Column */}
        <div className="lg:sticky lg:top-24">
          <div className="mb-12">
            <span className="font-ui text-xs uppercase tracking-wider-ui text-muted-gold mb-4 block">Concierge</span>
            <h3 className="font-headline text-4xl text-foreground mb-4">Frequently Asked</h3>
            <p className="text-base text-muted-foreground leading-relaxed">Everything you need to know about planning your celebration with Seri Heza.</p>
          </div>

          <Accordion type="single" collapsible defaultValue="item-0" className="w-full border-t-2 border-foreground">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b-border">
                <AccordionTrigger className="text-left font-ui tracking-normal text-base font-medium py-6 hover:text-muted-gold hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="font-body text-muted-foreground text-base pr-8 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

      </div>
    </section>
  );
};

export default SeoAuthoritySection;
