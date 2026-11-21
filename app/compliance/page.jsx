import { FaCheckCircle, FaHourglassHalf, FaShieldAlt, FaLeaf, FaHardHat } from 'react-icons/fa';
import { siteConfig } from '@/config/site';
import { licences, standards } from '@/data/company';
import DarkPageHeader from '@/components/ui/DarkPageHeader';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import CtaBanner from '@/components/site/CtaBanner';

export const metadata = {
  title: 'Licences & Compliance',
  description: `Registrations, licences, environmental clearance and quality standards of ${siteConfig.name}.`,
};

const COMMITMENTS = [
  {
    icon: FaLeaf,
    title: 'Environment',
    text: 'Yellow-category project with no flue gas. Dust is controlled with covered storage and water spraying, wash water is settled and reused, and noise is kept inside the production shed.',
  },
  {
    icon: FaHardHat,
    title: 'Workplace safety',
    text: 'Fire licence in place, fire-fighting equipment on site, protective gear for every worker and a safe, healthy workplace as required by the Paurashava NOC.',
  },
  {
    icon: FaShieldAlt,
    title: 'Quality assurance',
    text: 'Batch testing for compressive strength, dimensions and water absorption in our own lab, with every block stamped with its HBRI grade.',
  },
];

export default function CompliancePage() {
  return (
    <div className="bg-canvas">
      <DarkPageHeader
        title="Licences &"
        accent="Compliance"
        subtitle={`${siteConfig.name} is a registered private limited company (RJSC ${siteConfig.registration.rjsc}) with all location approvals for its Jugia factory.`}
        breadcrumbs={[{ label: 'Compliance' }]}
      />

      <Container className="py-14 md:py-20">
        <SectionHeading eyebrow="Registrations" title="Licences, clearances and certificates" />
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {licences.map((l) => {
            const ok = l.status === 'Obtained';
            return (
              <div key={l.title} className="flex gap-4 rounded-2xl border border-line/10 bg-surface p-5">
                <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-lg ${ok ? 'bg-brand-green/10 text-brand-green dark:text-green-400' : 'bg-amber-500/10 text-amber-600'}`}>
                  {ok ? <FaCheckCircle aria-hidden /> : <FaHourglassHalf aria-hidden />}
                </span>
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-base">{l.title}</h3>
                    <span className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${ok ? 'bg-brand-green/10 text-brand-green dark:text-green-400' : 'bg-amber-500/10 text-amber-700 dark:text-amber-400'}`}>
                      {l.status}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-muted">{l.authority}</p>
                  <p className="mt-0.5 break-words text-xs text-subtle">{l.ref}</p>
                </div>
              </div>
            );
          })}
        </div>
        <p className="mt-6 text-sm text-subtle">Copies of documents are available to customers, banks and tender authorities on request.</p>
      </Container>

      <section className="bg-canvas-2">
        <Container className="py-14 md:py-20">
          <SectionHeading eyebrow="Our commitments" title="Environment, safety and quality" />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {COMMITMENTS.map(({ icon: Icon, title, text }) => (
              <div key={title} className="rounded-2xl border border-line/10 bg-surface p-7">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-red text-xl text-white">
                  <Icon aria-hidden />
                </span>
                <h3 className="mt-5 text-xl">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{text}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-2xl border border-line/10 bg-surface p-6">
            <h3 className="text-lg">Product standards</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {standards.map((s) => (
                <span key={s} className="rounded-full border border-line/10 bg-canvas-2 px-3.5 py-1.5 text-sm text-ink">{s}</span>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <CtaBanner title="Supplying a government tender?" text="Our graded, stamped blocks help you meet the block-use requirement in LGED, PWD and other specifications." />
    </div>
  );
}
