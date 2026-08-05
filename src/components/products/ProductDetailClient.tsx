'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { BreadcrumbSchema, ProductSchema } from '@/components/seo/JsonLd';
import { OptimizedImage } from '@/components/ui/OptimizedImage';
import { SlideUp, StaggerContainer, StaggerItem } from '@/components/motion';
import { MapPin, ArrowRight } from 'lucide-react';
import { ProductData, getProductBySlug, getRelatedProducts } from '@/data/products';
import dynamic from 'next/dynamic';

const DynamicCTASection = dynamic(() => import('@/components/sections/CTASection'));

interface ProductDetailClientProps {
  categorySlug: string;
  productSlug: string;
}

export function ProductDetailClient({ categorySlug, productSlug }: ProductDetailClientProps) {
  const [activeView, setActiveView] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  const product = getProductBySlug(categorySlug, productSlug);

  if (!product) {
    return (
      <>
        <Navigation />
        <main id="main-content" className="min-h-screen flex items-center justify-center pb-20 lg:pb-0">
          <div className="text-center px-4">
            <h1 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">
              Product Not Found
            </h1>
            <p className="text-neutral-600 dark:text-neutral-400 mb-6">
              The product you&apos;re looking for doesn&apos;t exist.
            </p>
            <Link href="/products">
              <Button variant="primary">Back to Products</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const relatedProducts = getRelatedProducts(product.categorySlug, product.id);
  const gallery = [product.image];

  return (
    <>
      <BreadcrumbSchema
        items={[
          { label: 'Home', href: '/' },
          { label: 'Products', href: '/products' },
          { label: product.category, href: `/products?category=${product.categorySlug}` },
          { label: product.name, href: `/products/${product.categorySlug}/${product.slug}` },
        ]}
      />
      <ProductSchema
        name={product.name}
        description={product.description}
        image={product.image}
        slug={product.slug}
        price={product.price}
        category={product.category}
        availability={product.inStock ? 'InStock' : 'OutOfStock'}
      />

      <Navigation />

      <main id="main-content" className="pb-20 lg:pb-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
          <Breadcrumbs
            items={[
              { label: 'Products', href: '/products' },
              { label: product.category, href: `/products?category=${product.categorySlug}` },
              { label: product.name },
            ]}
          />
        </div>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div
                className="relative aspect-square rounded-2xl overflow-hidden bg-neutral-100 dark:bg-neutral-800 cursor-zoom-in"
                onClick={() => setIsZoomed(!isZoomed)}
              >
                <OptimizedImage
                  src={gallery[activeView] || product.image}
                  alt={product.name}
                  fill
                  className={`object-cover transition-transform duration-500 ${
                    isZoomed ? 'scale-150' : 'scale-100'
                  }`}
                  priority
                />
              </div>
            </div>

            <SlideUp>
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-950/50 px-3 py-1 rounded-full">
                  {product.category}
                </span>

                <h1 className="text-3xl font-bold text-neutral-900 dark:text-white mt-3 mb-2">
                  {product.name}
                </h1>

                <div className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400 mb-4">
                  <MapPin className="h-4 w-4 text-primary-500" />
                  <span>Origin: {product.origin}</span>
                </div>

                <div className="text-2xl font-bold text-primary-600 dark:text-primary-400 mb-6">
                  {product.price}
                </div>

                <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed mb-6">
                  {product.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {product.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <Link href={`/contact?product=${encodeURIComponent(product.name)}`}>
                    <Button variant="primary" size="lg">
                      Request Bulk Quote
                    </Button>
                  </Link>
                </div>
              </div>
            </SlideUp>
          </div>
        </section>

        {relatedProducts.length > 0 && (
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-neutral-200 dark:border-neutral-800">
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-8">
              Related Products
            </h2>
            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProducts.map((rp) => (
                <StaggerItem key={rp.id}>
                  <Link href={`/products/${rp.categorySlug}/${rp.slug}`}>
                    <Card hover padding="none" className="h-full flex flex-col overflow-hidden group">
                      <div className="relative aspect-square overflow-hidden bg-neutral-100 dark:bg-neutral-800">
                        <OptimizedImage
                          src={rp.image}
                          alt={rp.name}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="text-base font-semibold text-neutral-900 dark:text-white group-hover:text-primary-500 transition-colors mb-2 line-clamp-1">
                          {rp.name}
                        </h3>
                        <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-2 line-clamp-2">
                          {rp.description}
                        </p>
                      </div>
                    </Card>
                  </Link>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </section>
        )}

        <DynamicCTASection />
      </main>

      <Footer />
    </>
  );
}
export default ProductDetailClient;
