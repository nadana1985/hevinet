# 🚀 HeviNet.in — Complete Website Improvement Plan
## From Current State to 10/10 Excellence

**Current Score:** 4.9/10  
**Target Score:** 10/10  
**Last Updated:** July 27, 2026

---

## 📋 Table of Contents

1. [Executive Summary](#1-executive-summary)
2. [Current State Audit](#2-current-state-audit)
3. [Visual Design Improvements](#3-visual-design-improvements)
4. [User Experience (UX) Enhancements](#4-user-experience-ux-enhancements)
5. [Content Strategy & Copywriting](#5-content-strategy--copywriting)
6. [Animation & Micro-Interactions](#6-animation--micro-interactions)
7. [Dark Mode Implementation](#7-dark-mode-implementation)
8. [Trust & Social Proof](#8-trust--social-proof)
9. [Conversion Rate Optimization (CRO)](#9-conversion-rate-optimization-cro)
10. [Technical Performance](#10-technical-performance)
11. [SEO & Discoverability](#11-seo--discoverability)
12. [Accessibility (WCAG 2.1 AA)](#12-accessibility-wcag-21-aa)
13. [Mobile Experience](#13-mobile-experience)
14. [Security Enhancements](#14-security-enhancements)
15. [Analytics & Monitoring](#15-analytics--monitoring)
16. [AI & Chatbot Integration](#16-ai--chatbot-integration)
17. [Page-by-Page Redesign Guide](#17-page-by-page-redesign-guide)
18. [Component Library](#18-component-library)
19. [Implementation Roadmap](#19-implementation-roadmap)
20. [Success Metrics & KPIs](#20-success-metrics--kpis)

---

## 1. Executive Summary

### Current State
HeviNet.in is a B2B trading company website built with Next.js. It has a clean, professional foundation but lacks modern design elements, animations, trust signals, and conversion optimization that 2025-2026 standards demand.

### What's Working ✅
- Clean, minimalist layout
- Professional Inter font family
- Next.js framework (good performance base)
- Sticky navigation
- Basic responsive design
- Orange accent color scheme
- Clean white space usage

### What Needs Improvement ❌
- No dark mode
- No animations or micro-interactions
- Missing trust signals (client logos, testimonials, certifications)
- Weak conversion elements (CTAs)
- No video/dynamic hero
- Missing social proof
- No AI chatbot
- Basic hero section
- Placeholder category pages
- Missing legal pages (Privacy, Terms)
- No structured data for SEO
- Basic footer
- No interactive elements

---

## 2. Current State Audit

### 2.1 Pages Identified

| Page | URL | Status | Notes |
|------|-----|--------|-------|
| Home | `/` | ✅ Live | Main landing page |
| Products | `/products` | ⚠️ Partial | Category listings |
| About | `/about` | ✅ Live | Company information |
| Contact | `/contact` | ✅ Live | Contact form |
| Admin | `/admin` | ❌ 404 | Restricted/error page |

### 2.2 Navigation Structure

```
Header:
├── Home
├── Products (dropdown)
│   ├── Spices
│   ├── Rice & Pulses
│   ├── Flowers
│   ├── Tea & Coffee
│   └── Kids Dress
├── About
└── Contact
```

### 2.3 Footer Elements
- Company name & tagline
- Quick links
- Contact information
- Social media links
- Copyright notice

### 2.4 Forms
- Contact form (Name, Email, Phone, Message)

### 2.5 External Links
- Social media profiles (Instagram, LinkedIn, etc.)

### 2.6 Meta Tags
- Title: "HeviNet Trading — Premium Indian Products"
- Description: Present but needs optimization

---

## 3. Visual Design Improvements

### 3.1 Color Palette Upgrade

#### Current
```
Primary: Orange (#F97316 or similar)
Background: White (#FFFFFF)
Text: Dark gray/black
```

#### Proposed 10/10 Palette

```css
/* Light Mode */
:root {
  /* Primary */
  --color-primary-50: #FFF7ED;
  --color-primary-100: #FFEDD5;
  --color-primary-200: #FED7AA;
  --color-primary-300: #FDBA74;
  --color-primary-400: #FB923C;
  --color-primary-500: #F97316; /* Main Orange */
  --color-primary-600: #EA580C;
  --color-primary-700: #C2410C;
  
  /* Neutrals */
  --color-neutral-50: #FAFAFA;
  --color-neutral-100: #F5F5F5;
  --color-neutral-200: #E5E5E5;
  --color-neutral-300: #D4D4D4;
  --color-neutral-400: #A3A3A3;
  --color-neutral-500: #737373;
  --color-neutral-600: #525252;
  --color-neutral-700: #404040;
  --color-neutral-800: #262626;
  --color-neutral-900: #171717;
  
  /* Semantic */
  --color-success: #22C55E;
  --color-warning: #EAB308;
  --color-error: #EF4444;
  --color-info: #3B82F6;
  
  /* Backgrounds */
  --bg-primary: #FFFFFF;
  --bg-secondary: #FAFAFA;
  --bg-tertiary: #F5F5F5;
  
  /* Text */
  --text-primary: #171717;
  --text-secondary: #525252;
  --text-tertiary: #737373;
  --text-inverse: #FFFFFF;
}

/* Dark Mode */
[data-theme="dark"] {
  --bg-primary: #0A0A0A;
  --bg-secondary: #171717;
  --bg-tertiary: #262626;
  
  --text-primary: #FAFAFA;
  --text-secondary: #D4D4D4;
  --text-tertiary: #A3A3A3;
  
  --color-primary-500: #FB923C; /* Lighter orange for dark bg */
}
```

### 3.2 Typography Upgrade

#### Current
- Font: Inter
- Basic heading sizes

#### Proposed 10/10 Typography

```css
/* Font Imports */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

/* Typography Scale */
:root {
  /* Display - For hero sections */
  --font-display: 'Plus Jakarta Sans', sans-serif;
  --font-size-display-xl: clamp(3rem, 8vw, 6rem);
  --font-size-display-lg: clamp(2.5rem, 6vw, 4.5rem);
  --font-size-display-md: clamp(2rem, 5vw, 3.5rem);
  --font-size-display-sm: clamp(1.75rem, 4vw, 2.5rem);
  
  /* Headings */
  --font-heading: 'Plus Jakarta Sans', sans-serif;
  --font-size-h1: clamp(2rem, 4vw, 3rem);
  --font-size-h2: clamp(1.5rem, 3vw, 2.25rem);
  --font-size-h3: clamp(1.25rem, 2.5vw, 1.75rem);
  --font-size-h4: 1.25rem;
  --font-size-h5: 1.125rem;
  --font-size-h6: 1rem;
  
  /* Body */
  --font-body: 'Inter', sans-serif;
  --font-size-body-lg: 1.125rem;
  --font-size-body-md: 1rem;
  --font-size-body-sm: 0.875rem;
  --font-size-body-xs: 0.75rem;
  
  /* Line Heights */
  --line-height-tight: 1.1;
  --line-height-snug: 1.25;
  --line-height-normal: 1.5;
  --line-height-relaxed: 1.75;
  
  /* Letter Spacing */
  --letter-spacing-tight: -0.025em;
  --letter-spacing-normal: 0;
  --letter-spacing-wide: 0.025em;
  --letter-spacing-wider: 0.05em;
}

/* Heading Styles */
h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-heading);
  font-weight: 700;
  letter-spacing: var(--letter-spacing-tight);
  line-height: var(--line-height-tight);
}

/* Display Text */
.display-xl {
  font-family: var(--font-display);
  font-size: var(--font-size-display-xl);
  font-weight: 800;
  letter-spacing: -0.03em;
  line-height: 1;
}

/* Body Text */
body {
  font-family: var(--font-body);
  font-size: var(--font-size-body-md);
  line-height: var(--line-height-normal);
}
```

### 3.3 Spacing System

```css
:root {
  /* Spacing Scale (8px base) */
  --space-0: 0;
  --space-1: 0.25rem; /* 4px */
  --space-2: 0.5rem;  /* 8px */
  --space-3: 0.75rem; /* 12px */
  --space-4: 1rem;    /* 16px */
  --space-5: 1.25rem; /* 20px */
  --space-6: 1.5rem;  /* 24px */
  --space-8: 2rem;    /* 32px */
  --space-10: 2.5rem; /* 40px */
  --space-12: 3rem;   /* 48px */
  --space-16: 4rem;   /* 64px */
  --space-20: 5rem;   /* 80px */
  --space-24: 6rem;   /* 96px */
  --space-32: 8rem;   /* 128px */
  
  /* Section Spacing */
  --section-padding: clamp(4rem, 10vw, 8rem);
}
```

### 3.4 Border Radius System

```css
:root {
  --radius-none: 0;
  --radius-sm: 0.25rem;   /* 4px */
  --radius-md: 0.5rem;    /* 8px */
  --radius-lg: 0.75rem;   /* 12px */
  --radius-xl: 1rem;      /* 16px */
  --radius-2xl: 1.5rem;   /* 24px */
  --radius-3xl: 2rem;     /* 32px */
  --radius-full: 9999px;
}
```

### 3.5 Shadow System

```css
:root {
  /* Shadows */
  --shadow-xs: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  --shadow-sm: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  --shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
  --shadow-2xl: 0 25px 50px -12px rgb(0 0 0 / 0.25);
  
  /* Colored Shadows */
  --shadow-primary: 0 10px 40px -10px rgba(249, 115, 22, 0.5);
  --shadow-glow: 0 0 40px rgba(249, 115, 22, 0.3);
}
```

---

## 4. User Experience (UX) Enhancements

### 4.1 Navigation Redesign

#### Current Issues
- Basic dropdown for products
- No mega menu
- No search functionality
- No language selector (if needed)

#### Proposed Improvements

```tsx
// Enhanced Navigation Component
const Navigation = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-neutral-100">
      {/* Top Bar - Contact Info & Social */}
      <div className="bg-neutral-900 text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <span>📞 +91 XXXXX XXXXX</span>
            <span>✉️ info@hevinet.in</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" aria-label="Instagram">📷</a>
            <a href="#" aria-label="LinkedIn">💼</a>
          </div>
        </div>
      </div>
      
      {/* Main Nav */}
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-primary-500 rounded-xl flex items-center justify-center">
            <span className="text-white font-bold text-xl">H</span>
          </div>
          <span className="font-heading font-bold text-xl">HeviNet</span>
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          <NavLink href="/">Home</NavLink>
          <MegaMenuDropdown />
          <NavLink href="/about">About</NavLink>
          <NavLink href="/contact">Contact</NavLink>
        </div>
        
        {/* Actions */}
        <div className="flex items-center gap-4">
          {/* Search */}
          <button className="p-2 hover:bg-neutral-100 rounded-lg transition-colors">
            <SearchIcon />
          </button>
          
          {/* Dark Mode Toggle */}
          <ThemeToggle />
          
          {/* CTA Button */}
          <Link href="/contact" className="hidden sm:inline-flex bg-primary-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-primary-600 transition-all hover:shadow-lg hover:shadow-primary/30">
            Get Quote
          </Link>
          
          {/* Mobile Menu Button */}
          <button className="lg:hidden p-2" aria-label="Menu">
            <MenuIcon />
          </button>
        </div>
      </div>
    </nav>
  );
};
```

### 4.2 Mega Menu for Products

```tsx
const MegaMenuDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="relative" onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
      <button className="flex items-center gap-1 font-medium hover:text-primary-500 transition-colors">
        Products <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute top-full left-1/2 -translate-x-1/2 pt-4"
          >
            <div className="bg-white rounded-2xl shadow-2xl border border-neutral-100 p-6 min-w-[600px]">
              <div className="grid grid-cols-3 gap-6">
                {/* Category 1 */}
                <div className="space-y-3">
                  <h3 className="font-semibold text-neutral-900">Spices</h3>
                  <ul className="space-y-2">
                    <li><a href="#" className="text-neutral-600 hover:text-primary-500 transition-colors">Turmeric</a></li>
                    <li><a href="#" className="text-neutral-600 hover:text-primary-500 transition-colors">Red Chili</a></li>
                    <li><a href="#" className="text-neutral-600 hover:text-primary-500 transition-colors">Cumin</a></li>
                  </ul>
                </div>
                {/* Category 2 */}
                <div className="space-y-3">
                  <h3 className="font-semibold text-neutral-900">Rice & Pulses</h3>
                  <ul className="space-y-2">
                    <li><a href="#" className="text-neutral-600 hover:text-primary-500 transition-colors">Basmati Rice</a></li>
                    <li><a href="#" className="text-neutral-600 hover:text-primary-500 transition-colors">Lentils</a></li>
                  </ul>
                </div>
                {/* Featured */}
                <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl p-4">
                  <img src="/featured-product.jpg" alt="Featured" className="w-full h-32 object-cover rounded-lg mb-3" />
                  <p className="font-semibold text-primary-700">Featured Product</p>
                  <p className="text-sm text-primary-600">Premium Turmeric Export</p>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-neutral-100">
                <a href="/products" className="text-primary-500 font-medium hover:text-primary-600 transition-colors">
                  View All Products →
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
```

### 4.3 Search Functionality

```tsx
const SearchModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);
  
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-start justify-center pt-[20vh]"
          onClick={() => setIsOpen(false)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl mx-4 overflow-hidden"
            onClick={e => e.stopPropagation()}
          >
            <div className="p-4 border-b border-neutral-100 flex items-center gap-3">
              <SearchIcon className="w-5 h-5 text-neutral-400" />
              <input
                type="text"
                placeholder="Search products, services..."
                value={query}
                onChange={e => setQuery(e.target.value)}
                className="flex-1 outline-none text-lg"
                autoFocus
              />
              <kbd className="hidden sm:inline-flex text-xs bg-neutral-100 px-2 py-1 rounded">ESC</kbd>
            </div>
            <div className="p-4 max-h-[400px] overflow-y-auto">
              {/* Search results */}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
```

### 4.4 Breadcrumbs

```tsx
const Breadcrumbs = ({ items }: { items: { label: string; href?: string }[] }) => {
  return (
    <nav aria-label="Breadcrumb" className="py-4">
      <ol className="flex items-center gap-2 text-sm">
        <li>
          <Link href="/" className="text-neutral-500 hover:text-primary-500 transition-colors">
            Home
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-2">
            <span className="text-neutral-300">/</span>
            {item.href ? (
              <Link href={item.href} className="text-neutral-500 hover:text-primary-500 transition-colors">
                {item.label}
              </Link>
            ) : (
              <span className="text-neutral-900 font-medium">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};
```

---

## 5. Content Strategy & Copywriting

### 5.1 Hero Section Copy Upgrade

#### Current
```
"Premium Indian Products"
```

#### Proposed (10/10)

**Option A (Value Proposition Focus):**
```
Headline: "Exporting India's Finest to the World"
Subheadline: "Premium spices, rice, and agricultural products sourced directly from Indian farms. Trusted by 500+ global buyers across 30+ countries."
CTA: "Explore Our Products" | "Get a Free Quote"
```

**Option B (Emotional Connection):**
```
Headline: "From Indian Fields to Global Tables"
Subheadline: "We bridge the gap between India's rich agricultural heritage and your business needs. Quality-assured, competitively priced, delivered worldwide."
CTA: "View Products" | "Contact Us"
```

**Option C (Trust-First):**
```
Headline: "Your Trusted Partner in Indian Exports"
Subheadline: "10+ years of excellence in sourcing and exporting premium Indian agricultural products. ISO certified. 100% quality guaranteed."
CTA: "See Our Certifications" | "Request Quote"
```

### 5.2 Section Copy Guidelines

```markdown
## Value Proposition Section

### Before (Current)
"Quality Products"

### After (10/10)
"Uncompromising Quality"
"Every product undergoes rigorous quality checks at our state-of-the-art facilities. From sourcing to shipping, we maintain international standards at every step."

### Key Principles:
1. **Specificity** - Use numbers (500+ clients, 30+ countries, 10+ years)
2. **Benefit-First** - Lead with what the customer gains
3. **Social Proof** - Include statistics and testimonials
4. **Clear CTAs** - Every section needs a next step
```

### 5.3 Content Sections to Add

```markdown
## Section: Why Choose HeviNet

1. **Direct Sourcing** - "We source directly from farms, eliminating middlemen"
2. **Quality Certified** - "ISO 22000, HACCP, and FSSAI certified"
3. **Global Logistics** - "Seamless shipping to 30+ countries"
4. **Custom Packaging** - "Tailored solutions for your market needs"
5. **Competitive Pricing** - "Best value without compromising quality"
6. **24/7 Support** - "Dedicated account manager for every client"

## Section: Our Process

1. Inquiry → 2. Consultation → 3. Sampling → 4. Order → 5. Quality Check → 6. Shipping → 7. Delivery

## Section: Testimonials

3-5 client testimonials with:
- Client name
- Company name
- Country
- Photo
- Specific quote about results

## Section: Blog/Insights

- "Top 5 Indian Spices in Global Demand"
- "Understanding Indian Rice Varieties"
- "Quality Standards in Agricultural Exports"
- "Market Trends: Indian Products Abroad"
```

---

## 6. Animation & Micro-Interactions

### 6.1 CSS Animations Library

```css
/* Fade In Up */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Fade In Scale */
@keyframes fadeInScale {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

/* Slide In Left */
@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Slide In Right */
@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Pulse Glow */
@keyframes pulseGlow {
  0%, 100% {
    box-shadow: 0 0 0 0 rgba(249, 115, 22, 0.4);
  }
  50% {
    box-shadow: 0 0 20px 10px rgba(249, 115, 22, 0);
  }
}

/* Float */
@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

/* Spin Slow */
@keyframes spinSlow {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

/* Gradient Shift */
@keyframes gradientShift {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
```

### 6.2 Framer Motion Components

```tsx
// Animated Section Wrapper
const AnimatedSection = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.section>
  );
};

// Staggered Children
const StaggerContainer = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.1
          }
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const StaggerItem = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
      }}
      transition={{ duration: 0.5 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Hover Scale Card
const HoverCard = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -5 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Parallax Section
const ParallaxSection = ({ children, speed = 0.5 }: { children: React.ReactNode; speed?: number }) => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, speed * 100]);
  
  return (
    <motion.div style={{ y }}>
      {children}
    </motion.div>
  );
};
```

### 6.3 Scroll-Triggered Animations

```tsx
// Using Intersection Observer
const useScrollAnimation = (threshold = 0.1) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold }
    );
    
    if (ref.current) {
      observer.observe(ref.current);
    }
    
    return () => observer.disconnect();
  }, [threshold]);
  
  return { ref, isVisible };
};

// Usage
const AnimatedComponent = () => {
  const { ref, isVisible } = useScrollAnimation();
  
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      Content here
    </div>
  );
};
```

### 6.4 Button Micro-Interactions

```css
/* Primary Button */
.btn-primary {
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
}

.btn-primary::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
  transition: left 0.5s ease;
}

.btn-primary:hover::before {
  left: 100%;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 40px -10px rgba(249, 115, 22, 0.5);
}

.btn-primary:active {
  transform: translateY(0);
}

/* Ghost Button */
.btn-ghost {
  position: relative;
  transition: all 0.3s ease;
}

.btn-ghost::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: currentColor;
  transition: width 0.3s ease;
}

.btn-ghost:hover::after {
  width: 100%;
}
```

### 6.5 Card Hover Effects

```css
/* Card Lift Effect */
.card {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.card:hover {
  transform: translateY(-8px);
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.15);
}

/* Card Image Zoom */
.card-image {
  overflow: hidden;
}

.card-image img {
  transition: transform 0.5s ease;
}

.card:hover .card-image img {
  transform: scale(1.1);
}

/* Card Border Glow */
.card-glow {
  position: relative;
}

.card-glow::before {
  content: '';
  position: absolute;
  inset: -2px;
  background: linear-gradient(45deg, var(--color-primary), var(--color-info), var(--color-primary));
  border-radius: inherit;
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: -1;
}

.card-glow:hover::before {
  opacity: 1;
}
```

---

## 7. Dark Mode Implementation

### 7.1 Theme Provider

```tsx
// ThemeContext.tsx
'use client';

import { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark' | 'system';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  resolvedTheme: 'light' | 'dark';
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('system');
  const [resolvedTheme, setResolvedTheme] = useState<'light' | 'dark'>('light');
  
  useEffect(() => {
    const root = document.documentElement;
    
    const applyTheme = () => {
      let effectiveTheme: 'light' | 'dark';
      
      if (theme === 'system') {
        effectiveTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      } else {
        effectiveTheme = theme;
      }
      
      setResolvedTheme(effectiveTheme);
      root.setAttribute('data-theme', effectiveTheme);
      root.classList.toggle('dark', effectiveTheme === 'dark');
    };
    
    applyTheme();
    
    if (theme === 'system') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      mediaQuery.addEventListener('change', applyTheme);
      return () => mediaQuery.removeEventListener('change', applyTheme);
    }
  }, [theme]);
  
  return (
    <ThemeContext.Provider value={{ theme, setTheme, resolvedTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within ThemeProvider');
  return context;
};
```

### 7.2 Theme Toggle Component

```tsx
// ThemeToggle.tsx
'use client';

import { useTheme } from '@/contexts/ThemeContext';
import { motion, AnimatePresence } from 'framer-motion';

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  
  return (
    <button
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
      className="relative p-2 rounded-xl bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
      aria-label={`Switch to ${resolvedTheme === 'dark' ? 'light' : 'dark'} mode`}
    >
      <AnimatePresence mode="wait">
        {resolvedTheme === 'dark' ? (
          <motion.div
            key="sun"
            initial={{ rotate: -90, scale: 0 }}
            animate={{ rotate: 0, scale: 1 }}
            exit={{ rotate: 90, scale: 0 }}
            transition={{ duration: 0.2 }}
          >
            <SunIcon className="w-5 h-5 text-yellow-500" />
          </motion.div>
        ) : (
          <motion.div
            key="moon"
            initial={{ rotate: 90, scale: 0 }}
            animate={{ rotate: 0, scale: 1 }}
            exit={{ rotate: -90, scale: 0 }}
            transition={{ duration: 0.2 }}
          >
            <MoonIcon className="w-5 h-5 text-blue-500" />
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
}
```

### 7.3 Dark Mode CSS Variables

```css
/* Dark Mode Overrides */
[data-theme="dark"] {
  /* Backgrounds */
  --bg-primary: #0A0A0A;
  --bg-secondary: #141414;
  --bg-tertiary: #1F1F1F;
  --bg-elevated: #262626;
  
  /* Text */
  --text-primary: #FAFAFA;
  --text-secondary: #D4D4D4;
  --text-tertiary: #A3A3A3;
  
  /* Borders */
  --border-default: #262626;
  --border-subtle: #1F1F1F;
  
  /* Shadows */
  --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.3);
  --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.4);
  --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.5);
  
  /* Primary Adjustments */
  --color-primary-400: #FB923C;
  --color-primary-500: #F97316;
}
```

---

## 8. Trust & Social Proof

### 8.1 Client Logo Section

```tsx
const ClientLogos = () => {
  const logos = [
    { name: 'Client 1', logo: '/clients/client1.svg' },
    { name: 'Client 2', logo: '/clients/client2.svg' },
    { name: 'Client 3', logo: '/clients/client3.svg' },
    { name: 'Client 4', logo: '/clients/client4.svg' },
    { name: 'Client 5', logo: '/clients/client5.svg' },
    { name: 'Client 6', logo: '/clients/client6.svg' },
  ];
  
  return (
    <section className="py-16 bg-neutral-50 dark:bg-neutral-900">
      <div className="max-w-7xl mx-auto px-4">
        <p className="text-center text-neutral-500 mb-8">Trusted by leading companies worldwide</p>
        <div className="flex flex-wrap justify-center items-center gap-12 opacity-60">
          {logos.map((client, index) => (
            <motion.img
              key={index}
              src={client.logo}
              alt={client.name}
              className="h-12 w-auto grayscale hover:grayscale-0 transition-all duration-300"
              whileHover={{ scale: 1.1 }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
```

### 8.2 Testimonials Section

```tsx
const Testimonials = () => {
  const testimonials = [
    {
      quote: "HeviNet has been our trusted spice supplier for 5 years. Their quality is unmatched.",
      author: "John Smith",
      company: "Global Foods Ltd",
      country: "UK",
      avatar: "/testimonials/john.jpg",
      rating: 5
    },
    // More testimonials...
  ];
  
  return (
    <section className="py-24 bg-white dark:bg-neutral-900">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeader
          title="What Our Clients Say"
          subtitle="Trusted by businesses across 30+ countries"
        />
        
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-neutral-50 dark:bg-neutral-800 rounded-2xl p-6"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-neutral-600 dark:text-neutral-300 mb-6">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-3">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-neutral-500">
                    {testimonial.company}, {testimonial.country}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
```

### 8.3 Statistics Counter

```tsx
const StatsSection = () => {
  const stats = [
    { value: 500, suffix: '+', label: 'Happy Clients' },
    { value: 30, suffix: '+', label: 'Countries Served' },
    { value: 10, suffix: '+', label: 'Years Experience' },
    { value: 99, suffix: '%', label: 'Quality Rate' },
  ];
  
  return (
    <section className="py-20 bg-gradient-to-r from-primary-500 to-primary-600">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center text-white"
            >
              <div className="text-4xl md:text-5xl font-bold mb-2">
                <Counter end={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-white/80">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
```

### 8.4 Certifications & Badges

```tsx
const Certifications = () => {
  const certs = [
    { name: 'ISO 22000', image: '/certs/iso22000.svg' },
    { name: 'HACCP', image: '/certs/haccp.svg' },
    { name: 'FSSAI', image: '/certs/fssai.svg' },
    { name: 'Organic Certified', image: '/certs/organic.svg' },
  ];
  
  return (
    <section className="py-16 border-t border-neutral-100 dark:border-neutral-800">
      <div className="max-w-7xl mx-auto px-4">
        <p className="text-center text-neutral-500 mb-8">Our Certifications</p>
        <div className="flex flex-wrap justify-center items-center gap-8">
          {certs.map((cert, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3 px-6 py-4 bg-neutral-50 dark:bg-neutral-800 rounded-xl"
            >
              <img src={cert.image} alt={cert.name} className="h-10 w-10" />
              <span className="font-medium">{cert.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
```

---

## 9. Conversion Rate Optimization (CRO)

### 9.1 CTA Button Hierarchy

```css
/* Primary CTA - Most Important Action */
.cta-primary {
  @apply bg-primary-500 text-white px-8 py-4 rounded-xl font-semibold text-lg
         hover:bg-primary-600 transition-all duration-300
         hover:shadow-lg hover:shadow-primary/30
         active:scale-95;
}

/* Secondary CTA - Alternative Action */
.cta-secondary {
  @apply bg-white text-primary-500 border-2 border-primary-500 px-8 py-4 rounded-xl font-semibold text-lg
         hover:bg-primary-50 transition-all duration-300
         active:scale-95;
}

/* Ghost CTA - Low Emphasis */
.cta-ghost {
  @apply text-primary-500 px-4 py-2 font-medium
         hover:bg-primary-50 rounded-lg transition-all duration-300;
}
```

### 9.2 Strategic CTA Placement

```markdown
## CTA Placement Map

### Header
- "Get a Quote" button (Primary)

### Hero Section
- "Explore Products" (Secondary)
- "Get Free Quote" (Primary)

### After Value Proposition
- "Learn More About Our Process" (Ghost)

### After Product Listings
- "View All Products" (Secondary)
- "Request Product Sample" (Primary)

### After Testimonials
- "Join 500+ Happy Clients" (Primary)

### Footer
- "Contact Us Today" (Primary)
- "Download Catalog" (Secondary)

### Floating Elements
- WhatsApp Chat Button (Bottom Right)
- "Back to Top" Button (Bottom Left)
```

### 9.3 Lead Capture Forms

```tsx
const LeadCaptureForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    interest: '',
    message: ''
  });
  
  return (
    <section className="py-24 bg-gradient-to-br from-neutral-900 to-neutral-800">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white dark:bg-neutral-900 rounded-3xl p-8 md:p-12 shadow-2xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Get a Free Quote</h2>
            <p className="text-neutral-600">Fill out the form below and we'll get back to you within 24 hours</p>
          </div>
          
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <InputField label="Full Name" name="name" required />
              <InputField label="Email Address" name="email" type="email" required />
              <InputField label="Company Name" name="company" />
              <InputField label="Phone Number" name="phone" type="tel" />
            </div>
            
            <SelectField
              label="Product Interest"
              name="interest"
              options={['Spices', 'Rice & Pulses', 'Tea & Coffee', 'Other']}
            />
            
            <TextAreaField label="Message" name="message" rows={4} />
            
            <button type="submit" className="cta-primary w-full">
              Submit Inquiry
            </button>
            
            <p className="text-center text-sm text-neutral-500">
              By submitting, you agree to our Privacy Policy
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};
```

### 9.4 Exit-Intent Popup

```tsx
const ExitIntentPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasShown, setHasShown] = useState(false);
  
  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShown) {
        setIsOpen(true);
        setHasShown(true);
      }
    };
    
    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [hasShown]);
  
  if (!isOpen) return null;
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl"
      >
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 p-2 hover:bg-neutral-100 rounded-full"
        >
          <XIcon className="w-5 h-5" />
        </button>
        
        <div className="text-center">
          <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <GiftIcon className="w-8 h-8 text-primary-500" />
          </div>
          <h3 className="text-2xl font-bold mb-2">Wait! Get 10% Off</h3>
          <p className="text-neutral-600 mb-6">
            Sign up for our newsletter and receive 10% off your first order
          </p>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-3 border border-neutral-200 rounded-xl mb-4"
          />
          <button className="cta-primary w-full">
            Get My Discount
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};
```

---

## 10. Technical Performance

### 10.1 Image Optimization

```tsx
import Image from 'next/image';

// Optimized Image Component
const OptimizedImage = ({
  src,
  alt,
  width,
  height,
  className,
  priority = false
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
}) => {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        placeholder="blur"
        blurDataURL={`data:image/svg+xml;base64,...`}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-cover"
      />
    </div>
  );
};
```

### 10.2 Lazy Loading Components

```tsx
// Dynamic imports for below-the-fold content
const Testimonials = dynamic(() => import('@/components/Testimonials'), {
  loading: () => <TestimonialsSkeleton />,
  ssr: false
});

const StatsSection = dynamic(() => import('@/components/StatsSection'), {
  loading: () => <StatsSkeleton />
});

const ContactForm = dynamic(() => import('@/components/ContactForm'), {
  loading: () => <FormSkeleton />
});
```

### 10.3 Performance Checklist

```markdown
## Performance Optimization Checklist

### Images
- [ ] Convert all images to WebP/AVIF format
- [ ] Implement responsive images with srcset
- [ ] Add lazy loading to below-the-fold images
- [ ] Use blur placeholders for image loading
- [ ] Optimize image dimensions (no oversized images)
- [ ] Use Next.js Image component consistently

### Code
- [ ] Enable code splitting
- [ ] Implement dynamic imports
- [ ] Tree-shake unused code
- [ ] Minimize bundle size
- [ ] Use SWC compiler (Next.js default)

### Caching
- [ ] Set up proper cache headers
- [ ] Implement service worker for static assets
- [ ] Use CDN for global delivery
- [ ] Enable browser caching

### Core Web Vitals
- [ ] LCP < 2.5s (Largest Contentful Paint)
- [ ] FID < 100ms (First Input Delay)
- [ ] CLS < 0.1 (Cumulative Layout Shift)
- [ ] TTFB < 800ms (Time to First Byte)

### Tools for Testing
- Google PageSpeed Insights
- Lighthouse
- WebPageTest
- GTmetrix
```

---

## 11. SEO & Discoverability

### 11.1 Meta Tags Template

```tsx
// Head.tsx or layout.tsx metadata
export const metadata = {
  title: {
    default: 'HeviNet Trading — Premium Indian Exports | Spices, Rice & More',
    template: '%s | HeviNet Trading'
  },
  description: 'HeviNet Trading is a leading exporter of premium Indian agricultural products including spices, rice, pulses, tea, and coffee. Trusted by 500+ global buyers across 30+ countries.',
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
    'pulses exporter India'
  ],
  authors: [{ name: 'HeviNet Trading' }],
  creator: 'HeviNet Trading',
  publisher: 'HeviNet Trading',
  formatDetection: {
    telephone: true,
    email: true,
    address: true
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://hevinet.in',
    siteName: 'HeviNet Trading',
    title: 'HeviNet Trading — Premium Indian Exports',
    description: 'Leading exporter of premium Indian agricultural products. Spices, rice, pulses, and more.',
    images: [
      {
        url: 'https://hevinet.in/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'HeviNet Trading'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HeviNet Trading — Premium Indian Exports',
    description: 'Leading exporter of premium Indian agricultural products.',
    images: ['https://hevinet.in/twitter-image.jpg'],
    creator: '@hevinet'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  alternates: {
    canonical: 'https://hevinet.in'
  }
};
```

### 11.2 Structured Data (JSON-LD)

```tsx
// Structured Data for Organization
const OrganizationSchema = () => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'HeviNet Trading',
    url: 'https://hevinet.in',
    logo: 'https://hevinet.in/logo.png',
    description: 'Leading exporter of premium Indian agricultural products',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'IN',
      addressRegion: 'Your State'
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+91-XXXXXXXXXX',
      contactType: 'sales',
      availableLanguage: ['English', 'Hindi']
    },
    sameAs: [
      'https://www.instagram.com/hevinet',
      'https://www.linkedin.com/company/hevinet'
    ]
  };
  
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

// Structured Data for Products
const ProductSchema = ({ product }: { product: any }) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    image: product.image,
    brand: {
      '@type': 'Brand',
      name: 'HeviNet Trading'
    },
    offers: {
      '@type': 'Offer',
      url: `https://hevinet.in/products/${product.slug}`,
      priceCurrency: 'USD',
      price: product.price,
      availability: 'https://schema.org/InStock'
    }
  };
  
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

// Breadcrumb Schema
const BreadcrumbSchema = ({ items }: { items: any[] }) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url
    }))
  };
  
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};
```

### 11.3 Sitemap & Robots

```tsx
// app/sitemap.ts
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://hevinet.in';
  
  const products = ['spices', 'rice', 'pulses', 'tea', 'coffee']; // Dynamic from DB
  
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8
    },
    ...products.map(product => ({
      url: `${baseUrl}/products/${product}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9
    }))
  ];
}

// app/robots.ts
import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/admin'
    },
    sitemap: 'https://hevinet.in/sitemap.xml'
  };
}
```

---

## 12. Accessibility (WCAG 2.1 AA)

### 12.1 Color Contrast

```css
/* Ensure all text meets WCAG AA contrast requirements */

/* Normal Text (4.5:1 minimum) */
--text-primary: #171717;     /* On white: 15.4:1 ✅ */
--text-secondary: #525252;   /* On white: 7.1:1 ✅ */
--text-tertiary: #737373;    /* On white: 4.6:1 ✅ */

/* Large Text (3:1 minimum) */
--heading-primary: #000000;  /* On white: 21:1 ✅ */
--heading-secondary: #262626; /* On white: 12.6:1 ✅ */

/* Primary Color on White */
--primary-on-white: #C2410C; /* 4.6:1 ✅ */
```

### 12.2 Focus States

```css
/* Visible Focus Indicators */
*:focus-visible {
  outline: 2px solid var(--color-primary-500);
  outline-offset: 2px;
}

/* Skip to Main Content Link */
.skip-link {
  position: absolute;
  top: -40px;
  left: 0;
  background: var(--color-primary-500);
  color: white;
  padding: 8px 16px;
  z-index: 100;
  transition: top 0.3s;
}

.skip-link:focus {
  top: 0;
}
```

### 12.3 ARIA Labels

```tsx
// Navigation
<nav aria-label="Main navigation">
<nav aria-label="Footer navigation">

// Buttons
<button aria-label="Close menu">
<button aria-label="Search">
<button aria-label="Toggle dark mode">

// Images
<img alt="Description of image" />

// Forms
<label htmlFor="email">Email Address</label>
<input id="email" aria-required="true" aria-invalid={hasError} />
<div aria-live="polite">{errorMessage}</div>

// Modals
<div role="dialog" aria-modal="true" aria-labelledby="dialog-title">

// Loading States
<div aria-busy="true" aria-label="Loading content">
```

### 12.4 Keyboard Navigation

```tsx
// Focus Trap for Modals
const useFocusTrap = (ref: React.RefObject<HTMLElement>) => {
  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    
    const focusableElements = element.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];
    
    const handleTab = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;
      
      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          lastElement.focus();
          e.preventDefault();
        }
      } else {
        if (document.activeElement === lastElement) {
          firstElement.focus();
          e.preventDefault();
        }
      }
    };
    
    element.addEventListener('keydown', handleTab);
    firstElement?.focus();
    
    return () => element.removeEventListener('keydown', handleTab);
  }, [ref]);
};
```

### 12.5 Accessibility Checklist

```markdown
## WCAG 2.1 AA Compliance Checklist

### Perceivable
- [ ] All images have descriptive alt text
- [ ] Videos have captions/transcripts
- [ ] Color is not the only means of conveying information
- [ ] Text contrast ratio meets 4.5:1 for normal text
- [ ] Text can be resized up to 200% without loss of functionality

### Operable
- [ ] All functionality available via keyboard
- [ ] No keyboard traps
- [ ] Skip navigation link provided
- [ ] Page titles are descriptive
- [ ] Focus order is meaningful

### Understandable
- [ ] Language of page is declared (lang="en")
- [ ] Form labels are associated with inputs
- [ ] Error messages are clear and helpful
- [ ] Navigation is consistent across pages

### Robust
- [ ] HTML is valid and well-formed
- [ ] ARIA landmarks are used correctly
- [ ] Status messages use aria-live regions
```

---

## 13. Mobile Experience

### 13.1 Mobile-First CSS

```css
/* Mobile First Approach */

/* Base styles (Mobile) */
.container {
  padding: 1rem;
  max-width: 100%;
}

.grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
}

/* Tablet (768px+) */
@media (min-width: 768px) {
  .container {
    padding: 1.5rem;
  }
  
  .grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }
}

/* Desktop (1024px+) */
@media (min-width: 1024px) {
  .container {
    padding: 2rem;
    max-width: 1280px;
    margin: 0 auto;
  }
  
  .grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }
}

/* Large Desktop (1280px+) */
@media (min-width: 1280px) {
  .container {
    padding: 2rem 3rem;
  }
}
```

### 13.2 Touch Targets

```css
/* Minimum touch target size: 44x44px (Apple) / 48x48px (Google) */

button, a, input, select, textarea {
  min-height: 44px;
  min-width: 44px;
}

/* Mobile Navigation */
.mobile-menu-item {
  padding: 1rem;
  font-size: 1.125rem;
  min-height: 48px;
  display: flex;
  align-items: center;
}

/* Mobile CTA Buttons */
.cta-mobile {
  width: 100%;
  padding: 1rem;
  font-size: 1.125rem;
  min-height: 56px;
}
```

### 13.3 Mobile-Specific Features

```tsx
// Bottom Navigation Bar (Mobile)
const MobileNav = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white dark:bg-neutral-900 border-t border-neutral-200 dark:border-neutral-800 lg:hidden z-50">
      <div className="flex justify-around items-center py-2">
        <MobileNavItem icon={<HomeIcon />} label="Home" href="/" />
        <MobileNavItem icon={<GridIcon />} label="Products" href="/products" />
        <MobileNavItem icon={<ChatIcon />} label="Chat" href="/contact" isSpecial />
        <MobileNavItem icon={<InfoIcon />} label="About" href="/about" />
        <MobileNavItem icon={<PhoneIcon />} label="Call" href="tel:+91XXXXXXXXXX" />
      </div>
    </nav>
  );
};

// Swipeable Product Cards
const SwipeableProducts = ({ products }: { products: Product[] }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  
  return (
    <div
      ref={scrollRef}
      className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 -mx-4 px-4 scrollbar-hide"
    >
      {products.map((product, index) => (
        <div key={index} className="flex-none w-[85vw] snap-center">
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
};
```

### 13.4 Responsive Breakpoints

```css
:root {
  --breakpoint-sm: 640px;
  --breakpoint-md: 768px;
  --breakpoint-lg: 1024px;
  --breakpoint-xl: 1280px;
  --breakpoint-2xl: 1536px;
}
```

---

## 14. Security Enhancements

### 14.1 Security Headers

```typescript
// next.config.js or next.config.ts
const securityHeaders = [
  {
    key: 'Content-Security-Policy',
    value: "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline'; style-src 'self' 'unsafe-inline';"
  },
  {
    key: 'X-Frame-Options',
    value: 'DENY'
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff'
  },
  {
    key: 'Referrer-Policy',
    value: 'strict-origin-when-cross-origin'
  },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=()'
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload'
  }
];

module.exports = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders
      }
    ];
  }
};
```

### 14.2 Form Security

```tsx
// CSRF Protection
const CSRFToken = () => {
  return <input type="hidden" name="csrf_token" value={getCSRFToken()} />;
};

// Rate Limiting
const RateLimiter = () => {
  // Implement on backend
  // Allow 10 submissions per minute per IP
};

// Input Validation
const sanitizeInput = (input: string): string => {
  return input
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;');
};
```

### 14.3 HTTPS & SSL

```markdown
## Security Checklist

- [ ] SSL certificate installed and valid
- [ ] HTTP to HTTPS redirect enabled
- [ ] HSTS headers configured
- [ ] Mixed content warnings resolved
- [ ] Secure cookies configured
- [ ] API endpoints protected
- [ ] Form submissions validated server-side
- [ ] File uploads restricted and scanned
```

---

## 15. Analytics & Monitoring

### 15.1 Google Analytics 4

```tsx
// app/layout.tsx
import { GoogleAnalytics } from '@next/third-parties/google';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <GoogleAnalytics gaId="G-XXXXXXXXXX" />
      </body>
    </html>
  );
}
```

### 15.2 Event Tracking

```tsx
// Track user interactions
const trackEvent = (action: string, category: string, label?: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label
    });
  }
};

// Usage
<button onClick={() => trackEvent('click', 'CTA', 'Get Quote Button')}>
  Get Quote
</button>

// Track conversions
const trackConversion = (value: number) => {
  window.gtag('event', 'conversion', {
    send_to: 'AW-XXXXXXXXXX/XXXXXXXXXX',
    value: value,
    currency: 'USD'
  });
};
```

### 15.3 Performance Monitoring

```tsx
// Web Vitals
import { useReportWebVitals } from 'next/web-vitals';

export function WebVitals() {
  useReportWebVitals((metric) => {
    console.log(metric);
    
    // Send to analytics
    window.gtag('event', metric.name, {
      event_category: 'Web Vitals',
      event_label: metric.id,
      value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
      non_interaction: true
    });
  });
  
  return null;
}
```

### 15.4 Error Tracking (Sentry)

```tsx
// sentry.client.config.ts
import * as Sentry from '@sentry/nextjs';

Sentry.init({
  dsn: 'https://XXXXXXXX@sentry.io/XXXXXXXX',
  tracesSampleRate: 0.1,
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0
});
```

---

## 16. AI & Chatbot Integration

### 16.1 AI Chatbot

```tsx
// ChatBot.tsx
'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'bot', content: 'Hi! How can I help you today?' }
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  
  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  
  const handleSend = async () => {
    if (!input.trim()) return;
    
    // Add user message
    setMessages(prev => [...prev, { role: 'user', content: input }]);
    setInput('');
    
    // Call AI API
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: input })
    });
    
    const data = await response.json();
    
    // Add bot response
    setMessages(prev => [...prev, { role: 'bot', content: data.response }]);
  };
  
  return (
    <>
      {/* Chat Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-primary-500 text-white rounded-full shadow-lg flex items-center justify-center z-50 hover:bg-primary-600 transition-colors"
      >
        {isOpen ? <XIcon /> : <ChatIcon />}
      </motion.button>
      
      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 right-6 w-96 h-[500px] bg-white rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-primary-500 text-white p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <BotIcon />
                </div>
                <div>
                  <p className="font-semibold">HeviNet Assistant</p>
                  <p className="text-xs text-white/80">Usually replies instantly</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-white/20 rounded-full">
                <XIcon />
              </button>
            </div>
            
            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-2xl ${
                      msg.role === 'user'
                        ? 'bg-primary-500 text-white rounded-br-none'
                        : 'bg-neutral-100 text-neutral-900 rounded-bl-none'
                    }`}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>
            
            {/* Input */}
            <div className="p-4 border-t border-neutral-100">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSend();
                }}
                className="flex gap-2"
              >
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 px-4 py-3 bg-neutral-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
                <button
                  type="submit"
                  className="w-12 h-12 bg-primary-500 text-white rounded-xl flex items-center justify-center hover:bg-primary-600 transition-colors"
                >
                  <SendIcon />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
```

### 16.2 AI-Powered Search

```tsx
// AISearch.tsx
const AISearch = () => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState<string[]>([]);
  
  const handleSearch = async (value: string) => {
    setQuery(value);
    
    if (value.length > 2) {
      const response = await fetch('/api/search-suggestions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: value })
      });
      
      const data = await response.json();
      setSuggestions(data.suggestions);
    } else {
      setSuggestions([]);
    }
  };
  
  return (
    <div className="relative">
      <input
        type="text"
        value={query}
        onChange={(e) => handleSearch(e.target.value)}
        placeholder="Search products, categories..."
        className="w-full px-4 py-3 pl-12 bg-neutral-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500"
      />
      <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />
      
      {suggestions.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-lg border border-neutral-100 max-h-64 overflow-y-auto z-50">
          {suggestions.map((suggestion, index) => (
            <button
              key={index}
              className="w-full px-4 py-3 text-left hover:bg-neutral-50 flex items-center gap-3"
              onClick={() => {
                setQuery(suggestion);
                setSuggestions([]);
              }}
            >
              <SearchIcon className="w-4 h-4 text-neutral-400" />
              <span>{suggestion}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
```

---

## 17. Page-by-Page Redesign Guide

### 17.1 Homepage Redesign

```markdown
## Homepage Structure

### 1. Navigation (Sticky)
- Logo + Company Name
- Main Menu: Home | Products ▼ | About | Contact
- Search Icon | Dark Mode Toggle | CTA Button "Get Quote"

### 2. Hero Section
- Background: Gradient or subtle pattern
- Main Headline: "Exporting India's Finest to the World"
- Subheadline: "Premium agricultural products sourced directly from farms"
- Two CTAs: "Explore Products" (Secondary) | "Get Free Quote" (Primary)
- Hero Image/Video: Products showcase or video background
- Trust Badges: ISO Certified | 30+ Countries | 500+ Clients

### 3. Trust Bar
- Client logos (6-8)
- "Trusted by leading companies worldwide"

### 4. Value Proposition Section
- 3-4 cards with icons
- Direct Sourcing | Quality Certified | Global Logistics | 24/7 Support
- Each with title, description, and subtle animation

### 5. Featured Products
- Section heading with description
- Product cards grid (4-6 products)
- Each card: Image | Name | Category | "Learn More" link
- Hover effects on cards

### 6. About Preview
- Split layout: Image left, content right
- Brief company description
- Key statistics
- "Learn More About Us" CTA

### 7. Process Section
- "How We Work" heading
- 4-step process visualization
- Inquiry → Consultation → Quality Check → Delivery

### 8. Testimonials
- Client quotes with photos
- Carousel or grid layout
- Star ratings

### 9. CTA Section
- "Ready to Partner with Us?"
- Contact form or CTA buttons
- Background gradient

### 10. Newsletter Signup
- Email input
- "Subscribe for market insights"
- Privacy note

### 11. Footer
- Company info
- Quick links
- Product categories
- Contact information
- Social media links
- Copyright
- Legal links (Privacy, Terms)
```

### 17.2 Products Page Redesign

```markdown
## Products Page Structure

### 1. Hero
- "Our Products" heading
- Brief description
- Breadcrumbs

### 2. Filter Sidebar (Desktop) / Filter Drawer (Mobile)
- Category filters
- Origin filters
- Certification filters
- Price range

### 3. Product Grid
- Product cards with:
  - Image
  - Name
  - Category badge
  - Brief description
  - "View Details" CTA
- Pagination or infinite scroll

### 4. Product Detail Modal/Page
- Large product images
- Detailed description
- Specifications
- Certifications
- Origin information
- Minimum order quantity
- "Request Quote" CTA
- Related products
```

### 17.3 About Page Redesign

```markdown
## About Page Structure

### 1. Hero
- "About HeviNet" heading
- Company story introduction

### 2. Story Section
- Company history timeline
- Key milestones
- Founder message

### 3. Mission & Values
- Mission statement
- Core values with icons
- Visual representation

### 4. Team Section
- Team member cards
- Photos, names, roles
- Brief bios

### 5. Certifications
- Certification logos
- Brief explanations

### 6. Global Reach
- Map showing export destinations
- Statistics

### 7. CTA
- "Join Our Growing Network"
```

### 17.4 Contact Page Redesign

```markdown
## Contact Page Structure

### 1. Hero
- "Get in Touch" heading
- Brief description

### 2. Contact Options Grid
- 📞 Phone
- ✉️ Email
- 📍 Address
- 💬 WhatsApp

### 3. Contact Form
- Name, Email, Phone, Company
- Product interest dropdown
- Message textarea
- Submit button

### 4. Map Section
- Embedded Google Map
- Office location

### 5. FAQ Section
- Common questions
- Accordion style
- "Still have questions?" CTA

### 6. Office Hours
- Business hours
- Time zone information
```

---

## 18. Component Library

### 18.1 Base Components

```tsx
// Button Component
interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  children: React.ReactNode;
}

const Button = ({ variant = 'primary', size = 'md', isLoading, leftIcon, rightIcon, children, ...props }: ButtonProps) => {
  const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variants = {
    primary: 'bg-primary-500 text-white hover:bg-primary-600 focus:ring-primary-500',
    secondary: 'bg-white text-primary-500 border-2 border-primary-500 hover:bg-primary-50 focus:ring-primary-500',
    ghost: 'text-neutral-600 hover:bg-neutral-100 focus:ring-neutral-500',
    danger: 'bg-red-500 text-white hover:bg-red-600 focus:ring-red-500'
  };
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };
  
  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
      disabled={isLoading}
      {...props}
    >
      {isLoading ? <Spinner className="w-5 h-5 mr-2" /> : leftIcon}
      {children}
      {rightIcon}
    </button>
  );
};

// Input Component
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  helperText?: string;
}

const Input = ({ label, error, helperText, id, ...props }: InputProps) => {
  const inputId = id || label.toLowerCase().replace(/\s/g, '-');
  
  return (
    <div className="space-y-2">
      <label htmlFor={inputId} className="block text-sm font-medium text-neutral-700">
        {label}
      </label>
      <input
        id={inputId}
        className={`w-full px-4 py-3 rounded-xl border transition-colors focus:outline-none focus:ring-2 ${
          error
            ? 'border-red-500 focus:ring-red-500'
            : 'border-neutral-200 focus:ring-primary-500 focus:border-primary-500'
        }`}
        aria-invalid={error ? 'true' : 'false'}
        aria-describedby={error ? `${inputId}-error` : helperText ? `${inputId}-helper` : undefined}
        {...props}
      />
      {error && (
        <p id={`${inputId}-error`} className="text-sm text-red-500">
          {error}
        </p>
      )}
      {helperText && !error && (
        <p id={`${inputId}-helper`} className="text-sm text-neutral-500">
          {helperText}
        </p>
      )}
    </div>
  );
};

// Card Component
interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  padding?: 'none' | 'sm' | 'md' | 'lg';
}

const Card = ({ children, className = '', hover = false, padding = 'md' }: CardProps) => {
  const paddings = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8'
  };
  
  return (
    <div
      className={`bg-white dark:bg-neutral-800 rounded-2xl border border-neutral-100 dark:border-neutral-700 ${paddings[padding]} ${
        hover ? 'transition-all duration-300 hover:shadow-lg hover:-translate-y-1' : ''
      } ${className}`}
    >
      {children}
    </div>
  );
};

// Section Header Component
interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

const SectionHeader = ({ title, subtitle, align = 'center' }: SectionHeaderProps) => {
  return (
    <div className={`max-w-2xl ${align === 'center' ? 'mx-auto text-center' : ''}`}>
      <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
      {subtitle && (
        <p className="text-lg text-neutral-600 dark:text-neutral-400">{subtitle}</p>
      )}
    </div>
  );
};
```

---

## 19. Implementation Roadmap

### Phase 1: Foundation (Week 1-2)

```markdown
## Week 1: Design System Setup
- [ ] Set up CSS variables (colors, typography, spacing)
- [ ] Create base component library (Button, Input, Card, etc.)
- [ ] Implement ThemeProvider for dark mode
- [ ] Set up Framer Motion

## Week 2: Core Layout
- [ ] Redesign Navigation with mega menu
- [ ] Create responsive footer
- [ ] Implement breadcrumbs
- [ ] Add search functionality (Cmd+K)
```

### Phase 2: Homepage & Key Pages (Week 3-4)

```markdown
## Week 3: Homepage
- [ ] Redesign hero section with animations
- [ ] Create trust bar (client logos)
- [ ] Build value proposition section
- [ ] Design product showcase section
- [ ] Add testimonials section
- [ ] Create CTA section

## Week 4: Products & About
- [ ] Redesign products page with filters
- [ ] Create product detail modal/page
- [ ] Redesign about page
- [ ] Add team section
- [ ] Create certification showcase
```

### Phase 3: Interactions & Trust (Week 5-6)

```markdown
## Week 5: Animations & Micro-interactions
- [ ] Add scroll-triggered animations
- [ ] Implement card hover effects
- [ ] Create button micro-interactions
- [ ] Add page transition effects
- [ ] Implement loading states

## Week 6: Trust & Social Proof
- [ ] Add client testimonials
- [ ] Create statistics counter
- [ ] Add certification badges
- [ ] Implement case studies section
```

### Phase 4: Advanced Features (Week 7-8)

```markdown
## Week 7: AI & Chat
- [ ] Implement AI chatbot
- [ ] Add AI-powered search suggestions
- [ ] Create exit-intent popup
- [ ] Implement lead capture forms

## Week 8: SEO & Analytics
- [ ] Add structured data (JSON-LD)
- [ ] Implement meta tags
- [ ] Create sitemap.xml
- [ ] Set up Google Analytics 4
- [ ] Add error tracking (Sentry)
```

### Phase 5: Polish & Launch (Week 9-10)

```markdown
## Week 9: Testing & Optimization
- [ ] Performance optimization
- [ ] Accessibility audit (WCAG 2.1 AA)
- [ ] Cross-browser testing
- [ ] Mobile testing
- [ ] SEO audit

## Week 10: Launch Prep
- [ ] Final QA
- [ ] Security audit
- [ ] Documentation
- [ ] Deployment
- [ ] Post-launch monitoring
```

---

## 20. Success Metrics & KPIs

### 20.1 Performance Metrics

```markdown
## Core Web Vitals Targets

| Metric | Current | Target | Status |
|--------|---------|--------|--------|
| LCP (Largest Contentful Paint) | ~4s | < 2.5s | 🟡 |
| FID (First Input Delay) | ~200ms | < 100ms | 🟡 |
| CLS (Cumulative Layout Shift) | ~0.15 | < 0.1 | 🟡 |
| TTFB (Time to First Byte) | ~1s | < 800ms | 🟡 |
| PageSpeed Score | ~60 | > 90 | 🔴 |
```

### 20.2 Business Metrics

```markdown
## Business KPIs

| Metric | Current | Target | Timeline |
|--------|---------|--------|----------|
| Conversion Rate | 1% | 3% | 3 months |
| Bounce Rate | 60% | 40% | 3 months |
| Avg. Session Duration | 1 min | 3 min | 3 months |
| Pages per Session | 2 | 4 | 3 months |
| Form Submissions | 10/month | 50/month | 3 months |
| Quote Requests | 5/month | 25/month | 3 months |
```

### 20.3 SEO Metrics

```markdown
## SEO Targets

| Metric | Current | Target | Timeline |
|--------|---------|--------|----------|
| Organic Traffic | 500/month | 2000/month | 6 months |
| Keyword Rankings | 5 keywords | 50 keywords | 6 months |
| Domain Authority | 10 | 25 | 12 months |
| Backlinks | 50 | 200 | 12 months |
```

### 20.4 User Experience Metrics

```markdown
## UX Targets

| Metric | Current | Target | Timeline |
|--------|---------|--------|----------|
| Task Success Rate | 70% | 95% | 3 months |
| System Usability Scale | 65 | 85 | 3 months |
| Net Promoter Score | 20 | 50 | 6 months |
| Customer Satisfaction | 3.5/5 | 4.5/5 | 6 months |
```

---

## Appendix

### A. Recommended Tools & Libraries

| Category | Tool | Purpose |
|----------|------|---------|
| Animation | Framer Motion | React animations |
| Animation | GSAP | Complex animations |
| Styling | Tailwind CSS | Utility-first CSS |
| Icons | Lucide React | Icon library |
| Forms | React Hook Form | Form management |
| Validation | Zod | Schema validation |
| State | Zustand | State management |
| API | SWR/React Query | Data fetching |
| Analytics | Google Analytics 4 | Web analytics |
| Error Tracking | Sentry | Error monitoring |
| Testing | Playwright | E2E testing |
| Testing | Vitest | Unit testing |

### B. Design Inspiration

- [Stripe](https://stripe.com) - Clean, modern B2B
- [Linear](https://linear.app) - Animations & micro-interactions
- [Vercel](https://vercel.com) - Dark mode implementation
- [Loom](https://loom.com) - Trust signals
- [Notion](https://notion.so) - Content hierarchy

### C. Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion)
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref)
- [Core Web Vitals](https://web.dev/vitals)

---

**Document Version:** 1.0  
**Last Updated:** July 27, 2026  
**Author:** HeviNet Improvement Team

---

*This document serves as a comprehensive guide to transform HeviNet.in from its current state to a modern, high-performing 10/10 website. Follow the implementation roadmap for structured delivery.*
