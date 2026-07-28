import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with HeviNet Trading. Request a quote, inquire about our products, or discuss partnership opportunities. We respond within 24 hours.',
  openGraph: {
    title: 'Contact HeviNet Trading',
    description:
      'Get in touch with HeviNet Trading. Request a quote or inquire about our products.',
    url: 'https://hevinet.in/contact',
  },
  alternates: {
    canonical: 'https://hevinet.in/contact',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
