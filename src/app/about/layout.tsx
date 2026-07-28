import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about HeviNet Trading — connecting Indian quality to global markets since 2015. Our mission, values, and journey in premium Indian exports.',
  openGraph: {
    title: 'About HeviNet Trading',
    description:
      'Learn about HeviNet Trading — connecting Indian quality to global markets since 2015.',
    url: 'https://hevinet.in/about',
  },
  alternates: {
    canonical: 'https://hevinet.in/about',
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
