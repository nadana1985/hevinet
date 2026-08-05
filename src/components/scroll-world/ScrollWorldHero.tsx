'use client';

import React, { useEffect, useRef } from 'react';

/**
 * Hevinet 3D Scroll-World Landing Component.
 * Features regional sub-stops for Chapter 01 (Kashmir -> Kerala -> Punjab -> Karnataka)
 * cleanly mapped to the 6 core chapters (01/06 -> 06/06).
 */
export function ScrollWorldHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mountedRef = useRef<boolean>(false);

  useEffect(() => {
    if (!containerRef.current || mountedRef.current) return;
    mountedRef.current = true;

    const initScrollWorld = () => {
      if (typeof window === 'undefined' || !(window as any).mountScrollWorld) return;

      (window as any).mountScrollWorld(containerRef.current, {
        hint: 'scroll to explore regional origins',
        diveScroll: 1.3,
        connScroll: 0.7,
        nav: false,
        atmosphere: true,
        sections: [
          // --- CHAPTER 01: REGIONAL ORIGIN SUB-STOPS (01 / 06) ---
          {
            id: 'kashmir',
            label: 'Kashmir Saffron',
            step: '01 / 06',
            still: '/assets/scenes/kashmir_saffron.png',
            clip: '/assets/vid/demo_world.mp4',
            accent: '#eab308', // Gold
            eyebrow: 'ORIGIN: KASHMIR',
            title: 'Pure Kashmiri Saffron & Alpine Harvest',
            body: 'Handpicked from Pamore valley under snow-capped Himalayan peaks. Certified GI-tagged saffron threads with rich crocin content.',
            tags: ['Kashmir Origin', 'GI Tagged', 'Hand Harvested'],
          },
          {
            id: 'kerala',
            label: 'Kerala Spices',
            step: '01 / 06',
            still: '/assets/scenes/kerala_spices.png',
            clip: '/assets/vid/demo_world.mp4',
            accent: '#22c55e', // Emerald Green
            eyebrow: 'ORIGIN: KERALA',
            title: 'Western Ghats Cardamom & Black Pepper',
            body: 'Cultivated in misty rainforest slopes of Munnar and Wayanad. Sun-dried green cardamom pods and Tellicherry black pepper.',
            tags: ['Kerala Origin', 'Rainforest Grown', 'High Essential Oils'],
          },
          {
            id: 'punjab',
            label: 'Punjab Basmati',
            step: '01 / 06',
            still: '/assets/scenes/punjab_basmati.png',
            clip: '/assets/vid/demo_world.mp4',
            accent: '#f59e0b', // Amber Gold
            eyebrow: 'ORIGIN: PUNJAB & KARNAL',
            title: 'Aged Traditional Basmati Rice Plains',
            body: 'Irrigated by glacier-fed Himalayan rivers across fertile northern plains. Aged 12-24 months for extra-long grain elongation.',
            tags: ['Punjab & Karnal', 'Naturally Aged', 'Glacial Irrigated'],
          },
          {
            id: 'karnataka',
            label: 'Karnataka Crafts & Coffee',
            step: '01 / 06',
            still: '/assets/scenes/karnataka_toys.png',
            clip: '/assets/vid/demo_world.mp4',
            accent: '#ec4899', // Pink / Rose
            eyebrow: 'ORIGIN: KARNATAKA',
            title: 'Channapatna Craft & Coorg Arabica Coffee',
            body: 'Handcrafted GI-tagged eco-friendly wooden toys from Channapatna and shade-grown Arabica coffee beans from Coorg hills.',
            tags: ['Channapatna Toys', 'Coorg Coffee', 'Eco Wooden Craft'],
          },
          // --- CHAPTER 02 TO 06: SUPPLY CHAIN & LOGISTICS ---
          {
            id: 'lab',
            label: 'The Lab',
            step: '02 / 06',
            still: '/assets/scenes/quality_lab.png',
            clip: '/assets/vid/demo_world.mp4',
            accent: '#38bdf8', // Blue
            eyebrow: 'PURE & UNCOMPROMISED',
            title: 'Agri-Science Testing & Quality Control',
            body: '100% batch testing using optical color sorters, digital moisture analysis, and zero-contamination protocols.',
            tags: ['ISO & HACCP Certified', 'Zero Contamination', 'Lab Tested'],
          },
          {
            id: 'warehouse',
            label: 'The Warehouse',
            step: '03 / 06',
            still: '/assets/scenes/packaging_warehouse.png',
            clip: '/assets/vid/demo_world.mp4',
            accent: '#a855f7', // Purple
            eyebrow: 'SMART PACKAGING',
            title: 'Automated Nitrogen-Flush Packaging',
            body: 'Vacuum-sealed export containers with RFID tracking to lock in natural aroma and extend shelf-life.',
            tags: ['Export Packaging', 'Vacuum Sealed', 'RFID Tracked'],
          },
          {
            id: 'logistics',
            label: 'Logistics',
            step: '04 / 06',
            still: '/assets/scenes/logistics_port.png',
            clip: '/assets/vid/demo_world.mp4',
            accent: '#f97316', // Orange
            eyebrow: 'GLOBAL FREIGHT',
            title: 'Cochin Port & Maritime Express',
            body: 'Temperature-locked air and sea freight connecting Indian production hubs directly to international ports.',
            tags: ['Air & Sea Freight', 'Cold-Chain Locked', 'Live GPS Tracking'],
          },
          {
            id: 'destinations',
            label: 'Destinations',
            step: '05 / 06',
            still: '/assets/scenes/global_destinations.png',
            clip: '/assets/vid/demo_world.mp4',
            accent: '#10b981', // Emerald
            eyebrow: 'REACHING 30+ NATIONS',
            title: 'Singapore, Dubai & European Trade Hubs',
            body: 'Trusted B2B distribution networks ensuring rapid customs clearance and guaranteed on-time delivery.',
            tags: ['30+ Export Markets', 'Customs Cleared', 'On-Time SLA'],
          },
          {
            id: 'product',
            label: 'The Product',
            step: '06 / 06',
            still: '/assets/scenes/product_hero.png',
            clip: '/assets/vid/demo_world.mp4',
            accent: '#f43f5e', // Rose
            eyebrow: 'INDIA’S FINEST DELIVERED',
            title: 'One Perfect Partnership',
            body: 'From Kashmiri Saffron & Aged Basmati to Organic Cardamom—experience pure quality in every single batch.',
            tags: ['Kashmiri Saffron', 'Aged Basmati', 'Pure Spices'],
            cta: {
              primary: { label: 'Request Export Quote', href: '/contact' },
              secondary: { label: 'Explore Products', href: '/products' },
            },
          },
        ],
      });
    };

    // Dynamically load /scrub-engine.js if not already present
    if (typeof window !== 'undefined' && !(window as any).mountScrollWorld) {
      const script = document.createElement('script');
      script.src = '/scrub-engine.js';
      script.async = true;
      script.onload = () => {
        initScrollWorld();
      };
      document.body.appendChild(script);
    } else {
      initScrollWorld();
    }
  }, []);

  return (
    <section className="relative w-full bg-[#0a0d14] text-white overflow-hidden">
      <div ref={containerRef} className="w-full min-h-screen" />
    </section>
  );
}
export default ScrollWorldHero;
