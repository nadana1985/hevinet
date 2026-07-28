'use client';

import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { BreadcrumbSchema } from '@/components/seo/JsonLd';
import { SlideUp } from '@/components/motion';

export default function TermsPage() {
  return (
    <>
      <Navigation />

      <main id="main-content" className="min-h-screen pb-20 lg:pb-0">
        <section className="pt-32 pb-16 bg-gradient-to-b from-primary-50 to-white dark:from-neutral-900 dark:to-neutral-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <BreadcrumbSchema items={[{ label: 'Home', href: '/' }, { label: 'Terms of Service' }]} />
            <Breadcrumbs items={[{ label: 'Terms of Service' }]} className="mb-8" />
            <div className="text-center">
            <SlideUp>
              <SectionHeader
                title="Terms of Service"
                subtitle="Last updated: July 28, 2026"
              />
            </SlideUp>
          </div>
          </div>
        </section>

        <section className="py-20 bg-white dark:bg-neutral-950">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-8">
            <div>
              <h2 className="text-xl font-bold text-neutral-900 dark:text-white mb-3">1. Acceptance of Terms</h2>
              <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                By accessing and using the HeviNet Trading website and services, you accept
                and agree to be bound by these Terms of Service.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-neutral-900 dark:text-white mb-3">2. Products and Services</h2>
              <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                All product descriptions, images, and specifications are provided for general
                information purposes. We reserve the right to modify products and pricing
                without prior notice.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-neutral-900 dark:text-white mb-3">3. Orders and Payment</h2>
              <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                Orders are subject to acceptance and availability. We reserve the right to
                refuse or cancel any order for any reason. Payment terms will be agreed upon
                on a per-order basis.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-neutral-900 dark:text-white mb-3">4. Shipping and Delivery</h2>
              <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                Shipping times and costs vary depending on the destination and product.
                Please refer to our{' '}
                <a href="/shipping" className="text-primary-500 hover:underline">Shipping Policy</a> for detailed information.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-neutral-900 dark:text-white mb-3">5. Returns and Refunds</h2>
              <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                Our return and refund policies are outlined in our{' '}
                <a href="/returns" className="text-primary-500 hover:underline">Returns &amp; Refunds Policy</a>.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-neutral-900 dark:text-white mb-3">6. Intellectual Property</h2>
              <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                All content on this website, including text, graphics, logos, and images,
                is the property of HeviNet Trading and is protected by applicable intellectual
                property laws.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-neutral-900 dark:text-white mb-3">7. Limitation of Liability</h2>
              <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                HeviNet Trading shall not be liable for any indirect, incidental, special,
                or consequential damages arising from the use of our products or services.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-neutral-900 dark:text-white mb-3">8. Governing Law</h2>
              <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                These terms are governed by and construed in accordance with the laws of India.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-neutral-900 dark:text-white mb-3">9. Contact</h2>
              <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                For questions about these Terms, contact us at{' '}
                <a href="mailto:info@hevinettrading.com" className="text-primary-500 hover:underline">info@hevinettrading.com</a>.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
