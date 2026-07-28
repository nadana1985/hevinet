'use client';

import { SectionHeader } from '@/components/ui/SectionHeader';
import { Card } from '@/components/ui/Card';
import { StaggerContainer, StaggerItem } from '@/components/motion';
import { Mail } from 'lucide-react';
import { OptimizedImage } from '@/components/ui/OptimizedImage';

interface TeamMember {
  name: string;
  role: string;
  avatar: string;
  bio: string;
  email?: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Rajesh Kumar',
    role: 'Founder & CEO',
    avatar: '/avatars/rajesh-kumar.jpg',
    bio: 'With over 15 years in international trade, Rajesh founded HeviNet to connect Indian products with global markets.',
    email: 'rajesh@hevinet.in',
  },
  {
    name: 'Priya Sharma',
    role: 'Head of Operations',
    avatar: '/avatars/priya-sharma.jpg',
    bio: 'Priya oversees our supply chain and logistics, ensuring timely delivery to 30+ countries worldwide.',
    email: 'priya@hevinet.in',
  },
  {
    name: 'Arjun Patel',
    role: 'Quality Assurance Lead',
    avatar: '/avatars/arjun-patel.jpg',
    bio: 'Arjun ensures every product meets ISO, HACCP, and FSSAI standards before export.',
    email: 'arjun@hevinet.in',
  },
  {
    name: 'Neha Gupta',
    role: 'Business Development Manager',
    avatar: '/avatars/neha-gupta.jpg',
    bio: 'Neha builds partnerships with buyers across Southeast Asia, Middle East, and Europe.',
    email: 'neha@hevinet.in',
  },
];

/**
 * Team section showing company leadership with photos and bios.
 *
 * @example
 * <TeamSection />
 */
export function TeamSection() {
  return (
    <section className="py-20 bg-neutral-50 dark:bg-neutral-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeader
          title="Meet Our Team"
          subtitle="The people behind HeviNet's success."
        />
        <StaggerContainer className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <StaggerItem key={member.name}>
              <Card hover padding="none" className="text-center h-full">
                <div className="relative h-48 overflow-hidden">
                  <OptimizedImage
                    src={member.avatar}
                    alt={member.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 25vw, 250px"
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">
                    {member.name}
                  </h3>
                  <p className="text-sm text-primary-500 font-medium mt-1">
                    {member.role}
                  </p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-3 leading-relaxed">
                    {member.bio}
                  </p>
                  <div className="flex justify-center gap-3 mt-4">
                    {member.email && (
                      <a
                        href={`mailto:${member.email}`}
                        className="w-9 h-9 rounded-full bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center text-neutral-500 hover:text-primary-500 hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-colors"
                        aria-label={`Email ${member.name}`}
                      >
                        <Mail className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                </div>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

export default TeamSection;
