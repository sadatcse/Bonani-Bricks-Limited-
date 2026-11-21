import { Inter, Poppins, Hind_Siliguri } from 'next/font/google';
import '@/styles/globals.css';
import AppShell from '@/components/layout/AppShell';
import { siteConfig } from '@/config/site';
import { getCachedSetting } from '@/server/services/settings.service';
import { DEFAULT_TIME_ZONE, setTimeZone } from '@/lib/timezone';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans', display: 'swap' });
const poppins = Poppins({ subsets: ['latin'], weight: ['600', '700', '800'], variable: '--font-display', display: 'swap' });
const hind = Hind_Siliguri({ subsets: ['bengali', 'latin'], weight: ['400', '500', '600', '700'], variable: '--font-bangla', display: 'swap' });

export const metadata = {
  metadataBase: new URL(siteConfig.url),
  // Home page: "Bonani Bricks Limited — Eco-friendly…"; other pages: "Page | Bonani Bricks"
  title: {
    default: `${siteConfig.name} — ${siteConfig.slogan}`,
    template: `%s | ${siteConfig.shortName}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  applicationName: siteConfig.name,
  openGraph: {
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: 'en_US',
    type: 'website',
    images: [{ url: '/images/og-image.jpg', width: 1200, height: 630, alt: siteConfig.name }],
  },
  twitter: { card: 'summary_large_image', title: siteConfig.name, description: siteConfig.description, images: ['/images/og-image.jpg'] },
};

export const viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
  ],
};

// Every page reads the site timezone per request, so a change in Settings applies immediately
export const dynamic = 'force-dynamic';

// Applies the saved theme (or the system preference) before first paint — no light/dark flash
const THEME_SCRIPT = `(function(){try{var t=localStorage.getItem('theme');var d=t?t==='dark':matchMedia('(prefers-color-scheme: dark)').matches;document.documentElement.classList.toggle('dark',d);}catch(e){}})();`;

// Structured data so search engines know the company, offices and contact
const ORG_JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: siteConfig.name,
  slogan: siteConfig.tagline,
  url: siteConfig.url,
  logo: `${siteConfig.url}/images/logo.png`,
  email: siteConfig.contact.email,
  telephone: siteConfig.contact.phones?.[0],
  sameAs: Object.values(siteConfig.social).filter(Boolean),
  address: {
    '@type': 'PostalAddress',
    streetAddress: '29, A.C.M. Street, Thanapara',
    addressLocality: 'Kushtia',
    postalCode: '7000',
    addressCountry: 'BD',
  },
};

async function readTimeZone() {
  try {
    return (await getCachedSetting('site')).timezone; // cached 60 s — keeps first paint fast
  } catch {
    return DEFAULT_TIME_ZONE; // database unreachable — pages still render
  }
}

export default async function RootLayout({ children }) {
  const timeZone = await readTimeZone();
  setTimeZone(timeZone);

  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${poppins.variable} ${hind.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_SCRIPT }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ORG_JSON_LD) }} />
      </head>
      <body suppressHydrationWarning>
        <AppShell timeZone={timeZone}>{children}</AppShell>
      </body>
    </html>
  );
}
