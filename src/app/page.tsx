import HeroSection from '@/components/sections/hero-section';
import IntroSection from '@/components/sections/intro-section';
import ServicesSection from '@/components/sections/services-section';
import PortfolioSection from '@/components/sections/portfolio-section';
import SeoAuthoritySection from '@/components/sections/seo-authority-section';
import ConversionSection from '@/components/sections/conversion-section';

export default function Home() {
  return (
    <>
      <HeroSection />
      <IntroSection />
      <ServicesSection />
      <PortfolioSection />
      <SeoAuthoritySection />
      <ConversionSection />
    </>
  );
}
