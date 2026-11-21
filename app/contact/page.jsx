import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaClock, FaFacebookF } from 'react-icons/fa';
import { siteConfig } from '@/config/site';
import DarkPageHeader from '@/components/ui/DarkPageHeader';
import Container from '@/components/ui/Container';
import ContactForm from '@/components/forms/ContactForm';

export const metadata = {
  title: 'Contact Us',
  description: `Get a price quotation or ask a question — contact ${siteConfig.name} in Kushtia or Dhaka.`,
};

function InfoCard({ icon: Icon, title, children }) {
  return (
    <div className="flex items-start gap-4 rounded-2xl border border-line/10 bg-surface p-5">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-red/10 text-brand-red">
        <Icon aria-hidden />
      </span>
      <div className="min-w-0">
        <p className="text-sm font-semibold text-ink">{title}</p>
        <div className="mt-1 text-sm text-muted">{children}</div>
      </div>
    </div>
  );
}

// Next 16: searchParams is a Promise. ?subject=… pre-fills the form (used by "Get a Quote" buttons).
export default async function ContactPage({ searchParams }) {
  const params = (await searchParams) || {};
  const subject = typeof params.subject === 'string' ? params.subject.slice(0, 200) : '';
  const { contact, offices, social } = siteConfig;

  return (
    <div className="bg-canvas">
      <DarkPageHeader
        title="Contact"
        accent="Us"
        subtitle="Price quotations, dealership, government tenders or site visits — we are happy to help."
        breadcrumbs={[{ label: 'Contact' }]}
      />

      <Container className="grid gap-8 py-12 md:py-16 lg:grid-cols-[1fr_1.4fr]">
        <div className="space-y-4">
          {contact.phones?.length > 0 && (
            <InfoCard icon={FaPhoneAlt} title="Phone">
              <div className="flex flex-col gap-1">
                {contact.phones.map((phone) => (
                  <a key={phone} href={`tel:${phone.replace(/[^\d+]/g, '')}`} className="hover:text-brand-red">{phone}</a>
                ))}
              </div>
            </InfoCard>
          )}
          {contact.email && (
            <InfoCard icon={FaEnvelope} title="Email">
              <a href={`mailto:${contact.email}`} className="break-all hover:text-brand-red">{contact.email}</a>
            </InfoCard>
          )}
          {contact.hours && <InfoCard icon={FaClock} title="Office hours">{contact.hours}</InfoCard>}
          {social.facebook && (
            <InfoCard icon={FaFacebookF} title="Facebook">
              <a href={social.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-brand-red">Message us on our Facebook page</a>
            </InfoCard>
          )}
          {offices.map((office) => (
            <InfoCard key={office.key} icon={FaMapMarkerAlt} title={office.title}>
              {office.lines.map((line) => (
                <span key={line} className="block">{line}</span>
              ))}
              {office.key === 'factory' && contact.mapUrl && (
                <a href={contact.mapUrl} target="_blank" rel="noopener noreferrer" className="mt-1 inline-block font-semibold text-brand-red hover:underline">Open in Maps</a>
              )}
            </InfoCard>
          ))}
        </div>

        <div className="space-y-6">
          <div className="rounded-2xl border border-line/10 bg-surface p-6 md:p-8">
            <h2 className="font-display text-xl font-bold text-ink">Request a quotation</h2>
            <p className="mt-1 text-sm text-muted">Tell us the product, quantity and delivery location. We usually reply within one working day.</p>
            <div className="mt-6">
              <ContactForm defaultSubject={subject} />
            </div>
          </div>
          {contact.mapEmbed && (
            <div className="overflow-hidden rounded-2xl border border-line/10">
              <iframe title="Factory map" src={contact.mapEmbed} className="h-72 w-full" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
          )}
        </div>
      </Container>
    </div>
  );
}
