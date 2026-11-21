import { FaPhoneAlt } from 'react-icons/fa';
import { siteConfig } from '@/config/site';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import ImageSlot from '@/components/ui/ImageSlot';

// Full-width call to action with a background photo (used at the bottom of most pages)
export default function CtaBanner({
  title = 'Ready to build stronger, greener?',
  text = 'Tell us your project, quantity and delivery location — we will send you a price quotation.',
}) {
  const phone = siteConfig.contact.phones?.[0];
  return (
    <section className="relative isolate overflow-hidden">
      <ImageSlot src="/images/cta-construction.jpg" alt="" label="CTA background" className="absolute inset-0 -z-10 h-full w-full" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#2a0708]/95 via-[#5a1214]/85 to-brand-brick/40" aria-hidden />
      <Container className="flex flex-col items-start gap-6 py-16 md:flex-row md:items-center md:justify-between md:py-20">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl font-extrabold text-white md:text-4xl">{title}</h2>
          <p className="mt-3 text-lg text-white/80">{text}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button href="/contact?subject=Price%20quotation" variant="white" size="lg">
            Request a Quote
          </Button>
          {phone && (
            <Button href={`tel:${phone.replace(/[^\d+]/g, '')}`} variant="light" size="lg">
              <FaPhoneAlt aria-hidden /> {phone}
            </Button>
          )}
        </div>
      </Container>
    </section>
  );
}
