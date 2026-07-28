---
Standard: Diamond Performance Standard
Version: 1.0.0
Last Updated: July 28, 2026
Status: Approved
---

# 💎 The Diamond Technical Performance Standard
## HeviNet.in — Ultimate Speed, Code Splitting, and Core Web Vitals Excellence

This document defines the **Diamond Performance Standard**, ensuring HeviNet loads instantly, passes Core Web Vitals, and performs reliably on low-end mobile devices in target global markets.

---

## 📊 1. Core Web Vitals & Asset Weight Budgets

### 1.1 Core Web Vitals Targets
Every route and component implemented must satisfy these performance metrics:

| Metric | Target | Method of Measurement |
| :--- | :--- | :--- |
| **LCP** (Largest Contentful Paint) | **< 1.2s** | Lighthouse & CrUX Field Data |
| **INP** (Interaction to Next Paint) | **< 50ms** | Real User Monitoring (RUM) |
| **CLS** (Cumulative Layout Shift) | **0.00** | Layout instability tracking |

### 1.2 Asset Weight Budgets
To achieve these numbers, strict gzipped file weight boundaries are enforced:

| Asset Type | Maximum Budget | Description |
| :--- | :--- | :--- |
| **Initial JS Load** | `< 120KB` | Compiled, gzipped JS required for main page mount |
| **Total Page Weight** | `< 500KB` | Total assets (excluding fonts) loaded on initial view |
| **Web Fonts** | `< 45KB` | Total weight of custom fonts parsed at startup |
| **Third-Party Scripts** | `< 50KB` | Analytical scripts, triggers, and tracking codes |

---

## 🏗️ 2. React Server Component (RSC) Architecture
We leverage RSC to minimize client-side JavaScript execution overhead.

*   **RSC First:** All layout and page route definitions must remain Server Components.
*   **Leaf Client Isolation:** Interactive elements (such as [ThemeToggle.tsx](file:///f:/Hevinet/src/components/theme/ThemeToggle.tsx) or input components) must be isolated at the leaf level using `'use client';` lines.
*   **Dynamic Code Splitting:** When importing client-only packages (like Framer Motion components), dynamic imports or Client Wrapper shells must be used so that their bundles do not bloat the initial loading phase.

---

## 📦 3. Edge CDN Caching Strategy
For a B2B site serving global buyers across Southeast Asia and the Middle East, caching static and dynamic resources near the edge is critical. Configure headers as follows:

*   **Static Assets (Images, Fonts, CSS):** 
    `Cache-Control: public, max-age=31536000, immutable`
*   **HTML Pages:**
    `Cache-Control: public, s-maxage=3600, stale-while-revalidate=86400`
*   **Dynamic API Routes (e.g., Search / Chat):**
    `Cache-Control: no-store, no-cache, must-revalidate`

---

## 🖼️ 4. Asset Delivery Optimizations

### 4.1 Image Formats
*   **Primary Format:** Deliver images in **WebP** as the primary modern format to ensure compatibility with older mobile browsers in developing markets.
*   **Automatic Negotiation:** Next.js `<Image>` component automatically serves WebP or AVIF formats based on browser support via the `formats` configuration in `next.config.ts`. No manual HTML5 `<picture>` or `<source>` elements are required.
*   **Above-the-Fold:** Priority LCP images must include the `priority` attribute and explicit `sizes` definitions to bypass browser preload queue delays.

### 4.2 Web Font Subsetting
*   Custom fonts (like Playfair Display) must be subsetted to include only the character glyphs required for standard copy (Latin characters and basic punctuation). Subsetting Playfair Display reduces the file size from ~100KB to **~15KB**, staying safely within the typography budget.
