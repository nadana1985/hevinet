'use client';

import { useState, useEffect, Suspense } from 'react';
import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import dynamic from 'next/dynamic';
import { ScrollWorldHero } from '@/components/scroll-world/ScrollWorldHero';
import { Hero } from '@/components/sections/Hero';
import { TrustBar } from '@/components/sections/TrustBar';
import { ValueProps } from '@/components/sections/ValueProps';
import { FeaturedProducts } from '@/components/sections/FeaturedProducts';

import { CommandBar } from '@/components/search/CommandBar';

// Dynamically import below-the-fold sections for code splitting
const DynamicTestimonials = dynamic(() => import('@/components/sections/Testimonials'));
const DynamicStatsCounter = dynamic(() => import('@/components/sections/StatsCounter'));
const DynamicCertifications = dynamic(() => import('@/components/sections/Certifications'));
const DynamicOurProcess = dynamic(() => import('@/components/sections/OurProcess'));
const DynamicCTASection = dynamic(() => import('@/components/sections/CTASection'));
const DynamicAIPlayground = dynamic(() => import('@/components/sections/AIPlayground'));

/**
 * Homepage composing all sections with navigation, search modal, and footer.
 */
export default function Home() {
  const [searchOpen, setSearchOpen] = useState(false);

  // Global keyboard shortcut: Cmd+K / Ctrl+K to open search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setSearchOpen(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <>
      {/* Navigation */}
      <Navigation onSearchOpen={() => setSearchOpen(true)} />

      {/* Main Content */}
      <main id="main-content" className="pb-20 lg:pb-0">
        {/* 3D Isometric Continuous Scroll-World Hero */}
        <ScrollWorldHero />
        <TrustBar />
        
        <Suspense fallback={<div className="h-24 bg-neutral-50 dark:bg-neutral-900 animate-pulse" />}>
          <DynamicCertifications />
        </Suspense>

        <ValueProps />

        <Suspense fallback={<div className="h-48 bg-neutral-50 dark:bg-neutral-900 animate-pulse" />}>
          <DynamicOurProcess />
        </Suspense>

        <FeaturedProducts />

        <Suspense fallback={<div className="h-64 bg-neutral-50 dark:bg-neutral-900 animate-pulse" />}>
          <DynamicTestimonials />
        </Suspense>

        <Suspense fallback={<div className="h-32 bg-neutral-50 dark:bg-neutral-900 animate-pulse" />}>
          <DynamicStatsCounter />
        </Suspense>

        <Suspense fallback={<div className="h-[480px] bg-neutral-50 dark:bg-neutral-900 animate-pulse" />}>
          <DynamicAIPlayground />
        </Suspense>

        <Suspense fallback={<div className="h-48 bg-neutral-50 dark:bg-neutral-900 animate-pulse" />}>
          <DynamicCTASection />
        </Suspense>
      </main>

      {/* Footer */}
      <Footer />

      {/* Command Bar search overlay */}
      <Suspense fallback={null}>
        <CommandBar isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
      </Suspense>
    </>
  );
}
