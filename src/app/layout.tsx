import type { Metadata } from 'next';
import { Inter, Plus_Jakarta_Sans, Playfair_Display } from 'next/font/google';
import { ThemeProvider } from '@/contexts/ThemeContext';
import { FloatingActions } from '@/components/ui/FloatingActions';
import { MobileNav } from '@/components/layout/MobileNav';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import './globals.css';

/* ── Fonts ──────────────────────────────────────────────────────────────── */
const inter = Inter({
  variable: '--font-body',
  subsets: ['latin'],
  display: 'swap',
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: '--font-heading',
  subsets: ['latin'],
  display: 'swap',
});

const playfairDisplay = Playfair_Display({
  variable: '--font-display',
  subsets: ['latin'],
  display: 'swap',
});

/* ── Metadata ───────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: {
    default: 'HeviNet Trading — Premium Indian Exports | Spices, Rice & More',
    template: '%s | HeviNet Trading',
  },
  description:
    'HeviNet Trading is a leading exporter of premium Indian agricultural products including spices, rice, pulses, tea, and coffee. Trusted by 500+ global buyers across 30+ countries.',
  keywords: [
    'Indian spices exporter',
    'premium rice supplier',
    'agricultural exports India',
    'B2B spice trading',
    'organic spices wholesale',
    'Indian basmati rice exporter',
    'turmeric supplier',
    'red chili exporter',
    'cumin seeds wholesale',
    'pulses exporter India',
  ],
  authors: [{ name: 'HeviNet Trading' }],
  creator: 'HeviNet Trading',
  publisher: 'HeviNet Trading',
  metadataBase: new URL('https://hevinet.in'),
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://hevinet.in',
    siteName: 'HeviNet Trading',
    title: 'HeviNet Trading — Premium Indian Exports',
    description:
      'Leading exporter of premium Indian agricultural products. Spices, rice, pulses, and more.',
    images: [
      {
        url: 'https://hevinet.in/og-default.jpg',
        width: 1200,
        height: 630,
        alt: 'HeviNet Trading — Premium Indian Products',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HeviNet Trading — Premium Indian Exports',
    description: 'Leading exporter of premium Indian agricultural products.',
    images: ['https://hevinet.in/twitter-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://hevinet.in',
  },
};

/* ── JSON-LD Structured Data ────────────────────────────────────────────── */
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'HeviNet Trading',
  url: 'https://hevinet.in',
  logo: 'https://hevinet.in/logo.png',
  description: 'Leading exporter of premium Indian agricultural products',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'IN',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+91-9876543210',
    contactType: 'sales',
    availableLanguage: ['English', 'Hindi'],
  },
  sameAs: ['https://www.instagram.com/hevinet', 'https://www.linkedin.com/company/hevinet'],
};

/* ── Root Layout ────────────────────────────────────────────────────────── */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${plusJakartaSans.variable} ${playfairDisplay.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col font-body antialiased">
        <ThemeProvider>
          <a href="#main-content" className="skip-link">
            Skip to main content
          </a>
          {children}
          <FloatingActions />
          <MobileNav />
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}
