import { FaCheck, FaArrowRight, FaStamp } from 'react-icons/fa';
import { siteConfig } from '@/config/site';
import { products, moreProducts, standards } from '@/data/company';
import DarkPageHeader from '@/components/ui/DarkPageHeader';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import ImageSlot from '@/components/ui/ImageSlot';
import SectionHeading from '@/components/ui/SectionHeading';
import CtaBanner from '@/components/site/CtaBanner';

export const metadata = {
  title: 'Products',
  description: `Solid blocks, hollow blocks, uni blocks and paving blocks from ${siteConfig.name} — sizes, grades, compressive strength and uses.`,
};

function Spec({ label, value }) {
  return (
    <div className="rounded-xl bg-canvas-2 px-4 py-3">
      <dt className="text-xs font-semibold uppercase tracking-wider text-subtle">{label}</dt>
      <dd className="mt-0.5 font-semibold text-ink">{value}</dd>
    </div>
  );
}

export default function ProductsPage() {
  return (
    <div className="bg-canvas">
      <DarkPageHeader
        title="Our"
        accent="Products"
        subtitle="Non-fired concrete blocks and pavers, vibro-compacted on fully automatic lines and graded to the HBRI 2023 guideline."
        breadcrumbs={[{ label: 'Products' }]}
      >
        <nav className="mt-6 flex flex-wrap gap-2" aria-label="Products">
          {products.map((p) => (
            <a key={p.slug} href={`#${p.slug}`} className="rounded-full border border-line/15 bg-surface px-4 py-2 text-sm font-semibold text-body transition-colors hover:border-brand-red hover:text-brand-red">
              {p.name}
            </a>
          ))}
        </nav>
      </DarkPageHeader>

      <Container className="space-y-16 py-14 md:space-y-24 md:py-20">
        {products.map((p, i) => (
          <article key={p.slug} id={p.slug} className="grid scroll-mt-28 items-center gap-10 lg:grid-cols-2">
            <ImageSlot src={p.image} alt={p.name} label={p.name} className={`aspect-[4/3] rounded-3xl ${i % 2 ? 'lg:order-2' : ''}`} />
            <div>
              <p className="font-bangla text-lg font-semibold text-brand-green dark:text-green-400">{p.nameBn}</p>
              <h2 className="mt-1 font-display text-3xl font-extrabold">{p.name}</h2>
              <p className="mt-4 text-lg leading-relaxed text-muted">{p.summary}</p>

              <dl className="mt-6 grid grid-cols-2 gap-3">
                <Spec label="Size (L × W × H)" value={p.size} />
                <Spec label="HBRI grade" value={p.grade} />
                <Spec label="Compressive strength" value={p.strength} />
                <Spec label="Water absorption" value={p.absorption} />
              </dl>

              <h3 className="mt-6 text-sm font-bold uppercase tracking-widest text-subtle">Best for</h3>
              <ul className="mt-3 space-y-2">
                {p.uses.map((u) => (
                  <li key={u} className="flex items-center gap-3">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-brand-green text-[10px] text-white">
                      <FaCheck aria-hidden />
                    </span>
                    {u}
                  </li>
                ))}
              </ul>

              <Button href={`/contact?subject=${encodeURIComponent(`Quote: ${p.name}`)}`} variant="brand" size="lg" className="mt-8">
                Get a price for {p.name} <FaArrowRight aria-hidden />
              </Button>
            </div>
          </article>
        ))}
      </Container>

      {/* Spec table */}
      <section className="bg-canvas-2">
        <Container className="py-14 md:py-20">
          <SectionHeading eyebrow="At a glance" title="Specification table" intro="Strength is measured on gross area after 28 days of curing." />
          <div className="mt-10 overflow-x-auto rounded-2xl border border-line/10 bg-surface">
            <table className="w-full min-w-[720px] text-left text-sm">
              <thead className="bg-brand-green text-white">
                <tr>
                  {['Product', 'Size (mm)', 'Pcs / mould', 'Grade', 'Strength', 'Water absorption'].map((h) => (
                    <th key={h} className="px-5 py-3.5 font-semibold">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-line/10">
                {products.map((p) => (
                  <tr key={p.slug} className="hover:bg-line/[0.03]">
                    <td className="px-5 py-3.5 font-semibold text-ink">{p.name}</td>
                    <td className="px-5 py-3.5">{p.size.replace(' mm', '')}</td>
                    <td className="px-5 py-3.5">{p.perMould}</td>
                    <td className="px-5 py-3.5">{p.grade}</td>
                    <td className="px-5 py-3.5">{p.strength}</td>
                    <td className="px-5 py-3.5">{p.absorption}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-line/10 bg-surface p-6">
              <h3 className="flex items-center gap-2 text-lg">
                <FaStamp className="text-brand-red" aria-hidden /> Standards we follow
              </h3>
              <ul className="mt-4 space-y-2 text-sm text-muted">
                {standards.map((s) => (
                  <li key={s} className="flex gap-2"><span className="text-brand-red">•</span>{s}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-line/10 bg-surface p-6">
              <h3 className="text-lg">More on request</h3>
              <p className="mt-2 text-sm text-muted">With extra moulds the same machines can produce:</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {moreProducts.map((m) => (
                  <span key={m} className="rounded-full bg-brand-red/10 px-3.5 py-1.5 text-sm font-semibold text-brand-red">{m}</span>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <CtaBanner title="Need a bulk quotation?" text="Send us the product, quantity and delivery site. Government contractors, developers and dealers welcome." />
    </div>
  );
}
