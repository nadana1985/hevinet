import { Suspense } from 'react';
import { products } from '@/data/products';
import { ProductDetailClient } from '@/components/products/ProductDetailClient';

interface PageProps {
  params: Promise<{ category: string; product: string }>;
}

export function generateStaticParams() {
  return products.map((p) => ({
    category: p.categorySlug,
    product: p.slug,
  }));
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { category, product } = await params;

  return (
    <Suspense fallback={<div className="min-h-screen bg-neutral-950 animate-pulse" />}>
      <ProductDetailClient categorySlug={category} productSlug={product} />
    </Suspense>
  );
}
