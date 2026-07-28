'use client';

import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { BreadcrumbSchema } from '@/components/seo/JsonLd';
import { SlideUp } from '@/components/motion';

export default function PrivacyPage() {
  return (
    <>
      <Navigation />

      <main id="main-content" className="min-h-screen pb-20 lg:pb-0">
        <section className="pt-32 pb-16 bg-gradient-to-b from-primary-50 to-white dark:from-neutral-900 dark:to-neutral-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <BreadcrumbSchema items={[{ label: 'Home', href: '/' }, { label: 'Privacy Policy' }]} />
            <Breadcrumbs items={[{ label: 'Privacy Policy' }]} className="mb-8" />
            <div className="text-center">
            <SlideUp>
              <SectionHeader
                title="Privacy Policy"
                subtitle="Last updated: July 28, 2026"
              />
            </SlideUp>
          </div>
          </div>
        </section>

        <section className="py-20 bg-white dark:bg-neutral-950">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-8">
            <div>
              <h2 className="text-xl font-bold text-neutral-900 dark:text-white mb-3">1. Information We Collect</h2>
              <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                We collect information you provide directly, such as when you fill out a contact form,
                request a quote, or communicate with us. This may include your name, email address,
                phone number, company name, and message.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-neutral-900 dark:text-white mb-3">2. How We Use Your Information</h2>
              <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed mb-3">We use the information we collect to:</p>
              <ul className="list-disc list-inside text-neutral-600 dark:text-neutral-400 space-y-1">
                <li>Respond to your inquiries and provide customer support</li>
                <li>Process orders and deliver products</li>
                <li>Send you marketing communications (with your consent)</li>
                <li>Improve our products and services</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-neutral-900 dark:text-white mb-3">3. Information Sharing</h2>
              <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                We do not sell or rent your personal information to third parties. We may share
                your information with trusted service providers who assist us in operating our
                website and conducting our business.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-neutral-900 dark:text-white mb-3">4. Data Security</h2>
              <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                We implement appropriate security measures to protect your personal information
                against unauthorized access, alteration, disclosure, or destruction.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-neutral-900 dark:text-white mb-3">5. Cookies</h2>
              <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                Our website uses cookies to enhance your browsing experience. You can choose to
                disable cookies through your browser settings.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-neutral-900 dark:text-white mb-3">6. Your Rights</h2>
              <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                You have the right to access, correct, or delete your personal information.
                To exercise these rights, please contact us at{' '}
                <a href="mailto:info@hevinettrading.com" className="text-primary-500 hover:underline">info@hevinettrading.com</a>.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-neutral-900 dark:text-white mb-3">7. Contact Us</h2>
              <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                If you have any questions about this Privacy Policy, please contact us at{' '}
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
