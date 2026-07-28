import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Markets',
  description:
    'HeviNet Trading serves 30+ countries across Southeast Asia, Middle East, Europe, and North America. Discover our global market presence.',
  openGraph: {
    title: 'HeviNet Markets — Global Indian Product Exports',
    description:
      'Serving 30+ countries across Southeast Asia, Middle East, Europe, and North America.',
    url: 'https://hevinet.in/markets',
  },
  alternates: {
    canonical: 'https://hevinet.in/markets',
  },
};

export default function MarketsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
