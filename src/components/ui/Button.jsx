import Link from 'next/link';
import { cn } from '@/lib/utils';

const VARIANTS = {
  primary: 'bg-primary-600 text-white hover:bg-primary-700',
  secondary: 'border border-line/20 bg-surface text-body hover:bg-line/5',
  danger: 'bg-red-600 text-white hover:bg-red-700',
  ghost: 'text-muted hover:bg-line/10',
  // Brand gradient (public pages)
  brand: 'bg-brand-red text-white shadow-lg shadow-brand-red/25 hover:bg-brand-red-dark',
  // Logo green (secondary call to action)
  green: 'bg-brand-green text-white shadow-lg shadow-brand-green/25 hover:bg-brand-green-dark',
  // Solid white on dark photos / dark sections
  white: 'bg-white text-brand-red hover:bg-white/90',
  // Outline on dark photos / dark sections
  light: 'border border-white/40 bg-white/10 text-white backdrop-blur hover:bg-white/20',
};

const SIZES = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-sm',
  lg: 'px-6 py-3 text-base',
};

// <Button href="/contact">…</Button> renders a link; without href it's a <button>.
export default function Button({ href, variant = 'primary', size = 'md', className, children, ...props }) {
  const classes = cn(
    'inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-all duration-200 active:scale-[0.97] disabled:cursor-not-allowed disabled:opacity-60',
    VARIANTS[variant],
    SIZES[size],
    className
  );
  if (href) {
    return (
      <Link href={href} className={classes} {...props}>
        {children}
      </Link>
    );
  }
  return (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  );
}
