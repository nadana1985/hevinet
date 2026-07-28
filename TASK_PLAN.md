# Task Plan: Update Local Dev Site to Match hevinet.in

**Objective:** Bring `localhost:3000` in alignment with `https://www.hevinet.in/` by updating content, contact info, products, and messaging in the local codebase.

**Priority Legend:**
- 🔴 **P0 (Critical)** — Must be done, changes visible content/messaging
- 🟡 **P1 (Important)** — Should be done, affects navigation/structure
- ⚪ **P2 (Nice to have)** — Minor alignment or cleanup

---

## Task 1: Update Hero Section
**File:** `src/components/sections/Hero.tsx`
**Priority:** 🔴 P0

| Change | Current (Local) | Target (Live) |
|--------|-----------------|---------------|
| **Headline** | "Exporting India's Finest to the World" | "Connecting Indian Quality to Global Markets" |
| **Sub-headline** | "Premium spices, rice, and agricultural products sourced directly from Indian farms. Trusted by 500+ global buyers across 30+ countries." | Messaging mentioning Singapore, Malaysia, and Middle East as target markets |
| **Trust Badge Pill** | "Trusted by 500+ global buyers" | Align with live wording |
| **Trust Badges** | ISO Certified, 30+ Countries, 500+ Clients, 99% Quality Rate | Update to match live set |
| **CTA Buttons** | "Explore Products" + "Get Free Quote" | Update to match live |

---

## Task 2: Update Navigation Bar
**File:** `src/components/layout/Navigation.tsx`
**Priority:** 🟡 P1

| Change | Current (Local) | Target (Live) |
|--------|-----------------|---------------|
| **Nav Links** | Home, Products, About, Contact | Home, About Us, Products, **Markets**, Contact Us |
| **Add "Markets" link** | ❌ Missing | ✅ Add `{ label: 'Markets', href: '/markets' }` between Products and About |
| **Label Updates** | "About" → "About Us", "Contact" → "Contact Us" | Update labels |
| **Mega Menu Categories** | Spices, Rice & Pulses, Others | Spices, Toys, Flowers, Tea & Coffee, Kids Dress |

**Note:** The live site appears to have a different mega menu structure. Update to show categories matching the product catalog.

---

## Task 3: Update Contact Information
**Files:** `src/components/layout/Navigation.tsx` (top bar), `src/components/layout/Footer.tsx`
**Priority:** 🔴 P0

| Change | Current (Local) | Target (Live) |
|--------|-----------------|---------------|
| **Phone** | +91 99999 99999 | **+91 98765 43210** |
| **Email** | info@hevinet.in | **info@hevinettrading.com** |
| **Address** | Mumbai, Maharashtra, India | **India** (generic) |

**Files to update:**
- `src/components/layout/Navigation.tsx` — lines with `tel:+919999999999` and `mailto:info@hevinet.in`
- `src/components/layout/Footer.tsx` — phone, email, and address fields
- Any other files referencing these contacts (search the codebase)

---

## Task 4: Update Featured Products
**File:** `src/components/sections/FeaturedProducts.tsx`
**Priority:** 🔴 P0

| Product | Current (Local) | Target (Live) | Price |
|---------|-----------------|---------------|-------|
| **1** | Premium Turmeric | Premium Turmeric Powder (from Erode, TN) | ₹120/500g |
| **2** | Basmati Rice | Kashmiri Red Chili Powder (from Kashmir Valley) | ₹180/500g |
| **3** | Assam Tea | Spices Mixed Collection (Pan India) | ₹499/set |
| **4** | Red Chili Powder | Aged Basmati Rice (from Karnal, Haryana) | ₹380/5kg |
| **5** | Premium Lentils | Pure Cow Ghee (A2 Bilona) (from Saurashtra, Gujarat) | ₹850/500ml |
| **6** | Cardamom | Handcrafted Wooden Toys Set (from Channapatna, Karnataka) | ₹599/set |

**Action:** Replace all 6 products with live versions including:
- Updated names with origin details
- Add `price` field to the `Product` interface
- Display prices in each product card
- Update descriptions to match live

---

## Task 5: Update Value Propositions
**File:** `src/components/sections/ValueProps.tsx`
**Priority:** 🔴 P0

| Current (Local) | Target (Live) |
|-----------------|---------------|
| Direct Sourcing | Premium Quality |
| Quality Certified (ISO/HACCP/FSSAI) | Authentic Origin |
| Global Logistics | Reliable Delivery |
| 24/7 Support | Trusted Partnerships |
| *(missing)* | ✅ Bulk Order Flexibility |
| *(missing)* | ✅ 24/7 Support (keep) |

**Action:** Rewrite the 4 benefit cards and add 2 more (total 6) to match live's messaging. Remove certification mentions unless confirmed.

---

## Task 6: Update CTA Section
**File:** `src/components/sections/CTASection.tsx`
**Priority:** 🟡 P1

| Change | Current (Local) | Target (Live) |
|--------|-----------------|---------------|
| **Headline** | "Ready to Partner with Us?" | Update to match live |
| **Sub-headline** | "Join 500+ global businesses..." | Update to match live |
| **Form/CTA** | Email input + "Get Started" button | Update to match live |
| **Background** | Gradient (primary → orange) | Update to match live |

---

## Task 7: Add "Markets" Page (New Route)
**File:** `src/app/markets/page.tsx` (new file)
**Priority:** 🟡 P1

The live site has a "Markets" page/section that local lacks. Create:
- `src/app/markets/page.tsx` — Markets listing page
- Update navigation to link to `/markets`
- Update footer to include Markets in Quick Links

---

## Task 8: Update Footer
**File:** `src/components/layout/Footer.tsx`
**Priority:** 🟡 P1

| Change | Current (Local) | Target (Live) |
|--------|-----------------|---------------|
| **Quick Links** | Home, About Us, Products, Contact | Home, About Us, Products, **Markets**, Contact Us |
| **Product Links** | Spices, Rice & Pulses, Tea & Coffee, Flowers, Kids Dress | Spices, **Kids Toys**, Flowers, Tea & Coffee, Kids Dress |
| **Company Tagline** | "Exporting India's finest agricultural products..." | Align with live |
| **Contact Info** | (see Task 3) | (see Task 3) |

---

## Task 9: Update Trust Bar Logos
**File:** `src/components/sections/TrustBar.tsx`
**Priority:** ⚪ P2

Update the placeholder client logos to match whatever logos/companies appear on the live site.

---

## Task 10: Typecheck & Verify
**Priority:** 🔴 P0

After all changes:
```bash
cd F:\Hevinet
npx tsc --noEmit   # Check for TypeScript errors
npm run dev        # Start dev server
```

Then verify in browser:
- All sections render correctly
- No broken links or routes
- Contact info is consistent everywhere
- Products display with prices

---

## Summary: Execution Order

```
Step 1  →  🔴 Task 3: Update Contact Info (Navigation.tsx + Footer.tsx)
Step 2  →  🔴 Task 1: Update Hero Section (Hero.tsx)
Step 3  →  🔴 Task 4: Update Featured Products (FeaturedProducts.tsx)
Step 4  →  🔴 Task 5: Update Value Propositions (ValueProps.tsx)
Step 5  →  🟡 Task 2: Update Navigation (Navigation.tsx)
Step 6  →  🟡 Task 6: Update CTA Section (CTASection.tsx)
Step 7  →  🟡 Task 7: Create Markets Page (new file)
Step 8  →  🟡 Task 8: Update Footer (Footer.tsx)
Step 9  →  ⚪ Task 9: Update Trust Bar (TrustBar.tsx)
Step 10 →  🔴 Task 10: Typecheck & Verify
```

---

## Open Questions (Needs User Input)

1. **Hero headline:** Should we use "Connecting Indian Quality to Global Markets" exactly as on live?
2. **Products:** The live site includes non-agricultural products (toys, dress) - should local include these too?
3. **Stats & Testimonials:** Live site doesn't have these sections. Should they be removed from local, or added to live?
4. **Contact details:** Confirm the real contact info — which phone/email is correct?
5. **Address:** Should address remain as "Mumbai, Maharashtra, India" or change to just "India"?

---

## Estimated Effort

| Metric | Value |
|--------|-------|
| **Files to modify** | 7 (Navigation, Hero, FeaturedProducts, ValueProps, CTA, Footer, TrustBar) |
| **Files to create** | 1 (Markets page) |
| **Total tasks** | 10 |
| **Estimated commits** | 3–4 |
