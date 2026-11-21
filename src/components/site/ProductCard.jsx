import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import ImageSlot from '@/components/ui/ImageSlot';

// Product teaser card (home page grid)
export default function ProductCard({ product }) {
  return (
    <Link
      href={`/products#${product.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-line/10 bg-surface transition-all hover:-translate-y-1 hover:border-brand-red/40 hover:shadow-xl hover:shadow-black/5"
    >
      <ImageSlot src={product.image} alt={product.name} label={product.name} className="aspect-[4/3]" imgClassName="transition-transform duration-500 group-hover:scale-105" />
      <div className="flex flex-1 flex-col p-5">
        <p className="font-bangla text-sm font-semibold text-brand-green dark:text-green-400">{product.nameBn}</p>
        <h3 className="mt-1 font-display text-lg">{product.name}</h3>
        <p className="mt-1 text-sm text-subtle">{product.size}</p>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{product.summary}</p>
        <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-red">
          View specification <FaArrowRight aria-hidden className="transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}
