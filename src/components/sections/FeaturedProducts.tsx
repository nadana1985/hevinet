'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Card } from '@/components/ui/Card';
import { OptimizedImage } from '@/components/ui/OptimizedImage';
import { StaggerContainer, StaggerItem } from '@/components/motion';

interface Product {
  name: string;
  category: string;
  origin: string;
  price: string;
  description: string;
  href: string;
  image: string;
}

const products: Product[] = [
  {
    name: 'Premium Turmeric Powder',
    category: 'Spices',
    origin: 'Erode, Tamil Nadu',
    price: '₹120 / 500g',
    description: 'High-curcumin turmeric powder from the turmeric capital of India.',
    href: '/products/spices/turmeric',
    image: '/products/turmeric_powder.png',
  },
  {
    name: 'Kashmiri Red Chili Powder',
    category: 'Spices',
    origin: 'Kashmir Valley',
    price: '₹180 / 500g',
    description: 'Vibrant red chili powder with rich color and mild heat from Kashmir.',
    href: '/products/spices/red-chili',
    image: '/products/red_chili_powder.png',
  },
  {
    name: 'Spices Mixed Collection',
    category: 'Spices',
    origin: 'Pan India',
    price: '₹499 / set',
    description: 'A curated set of essential Indian spices from across the country.',
    href: '/products/spices/mixed-collection',
    image: '/products/spices_collection.png',
  },
  {
    name: 'Aged Basmati Rice',
    category: 'Food Products',
    origin: 'Karnal, Haryana',
    price: '₹380 / 5kg',
    description: 'Premium aged long-grain basmati with exceptional aroma and taste.',
    href: '/products/food/basmati',
    image: '/products/basmati_rice.png',
  },
  {
    name: 'Pure Cow Ghee (A2 Bilona)',
    category: 'Food Products',
    origin: 'Saurashtra, Gujarat',
    price: '₹850 / 500ml',
    description: 'Traditional bilona-churned A2 cow ghee from the heart of Gujarat.',
    href: '/products/food/a2-bilona',
    image: '/products/pure_ghee.png',
  },
  {
    name: 'Handcrafted Wooden Toys Set',
    category: 'Kids Toys',
    origin: 'Channapatna, Karnataka',
    price: '₹599 / set',
    description: 'Eco-friendly handmade wooden toys from India&apos;s toy-making heritage.',
    href: '/products/toys/wooden-set',
    image: '/products/wooden_toys_set.png',
  },
];

/**
 * Featured products grid with image placeholders and hover effects.
 *
 * @example
 * <FeaturedProducts />
 */
export function FeaturedProducts() {
  return (
    <section className="py-24 bg-neutral-50 dark:bg-neutral-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeader
          title="Featured Products"
          subtitle="Explore our premium selection of Indian products, sourced directly from origin farms and trusted by buyers worldwide."
        />

        <StaggerContainer className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <StaggerItem key={product.name}>
            <Link href={product.href} className="group block">
              <Card hover padding="none" className="overflow-hidden">
                {/* Product Image */}
                <div className="relative h-56 overflow-hidden">
                  <OptimizedImage
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="p-5">
                  <div className="flex items-center justify-between mb-2">
                    <span className="inline-block text-xs font-semibold uppercase tracking-wider text-primary-500">
                      {product.category}
                    </span>
                    <span className="text-sm font-bold text-neutral-900 dark:text-neutral-100">
                      {product.price}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 group-hover:text-primary-500 transition-colors">
                    {product.name}
                  </h3>
                  <p className="mt-1 text-xs text-neutral-400 dark:text-neutral-500">
                    {product.origin}
                  </p>
                  <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400 line-clamp-2">
                    {product.description}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary-500 group-hover:gap-2 transition-all">
                    View Details
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Card>
            </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* View All CTA */}
        <div className="mt-12 text-center">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-primary-500 font-semibold hover:text-primary-600 transition-colors"
          >
            View All Products
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default FeaturedProducts;
