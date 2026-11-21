import Link from 'next/link';
import {
  FaArrowRight,
  FaLeaf,
  FaRulerCombined,
  FaCoins,
  FaFeatherAlt,
  FaCalendarCheck,
  FaFileContract,
  FaCheckCircle,
  FaIndustry,
} from 'react-icons/fa';
import { siteConfig } from '@/config/site';
import { stats, products, benefits, processSteps, customers, licences, serviceAreas } from '@/data/company';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import ImageSlot from '@/components/ui/ImageSlot';
import SectionHeading from '@/components/ui/SectionHeading';
import ProductCard from '@/components/site/ProductCard';
import CountUp from '@/components/ui/CountUp';
import CtaBanner from '@/components/site/CtaBanner';

const BENEFIT_ICONS = {
  eco: FaLeaf,
  strength: FaRulerCombined,
  cost: FaCoins,
  light: FaFeatherAlt,
  supply: FaCalendarCheck,
  compliance: FaFileContract,
};

export default function HomePage() {
  const obtained = licences.filter((l) => l.status === 'Obtained');

  return (
    <div className="bg-canvas text-body">
      {/* Hero */}
      <section data-no-reveal className="relative isolate overflow-hidden bg-[#140707]">
        <ImageSlot src="/images/hero-factory.jpg" alt="Bonani Bricks automatic concrete block factory in Kushtia" label="Hero image" priority className="absolute inset-0 -z-10 h-full w-full" imgClassName="animate-ken-burns" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/90 via-black/70 to-black/20" aria-hidden />
        <Container className="grid items-center gap-10 py-20 md:py-28 lg:grid-cols-[1.25fr_1fr] lg:py-32">
          <div>
            <p className="inline-flex animate-fade-up items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-xs font-bold uppercase tracking-widest text-white backdrop-blur">
              <FaLeaf className="text-green-400" aria-hidden /> Eco-friendly · Non-fired · HBRI graded
            </p>
            <h1 className="mt-6 animate-fade-up anim-delay-100 font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-white md:text-6xl">
              Bricks That Build <span className="text-brand-red">Your Future</span>
            </h1>
            <p className="mt-4 animate-fade-up anim-delay-200 font-bangla text-xl font-semibold text-green-400 md:text-2xl">ইটের বদলে ব্লক — আপনার স্থাপনা হয় দ্বিগুণ মজবুত</p>
            <p className="mt-5 max-w-xl animate-fade-up anim-delay-300 text-lg leading-relaxed text-white/80">
              Machine-made concrete solid blocks, hollow blocks and paving blocks from our fully automatic plant in Kushtia — stronger walls, lower cost and no
              burnt top-soil.
            </p>
            <div className="mt-8 flex animate-fade-up anim-delay-400 flex-col gap-3 sm:flex-row">
              <Button href="/products" variant="brand" size="lg">
                Explore products <FaArrowRight aria-hidden />
              </Button>
              <Button href="/contact?subject=Price%20quotation" variant="light" size="lg">
                Get a quotation
              </Button>
            </div>
          </div>

          {/* Quick product picker */}
          <div className="hidden animate-slide-in-right anim-delay-300 rounded-2xl border border-white/15 bg-white/10 p-6 backdrop-blur-md lg:block">
            <p className="text-xs font-bold uppercase tracking-widest text-white/70">Our product range</p>
            <ul className="mt-4 divide-y divide-white/10">
              {products.map((p) => (
                <li key={p.slug}>
                  <Link href={`/products#${p.slug}`} className="group flex items-center justify-between gap-4 py-3.5 text-white">
                    <span>
                      <span className="block font-semibold">{p.name}</span>
                      <span className="text-sm text-white/60">{p.size} · {p.strength}</span>
                    </span>
                    <FaArrowRight className="shrink-0 text-white/50 transition-transform group-hover:translate-x-1 group-hover:text-white" aria-hidden />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* Stats */}
      <section className="relative z-10 -mt-px border-b border-line/10 bg-surface">
        <Container className="grid grid-cols-2 divide-line/10 md:grid-cols-4 md:divide-x">
          {stats.map((s) => (
            <div key={s.label} className="px-4 py-8 text-center md:py-10">
              <p className="font-display text-3xl font-extrabold text-brand-red md:text-4xl">
                <CountUp value={s.value} />
              </p>
              <p className="mt-1 font-semibold text-ink">{s.label}</p>
              <p className="text-xs text-subtle">{s.note}</p>
            </div>
          ))}
        </Container>
      </section>

      {/* About teaser */}
      <section>
        <Container className="grid items-center gap-12 py-16 md:py-24 lg:grid-cols-2">
          <div className="relative">
            <ImageSlot src="/images/about-blocks-closeup.jpg" alt="Stacks of grey concrete blocks at the Bonani Bricks yard" label="About image" className="aspect-[4/3] rounded-3xl" />
            <div className="absolute -bottom-6 -right-2 hidden animate-float rounded-2xl bg-brand-green p-5 text-white shadow-xl sm:block md:-right-6">
              <p className="font-display text-3xl font-extrabold">8–9</p>
              <p className="max-w-[10rem] text-sm text-white/85">bricks replaced by one hollow block</p>
            </div>
          </div>
          <div>
            <SectionHeading
              align="left"
              eyebrow="Who we are"
              title="From a family brick-field to a modern block factory"
              intro="Bonani Bricks Limited is a Kushtia company led by the Khan family. We are turning our Jugia brick-field into a fully automatic, non-fired concrete block plant — in line with the Government’s plan to phase out burnt clay bricks."
            />
            <ul className="mt-6 space-y-3">
              {[
                'Two Donyue QT18-15 fully automatic production lines with curing system',
                'Products made to the HBRI 2023 guideline — every block graded and stamped',
                'Head office in Kushtia, sales office in Dhaka, factory at Jugia (Vatapara)',
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <FaCheckCircle className="mt-1 shrink-0 text-brand-green" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Button href="/about" variant="green" size="lg" className="mt-8">
              About the company <FaArrowRight aria-hidden />
            </Button>
          </div>
        </Container>
      </section>

      {/* Products */}
      <section className="bg-canvas-2">
        <Container className="py-16 md:py-24">
          <SectionHeading
            eyebrow="Products"
            title="Blocks for every wall and walkway"
            intro="Four core products from the same automatic lines — solid and hollow blocks for walls, uni and rectangular blocks for paving."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button href="/products" variant="secondary" size="lg">
              Full specifications <FaArrowRight aria-hidden />
            </Button>
          </div>
        </Container>
      </section>

      {/* Benefits */}
      <section>
        <Container className="py-16 md:py-24">
          <SectionHeading eyebrow="Why concrete blocks" title="Better for your building — and for Bangladesh" />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map(({ key, title, text }) => {
              const Icon = BENEFIT_ICONS[key];
              return (
                <div key={key} className="group rounded-2xl border border-line/10 bg-surface p-6 transition-colors hover:border-brand-green/50">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-green/10 text-xl text-brand-green transition-colors group-hover:bg-brand-green group-hover:text-white dark:text-green-400">
                    <Icon aria-hidden />
                  </span>
                  <h3 className="mt-5 text-lg">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{text}</p>
                </div>
              );
            })}
          </div>
          <div className="mt-10 text-center">
            <Link href="/why-blocks" className="inline-flex items-center gap-2 font-semibold text-brand-red hover:underline">
              Compare clay bricks and concrete blocks <FaArrowRight aria-hidden />
            </Link>
          </div>
        </Container>
      </section>

      {/* Process */}
      <section className="relative overflow-hidden bg-[#160909] bg-brick-pattern text-white">
        <Container className="grid gap-12 py-16 md:py-24 lg:grid-cols-[1fr_1.3fr]">
          <div>
            <SectionHeading
              light
              align="left"
              eyebrow="How we make it"
              title="Fully automatic, from mix to pallet"
              intro="Hydraulic pressure and high-frequency vibration on the Donyue QT18-15, followed by controlled curing and batch testing in our own lab."
            />
            <ImageSlot src="/images/factory/qt18-15-machine.jpg" alt="Donyue QT18-15 automatic block making machine" label="Machine image" className="mt-8 aspect-video rounded-2xl" />
            <Button href="/factory" variant="light" size="lg" className="mt-8">
              <FaIndustry aria-hidden /> Inside the factory
            </Button>
          </div>
          <ol className="grid gap-3 sm:grid-cols-2">
            {processSteps.map((step, i) => (
              <li key={step.title} className="rounded-xl border border-white/10 bg-white/5 p-5">
                <span className="font-display text-sm font-bold text-brand-red">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="mt-1 text-base text-white">{step.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-white/65">{step.text}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* Customers + service area */}
      <section>
        <Container className="py-16 md:py-24">
          <SectionHeading eyebrow="Who we supply" title="Built for government works, developers and home builders" />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {customers.map((c) => (
              <div key={c.title} className="rounded-2xl border-t-4 border-brand-red bg-surface p-6 shadow-sm ring-1 ring-line/5">
                <h3 className="text-lg">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{c.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 rounded-2xl bg-canvas-2 p-6 text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-subtle">Delivering across</p>
            <p className="mt-3 flex flex-wrap justify-center gap-2">
              {serviceAreas.map((a) => (
                <span key={a} className="rounded-full border border-line/10 bg-surface px-3.5 py-1.5 text-sm font-medium text-ink">{a}</span>
              ))}
            </p>
          </div>
        </Container>
      </section>

      {/* Compliance strip */}
      <section className="border-y border-line/10 bg-canvas-2">
        <Container className="grid items-center gap-8 py-12 lg:grid-cols-[1fr_2fr]">
          <div>
            <h2 className="font-display text-2xl font-extrabold">Licensed &amp; approved</h2>
            <p className="mt-2 text-muted">A registered limited company with every location approval in place.</p>
            <Link href="/compliance" className="mt-4 inline-flex items-center gap-2 font-semibold text-brand-red hover:underline">
              See all licences <FaArrowRight aria-hidden />
            </Link>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {obtained.slice(0, 6).map((l) => (
              <li key={l.title} className="flex items-start gap-3 rounded-xl bg-surface p-4 ring-1 ring-line/5">
                <FaCheckCircle className="mt-0.5 shrink-0 text-brand-green" aria-hidden />
                <span>
                  <span className="block text-sm font-semibold text-ink">{l.title}</span>
                  <span className="text-xs text-subtle">{l.authority}</span>
                </span>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <CtaBanner title={`Plan your next project with ${siteConfig.shortName}`} />
    </div>
  );
}
