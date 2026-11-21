import { FaTimesCircle, FaCheckCircle, FaGavel, FaExternalLinkAlt } from 'react-icons/fa';
import { siteConfig } from '@/config/site';
import { comparison, benefits, policy, news } from '@/data/company';
import DarkPageHeader from '@/components/ui/DarkPageHeader';
import Container from '@/components/ui/Container';
import ImageSlot from '@/components/ui/ImageSlot';
import SectionHeading from '@/components/ui/SectionHeading';
import CtaBanner from '@/components/site/CtaBanner';

export const metadata = {
  title: 'Why Concrete Blocks',
  description: 'Clay brick vs concrete block — cost, strength, environment and the Government rules that make eco-friendly blocks mandatory in public works.',
};

export default function WhyBlocksPage() {
  return (
    <div className="bg-canvas">
      <DarkPageHeader
        title="Why"
        accent="Concrete Blocks?"
        subtitle="Bangladesh burns about 25 billion clay bricks a year in 7,000+ kilns, eating fertile top-soil and polluting the air. Concrete blocks are the cleaner, stronger alternative."
        breadcrumbs={[{ label: 'Why Blocks' }]}
      />

      {/* Before / after visual */}
      <Container className="grid gap-6 py-14 md:grid-cols-2 md:py-20">
        <figure className="overflow-hidden rounded-3xl border border-line/10 bg-surface">
          <ImageSlot src="/images/why/brick-kiln-smoke.jpg" alt="Traditional brick kiln chimney with smoke" label="Old way: brick kiln" className="aspect-[16/10]" />
          <figcaption className="flex items-center gap-2 p-5 font-semibold text-ink">
            <FaTimesCircle className="text-brand-red" aria-hidden /> Fired clay bricks — top-soil, coal and smoke
          </figcaption>
        </figure>
        <figure className="overflow-hidden rounded-3xl border border-line/10 bg-surface">
          <ImageSlot src="/images/why/green-block-wall.jpg" alt="Modern building wall made of concrete blocks" label="New way: block wall" className="aspect-[16/10]" />
          <figcaption className="flex items-center gap-2 p-5 font-semibold text-ink">
            <FaCheckCircle className="text-brand-green" aria-hidden /> Concrete blocks — non-fired, uniform, faster to build
          </figcaption>
        </figure>
      </Container>

      {/* Comparison table */}
      <section className="bg-canvas-2">
        <Container className="py-14 md:py-20">
          <SectionHeading eyebrow="Side by side" title="Clay brick vs Bonani concrete block" />
          <div className="mt-10 overflow-x-auto rounded-2xl border border-line/10 bg-surface">
            <table className="w-full min-w-[640px] text-left text-sm">
              <thead>
                <tr className="border-b border-line/10">
                  <th className="px-5 py-4 text-subtle"> </th>
                  <th className="px-5 py-4 font-semibold text-brand-red">Red clay brick</th>
                  <th className="bg-brand-green/10 px-5 py-4 font-semibold text-brand-green dark:text-green-400">Bonani concrete block</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-line/10">
                {comparison.map((row) => (
                  <tr key={row.label}>
                    <th scope="row" className="px-5 py-4 font-semibold text-ink">{row.label}</th>
                    <td className="px-5 py-4 text-muted">
                      <span className="flex gap-2"><FaTimesCircle className="mt-0.5 shrink-0 text-brand-red/70" aria-hidden />{row.brick}</span>
                    </td>
                    <td className="bg-brand-green/5 px-5 py-4 text-ink">
                      <span className="flex gap-2"><FaCheckCircle className="mt-0.5 shrink-0 text-brand-green" aria-hidden />{row.block}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </section>

      {/* Benefits */}
      <Container className="py-14 md:py-20">
        <SectionHeading eyebrow="Benefits" title="What you gain on site" />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b, i) => (
            <div key={b.key} className="rounded-2xl border border-line/10 bg-surface p-6">
              <span className="font-display text-3xl font-extrabold text-brand-red/25">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="mt-2 text-lg">{b.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{b.text}</p>
            </div>
          ))}
        </div>
      </Container>

      {/* Government policy */}
      <section className="bg-[#0b1f10] bg-brick-pattern text-white">
        <Container className="py-14 md:py-20">
          <SectionHeading light eyebrow="Government policy" title="Blocks are the law for public works" intro="Roughly 45% of all bricks in Bangladesh go into government projects — and those projects must now use blocks." />
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {policy.map((p) => (
              <div key={p.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <h3 className="flex items-start gap-3 text-lg text-white">
                  <FaGavel className="mt-1 shrink-0 text-green-400" aria-hidden /> {p.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">{p.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* News */}
      <Container className="py-14 md:py-20">
        <SectionHeading eyebrow="In the news" title="What the press says" />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {news.map((n) => (
            <a
              key={n.url}
              href={n.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col rounded-2xl border border-line/10 bg-surface p-6 transition-colors hover:border-brand-red/50"
            >
              <span className="text-xs font-bold uppercase tracking-widest text-brand-red">{n.source}</span>
              <span className="mt-2 flex-1 text-lg font-semibold text-ink">{n.title}</span>
              <span className="mt-4 inline-flex items-center gap-2 text-sm text-muted group-hover:text-brand-red">
                Read article <FaExternalLinkAlt className="text-xs" aria-hidden />
              </span>
            </a>
          ))}
        </div>
      </Container>

      <CtaBanner title="Switch your next project to blocks" text={`Talk to ${siteConfig.shortName} about quantities, grades and delivery for your site.`} />
    </div>
  );
}
