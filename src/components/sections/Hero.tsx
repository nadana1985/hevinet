'use client';

import Link from 'next/link';
import { ArrowRight, Shield, Globe, CheckCircle, Star } from 'lucide-react';
import { Button } from '@/components/ui/Button';

/**
 * Hero section with headline, CTAs, trust badges, and gradient background.
 *
 * @example
 * <Hero />
 */
export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-orange-50 dark:from-neutral-950 dark:via-neutral-900 dark:to-neutral-800" />

      {/* Decorative blobs */}
      <div
        className="absolute top-20 right-0 w-[500px] h-[500px] bg-primary-200/30 dark:bg-primary-500/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-32 left-0 w-[600px] h-[600px] bg-orange-200/20 dark:bg-orange-500/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-20 md:py-32 lg:py-40">
        <div className="max-w-3xl">
          {/* Trust badge pill */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium mb-8">
            <Star className="h-4 w-4" />
            Trusted Export Partner
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-neutral-900 dark:text-white leading-[1.05] tracking-tight">
            Connecting Indian{' '}
            <span className="text-primary-500">Quality</span>{' '}
            to Global Markets
          </h1>

          {/* Subheadline */}
          <p className="mt-6 text-lg sm:text-xl text-neutral-600 dark:text-neutral-300 max-w-2xl leading-relaxed">
            Premium Indian products including spices, rice, tea, coffee, and traditional goods.
            Serving markets across Singapore, Malaysia, and the Middle East with authentic,
            quality-sourced exports.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link href="/products">
              <Button
                size="lg"
                rightIcon={<ArrowRight className="h-5 w-5" />}
              >
                Explore Products
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="secondary" size="lg">
                Get Free Quote
              </Button>
            </Link>
          </div>

          {/* Trust Badges */}
          <div className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-neutral-500 dark:text-neutral-400">
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle className="h-4 w-4 text-primary-500 shrink-0" />
              Premium Quality
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Globe className="h-4 w-4 text-primary-500 shrink-0" />
              Global Delivery
            </span>
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle className="h-4 w-4 text-primary-500 shrink-0" />
              Authentic Sourcing
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Shield className="h-4 w-4 text-primary-500 shrink-0" />
              24/7 Support
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
