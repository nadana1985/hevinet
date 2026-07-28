'use client';

import { Button } from '@/components/ui/Button';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { ArrowRight } from 'lucide-react';
import { SlideUp } from '@/components/motion';

/**
 * Call-to-action section with gradient background, headline, and email capture.
 *
 * @example
 * <CTASection />
 */
export function CTASection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-primary-600 via-primary-500 to-orange-500 dark:from-primary-700 dark:via-primary-600 dark:to-primary-500">
      {/* Decorative circles */}
      <div
        className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-24">
        <div className="max-w-2xl mx-auto text-center">
          <SlideUp>            <SectionHeader
              title="Ready to Partner with Us?"
              subtitle="Connect with us for premium Indian products. From kids toys to authentic spices, we source directly from origin and deliver worldwide. Get a free quote within 24 hours."
            />

          <div className="mt-10">
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <label htmlFor="cta-email" className="sr-only">
                Email address
              </label>
              <input
                id="cta-email"
                type="email"
                required
                placeholder="Enter your work email"
                className="flex-1 px-5 py-3.5 rounded-xl bg-white/95 dark:bg-neutral-900/95 text-neutral-900 dark:text-white placeholder:text-neutral-400 border-0 outline-none focus:ring-2 focus:ring-white/50 text-base"
              />
              <Button
                type="submit"
                variant="primary"
                size="md"
                className="bg-white text-primary-600 hover:bg-neutral-100 hover:text-primary-700 shadow-lg shrink-0"
              >
                Get Free Quote
                <ArrowRight className="h-5 w-5" />
              </Button>
            </form>
            <p className="mt-4 text-sm text-white/70">
              No spam. Unsubscribe anytime. View our{' '}
              <a
                href="/privacy"
                className="text-white underline hover:text-white/90"
              >
                Privacy Policy
              </a>
              .
            </p>
          </div>
          </SlideUp>
        </div>
      </div>
    </section>
  );
}

export default CTASection;
