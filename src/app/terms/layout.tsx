import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description:
    'HeviNet Trading terms of service. Read the terms and conditions governing use of our website and services.',
  robots: {
    index: false,
    follow: true,
  },
  alternates: {
    canonical: 'https://hevinet.in/terms',
  },
};

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
