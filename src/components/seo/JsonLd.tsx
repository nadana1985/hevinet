import type { StructuredData, BreadcrumbItem } from '@/types';

/**
 * Renders JSON-LD structured data as a script tag.
 */
function JsonLdScript({ data }: { data: StructuredData }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

// ── Organization Schema ────────────────────────────────────────────────────

interface OrganizationSchemaProps {
  name?: string;
  url?: string;
  logo?: string;
  description?: string;
  telephone?: string;
  address?: {
    street?: string;
    city?: string;
    region?: string;
    country?: string;
  };
  sameAs?: string[];
}

/**
 * JSON-LD Organization schema for the business.
 *
 * @example
 * <OrganizationSchema />
 */
export function OrganizationSchema({
  name = 'HeviNet Trading',
  url = 'https://hevinet.in',
  logo = 'https://hevinet.in/logo.png',
  description = 'Leading exporter of premium Indian agricultural products',
  telephone = '+91-9876543210',
  address,
  sameAs = [
    'https://www.instagram.com/hevinet',
    'https://www.linkedin.com/company/hevinet',
  ],
}: OrganizationSchemaProps) {
  const data: StructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name,
    url,
    logo,
    description,
    ...(telephone && {
      contactPoint: {
        '@type': 'ContactPoint',
        telephone,
        contactType: 'sales',
        availableLanguage: ['English', 'Hindi'],
      },
    }),
    ...(address && {
      address: {
        '@type': 'PostalAddress',
        ...(address.street && { streetAddress: address.street }),
        ...(address.city && { addressLocality: address.city }),
        ...(address.region && { addressRegion: address.region }),
        ...(address.country && { addressCountry: address.country }),
      },
    }),
    ...(sameAs.length > 0 && { sameAs }),
  };

  return <JsonLdScript data={data} />;
}

// ── Product Schema ─────────────────────────────────────────────────────────

interface ProductSchemaProps {
  name: string;
  description: string;
  image: string;
  slug: string;
  price?: string;
  currency?: string;
  availability?: 'InStock' | 'OutOfStock' | 'PreOrder';
  category?: string;
}

/**
 * JSON-LD Product schema for individual product pages.
 *
 * @example
 * <ProductSchema name="Premium Turmeric" description="..." image="/turmeric.jpg" slug="turmeric" />
 */
export function ProductSchema({
  name,
  description,
  image,
  slug,
  price,
  currency = 'USD',
  availability = 'InStock',
  category,
}: ProductSchemaProps) {
  const data: StructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name,
    description,
    image,
    category,
    brand: {
      '@type': 'Brand',
      name: 'HeviNet Trading',
    },
    offers: {
      '@type': 'Offer',
      url: `https://hevinet.in/products/${slug}`,
      priceCurrency: currency,
      ...(price && { price }),
      availability: `https://schema.org/${availability}`,
    },
  };

  return <JsonLdScript data={data} />;
}

// ── Breadcrumb Schema ──────────────────────────────────────────────────────

interface BreadcrumbSchemaProps {
  items: BreadcrumbItem[];
  baseUrl?: string;
}

/**
 * JSON-LD BreadcrumbList schema for navigation structure.
 *
 * @example
 * const items = [{ label: 'Home', href: '/' }, { label: 'Products' }];
 * <BreadcrumbSchema items={items} />
 */
export function BreadcrumbSchema({
  items,
  baseUrl = 'https://hevinet.in',
}: BreadcrumbSchemaProps) {
  const data: StructuredData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      ...(item.href && { item: `${baseUrl}${item.href}` }),
    })),
  };

  return <JsonLdScript data={data} />;
}

// ── Local Business Schema ──────────────────────────────────────────────────

interface LocalBusinessSchemaProps {
  name?: string;
  description?: string;
  image?: string;
  telephone?: string;
  address?: {
    street?: string;
    city?: string;
    region?: string;
    country?: string;
  };
  openingHours?: string;
  priceRange?: string;
}

/**
 * JSON-LD LocalBusiness schema (extends Organization).
 *
 * @example
 * <LocalBusinessSchema openingHours="Mon-Sat 09:00-18:00" />
 */
export function LocalBusinessSchema({
  name = 'HeviNet Trading',
  description = 'Leading exporter of premium Indian agricultural products',
  image,
  telephone = '+91-9876543210',
  address,
  openingHours = 'Mon-Sat 09:00-18:00',
  priceRange = '$$',
}: LocalBusinessSchemaProps) {
  const data: StructuredData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name,
    description,
    ...(image && { image }),
    ...(telephone && { telephone }),
    ...(address && {
      address: {
        '@type': 'PostalAddress',
        ...(address.street && { streetAddress: address.street }),
        ...(address.city && { addressLocality: address.city }),
        ...(address.region && { addressRegion: address.region }),
        ...(address.country && { addressCountry: address.country }),
      },
    }),
    openingHours,
    priceRange,
    url: 'https://hevinet.in',
  };

  return <JsonLdScript data={data} />;
}
