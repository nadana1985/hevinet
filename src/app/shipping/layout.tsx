import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Shipping Policy',
  description:
    'HeviNet Trading shipping policy. Learn about our shipping methods, packaging, customs, and delivery timelines for global orders.',
  robots: {
    index: false,
    follow: true,
  },
  alternates: {
    canonical: 'https://hevinet.in/shipping',
  },
};

export default function ShippingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
