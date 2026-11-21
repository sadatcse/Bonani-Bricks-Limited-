'use client';
import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

// Image with a branded placeholder. Until the real photo exists in /public/images, a brick-pattern
// panel shows the file name it is waiting for (see IMAGE_PROMPTS.md). Drop the file in and it appears.
export default function ImageSlot({ src, alt, className, imgClassName, priority = false, label }) {
  const imgRef = useRef(null);
  const [failed, setFailed] = useState(false);

  // The browser may report a missing file before React hydrates — check once on mount
  useEffect(() => {
    const img = imgRef.current;
    if (img && img.complete && img.naturalWidth === 0) setFailed(true);
  }, []);

  return (
    <div className={cn('overflow-hidden bg-surface-2', className)}>
      {!failed ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          ref={imgRef}
          src={src}
          alt={alt}
          loading={priority ? 'eager' : 'lazy'}
          fetchPriority={priority ? 'high' : undefined}
          onError={() => setFailed(true)}
          className={cn('h-full w-full object-cover', imgClassName)}
        />
      ) : (
        <div
          role="img"
          aria-label={alt}
          className="flex h-full w-full flex-col items-center justify-center gap-2 bg-gradient-to-br from-brand-brick via-[#7d2224] to-[#4a1416] bg-brick-pattern p-4 text-center"
        >
          <span className="rounded-full bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-white/80">
            {label || 'Image coming soon'}
          </span>
          <span className="break-all font-mono text-[11px] text-white/50">{src}</span>
        </div>
      )}
    </div>
  );
}
