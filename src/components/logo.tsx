import Link from 'next/link';
import { cn } from '@/lib/utils';

type LogoProps = {
  className?: string;
};

const Logo = ({ className }: LogoProps) => {
  return (
    <Link href="/" className={cn('font-headline text-2xl font-semibold tracking-wider text-foreground', className)}>
      SERI HEZA
    </Link>
  );
};

export default Logo;
