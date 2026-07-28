'use client';

import { SectionHeader } from '@/components/ui/SectionHeader';
import { Card } from '@/components/ui/Card';
import { StaggerContainer, StaggerItem } from '@/components/motion';
import {
  Award,
  Leaf,
  Truck,
  Handshake,
  Package,
  HeadphonesIcon,
} from 'lucide-react';

const benefits = [
  {
    icon: Award,
    title: 'Premium Quality',
    description:
      'We maintain the highest quality standards across our entire product range, ensuring every shipment meets global expectations.',
    color: 'text-primary-500 bg-primary-50 dark:bg-primary-900/20',
  },
  {
    icon: Leaf,
    title: 'Authentic Origin',
    description:
      'Every product is sourced directly from its region of origin, preserving traditional quality and authentic characteristics.',
    color: 'text-emerald-500 bg-emerald-50 dark:bg-emerald-900/20',
  },
  {
    icon: Truck,
    title: 'Reliable Delivery',
    description:
      'Trusted logistics network ensuring on-time delivery to markets across Singapore, Malaysia, the Middle East, and beyond.',
    color: 'text-blue-500 bg-blue-50 dark:bg-blue-900/20',
  },
  {
    icon: Handshake,
    title: 'Trusted Partnerships',
    description:
      'Long-standing relationships with buyers worldwide built on transparency, consistency, and mutual growth.',
    color: 'text-amber-500 bg-amber-50 dark:bg-amber-900/20',
  },
  {
    icon: Package,
    title: 'Bulk Order Flexibility',
    description:
      'We accommodate orders of all sizes with flexible packaging and competitive pricing for bulk buyers.',
    color: 'text-purple-500 bg-purple-50 dark:bg-purple-900/20',
  },
  {
    icon: HeadphonesIcon,
    title: '24/7 Support',
    description:
      'Our team is available around the clock to assist with orders, inquiries, and any support you need.',
    color: 'text-rose-500 bg-rose-50 dark:bg-rose-900/20',
  },
];

/**
 * Value propositions section showing key benefits with icons and cards.
 *
 * @example
 * <ValueProps />
 */
export function ValueProps() {
  return (
    <section className="py-24 bg-white dark:bg-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeader
          title="Why Choose HeviNet"
          subtitle="We combine India's rich heritage with international quality standards to deliver excellence worldwide."
        />

        <StaggerContainer className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <StaggerItem key={benefit.title}>
              <Card hover padding="lg">
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${benefit.color}`}
                >
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  {benefit.description}
                </p>
              </Card>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}

export default ValueProps;
