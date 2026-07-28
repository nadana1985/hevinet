'use client';

import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { BreadcrumbSchema } from '@/components/seo/JsonLd';
import { SlideUp } from '@/components/motion';

export default function ReturnsPage() {
  return (
    <>
      <Navigation />

      <main id="main-content" className="min-h-screen pb-20 lg:pb-0">
        <section className="pt-32 pb-16 bg-gradient-to-b from-primary-50 to-white dark:from-neutral-900 dark:to-neutral-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <BreadcrumbSchema items={[{ label: 'Home', href: '/' }, { label: 'Returns & Refunds' }]} />
            <Breadcrumbs items={[{ label: 'Returns & Refunds' }]} className="mb-8" />
            <div className="text-center">
            <SlideUp>
              <SectionHeader
                title="Returns & Refunds"
                subtitle="Last updated: July 28, 2026"
              />
            </SlideUp>
          </div>
          </div>
        </section>

        <section className="py-20 bg-white dark:bg-neutral-950">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-8">
            <div>
              <h2 className="text-xl font-bold text-neutral-900 dark:text-white mb-3">1. Return Eligibility</h2>
              <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed mb-3">
                Due to the nature of our products (food items, handcrafted goods), returns are
                accepted only in the following cases:
              </p>
              <ul className="list-disc list-inside text-neutral-600 dark:text-neutral-400 space-y-1">
                <li>Products arrived damaged or defective</li>
                <li>Wrong products were shipped</li>
                <li>Products do not match the agreed specifications</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-neutral-900 dark:text-white mb-3">2. Return Process</h2>
              <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed mb-3">To initiate a return:</p>
              <ol className="list-decimal list-inside text-neutral-600 dark:text-neutral-400 space-y-1">
                <li>Contact us within 7 days of delivery</li>
                <li>Provide your order number and photos of the issue</li>
                <li>Our team will review and respond within 48 hours</li>
                <li>If approved, we will arrange for return shipping or replacement</li>
              </ol>
            </div>

            <div>
              <h2 className="text-xl font-bold text-neutral-900 dark:text-white mb-3">3. Refund Policy</h2>
              <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                Refunds are processed within 10-14 business days after the returned items are
                received and inspected. Refunds will be issued to the original payment method.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-neutral-900 dark:text-white mb-3">4. Non-Returnable Items</h2>
              <ul className="list-disc list-inside text-neutral-600 dark:text-neutral-400 space-y-1">
                <li>Products that have been opened, used, or consumed</li>
                <li>Products without original packaging</li>
                <li>Custom or made-to-order items</li>
                <li>Products returned after the 7-day window</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-neutral-900 dark:text-white mb-3">5. Damaged Shipments</h2>
              <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                If your shipment arrives damaged, please document the damage with photos and
                contact us immediately. We will work with our logistics partners to resolve
                the issue promptly.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-neutral-900 dark:text-white mb-3">6. Contact Us</h2>
              <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                For return and refund inquiries, contact us at{' '}
                <a href="mailto:info@hevinettrading.com" className="text-primary-500 hover:underline">info@hevinettrading.com</a> or call{' '}
                <a href="tel:+919876543210" className="text-primary-500 hover:underline">+91 98765 43210</a>.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
