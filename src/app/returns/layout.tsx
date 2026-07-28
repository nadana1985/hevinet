import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Returns & Refunds',
  description:
    'HeviNet Trading returns and refund policy. Learn about our return eligibility, process, and refund timelines.',
  robots: {
    index: false,
    follow: true,
  },
  alternates: {
    canonical: 'https://hevinet.in/returns',
  },
};

export default function ReturnsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
