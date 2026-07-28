---
Standard: Diamond SEO Standard
Version: 1.0.0
Last Updated: July 28, 2026
Status: Approved
---

# 💎 The Diamond SEO Standard
## HeviNet.in — Search Visibility, Schema Automation, and Crawl Optimization

This document outlines the **Diamond SEO Standard** for the HeviNet repository, ensuring search engine visibility, structured data indexing, and schema automation.

---

## 🏎️ 1. Page Speed as a Ranking Signal
Google uses Core Web Vitals (LCP, INP, CLS) as active search ranking factors. All modifications to layouts, images, and fonts must cross-reference the targets defined in the [Performance Standard](file:///C:/Users/USER/.gemini/antigravity/brain/6cc1f82e-12ae-45b6-9b37-47024fd1d52a/diamond_performance_standard.md) to preserve search indexing standing.

---

## 🏷️ 2. Metadata Architecture & Canonical URLs

### 2.1 Fallback Open Graph Cards
Define default OG fallback tags inside the root metadata configuration in `layout.tsx` for pages without custom graphics (e.g., *About*, *Contact*, *Markets*):

```typescript
openGraph: {
  images: [
    {
      url: 'https://www.hevinet.in/og-default.jpg',
      width: 1200,
      height: 630,
      alt: 'HeviNet Trading — Premium Indian Products',
    },
  ],
}
```

### 2.2 Dynamic Canonical URL Alternates
Ensure every product and category route generates its own correct canonical tag dynamically, preventing duplicate URL indexing conflicts:

```typescript
export async function generateMetadata({ params }) {
  const { category, product } = await params;
  const path = product 
    ? `/products/${category}/${product}`
    : category 
    ? `/products/${category}`
    : '/products';
  
  return {
    alternates: {
      canonical: `https://www.hevinet.in${path}`,
    },
  };
}
```

---

## 🔗 3. Internal Linking Strategy & Crawlability
To distribute PageRank and allow search bots to index the catalog efficiently:
*   **Product Cards:** Must wrap details buttons in links directing back to their category views (`/products?category=x`).
*   **Category Overviews:** Must provide explicit backlinks to the main catalog page (`/products`).
*   **Related Products Grid:** Product detail views must display a "Related Products" block linking to similar items in the same category.

---

## 🗺️ 4. Dynamic XML Sitemaps
The sitemap builder [sitemap.ts](file:///f:/Hevinet/src/app/sitemap.ts) compiles dynamic routes. To save search crawler budget:
*   **Avoid dynamic date generation:** Never use `new Date()` dynamically during crawler fetches, as it falsely indicates to bots that the page content changes on every crawl.
*   **Build-time Timestamps:** Compile the sitemap dates using the static build date or Git commit tags so sitemaps only update when content changes.

---

## 🌐 5. International Targeting (Hreflang Tags - Phase 2)
For a B2B exporter serving global destinations (Southeast Asia, Middle East):
*   Configure the metadata language alternates to serve search queries across target regions:

```typescript
alternates: {
  languages: {
    'en-SG': 'https://www.hevinet.in/sg',
    'en-MY': 'https://www.hevinet.in/my',
    'en-AE': 'https://www.hevinet.in/ae',
  },
}
```

> [!NOTE]
> Hreflang configuration is planned for future multi-region expansion (Phase 2). Regional routes (`/sg`, `/my`, `/ae`) will be implemented when localized regional content is ready.
