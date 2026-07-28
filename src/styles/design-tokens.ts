/**
 * HeviNet Design System Tokens
 *
 * Centralized design tokens for colors, typography, spacing,
 * shadows, and border radii. Used across all components.
 *
 * These values map directly to the CSS custom properties defined in globals.css.
 */

// ── Color Palette ──────────────────────────────────────────────────────────

export const colors = {
  primary: {
    50: '#FFF7ED',
    100: '#FFEDD5',
    200: '#FED7AA',
    300: '#FDBA74',
    400: '#FB923C',
    500: '#B45309', // Deep Amber
    600: '#92400E', // Dark Amber
    700: '#B45309',
    800: '#9A3412',
    900: '#7C2D12',
  },
  neutral: {
    50: '#FAFAFA',
    100: '#F5F5F5',
    200: '#E5E5E5',
    300: '#D4D4D4',
    400: '#A3A3A3',
    500: '#737373',
    600: '#525252',
    700: '#404040',
    800: '#262626',
    900: '#171717',
  },
  semantic: {
    success: '#22C55E',
    warning: '#EAB308',
    error: '#EF4444',
    info: '#3B82F6',
  },
} as const;

// ── Background & Text Colors ───────────────────────────────────────────────

export const backgrounds = {
  light: {
    primary: '#FFFFFF',
    secondary: '#FAFAFA',
    tertiary: '#F5F5F5',
  },
  dark: {
    primary: '#0A0A0A',
    secondary: '#171717',
    tertiary: '#262626',
  },
} as const;

export const textColors = {
  light: {
    primary: '#171717',
    secondary: '#525252',
    tertiary: '#737373',
    inverse: '#FFFFFF',
  },
  dark: {
    primary: '#FAFAFA',
    secondary: '#D4D4D4',
    tertiary: '#A3A3A3',
    inverse: '#0A0A0A',
  },
} as const;

// ── Typography ─────────────────────────────────────────────────────────────

export const fonts = {
  display: "'Playfair Display', serif",
  heading: "'Plus Jakarta Sans', sans-serif",
  body: "'Inter', sans-serif",
} as const;

export const fontSizes = {
  /** Display — For hero sections */
  display: {
    xl: 'clamp(3rem, 8vw, 6rem)',
    lg: 'clamp(2.5rem, 6vw, 4.5rem)',
    md: 'clamp(2rem, 5vw, 3.5rem)',
    sm: 'clamp(1.75rem, 4vw, 2.5rem)',
  },
  /** Headings */
  h1: 'clamp(2rem, 4vw, 3rem)',
  h2: 'clamp(1.5rem, 3vw, 2.25rem)',
  h3: 'clamp(1.25rem, 2.5vw, 1.75rem)',
  h4: '1.25rem',
  h5: '1.125rem',
  h6: '1rem',
  /** Body */
  body: {
    lg: '1.125rem',
    md: '1rem',
    sm: '0.875rem',
    xs: '0.75rem',
  },
} as const;

export const fontWeights = {
  light: 300,
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800,
  black: 900,
} as const;

export const lineHeights = {
  tight: 1.1,
  snug: 1.25,
  normal: 1.5,
  relaxed: 1.75,
} as const;

export const letterSpacing = {
  tight: '-0.025em',
  normal: '0',
  wide: '0.025em',
  wider: '0.05em',
} as const;

// ── Spacing Scale (4px base) ───────────────────────────────────────────────

export const spacing = {
  0: '0',
  1: '0.25rem',  // 4px
  2: '0.5rem',   // 8px
  3: '0.75rem',  // 12px
  4: '1rem',     // 16px
  5: '1.25rem',  // 20px
  6: '1.5rem',   // 24px
  8: '2rem',     // 32px
  10: '2.5rem',  // 40px
  12: '3rem',    // 48px
  16: '4rem',    // 64px
  20: '5rem',    // 80px
  24: '6rem',    // 96px
  32: '8rem',    // 128px
} as const;

/** Standard section vertical padding */
export const sectionPadding = 'clamp(4rem, 10vw, 8rem)';

// ── Border Radius ──────────────────────────────────────────────────────────

export const radii = {
  none: '0',
  sm: '0.25rem',    // 4px
  md: '0.5rem',     // 8px
  lg: '0.75rem',    // 12px
  xl: '1rem',       // 16px
  '2xl': '1.5rem',  // 24px
  '3xl': '2rem',    // 32px
  full: '9999px',
} as const;

// ── Shadows ────────────────────────────────────────────────────────────────

export const shadows = {
  xs: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
  sm: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
  md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
  lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
  xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
  '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
  /** Colored shadow for primary brand elements */
  primary: '0 10px 40px -10px rgba(249, 115, 22, 0.5)',
  glow: '0 0 40px rgba(249, 115, 22, 0.3)',
} as const;

// ── Breakpoints ────────────────────────────────────────────────────────────

export const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const;

// ── Z-Index Scale ──────────────────────────────────────────────────────────

export const zIndex = {
  hide: -1,
  base: 0,
  dropdown: 10,
  sticky: 20,
  fixed: 30,
  modal: 40,
  popover: 50,
  tooltip: 60,
  toast: 70,
} as const;

// ── Transitions ────────────────────────────────────────────────────────────

export const transitions = {
  fast: '150ms cubic-bezier(0.4, 0, 0.2, 1)',
  normal: '200ms cubic-bezier(0.4, 0, 0.2, 1)',
  slow: '300ms cubic-bezier(0.4, 0, 0.2, 1)',
  spring: '500ms cubic-bezier(0.34, 1.56, 0.64, 1)',
} as const;

// ── Type Export ────────────────────────────────────────────────────────────

export type DesignTokens = {
  colors: typeof colors;
  backgrounds: typeof backgrounds;
  textColors: typeof textColors;
  fonts: typeof fonts;
  fontSizes: typeof fontSizes;
  fontWeights: typeof fontWeights;
  lineHeights: typeof lineHeights;
  letterSpacing: typeof letterSpacing;
  spacing: typeof spacing;
  sectionPadding: typeof sectionPadding;
  radii: typeof radii;
  shadows: typeof shadows;
  breakpoints: typeof breakpoints;
  zIndex: typeof zIndex;
  transitions: typeof transitions;
};
