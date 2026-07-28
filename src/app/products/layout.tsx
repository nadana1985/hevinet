import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Products',
  description:
    'Explore HeviNet\'s premium Indian products — spices, kids toys, flowers, tea & coffee, kids dress, and ghee. Sourced directly from origin across India.',
  openGraph: {
    title: 'HeviNet Products — Premium Indian Exports',
    description:
      'Explore premium Indian spices, toys, flowers, tea, and ghee sourced directly from origin.',
    url: 'https://hevinet.in/products',
  },
  alternates: {
    canonical: 'https://hevinet.in/products',
  },
};

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
