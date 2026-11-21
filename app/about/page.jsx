import { FaBullseye, FaEye, FaHeart, FaUserTie, FaBuilding } from 'react-icons/fa';
import { siteConfig } from '@/config/site';
import { leadership, timeline } from '@/data/company';
import DarkPageHeader from '@/components/ui/DarkPageHeader';
import Container from '@/components/ui/Container';
import ImageSlot from '@/components/ui/ImageSlot';
import SectionHeading from '@/components/ui/SectionHeading';
import CtaBanner from '@/components/site/CtaBanner';

export const metadata = {
  title: 'About Us',
  description: `The story, mission and leadership of ${siteConfig.name} — an eco-friendly concrete block manufacturer in Kushtia, Bangladesh.`,
};

const CARDS = [
  {
    icon: FaBullseye,
    title: 'Our mission',
    text: 'Replace burnt clay bricks with strong, affordable, machine-made concrete blocks — protecting farmland and clean air while helping builders save time and money.',
  },
  {
    icon: FaEye,
    title: 'Our vision',
    text: 'To be the most trusted eco-friendly building-materials brand of the south-west and a reliable supplier to government and private projects across Bangladesh.',
  },
  {
    icon: FaHeart,
    title: 'Our values',
    text: 'Quality you can test, honest pricing, on-time delivery, safe workplaces and respect for the environment and our community in Kushtia.',
  },
];

const AT_A_GLANCE = [
  ['Company', siteConfig.name],
  ['Legal status', 'Private Company Limited by Shares (Companies Act, 1994)'],
  ['RJSC registration', `${siteConfig.registration.rjsc} · incorporated ${siteConfig.registration.incorporated}`],
  ['Business', 'Manufacturing & marketing of non-fired concrete blocks and pavers'],
  ['Brand promise', siteConfig.tagline],
  ['Head office', '29, A.C.M. Street, Thanapara, Kushtia-7000'],
  ['Dhaka office', 'House 20, Road 11, Mohammadi Housing Society, Mohammadpur'],
  ['Factory', 'Dr. Anwarul Karim Road, Jugia (Vatapara), Kushtia Sadar'],
];

export default function AboutPage() {
  return (
    <div className="bg-canvas">
      <DarkPageHeader title="About" accent={siteConfig.shortName} subtitle={`${siteConfig.tagline} — the people and the plan behind Kushtia’s modern block factory.`} breadcrumbs={[{ label: 'About' }]} />

      {/* Story */}
      <Container className="grid items-center gap-12 py-14 md:py-20 lg:grid-cols-2">
        <div>
          <SectionHeading align="left" eyebrow="Our story" title="A new chapter for a Kushtia brick family" />
          <div className="mt-6 space-y-4 leading-relaxed text-body">
            <p>
              For years the Khan family of Kushtia ran a traditional brick-field at Jugia. As Bangladesh moved to protect its farmland and air from brick kilns, the
              family chose to lead the change instead of waiting for it.
            </p>
            <p>
              In January 2025 they founded <strong className="text-ink">Bonani Bricks Limited</strong> to convert the Jugia site into a fully automatic, non-fired
              concrete block factory. The plant runs two Donyue QT18-15 production lines with curing chambers and an in-house testing laboratory, and makes
              blocks that follow the Housing and Building Research Institute (HBRI) guideline.
            </p>
            <p>
              Our head office is in Kushtia town, our sales office is in Mohammadpur, Dhaka, and our blocks are made for builders across Kushtia, the Khulna and
              Rajshahi divisions and the capital.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <ImageSlot src="/images/about/team-at-site.jpg" alt="Bonani Bricks team at the Jugia factory site" label="Team photo" className="col-span-2 aspect-[16/9] rounded-2xl" />
          <ImageSlot src="/images/about/old-brickfield.jpg" alt="The former brick-field at Jugia, Kushtia" label="Before: brick-field" className="aspect-square rounded-2xl" />
          <ImageSlot src="/images/about/new-blocks.jpg" alt="New eco-friendly concrete blocks" label="After: concrete blocks" className="aspect-square rounded-2xl" />
        </div>
      </Container>

      {/* Mission / vision / values */}
      <section className="bg-canvas-2">
        <Container className="grid gap-5 py-14 md:grid-cols-3 md:py-20">
          {CARDS.map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-2xl border border-line/10 bg-surface p-7">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-red text-xl text-white">
                <Icon aria-hidden />
              </span>
              <h3 className="mt-5 text-xl">{title}</h3>
              <p className="mt-2 leading-relaxed text-muted">{text}</p>
            </div>
          ))}
        </Container>
      </section>

      {/* Leadership */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-canvas-2 to-transparent" aria-hidden />
        <Container className="relative py-14 md:py-20">
          <SectionHeading eyebrow="Leadership" title="Board of Directors" intro="A family-led board combining local business experience with engineering expertise." />
          <ul className="mt-14 flex flex-wrap justify-center gap-6">
            {leadership.map((person) => (
              <li
                key={person.name}
                className="group flex w-full flex-col items-center rounded-3xl border border-line/10 bg-surface px-6 pb-7 pt-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-red/30 hover:shadow-xl hover:shadow-black/5 sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] xl:w-[calc(20%-1.2rem)]"
              >
                {/* Round photo with the logo's green → red ring */}
                <div className="rounded-full bg-gradient-to-br from-brand-green to-brand-red p-1 transition-transform duration-300 group-hover:scale-105">
                  <div className="rounded-full bg-surface p-1">
                    {person.photo ? (
                      <ImageSlot
                        src={person.photo}
                        alt={`${person.name}, ${person.role} of ${siteConfig.name}`}
                        label={person.name}
                        className="h-32 w-32 rounded-full"
                        imgClassName="object-top"
                      />
                    ) : (
                      <span className="flex h-32 w-32 items-center justify-center rounded-full bg-surface-2 text-4xl text-brand-green">
                        <FaUserTie aria-hidden />
                      </span>
                    )}
                  </div>
                </div>

                <h3 className="mt-5 text-base leading-snug">{person.name}</h3>
                <p className="mt-1.5 text-xs font-bold uppercase tracking-[0.15em] text-brand-red">{person.role}</p>
                <span className="my-4 h-px w-10 bg-line/15" aria-hidden />
                <p className="text-sm leading-relaxed text-muted">{person.text}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* At a glance + timeline */}
      <section className="border-t border-line/10 bg-canvas-2">
        <Container className="grid gap-10 py-14 md:py-20 lg:grid-cols-2">
          <div>
            <h2 className="flex items-center gap-3 font-display text-2xl font-extrabold">
              <FaBuilding className="text-brand-red" aria-hidden /> Company at a glance
            </h2>
            <dl className="mt-6 divide-y divide-line/10 overflow-hidden rounded-2xl border border-line/10 bg-surface">
              {AT_A_GLANCE.map(([k, v]) => (
                <div key={k} className="grid gap-1 px-5 py-3.5 sm:grid-cols-[10rem_1fr]">
                  <dt className="text-sm font-semibold text-subtle">{k}</dt>
                  <dd className="text-sm text-ink">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div>
            <h2 className="font-display text-2xl font-extrabold">Our journey</h2>
            <ol className="relative mt-6 space-y-6 border-l-2 border-brand-green/30 pl-6">
              {timeline.map((t) => (
                <li key={t.title} className="relative">
                  <span className="absolute -left-[33px] top-1 h-4 w-4 rounded-full border-4 border-canvas-2 bg-brand-green" aria-hidden />
                  <p className="text-xs font-bold uppercase tracking-widest text-brand-red">{t.date}</p>
                  <h3 className="mt-0.5 text-base">{t.title}</h3>
                  <p className="text-sm text-muted">{t.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </Container>
      </section>

      <CtaBanner />
    </div>
  );
}
