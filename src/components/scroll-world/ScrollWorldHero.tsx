'use client';

import React, { useEffect, useRef } from 'react';

/**
 * Hevinet 3D Scroll-World Landing Component.
 * Features regional sub-stops for Chapter 01 (Kashmir -> Kerala -> Punjab)
 * followed by testing, packaging, logistics, and global delivery.
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
          // --- REGIONAL ORIGIN SUB-STOPS ---
          {
            id: 'kashmir',
            label: 'Kashmir Saffron',
            still: '/assets/scenes/kashmir_saffron.png',
            clip: '/assets/vid/demo_world.mp4',
            accent: '#eab308', // Gold
            eyebrow: '01.1 / 08 — Origin: Kashmir',
            title: 'Pure Kashmiri Saffron & Alpine Harvest',
            body: 'Handpicked from Pamore valley under snow-capped Himalayan peaks. Certified GI-tagged saffron threads with rich crocin content.',
            tags: ['Kashmir Origin', 'GI Tagged', 'Hand Harvested'],
          },
          {
            id: 'kerala',
            label: 'Kerala Spices',
            still: '/assets/scenes/kerala_spices.png',
            clip: '/assets/vid/demo_world.mp4',
            accent: '#22c55e', // Emerald Green
            eyebrow: '01.2 / 08 — Origin: Kerala',
            title: 'Western Ghats Cardamom & Black Pepper',
            body: 'Cultivated in misty rainforest slopes of Munnar and Wayanad. Sun-dried green cardamom pods and Tellicherry black pepper.',
            tags: ['Kerala Origin', 'Rainforest Grown', 'High Essential Oils'],
          },
          {
            id: 'punjab',
            label: 'Punjab Basmati',
            still: '/assets/scenes/punjab_basmati.png',
            clip: '/assets/vid/demo_world.mp4',
            accent: '#f59e0b', // Amber Gold
            eyebrow: '01.3 / 09 — Origin: Punjab & Karnal',
            title: 'Aged Traditional Basmati Rice Plains',
            body: 'Irrigated by glacier-fed Himalayan rivers across fertile northern plains. Aged 12-24 months for extra-long grain elongation.',
            tags: ['Punjab & Karnal', 'Naturally Aged', 'Glacial Irrigated'],
          },
          {
            id: 'karnataka',
            label: 'Karnataka Crafts & Coffee',
            still: '/assets/scenes/karnataka_toys.png',
            clip: '/assets/vid/demo_world.mp4',
            accent: '#ec4899', // Pink / Rose
            eyebrow: '01.4 / 09 — Origin: Karnataka',
            title: 'Channapatna Craft & Coorg Arabica Coffee',
            body: 'Handcrafted GI-tagged eco-friendly wooden toys from Channapatna and shade-grown Arabica coffee beans from Coorg hills.',
            tags: ['Channapatna Toys', 'Coorg Coffee', 'Eco Wooden Craft'],
          },
          // --- SUPPLY CHAIN & LOGISTICS ---
          {
            id: 'lab',
            label: 'The Lab',
            still: '/assets/scenes/quality_lab.png',
            clip: '/assets/vid/demo_world.mp4',
            accent: '#38bdf8', // Blue
            eyebrow: '02 / 08 — Pure & Uncompromised',
            title: 'Agri-Science Testing & Quality Control',
            body: '100% batch testing using optical color sorters, digital moisture analysis, and zero-contamination protocols.',
            tags: ['ISO & HACCP Certified', 'Zero Contamination', 'Lab Tested'],
          },
          {
            id: 'warehouse',
            label: 'The Warehouse',
            still: '/assets/scenes/packaging_warehouse.png',
            clip: '/assets/vid/demo_world.mp4',
            accent: '#a855f7', // Purple
            eyebrow: '03 / 08 — Smart Packaging',
            title: 'Automated Nitrogen-Flush Packaging',
            body: 'Vacuum-sealed export containers with RFID tracking to lock in natural aroma and extend shelf-life.',
            tags: ['Export Packaging', 'Vacuum Sealed', 'RFID Tracked'],
          },
          {
            id: 'logistics',
            label: 'Logistics',
            still: '/assets/scenes/logistics_port.png',
            clip: '/assets/vid/demo_world.mp4',
            accent: '#f97316', // Orange
            eyebrow: '04 / 08 — Global Freight',
            title: 'Cochin Port & Maritime Express',
            body: 'Temperature-locked air and sea freight connecting Indian production hubs directly to international ports.',
            tags: ['Air & Sea Freight', 'Cold-Chain Locked', 'Live GPS Tracking'],
          },
          {
            id: 'destinations',
            label: 'Destinations',
            still: '/assets/scenes/global_destinations.png',
            clip: '/assets/vid/demo_world.mp4',
            accent: '#10b981', // Emerald
            eyebrow: '05 / 08 — Reaching 30+ Nations',
            title: 'Singapore, Dubai & European Trade Hubs',
            body: 'Trusted B2B distribution networks ensuring rapid customs clearance and guaranteed on-time delivery.',
            tags: ['30+ Export Markets', 'Customs Cleared', 'On-Time SLA'],
          },
          {
            id: 'product',
            label: 'The Product',
            still: '/assets/scenes/product_hero.png',
            clip: '/assets/vid/demo_world.mp4',
            accent: '#f43f5e', // Rose
            eyebrow: '06 / 08 — India’s Finest Delivered',
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
