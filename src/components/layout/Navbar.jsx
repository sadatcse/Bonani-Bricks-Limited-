'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { HiMenu, HiX } from 'react-icons/hi';
import { FaPhoneAlt, FaFacebookF } from 'react-icons/fa';
import { mainNav } from '@/config/navigation';
import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import Logo from './Logo';
import ThemeToggle from './ThemeToggle';

function isActive(pathname, href) {
  return href === '/' ? pathname === '/' : pathname.startsWith(href);
}

// Top info bar + sticky header. Desktop (lg+): inline links. Smaller screens: full-screen menu.
export default function Navbar() {
  const pathname = usePathname() || '/';
  // The menu remembers the page it was opened on, so navigating closes it
  const [openOn, setOpenOn] = useState(null);
  const open = openOn === pathname;
  const setOpen = (value) => setOpenOn(value ? pathname : null);
  const phone = siteConfig.contact.phones?.[0];
  const [scrolled, setScrolled] = useState(false);

  // Stronger header once the page is scrolled
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock page scroll while the menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      {/* Info bar */}
      <div className="hidden bg-brand-green text-white lg:block">
        <Container className="flex h-9 items-center justify-between gap-4 text-xs">
          <p className="truncate font-medium">
            <span className="font-bangla">{siteConfig.taglineBn}</span>
          </p>
          <div className="flex shrink-0 items-center gap-4">
            {phone && (
              <a href={`tel:${phone.replace(/[^\d+]/g, '')}`} className="inline-flex items-center gap-1.5 hover:underline">
                <FaPhoneAlt aria-hidden className="text-[10px]" /> {phone}
              </a>
            )}
            {siteConfig.social.facebook && (
              <a href={siteConfig.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="inline-flex items-center gap-1.5 hover:underline">
                <FaFacebookF aria-hidden className="text-[10px]" /> Facebook
              </a>
            )}
          </div>
        </Container>
      </div>

      <header
        className={cn(
          'sticky top-0 z-40 border-b backdrop-blur-md transition-all duration-300',
          scrolled ? 'border-line/10 bg-canvas/95 shadow-lg shadow-black/5' : 'border-transparent bg-canvas/80'
        )}
      >
        <Container className="flex h-[4.5rem] items-center justify-between gap-4">
          <Logo height={38} />

          <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Main">
            {mainNav.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive(pathname, link.href) ? 'page' : undefined}
                className={cn(
                  'relative rounded-md px-3 py-2 text-sm font-semibold transition-colors',
                  isActive(pathname, link.href) ? 'text-brand-red' : 'text-muted hover:text-ink'
                )}
              >
                {link.label}
                {isActive(pathname, link.href) && <span className="absolute inset-x-3 -bottom-[1px] h-0.5 rounded-full bg-brand-red" aria-hidden />}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <ThemeToggle className="hidden sm:flex" />
            <span className="hidden md:block">
              <Button href="/contact?subject=Price%20quotation" variant="brand" size="md">
                Get a Quote
              </Button>
            </span>
            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded-lg text-body hover:bg-line/5 lg:hidden"
              onClick={() => setOpen(!open)}
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              aria-controls="mobile-menu"
            >
              {open ? <HiX size={24} /> : <HiMenu size={24} />}
            </button>
          </div>
        </Container>

        {open && (
          <div id="mobile-menu" className="fixed inset-x-0 top-[4.5rem] z-40 h-[calc(100dvh-4.5rem)] overflow-y-auto bg-canvas lg:hidden">
            <Container className="flex flex-col gap-1 py-4">
              <nav className="flex flex-col" aria-label="Mobile">
                {mainNav.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    aria-current={isActive(pathname, link.href) ? 'page' : undefined}
                    className={cn(
                      'rounded-lg px-4 py-3.5 text-base font-semibold transition-colors',
                      isActive(pathname, link.href) ? 'bg-brand-red/10 text-brand-red' : 'text-body hover:bg-line/5'
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
              <Button href="/contact?subject=Price%20quotation" variant="brand" size="lg" className="mt-3">
                Get a Quote
              </Button>
              {phone && (
                <Button href={`tel:${phone.replace(/[^\d+]/g, '')}`} variant="secondary" size="lg" className="mt-2">
                  <FaPhoneAlt aria-hidden /> Call {phone}
                </Button>
              )}
              <ThemeToggle variant="row" className="mt-3" />
            </Container>
          </div>
        )}
      </header>
    </>
  );
}
