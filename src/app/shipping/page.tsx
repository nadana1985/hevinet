'use client';

import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { BreadcrumbSchema } from '@/components/seo/JsonLd';
import { Card } from '@/components/ui/Card';
import { SlideUp, StaggerContainer, StaggerItem } from '@/components/motion';
import { Globe, Truck, Package, Clock } from 'lucide-react';

const shippingMethods = [
  {
    icon: Globe,
    title: 'Sea Freight',
    description: 'Cost-effective for large bulk orders. Transit times vary by destination (15-45 days).',
  },
  {
    icon: Truck,
    title: 'Air Freight',
    description: 'Faster delivery for smaller shipments. Transit times of 3-7 business days.',
  },
  {
    icon: Package,
    title: 'Express Courier',
    description: 'Door-to-door delivery for samples and small parcels. 2-5 business days.',
  },
  {
    icon: Clock,
    title: 'Standard Processing',
    description: 'Orders are processed within 3-5 business days after confirmation.',
  },
];

export default function ShippingPage() {
  return (
    <>
      <Navigation />

      <main id="main-content" className="min-h-screen pb-20 lg:pb-0">
        <section className="pt-32 pb-16 bg-gradient-to-b from-primary-50 to-white dark:from-neutral-900 dark:to-neutral-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <BreadcrumbSchema items={[{ label: 'Home', href: '/' }, { label: 'Shipping Policy' }]} />
            <Breadcrumbs items={[{ label: 'Shipping Policy' }]} className="mb-8" />
            <div className="text-center">
            <SlideUp>
              <SectionHeader
                title="Shipping Policy"
                subtitle="Last updated: July 28, 2026"
              />
            </SlideUp>
          </div>
          </div>
        </section>

        <section className="py-20 bg-white dark:bg-neutral-950">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            {/* Shipping Methods */}
            <StaggerContainer className="grid sm:grid-cols-2 gap-6 mb-16">
              {shippingMethods.map((method) => {
                const Icon = method.icon;
                return (
                  <StaggerItem key={method.title}>
                    <Card hover padding="lg" className="h-full">
                      <div className="w-12 h-12 rounded-xl bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center mb-4">
                        <Icon className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                      </div>
                      <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-2">
                        {method.title}
                      </h3>
                      <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                        {method.description}
                      </p>
                    </Card>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>

            {/* Details */}
            <div className="space-y-8">
              <div>
                <h2 className="text-xl font-bold text-neutral-900 dark:text-white mb-3">Shipping Destinations</h2>
                <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  We ship to over 30 countries worldwide, with primary markets in Southeast Asia
                  (Singapore, Malaysia), the Middle East (UAE, Saudi Arabia), Europe (UK, Germany),
                  and North America (USA, Canada).
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-neutral-900 dark:text-white mb-3">Packaging</h2>
                <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  All products are carefully packaged to ensure safe transit. We use food-grade
                  packaging materials for edible products and protective packaging for fragile items
                  like wooden toys.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-neutral-900 dark:text-white mb-3">Customs and Duties</h2>
                <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  Import duties, taxes, and customs fees are the responsibility of the buyer.
                  We recommend checking with your local customs office for applicable charges.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-neutral-900 dark:text-white mb-3">Order Tracking</h2>
                <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  Tracking information is provided for all shipments. Contact us at{' '}
                  <a href="mailto:info@hevinettrading.com" className="text-primary-500 hover:underline">info@hevinettrading.com</a> for
                  tracking updates.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
