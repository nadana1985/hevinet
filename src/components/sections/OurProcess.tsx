'use client';

import { SectionHeader } from '@/components/ui/SectionHeader';
import { SlideUp, StaggerContainer, StaggerItem } from '@/components/motion';
import {
  MessageSquare,
  ClipboardList,
  TestTube,
  FileCheck,
  ShieldCheck,
  Truck,
  PackageCheck,
} from 'lucide-react';

const steps = [
  {
    icon: MessageSquare,
    number: '01',
    title: 'Inquiry',
    description:
      'Reach out via contact form, WhatsApp, or email with your product requirements.',
  },
  {
    icon: ClipboardList,
    number: '02',
    title: 'Consultation',
    description:
      'Our team discusses quantities, specifications, packaging, and delivery timelines.',
  },
  {
    icon: TestTube,
    number: '03',
    title: 'Sampling',
    description:
      'Product samples are sent to you for quality verification before bulk orders.',
  },
  {
    icon: FileCheck,
    number: '04',
    title: 'Order',
    description:
      'Confirm your order with agreed pricing, payment terms, and shipping details.',
  },
  {
    icon: ShieldCheck,
    number: '05',
    title: 'Quality Check',
    description:
      'Products undergo rigorous quality inspection and certification before packaging.',
  },
  {
    icon: Truck,
    number: '06',
    title: 'Shipping',
    description:
      'Carefully packed and shipped via sea, air, or express courier with tracking.',
  },
  {
    icon: PackageCheck,
    number: '07',
    title: 'Delivery',
    description:
      'Products arrive at your location. We stay connected for any support needed.',
  },
];

/**
 * Our Process section showing the 7-step workflow from inquiry to delivery.
 *
 * @example
 * <OurProcess />
 */
export function OurProcess() {
  return (
    <section className="py-24 bg-neutral-50 dark:bg-neutral-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SlideUp>
          <SectionHeader
            title="How It Works"
            subtitle="From inquiry to delivery — a seamless process designed for your convenience."
          />
        </SlideUp>

        <StaggerContainer className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.slice(0, 4).map((step) => {
            const Icon = step.icon;
            return (
              <StaggerItem key={step.number}>
                <div className="bg-white dark:bg-neutral-800 rounded-2xl p-6 border border-neutral-100 dark:border-neutral-700 h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center">
                      <Icon className="h-5 w-5 text-primary-600 dark:text-primary-400" />
                    </div>
                    <span className="text-xs font-bold text-primary-500 tracking-wider">
                      STEP {step.number}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        <StaggerContainer className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {steps.slice(4).map((step) => {
            const Icon = step.icon;
            return (
              <StaggerItem key={step.number}>
                <div className="bg-white dark:bg-neutral-800 rounded-2xl p-6 border border-neutral-100 dark:border-neutral-700 h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center">
                      <Icon className="h-5 w-5 text-primary-600 dark:text-primary-400" />
                    </div>
                    <span className="text-xs font-bold text-primary-500 tracking-wider">
                      STEP {step.number}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}

export default OurProcess;
