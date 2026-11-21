'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { FaFacebookF, FaLinkedinIn, FaGithub, FaYoutube, FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaClock } from 'react-icons/fa';
import { siteConfig } from '@/config/site';
import { mainNav, legalNav } from '@/config/navigation';
import { products } from '@/data/company';
import { api } from '@/lib/api-client';
import Container from '@/components/ui/Container';
import Logo from './Logo';

const SOCIAL_ICONS = { facebook: FaFacebookF, linkedin: FaLinkedinIn, github: FaGithub, youtube: FaYoutube };
const linkHover = 'transition-colors hover:text-brand-red';

function FooterLinks({ title, links }) {
  return (
    <nav aria-label={title}>
      <h4 className="mb-3 text-xs font-bold uppercase tracking-widest text-ink">{title}</h4>
      <ul className="space-y-0.5 text-sm md:space-y-2">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className={`block py-1.5 text-muted md:inline md:py-0 ${linkHover}`}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function ContactRow({ icon: Icon, children }) {
  return (
    <div className="flex items-start gap-3">
      <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-brand-green/10 text-xs text-brand-green dark:text-green-400">
        <Icon aria-hidden />
      </span>
      <div className="min-w-0 flex-1 pt-1">{children}</div>
    </div>
  );
}

export default function Footer() {
  const [visitors, setVisitors] = useState(null);

  useEffect(() => {
    api.get('/visitor/summary').then((res) => setVisitors(res.data?.stats)).catch(() => {});
  }, []);

  const { contact, offices } = siteConfig;
  const socials = Object.entries(siteConfig.social).filter(([key, url]) => url && SOCIAL_ICONS[key]);
  const productLinks = products.map((p) => ({ label: p.name, href: `/products#${p.slug}` }));

  return (
    <footer className="border-t border-line/10 bg-canvas">
      {/* Offices strip (same three addresses as the company letterhead) */}
      <div className="border-b border-line/10 bg-canvas-2">
        <Container className="grid gap-6 py-8 sm:grid-cols-3">
          {offices.map((office) => (
            <div key={office.key} className="flex items-start gap-3">
              <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-red text-sm text-white">
                <FaMapMarkerAlt aria-hidden />
              </span>
              <div className="text-sm">
                <p className="font-bold text-ink">{office.title}</p>
                {office.lines.map((line) => (
                  <p key={line} className="text-muted">{line}</p>
                ))}
              </div>
            </div>
          ))}
        </Container>
      </div>

      <Container className="grid gap-x-8 gap-y-10 py-10 md:grid-cols-2 md:py-12 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <Logo height={44} />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">{siteConfig.description}</p>

          <div className="mt-5 space-y-3 text-sm text-muted">
            {contact.phones?.length > 0 && (
              <ContactRow icon={FaPhoneAlt}>
                <div className="flex flex-wrap gap-x-4 gap-y-1.5">
                  {contact.phones.map((phone) => (
                    <a key={phone} href={`tel:${phone.replace(/[^\d+]/g, '')}`} className={`whitespace-nowrap ${linkHover}`}>{phone}</a>
                  ))}
                </div>
              </ContactRow>
            )}
            {contact.email && (
              <ContactRow icon={FaEnvelope}>
                <a href={`mailto:${contact.email}`} className={`break-all ${linkHover}`}>{contact.email}</a>
              </ContactRow>
            )}
            {contact.hours && <ContactRow icon={FaClock}>{contact.hours}</ContactRow>}
          </div>

          {socials.length > 0 && (
            <div className="mt-5 flex gap-2">
              {socials.map(([key, url]) => {
                const Icon = SOCIAL_ICONS[key];
                return (
                  <a
                    key={key}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={key}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-line/15 text-body transition-colors hover:border-brand-red hover:bg-brand-red hover:text-white"
                  >
                    <Icon size={16} />
                  </a>
                );
              })}
            </div>
          )}
        </div>

        <div className="grid grid-cols-2 gap-6 border-t border-line/10 pt-8 md:border-0 md:pt-0 lg:col-span-3 lg:grid-cols-3">
          <FooterLinks title="Company" links={mainNav} />
          <FooterLinks title="Products" links={productLinks} />
          <FooterLinks title="Legal" links={legalNav} />
        </div>
      </Container>

      <div className="border-t border-line/10">
        <Container className="flex flex-col items-center gap-3 py-5 text-center text-xs text-subtle md:flex-row md:justify-between">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved. · RJSC Reg. No. {siteConfig.registration.rjsc}
          </p>
          {visitors && (
            <ul className="flex flex-wrap justify-center gap-2" aria-label="Visitors">
              {[
                ['Today', visitors.today],
                ['Total', visitors.total],
                ['Online', visitors.online],
              ].map(([label, value]) => (
                <li key={label} className="inline-flex items-center gap-1.5 rounded-full border border-line/10 px-2.5 py-1">
                  {label === 'Online' && <span className="h-1.5 w-1.5 rounded-full bg-green-500" aria-hidden />}
                  {label}: <span className="font-semibold text-body">{value}</span>
                </li>
              ))}
            </ul>
          )}
        </Container>
      </div>
    </footer>
  );
}
