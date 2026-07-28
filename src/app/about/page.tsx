'use client';

import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { BreadcrumbSchema } from '@/components/seo/JsonLd';
import { Card } from '@/components/ui/Card';
import { SlideUp, StaggerContainer, StaggerItem } from '@/components/motion';
import { Target, Heart, Users, Award, Globe, Leaf } from 'lucide-react';
import dynamic from 'next/dynamic';

const DynamicCTASection = dynamic(() => import('@/components/sections/CTASection'));
import { TeamSection } from '@/components/sections/TeamSection';

const values = [
  {
    icon: Target,
    title: 'Our Mission',
    description:
      'To connect Indian quality products with global markets, delivering authentic goods sourced directly from their regions of origin.',
  },
  {
    icon: Heart,
    title: 'Our Passion',
    description:
      'We are passionate about preserving traditional Indian craftsmanship and bringing the best of India to the world.',
  },
  {
    icon: Users,
    title: 'Our Team',
    description:
      'A dedicated team of professionals with deep expertise in international trade, logistics, and quality assurance.',
  },
  {
    icon: Award,
    title: 'Our Standards',
    description:
      'We maintain the highest quality standards across our entire product range, ensuring every shipment meets global expectations.',
  },
  {
    icon: Globe,
    title: 'Our Reach',
    description:
      'Serving markets across Southeast Asia, the Middle East, Europe, and North America with reliable delivery.',
  },
  {
    icon: Leaf,
    title: 'Our Sustainability',
    description:
      'Committed to sustainable sourcing practices that support local communities and preserve natural resources.',
  },
];

const milestones = [
  { year: '2015', event: 'Founded HeviNet Trading in India' },
  { year: '2017', event: 'Expanded to Southeast Asian markets' },
  { year: '2019', event: 'Reached 100+ global clients' },
  { year: '2021', event: 'Entered Middle East and European markets' },
  { year: '2023', event: 'Expanded product line to include toys and ghee' },
  { year: '2025', event: 'Serving 30+ countries worldwide' },
];

export default function AboutPage() {
  return (
    <>
      <Navigation />

      <main id="main-content" className="min-h-screen pb-20 lg:pb-0">
        {/* Hero */}
        <section className="pt-32 pb-16 bg-gradient-to-b from-primary-50 to-white dark:from-neutral-900 dark:to-neutral-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <BreadcrumbSchema items={[{ label: 'Home', href: '/' }, { label: 'About Us' }]} />
            <Breadcrumbs items={[{ label: 'About Us' }]} className="mb-8" />
            <div className="text-center">
            <SlideUp>
              <SectionHeader
                title="About HeviNet"
                subtitle="Connecting Indian quality to global markets since 2015. We bridge the gap between India's rich heritage and international business needs."
              />
            </SlideUp>
          </div>
          </div>
        </section>

        {/* Story */}
        <section className="py-20 bg-white dark:bg-neutral-950">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <SlideUp>
              <div className="max-w-none space-y-6">
                <h2 className="text-2xl font-bold text-neutral-900 dark:text-white">
                  Our Story
                </h2>
                <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  HeviNet Trading was founded with a simple vision: to bring the authentic
                  flavors and quality of Indian products to businesses worldwide. Starting from
                  a small office in India, we have grown to serve over 500 clients across 30+
                  countries, building lasting partnerships based on trust, quality, and
                  reliability.
                </p>
                <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  Our product range spans premium spices from the fields of Tamil Nadu and
                  Kashmir, handcrafted wooden toys from Channapatna, authentic ghee from
                  Gujarat, and much more. Every product we export tells a story of Indian
                  craftsmanship and tradition.
                </p>
              </div>
            </SlideUp>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-neutral-50 dark:bg-neutral-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <SectionHeader
              title="Our Values"
              subtitle="The principles that guide everything we do."
            />
            <StaggerContainer className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value) => {
                const Icon = value.icon;
                return (
                  <StaggerItem key={value.title}>
                    <Card hover padding="lg" className="h-full">
                      <div className="w-12 h-12 rounded-xl bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center mb-5">
                        <Icon className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                      </div>
                      <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-3">
                        {value.title}
                      </h3>
                      <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                        {value.description}
                      </p>
                    </Card>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>
          </div>
        </section>

        {/* Team */}
        <TeamSection />

        {/* Timeline */}
        <section className="py-20 bg-white dark:bg-neutral-950">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <SectionHeader
              title="Our Journey"
              subtitle="Key milestones in our growth story."
            />
            <div className="mt-16 relative">
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-neutral-200 dark:bg-neutral-700 -translate-x-1/2" />
              {milestones.map((milestone, index) => (
                <SlideUp key={milestone.year} delay={index * 0.1}>
                  <div className={`relative flex items-center mb-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-primary-500 -translate-x-1/2 z-10" />
                    <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                      <span className="text-sm font-bold text-primary-500">{milestone.year}</span>
                      <p className="text-neutral-600 dark:text-neutral-400 mt-1">{milestone.event}</p>
                    </div>
                  </div>
                </SlideUp>
              ))}
            </div>
          </div>
        </section>

        <DynamicCTASection />
      </main>

      <Footer />
    </>
  );
}
