---
Standard: Diamond Accessibility Standard
Version: 1.0.0
Last Updated: July 28, 2026
Status: Approved
---

# 💎 The Diamond Accessibility (a11y) Standard
## HeviNet.in — WCAG 2.1 AA Compliance, Keyboard focus, and Assistive Tech

This document establishes the **Diamond Accessibility Standard**, ensuring HeviNet is fully usable by individuals navigating via screen readers, keyboards, or other assistive tools.

---

## ♿ 1. WCAG 2.1 AA Checklist Targets & Color Contrast

All UI components must meet these fundamental color contrast requirements:

### 1.1 Contrast Ratios
*   **Text Contrast:** Minimum contrast of `4.5:1` for regular text and `3:1` for large text (over 18pt / 24px).
*   **Non-Text Contrast:** Form borders, icons, and focus outlines must have a contrast ratio of at least `3:1` against adjacent backgrounds.

### 1.2 Brand Accent Contrast Matrix (Amber-to-Gold Ramp)
To avoid color contrast failures, brand highlights are bound to the following color pairings:

| Background Type | Accent Usage | HEX Code | Contrast Ratio | WCAG Compliance |
| :--- | :--- | :--- | :--- | :--- |
| **White/Light Bg** | Interactive text, links, buttons | `#B45309` (Deep Amber) | **4.8:1** | ✅ Pass (AA) |
| **White/Light Bg** | High-emphasis headers | `#9A3412` (Burnt Sienna) | **6.2:1** | ✅ Pass (AA) |
| **Dark/Obsidian Bg** | Badges, decoration, accents | `#D4AF37` (Saffron Gold) | **5.5:1** | ✅ Pass (AA) |
| **Any Background** | Shared Hover Action | `#92400E` (Dark Amber) | **> 4.5:1** | ✅ Pass (AA) |

> [!CAUTION]
> Saffron Gold (`#D4AF37`) must **never** be used for text on a white/light background, as its contrast ratio is only **2.2:1**, failing accessibility criteria.

---

## ⌨️ 2. Keyboard Navigation & Focus Management

### 2.1 Skip to Content Link
A keyboard user must be able to bypass navigation links instantly.
*   Include a skip link as the first child of the body:
    `<a href="#main-content" className="skip-link">Skip to main content</a>`
*   The skip link must be visually hidden off-screen but slide into focus when tabbed.

### 2.2 Focus Visible Outline
*   Never disable outline rings globally using `outline: none;` without implementing custom focus styling.
*   Standard focus rule:
    `focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2`

### 2.3 Focus Trapping Hook (`useFocusTrap`)
For modal overlays (such as search overlays, chat panels, and mobile menus), you must capture the tab index circle and return focus when closed:

```typescript
// useFocusTrap.ts
import { useEffect, type RefObject } from 'react';

export function useFocusTrap(ref: RefObject<HTMLElement | null>, isOpen: boolean, onClose: () => void) {
  useEffect(() => {
    if (!isOpen || !ref.current) return;

    const container = ref.current;
    const focusable = container.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    
    // Store original active element to return focus on close
    const previousActiveElement = document.activeElement as HTMLElement;

    // Focus the first element on modal mount
    first?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last?.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first?.focus();
        }
      }
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      }
    };

    container.addEventListener('keydown', handleKeyDown);
    return () => {
      container.removeEventListener('keydown', handleKeyDown);
      // Return focus to the trigger button
      previousActiveElement?.focus();
    };
  }, [isOpen, ref, onClose]);
}
```

---

## 🏷️ 3. Semantic Attributes & ARIA Roles
*   **Aria Role tags:** All modals must declare `role="dialog"` and `aria-modal="true"`, pointing `aria-labelledby` directly to the modal title.
*   **Icon Labels:** Buttons displaying only an icon must carry an explicit, descriptive `aria-label`.
*   **Dynamic Announcements (ARIA Live):** 
    *   Use `aria-live="assertive"` for user-triggered dynamic events requiring instant reading, such as search results loading or incoming chatbot messages.
    *   Use `aria-live="polite"` for background notifications.

---

## 🎬 4. Reduced Motion (Prefers-Reduced-Motion)
Ensure Framer Motion transitions respect system-level animation limitations:

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```
