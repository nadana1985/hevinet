'use client';

import { use, useState } from 'react';
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
import { getProductBySlug, getRelatedProducts } from '@/data/products';
import dynamic from 'next/dynamic';

const DynamicCTASection = dynamic(() => import('@/components/sections/CTASection'));

interface PageProps {
  params: Promise<{ category: string; product: string }>;
}

export default function ProductDetailPage({ params }: PageProps) {
  const { category: categorySlug, product: productSlug } = use(params);
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

  // Related products from the same category slug
  const relatedProducts = getRelatedProducts(categorySlug, productSlug);

  // Zoom views mapping
  const viewLabels = [
    { id: 0, label: 'Main view' },
    { id: 1, label: 'Detail view' },
    { id: 2, label: 'Texture view' },
  ];
  const objectPositions = ['center', '30% 50%', '70% 50%'];

  // Prefilled WhatsApp message
  const waMessage = `Hello HeviNet Trading!\n\nI'm interested in:\n📦 Product: ${product.name}\n💰 Price: ${product.price}\n\nPlease share more details and bulk pricing. Thank you!`;
  const waLink = `https://wa.me/919876543210?text=${encodeURIComponent(waMessage)}`;

  return (
    <>
      <Navigation />

      <main id="main-content" className="min-h-screen pb-20 lg:pb-0">
        {/* Product JSON-LD */}
        <ProductSchema
          name={product.name}
          description={product.description}
          image={product.image}
          slug={`${product.categorySlug}/${product.slug}`}
          price={String(product.priceValue)}
          currency={product.currency}
        />

        {/* Hero */}
        <section className="pt-32 pb-16 bg-gradient-to-b from-primary-50 to-white dark:from-neutral-900 dark:to-neutral-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <BreadcrumbSchema
              items={[
                { label: 'Home', href: '/' },
                { label: 'Products', href: '/products' },
                { label: product.category, href: `/products?category=${product.categorySlug}` },
                { label: product.name },
              ]}
            />
            <Breadcrumbs
              items={[
                { label: 'Products', href: '/products' },
                { label: product.category, href: `/products?category=${product.categorySlug}` },
                { label: product.name },
              ]}
              className="mb-8"
            />

            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Product Image Column */}
              <SlideUp>
                <div className="flex flex-col gap-4">
                  <div
                    className={`relative aspect-square overflow-hidden rounded-2xl border border-neutral-100 dark:border-neutral-800 transition-all duration-300 ${
                      isZoomed ? 'scale-[1.02]' : ''
                    }`}
                    onMouseEnter={() => setIsZoomed(true)}
                    onMouseLeave={() => setIsZoomed(false)}
                  >
                    <OptimizedImage
                      src={product.image}
                      alt={product.name}
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover transition-all duration-300"
                      style={{ objectPosition: objectPositions[activeView] }}
                    />
                    {product.featured && (
                      <div className="absolute top-3 left-3 px-2 py-1 bg-amber-500 text-white text-xs font-semibold rounded shadow-sm">
                        ⭐ Featured
                      </div>
                    )}
                    <div className="absolute bottom-3 right-3 px-2 py-1 bg-black/60 text-white text-[10px] rounded backdrop-blur-sm">
                      🔍 Hover to Zoom
                    </div>
                  </div>

                  {/* Thumbnail Strip */}
                  <div className="flex gap-2" role="tablist" aria-label="Product images">
                    {viewLabels.map((view) => (
                      <button
                        key={view.id}
                        role="tab"
                        aria-selected={activeView === view.id}
                        aria-label={view.label}
                        onClick={() => setActiveView(view.id)}
                        className={`relative w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                          activeView === view.id
                            ? 'border-primary-500 scale-95'
                            : 'border-neutral-200 dark:border-neutral-700 hover:border-neutral-400'
                        }`}
                      >
                        <OptimizedImage
                          src={product.image}
                          alt=""
                          fill
                          sizes="64px"
                          style={{ objectPosition: objectPositions[view.id] }}
                          className="object-cover"
                        />
                      </button>
                    ))}
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 mt-2">
                    <a
                      href={waLink}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 bg-primary-500 hover:bg-primary-600 text-white font-semibold py-3 px-6 rounded-xl transition-all shadow-sm"
                    >
                      <span>💬 Inquire on WhatsApp</span>
                    </a>
                    <Link href="/contact" className="flex-1">
                      <Button variant="secondary" className="w-full py-3 rounded-xl">
                        📧 Send Email Inquiry
                      </Button>
                    </Link>
                  </div>
                </div>
              </SlideUp>

              {/* Product Info Column */}
              <SlideUp delay={0.1}>
                <div className="lg:pl-6">
                  <span className="inline-block text-xs font-semibold uppercase tracking-wider text-primary-500 mb-2">
                    {product.category}
                  </span>
                  <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-4">
                    {product.name}
                  </h1>

                  {/* Price Box */}
                  <div className="bg-neutral-50 dark:bg-neutral-900/50 p-4 rounded-xl mb-6 inline-block">
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-extrabold text-primary-600 dark:text-primary-400">
                        ₹{product.priceValue}
                      </span>
                      <span className="text-sm text-neutral-500 dark:text-neutral-400">
                        {product.unit}
                      </span>
                    </div>
                    <span className="text-xs text-emerald-500 font-medium block mt-1">
                      ✅ In Stock & Ready to Export
                    </span>
                  </div>

                  {/* Origin */}
                  <div className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400 mb-6">
                    <MapPin className="h-4 w-4 text-primary-500" />
                    <span>Origin: <strong className="text-neutral-900 dark:text-white">{product.origin}</strong></span>
                  </div>

                  {/* Description */}
                  <div className="border-t border-neutral-100 dark:border-neutral-800 pt-6 mb-6">
                    <h3 className="text-sm font-semibold text-neutral-900 dark:text-white mb-2">
                      Description
                    </h3>
                    <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                      {product.description}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="mb-6">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-2">
                      Tags
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {product.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 text-xs font-medium bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 rounded-full"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Trust Badges */}
                  <div className="grid grid-cols-3 gap-4 border-t border-neutral-100 dark:border-neutral-800 pt-6">
                    <div className="text-center p-3 bg-neutral-50/50 dark:bg-neutral-900/30 rounded-xl">
                      <div className="text-lg mb-1">🏆</div>
                      <span className="text-[10px] font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider block">
                        Quality Assured
                      </span>
                    </div>
                    <div className="text-center p-3 bg-neutral-50/50 dark:bg-neutral-900/30 rounded-xl">
                      <div className="text-lg mb-1">🚚</div>
                      <span className="text-[10px] font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider block">
                        Global Logistics
                      </span>
                    </div>
                    <div className="text-center p-3 bg-neutral-50/50 dark:bg-neutral-900/30 rounded-xl">
                      <div className="text-lg mb-1">📦</div>
                      <span className="text-[10px] font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider block">
                        Bulk Orders
                      </span>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          </div>
        </section>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="py-20 bg-white dark:bg-neutral-950 border-t border-neutral-100 dark:border-neutral-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
              <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-2">
                Related Products
              </h2>
              <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-8">
                Explore more products in this category.
              </p>
              
              <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {relatedProducts.slice(0, 3).map((rp) => (
                  <StaggerItem key={rp.slug}>
                    <Link
                      href={`/products/${rp.categorySlug}/${rp.slug}`}
                      className="group block"
                    >
                      <Card hover padding="none" className="overflow-hidden h-full border border-neutral-100 dark:border-neutral-800 flex flex-col justify-between">
                        <div>
                          {/* Image Wrapper */}
                          <div className="relative h-40 overflow-hidden bg-neutral-100 dark:bg-neutral-800">
                            <OptimizedImage
                              src={rp.image}
                              alt={rp.name}
                              fill
                              sizes="300px"
                              className="object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute top-3 right-3 px-2 py-1 text-[9px] font-bold rounded shadow-sm z-10 bg-primary-500 text-white">
                              {rp.category}
                            </div>
                          </div>

                          <div className="p-4">
                            <h3 className="text-base font-semibold text-neutral-900 dark:text-white group-hover:text-primary-500 transition-colors mb-2 line-clamp-1">
                              {rp.name}
                            </h3>
                            <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-2 line-clamp-2">
                              {rp.description}
                            </p>
                          </div>
                        </div>
                        <div className="p-4 pt-0">
                          <div className="flex items-center justify-between border-t border-neutral-100 dark:border-neutral-800 pt-3">
                            <span className="text-sm font-bold text-primary-600 dark:text-primary-400">
                              ₹{rp.priceValue}
                            </span>
                            <span className="text-xs font-semibold text-primary-500 group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                              Details <ArrowRight className="h-3 w-3" />
                            </span>
                          </div>
                        </div>
                      </Card>
                    </Link>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </section>
        )}

        <DynamicCTASection />
      </main>

      <Footer />
    </>
  );
}
