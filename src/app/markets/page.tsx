'use client';

import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { BreadcrumbSchema } from '@/components/seo/JsonLd';
import { SlideUp, StaggerContainer, StaggerItem } from '@/components/motion';
import { Globe, MapPin, Truck, Shield } from 'lucide-react';
import dynamic from 'next/dynamic';

const DynamicCTASection = dynamic(() => import('@/components/sections/CTASection'));

interface Market {
  region: string;
  description: string;
  products: string[];
  highlights: string[];
}

const markets: Market[] = [
  {
    region: 'Southeast Asia',
    description:
      'Strong demand for authentic Indian spices and traditional food products across Singapore, Malaysia, and Thailand.',
    products: ['Spices', 'Rice & Pulses', 'Tea & Coffee'],
    highlights: [
      'Singapore — Major spice trading hub',
      'Malaysia — Growing demand for Indian food products',
      'Thailand — Premium rice and spice imports',
    ],
  },
  {
    region: 'Middle East',
    description:
      'A key market for premium Indian agricultural products, with strong relationships across UAE, Saudi Arabia, and Oman.',
    products: ['Spices', 'Rice', 'Traditional Foods'],
    highlights: [
      'UAE — Largest re-export hub for Indian products',
      'Saudi Arabia — Premium Basmati rice demand',
      'Oman — Growing food import market',
    ],
  },
  {
    region: 'Europe',
    description:
      'Increasing demand for organic and authentic Indian products in the UK, Germany, and across the EU.',
    products: ['Spices', 'Tea', 'Handcrafted Items'],
    highlights: [
      'United Kingdom — Largest Indian diaspora market',
      'Germany — Growing organic product demand',
      'EU Countries — Certified organic spice imports',
    ],
  },
  {
    region: 'North America',
    description:
      'Expanding market for Indian spices, teas, and specialty food products across the United States and Canada.',
    products: ['Spices', 'Tea & Coffee', 'Specialty Foods'],
    highlights: [
      'United States — Largest overseas Indian food market',
      'Canada — Growing South Asian community',
    ],
  },
];

const stats = [
  { icon: Globe, value: '30+', label: 'Countries Served' },
  { icon: Truck, value: '500+', label: 'Global Clients' },
  { icon: MapPin, value: '10+', label: 'Target Regions' },
  { icon: Shield, value: '99%', label: 'Quality Rate' },
];

export default function MarketsPage() {
  return (
    <>
      <Navigation />

      <main id="main-content" className="min-h-screen pb-20 lg:pb-0">
        {/* Hero */}
        <section className="pt-32 pb-16 bg-gradient-to-b from-primary-50 to-white dark:from-neutral-900 dark:to-neutral-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <BreadcrumbSchema items={[{ label: 'Home', href: '/' }, { label: 'Markets' }]} />
            <Breadcrumbs items={[{ label: 'Markets' }]} className="mb-8" />
            <div className="text-center">
            <SlideUp>
              <SectionHeader
                title="Our Global Markets"
                subtitle="Connecting Indian quality to global markets. We serve businesses across 30+ countries with premium products sourced directly from Indian origins."
              />
            </SlideUp>
          </div>

            {/* Stats */}
            <StaggerContainer className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat) => (
                <StaggerItem key={stat.label}>
                  <div className="flex flex-col items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center">
                      <stat.icon className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                    </div>
                    <div className="text-3xl font-bold text-neutral-900 dark:text-white">
                      {stat.value}
                    </div>
                    <div className="text-sm text-neutral-500 dark:text-neutral-400">
                      {stat.label}
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Markets Grid */}
        <section className="py-20 bg-white dark:bg-neutral-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <StaggerContainer className="grid md:grid-cols-2 gap-8">
              {markets.map((market) => (
                <StaggerItem key={market.region}>
                  <div className="bg-neutral-50 dark:bg-neutral-900 rounded-2xl p-8 border border-neutral-100 dark:border-neutral-800 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                    <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-3">
                      {market.region}
                    </h3>
                    <p className="text-neutral-600 dark:text-neutral-400 mb-6 leading-relaxed">
                      {market.description}
                    </p>

                    {/* Products */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider mb-3">
                        Key Products
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {market.products.map((product) => (
                          <span
                            key={product}
                            className="px-3 py-1 text-sm bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full"
                          >
                            {product}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Highlights */}
                    <div>
                      <h4 className="text-sm font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider mb-3">
                        Highlights
                      </h4>
                      <ul className="space-y-2">
                        {market.highlights.map((highlight) => (
                          <li
                            key={highlight}
                            className="flex items-start gap-2 text-sm text-neutral-600 dark:text-neutral-400"
                          >
                            <MapPin className="h-4 w-4 text-primary-500 mt-0.5 shrink-0" />
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        <DynamicCTASection />
      </main>

      <Footer />
    </>
  );
}
