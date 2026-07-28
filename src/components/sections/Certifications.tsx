'use client';

import { SlideUp, StaggerContainer, StaggerItem } from '@/components/motion';
import { Shield, Award, Leaf, CheckCircle } from 'lucide-react';

const certifications = [
  {
    icon: Shield,
    name: 'ISO 22000',
    description: 'Food Safety Management',
    color: 'text-blue-500 bg-blue-50 dark:bg-blue-900/20',
  },
  {
    icon: Award,
    name: 'HACCP',
    description: 'Hazard Analysis & Control',
    color: 'text-emerald-500 bg-emerald-50 dark:bg-emerald-900/20',
  },
  {
    icon: CheckCircle,
    name: 'FSSAI',
    description: 'Food Safety & Standards',
    color: 'text-orange-500 bg-orange-50 dark:bg-orange-900/20',
  },
  {
    icon: Leaf,
    name: 'Organic Certified',
    description: 'NPOP & USDA Organic',
    color: 'text-green-500 bg-green-50 dark:bg-green-900/20',
  },
];

/**
 * Certifications section showing ISO/HACCP/FSSAI badges.
 *
 * @example
 * <Certifications />
 */
export function Certifications() {
  return (
    <section className="py-16 bg-white dark:bg-neutral-950 border-t border-neutral-100 dark:border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SlideUp>
          <p className="text-center text-sm font-medium text-neutral-500 dark:text-neutral-400 mb-10">
            Our Certifications
          </p>
        </SlideUp>

        <StaggerContainer className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
          {certifications.map((cert) => {
            const Icon = cert.icon;
            return (
              <StaggerItem key={cert.name}>
                <div className="flex items-center gap-3 px-5 py-3 rounded-xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800 hover:shadow-md transition-shadow">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${cert.color}`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-neutral-900 dark:text-white">
                      {cert.name}
                    </p>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400">
                      {cert.description}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}

export default Certifications;
