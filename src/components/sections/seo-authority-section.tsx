import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Separator } from '../ui/separator';

const faqs = [
  {
    question: "Do you offer wedding packages in Shah Alam & KL?",
    answer: "Yes, we specialize in creating bespoke wedding experiences throughout the Klang Valley, including Shah Alam and Kuala Lumpur. Our team is familiar with the best venues and vendors in the area."
  },
  {
    question: "What is included in the Pakej Lengkap?",
    answer: "Our 'Pakej Lengkap' (Full Package) is a comprehensive service covering everything from venue sourcing, decor, catering, attire, makeup, and full-day coordination. It's designed for a stress-free experience."
  },
  {
    question: "How early should couples book?",
    answer: "We recommend booking at least 9-12 months in advance, especially for popular wedding dates, to ensure availability and ample time for meticulous planning."
  },
  {
    question: "Can I customize my wedding package?",
    answer: "Absolutely. Every wedding is unique. We start with a consultation to understand your vision and then tailor a package that perfectly suits your style, needs, and budget."
  }
];

const articles = [
  { date: 'May 20, 2024', title: '5 Malay Wedding Trends for 2025' },
  { date: 'April 15, 2024', title: 'How to Choose the Perfect Songket Color' },
  { date: 'March 01, 2024', title: 'Why a Professional Coordinator Matters' },
];

const SeoAuthoritySection = () => {
  return (
    <section className="py-20 md:py-24 bg-dusty-rose">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl mb-8">Frequently Asked</h2>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left font-ui tracking-wide-ui text-base">{faq.question}</AccordionTrigger>
                  <AccordionContent className="font-body text-muted-foreground text-base">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl mb-8">Pesona Pengantin</h2>
            <div className="space-y-6">
              {articles.map((article, index) => (
                <div key={index}>
                  <p className="font-body text-sm text-muted-foreground mb-1">{article.date}</p>
                  <h3 className="font-ui text-xl font-medium hover:text-muted-gold transition-colors cursor-pointer">{article.title}</h3>
                  {index < articles.length - 1 && <Separator className="mt-6 bg-muted-gold/20" />}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeoAuthoritySection;
