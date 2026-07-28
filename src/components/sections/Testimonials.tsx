'use client';

import { Star } from 'lucide-react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { StaggerContainer, StaggerItem, SlideUp } from '@/components/motion';
import { OptimizedImage } from '@/components/ui/OptimizedImage';

interface Testimonial {
  quote: string;
  author: string;
  company: string;
  country: string;
  avatar: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    quote:
      'HeviNet has been our trusted spice supplier for over 5 years. Their quality consistency and reliability are unmatched in the industry.',
    author: 'John Smith',
    company: 'Global Foods Ltd',
    country: 'United Kingdom',
    avatar: '/avatars/john-smith.jpg',
    rating: 5,
  },
  {
    quote:
      'The quality of Basmati rice from HeviNet exceeds our expectations every time. Our customers love the authentic aroma and taste.',
    author: 'Maria Santos',
    company: 'Rico Foods Inc',
    country: 'Spain',
    avatar: '/avatars/maria-santos.jpg',
    rating: 5,
  },
  {
    quote:
      'Professional team, excellent product quality, and timely deliveries. HeviNet is our go-to partner for Indian agricultural imports.',
    author: 'Ahmed Al-Rashid',
    company: 'Desert Trading Co',
    country: 'UAE',
    avatar: '/avatars/ahmed-rashid.jpg',
    rating: 5,
  },
];

/**
 * Testimonials section with client quotes, avatars, star ratings, and scroll animation.
 *
 * @example
 * <Testimonials />
 */
export function Testimonials() {
  return (
    <section className="py-24 bg-white dark:bg-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SlideUp>
        <SectionHeader
          title="What Our Clients Say"
          subtitle="Trusted by businesses across 30+ countries. Here is what our partners have to say."
        />
        </SlideUp>

        <StaggerContainer className="mt-16 grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <StaggerItem key={testimonial.author}>
            <div
              className="bg-neutral-50 dark:bg-neutral-800 rounded-2xl p-6 md:p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              {/* Star Rating */}
              <div className="flex gap-1 mb-5" aria-label={`${testimonial.rating} out of 5 stars`}>
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed mb-6">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-neutral-200 dark:border-neutral-700">
                <div className="relative w-11 h-11 rounded-full overflow-hidden shrink-0">
                  <OptimizedImage
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    fill
                    sizes="44px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-sm text-neutral-900 dark:text-neutral-100">
                    {testimonial.author}
                  </p>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400">
                    {testimonial.company}, {testimonial.country}
                  </p>
                </div>
              </div>
            </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

export default Testimonials;
