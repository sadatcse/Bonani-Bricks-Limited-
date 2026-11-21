import { cn } from '@/lib/utils';

// Eyebrow + title + optional intro used by every section of the public pages.
export default function SectionHeading({ eyebrow, title, intro, align = 'center', className, light = false }) {
  const centered = align === 'center';
  return (
    <div className={cn(centered ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl', className)}>
      {eyebrow && (
        <p
          className={cn(
            'inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em]',
            light ? 'text-white/80' : 'text-brand-green dark:text-green-400'
          )}
        >
          <span className="h-px w-6 bg-current" aria-hidden />
          {eyebrow}
        </p>
      )}
      <h2 className={cn('mt-3 font-display text-3xl font-extrabold tracking-tight md:text-4xl', light ? 'text-white' : 'text-ink')}>
        {title}
      </h2>
      <span
        className={cn('mt-4 block h-1 w-16 rounded-full bg-gradient-to-r from-brand-green to-brand-red', centered && 'mx-auto')}
        aria-hidden
      />
      {intro && <p className={cn('mt-5 text-lg leading-relaxed', light ? 'text-white/80' : 'text-muted')}>{intro}</p>}
    </div>
  );
}
