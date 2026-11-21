'use client';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

// Fades elements up as they scroll into view — on every public page, with no extra markup.
// Targets headings, cards in grids, list items, tables, figures and anything with data-reveal.
// Opt a block out with data-no-reveal (the hero and page headers animate on their own).
// Styles live in src/styles/globals.css ("Scroll reveal").
const SELECTOR = [
  'main h2',
  'main section .grid > *',
  'main article',
  'main ol > li',
  'main dl',
  'main table',
  'main figure',
  'main iframe',
  'main [data-reveal]',
].join(',');

const STAGGER_MS = 90;
const MAX_STAGGER = 6;

export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return undefined;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;

    const root = document.documentElement;
    const found = Array.from(document.querySelectorAll(SELECTOR)).filter(
      (el) => !el.closest('[data-no-reveal]') && !el.dataset.anim && !el.classList.contains('is-revealed')
    );
    // Animate only the outermost match (a card fades in once, not its inner list too)
    const targets = found.filter((el) => !found.some((other) => other !== el && other.contains(el)));
    if (!targets.length) return undefined;

    root.classList.add('js-reveal');
    targets.forEach((el) => {
      // Stagger siblings (cards in a row) so they cascade in
      const siblings = el.parentElement ? Array.from(el.parentElement.children) : [];
      const index = Math.max(0, siblings.indexOf(el)) % MAX_STAGGER;
      el.dataset.anim = el.dataset.reveal || 'up';
      el.style.transitionDelay = `${index * STAGGER_MS}ms`;
    });

    const timers = [];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target;
          observer.unobserve(el);
          el.classList.add('is-visible');
          // Hand the element back to its own hover transitions once it has landed
          const delay = parseInt(el.style.transitionDelay, 10) || 0;
          timers.push(
            setTimeout(() => {
              el.classList.add('is-revealed');
              el.classList.remove('is-visible');
              el.style.transitionDelay = '';
              delete el.dataset.anim;
            }, 800 + delay)
          );
        });
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 }
    );
    targets.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
      timers.forEach(clearTimeout);
    };
  }, [pathname]);

  return null;
}
