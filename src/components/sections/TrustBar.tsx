'use client';

import { SlideUp } from '@/components/motion';

const clients = [
  { name: 'Global Foods Ltd', initials: 'GF' },
  { name: 'Spice World Inc', initials: 'SW' },
  { name: 'Rice Traders Co', initials: 'RT' },
  { name: 'Euro Imports', initials: 'EI' },
  { name: 'Pacific Foods', initials: 'PF' },
  { name: 'Prime Exports', initials: 'PE' },
];

/**
 * Trust bar showing client logos with grayscale-to-color hover effect.
 *
 * @example
 * <TrustBar />
 */
export function TrustBar() {
  return (
    <SlideUp>
      <section className="py-16 bg-neutral-50 dark:bg-neutral-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <p className="text-center text-sm font-medium text-neutral-500 dark:text-neutral-400 mb-10">
            Trusted by leading companies worldwide
          </p>

          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8">
            {clients.map((client) => (
              <div
                key={client.name}
                className="group flex items-center justify-center h-12 px-6"
                title={client.name}
              >
                <span className="text-lg font-bold tracking-wider text-neutral-400 dark:text-neutral-500 group-hover:text-neutral-700 dark:group-hover:text-neutral-200 transition-colors duration-300 select-none">
                  {client.initials}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SlideUp>
  );
}

export default TrustBar;
