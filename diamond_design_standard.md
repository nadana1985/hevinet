---
Standard: Diamond Design Standard
Version: 1.0.0
Last Updated: July 28, 2026
Status: Approved
---

# 💎 The Diamond Design Standard
## HeviNet.in — Conversion-Driven Visual & Interactive System

This document outlines the **Diamond Design Standard**, transforming HeviNet into a trustworthy, high-converting global B2B trading site. It defines rules for color, typography, micro-interactions, motion design, and layout engineering.

---

## 🎨 1. Color Palette & The Amber-to-Gold Ramp
Instead of generic corporate orange, this standard uses a warm, high-contrast palette that references key export assets (saffron, turmeric) while passing WCAG AA accessibility contrast ratios.

### 1.1 Brand Colors & Values
*   **Light Mode Base:**
    *   `--color-primary-500`: `#B45309` (Deep Amber / Warm Orange) — primary readable text and main interface highlights.
    *   `--color-primary-600`: `#92400E` (Dark Amber) — hover and action states.
    *   `--color-neutral-900`: `#0F172A` (Slate/Midnight Navy) — primary text.
    *   `--color-neutral-50`: `#F8FAFC` (Light Base) — background shade.
*   **Dark Mode Base:**
    *   `--color-primary-400`: `#D4AF37` (Saffron Gold) — luxurious highlight accents readable on obsidian black.
    *   `--bg-primary`: `#020617` (Obsidian Base) — deep slate background.
    *   `--bg-secondary`: `#0B1329` (Obsidian Slate) — card layouts.

> [!NOTE]
> This palette keeps the brand feeling cohesive between light and dark modes while ensuring readability. On light backgrounds, we use Deep Amber (`#B45309`); on dark backgrounds, we use Saffron Gold (`#D4AF37`).

---

## ✍️ 2. Typography Pairings
Typography is scaled dynamically using viewport-based fluid sizing to ensure legibility across all screen factors:

```css
:root {
  /* Display & Main Titles (Hero) */
  --font-display: 'Playfair Display', serif;
  --font-size-display: clamp(3.0rem, 8vw, 6.0rem);
  
  /* Section Headings */
  --font-heading: 'Plus Jakarta Sans', sans-serif;
  --font-size-h1: clamp(2.2rem, 4vw, 3.5rem);
  
  /* Body Copy & UI Controls */
  --font-body: 'Inter', system-ui, -apple-system, sans-serif;
}
```

*   **Playfair Display:** Used strictly for hero headlines and top-level landing titles to add a premium touch. Playfair Display must be subsetted to Latin characters and basic punctuation (~15KB) per the [Performance Standard's](file:///C:/Users/USER/.gemini/antigravity/brain/6cc1f82e-12ae-45b6-9b37-47024fd1d52a/diamond_performance_standard.md) font budget.
*   **Inter:** Kept as the primary body typeface to ensure visual consistency and high legibility.

---

## 🚀 3. Lightweight Performance-Friendly Interactions
We prioritize loading speed and accessibility over heavy scripts. 

### 3.1 Hero Animation (Lottie Web)
*   Instead of a heavy WebGL/Three.js 3D canvas, the hero section utilizes a lightweight **Lottie vector animation** loop (`~15-20KB` gzipped).
*   This delivers vector scaling, loads without blocking the main thread, and works on low-end mobile devices.

### 3.2 Product Card CSS Hover States
Product catalog thumbnails must avoid WebGL canvas distortions and instead use hardware-accelerated, zero-JS transitions:

```css
/* Card Container */
.product-card {
  transition: transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94),
              box-shadow 0.3s ease;
}
.product-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 40px rgba(15, 23, 42, 0.08);
}

/* Card Image */
.product-card img {
  transition: transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94),
              filter 0.3s ease;
}
.product-card:hover img {
  transform: scale(1.06);
  filter: brightness(1.03);
}
```

### 3.3 Page Transitions
Avoid complex page-morphing scripts (`layoutId`). Standardize on a clean, simple Framer Motion fade-in transition (`<AnimatePresence>` around page content) to ensure predictable loading behavior for B2B users.

---

## 📐 4. Grid Asymmetry
*   Use asymmetric grid splits (`60% / 40%` layout divisions) for content headers and info graphics to break up standard layouts without reducing spacing efficiency.
*   Maintain strict spacing limits aligned to an 8px scale.
