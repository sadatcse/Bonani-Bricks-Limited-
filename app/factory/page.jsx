import { FaCogs, FaMapMarkedAlt, FaCheck } from 'react-icons/fa';
import { siteConfig } from '@/config/site';
import { machine, processSteps, facilities, locationAdvantages, timeline } from '@/data/company';
import DarkPageHeader from '@/components/ui/DarkPageHeader';
import Container from '@/components/ui/Container';
import ImageSlot from '@/components/ui/ImageSlot';
import SectionHeading from '@/components/ui/SectionHeading';
import CtaBanner from '@/components/site/CtaBanner';

export const metadata = {
  title: 'Factory & Technology',
  description: `Inside the ${siteConfig.name} plant at Jugia, Kushtia — two Donyue QT18-15 fully automatic block lines, curing chambers and an in-house QC laboratory.`,
};

export default function FactoryPage() {
  return (
    <div className="bg-canvas">
      <DarkPageHeader
        title="Factory &"
        accent="Technology"
        subtitle="Two fully automatic Donyue QT18-15 block production lines with curing system at Jugia (Vatapara), Kushtia Sadar."
        breadcrumbs={[{ label: 'Factory' }]}
      />

      {/* Machine */}
      <Container className="grid items-center gap-12 py-14 md:py-20 lg:grid-cols-2">
        <ImageSlot src="/images/factory/qt18-15-machine.jpg" alt={machine.name} label="QT18-15 machine" className="aspect-[4/3] rounded-3xl" />
        <div>
          <SectionHeading align="left" eyebrow="The machine" title={machine.name} />
          <p className="mt-5 text-muted">{machine.maker}</p>
          <ul className="mt-6 space-y-3">
            {machine.points.map((pt) => (
              <li key={pt} className="flex gap-3">
                <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-red text-[10px] text-white">
                  <FaCheck aria-hidden />
                </span>
                {pt}
              </li>
            ))}
          </ul>
          <div className="mt-8 grid grid-cols-3 gap-3 text-center">
            {[
              ['2', 'automatic lines'],
              ['2 × 8 h', 'shifts per day'],
              ['300', 'working days / yr'],
            ].map(([v, l]) => (
              <div key={l} className="rounded-xl bg-canvas-2 p-4">
                <p className="font-display text-2xl font-extrabold text-brand-green dark:text-green-400">{v}</p>
                <p className="text-xs text-subtle">{l}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>

      {/* Process flow */}
      <section className="bg-canvas-2">
        <Container className="py-14 md:py-20">
          <SectionHeading eyebrow="Production flow" title="Nine steps from raw material to your site" />
          <ol className="relative mx-auto mt-12 max-w-4xl">
            {processSteps.map((step, i) => (
              <li key={step.title} className="relative flex gap-5 pb-8 last:pb-0">
                {i < processSteps.length - 1 && <span className="absolute left-5 top-11 h-[calc(100%-2.75rem)] w-0.5 bg-gradient-to-b from-brand-green to-brand-red/40" aria-hidden />}
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-green font-display text-sm font-bold text-white">
                  {i + 1}
                </span>
                <div className="flex-1 rounded-2xl border border-line/10 bg-surface p-5">
                  <h3 className="text-lg">{step.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* Facilities */}
      <Container className="py-14 md:py-20">
        <SectionHeading eyebrow="Plant facilities" title="Built for quality and year-round output" />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {facilities.map((f) => (
            <div key={f.title} className="overflow-hidden rounded-2xl border border-line/10 bg-surface">
              <ImageSlot src={f.image} alt={f.title} label={f.title} className="aspect-[4/3]" />
              <div className="p-5">
                <h3 className="flex items-center gap-2 text-lg">
                  <FaCogs className="text-brand-red" aria-hidden /> {f.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{f.text}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>

      {/* Location */}
      <section className="border-y border-line/10 bg-canvas-2">
        <Container className="grid items-center gap-12 py-14 md:py-20 lg:grid-cols-2">
          <div>
            <SectionHeading align="left" eyebrow="Location" title="At the crossroads of the south-west" />
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {locationAdvantages.map((a) => (
                <li key={a} className="flex gap-3 rounded-xl bg-surface p-4 text-sm ring-1 ring-line/5">
                  <FaMapMarkedAlt className="mt-0.5 shrink-0 text-brand-green" aria-hidden /> {a}
                </li>
              ))}
            </ul>
          </div>
          {siteConfig.contact.mapEmbed ? (
            <div className="overflow-hidden rounded-3xl border border-line/10">
              <iframe title="Bonani Bricks factory location" src={siteConfig.contact.mapEmbed} className="h-80 w-full md:h-96" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
          ) : (
            <ImageSlot src="/images/factory/aerial-site.jpg" alt="Aerial view of the factory site" label="Aerial view" className="aspect-[4/3] rounded-3xl" />
          )}
        </Container>
      </section>

      {/* Timeline */}
      <Container className="py-14 md:py-20">
        <SectionHeading eyebrow="Project timeline" title="Where we are" />
        <div className="mt-12 grid gap-4 md:grid-cols-3 lg:grid-cols-6">
          {timeline.map((t, i) => (
            <div key={t.title} className={`rounded-2xl border p-5 ${i === timeline.length - 1 ? 'border-brand-red bg-brand-red text-white' : 'border-line/10 bg-surface'}`}>
              <p className={`text-xs font-bold uppercase tracking-widest ${i === timeline.length - 1 ? 'text-white/80' : 'text-brand-red'}`}>{t.date}</p>
              <h3 className={`mt-1 text-base ${i === timeline.length - 1 ? 'text-white' : ''}`}>{t.title}</h3>
              <p className={`mt-1 text-sm ${i === timeline.length - 1 ? 'text-white/85' : 'text-muted'}`}>{t.text}</p>
            </div>
          ))}
        </div>
      </Container>

      <CtaBanner title="Visit our site or book early supply" text="Contractors and dealers can reserve supply for upcoming projects. Call or message us to arrange a visit." />
    </div>
  );
}
