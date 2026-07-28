import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'HeviNet Trading privacy policy. Learn how we collect, use, and protect your personal information.',
  robots: {
    index: false,
    follow: true,
  },
  alternates: {
    canonical: 'https://hevinet.in/privacy',
  },
};

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
