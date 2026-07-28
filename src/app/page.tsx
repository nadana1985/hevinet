'use client';

import { useState, useEffect } from 'react';
import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import dynamic from 'next/dynamic';
import { Hero } from '@/components/sections/Hero';
import { TrustBar } from '@/components/sections/TrustBar';
import { ValueProps } from '@/components/sections/ValueProps';
import { FeaturedProducts } from '@/components/sections/FeaturedProducts';

import { SearchModal } from '@/components/search/SearchModal';

// Dynamically import below-the-fold sections for code splitting
const DynamicTestimonials = dynamic(() => import('@/components/sections/Testimonials'));
const DynamicStatsCounter = dynamic(() => import('@/components/sections/StatsCounter'));
const DynamicCertifications = dynamic(() => import('@/components/sections/Certifications'));
const DynamicOurProcess = dynamic(() => import('@/components/sections/OurProcess'));
const DynamicCTASection = dynamic(() => import('@/components/sections/CTASection'));

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
        <Hero />
        <TrustBar />
        <DynamicCertifications />
        <ValueProps />
        <DynamicOurProcess />
        <FeaturedProducts />
        <DynamicTestimonials />
        <DynamicStatsCounter />
        <DynamicCTASection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Search Modal */}
      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
