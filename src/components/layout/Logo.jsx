import Link from 'next/link';
import Image from 'next/image';
import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';

// Horizontal Bonani Bricks logo (public/images/logo.png, 557 × 138).
export default function Logo({ className = '', height = 40 }) {
  const width = Math.round((557 / 138) * height);
  return (
    <Link href="/" className={cn('flex shrink-0 items-center', className)} aria-label={`${siteConfig.name} — home`}>
      <Image src="/images/logo.png" alt={siteConfig.name} width={width} height={height} priority className="h-auto" style={{ height, width: 'auto' }} />
    </Link>
  );
}
