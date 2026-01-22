import Link from 'next/link';
import { Instagram, Facebook } from 'lucide-react';
import { TikTokIcon } from './icons/tiktok-icon';

const Footer = () => {
  return (
    <footer className="bg-background py-8">
      <div className="container mx-auto px-4 text-center text-muted-foreground">
        <div className="flex justify-center gap-6 mb-4">
          <Link href="#" aria-label="Instagram">
            <Instagram className="h-6 w-6 transition-colors hover:text-foreground" />
          </Link>
          <Link href="#" aria-label="Facebook">
            <Facebook className="h-6 w-6 transition-colors hover:text-foreground" />
          </Link>
          <Link href="#" aria-label="TikTok">
            <TikTokIcon className="h-6 w-6 transition-colors hover:text-foreground" />
          </Link>
        </div>
        <p className="font-ui text-sm uppercase tracking-wide-ui mb-2">
          SERI HEZA | Shah Alam, Selangor
        </p>
        <p className="text-xs">
          &copy; {new Date().getFullYear()} SERI HEZA. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
