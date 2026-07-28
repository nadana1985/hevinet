import type { NextConfig } from "next";

/* ── Security Headers ───────────────────────────────────────────────────── */
const securityHeaders = [
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-eval' 'unsafe-inline'",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "img-src 'self' data: https: blob:",
      "font-src 'self' https://fonts.gstatic.com",
      "connect-src 'self' https://vitals.vercel-insights.com",
      "frame-ancestors 'none'",
      "base-uri 'self'",
      "form-action 'self'",
      "upgrade-insecure-requests",
    ].join("; "),
  },
  {
    key: "X-Frame-Options",
    value: "DENY",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  {
    key: "X-XSS-Protection",
    value: "1; mode=block",
  },
];

/* ── Next.js Config ─────────────────────────────────────────────────────── */
const nextConfig: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
  async redirects() {
    return [
      { source: "/products/spice-001", destination: "/products/spices/turmeric", permanent: true },
      { source: "/products/spice-002", destination: "/products/spices/red-chili", permanent: true },
      { source: "/products/spice-003", destination: "/products/spices/cardamom", permanent: true },
      { source: "/products/spice-004", destination: "/products/spices/mixed-collection", permanent: true },
      { source: "/products/food-001", destination: "/products/food/basmati", permanent: true },
      { source: "/products/food-002", destination: "/products/food/a2-bilona", permanent: true },
      { source: "/products/food-003", destination: "/products/food/food-products", permanent: true },
      { source: "/products/toy-001", destination: "/products/toys/wooden-set", permanent: true },
      { source: "/products/toy-002", destination: "/products/toys/building-blocks", permanent: true },
      { source: "/products/toy-003", destination: "/products/toys/kids-toys-collection", permanent: true },
    ];
  },
};

export default nextConfig;
