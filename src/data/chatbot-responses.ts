/**
 * Chatbot Q&A responses for HeviNet rule-based chatbot.
 * Organized by category with keyword matching.
 */

export interface ChatbotResponse {
  keywords: string[];
  response: string;
}

// ── Product Categories ────────────────────────────────────────────────────

export const productResponses: ChatbotResponse[] = [
  {
    keywords: ['spice', 'spices', 'turmeric', 'chili', 'chilli', 'cumin', 'coriander', 'cardamom', 'pepper'],
    response: `We export a wide range of premium Indian spices including:

🌶️ **Turmeric** - 3-5% curcumin content, organic options available
🔴 **Red Chili** - Various grades (Teja, S17, S4)
🟤 **Cumin Seeds** - Bold, clean, 99% purity
🟢 **Coriander Seeds** - 4% volatile oil content
⬛ **Black Pepper** - 500-550 TLV, bold grade
🌿 **Cardamom** - Green, 8mm+ size

All our spices are FSSAI and HACCP certified. Would you like a quote for any specific spice?`,
  },
  {
    keywords: ['rice', 'basmati', 'non-basmati', 'grain'],
    response: `We offer premium Indian rice varieties:

🍚 **Basmati Rice** - 1121, 1509, Pusa, Traditional varieties
🌾 **Non-Basmati** - IR-64, Sona Masuri, Ponni
📦 **Packaging** - 5kg to 50kg bags, custom packaging available

Our basmati rice is aged 1-2 years for superior aroma and length. Minimum order: 1 ton. Shipping available to 30+ countries.`,
  },
  {
    keywords: ['pulse', 'pulses', 'lentil', 'dal', 'chickpea', 'gram', 'bean'],
    response: `We export premium Indian pulses and lentils:

🟡 **Toor Dal** (Pigeon Peas) - Bold, 99% purity
🟠 **Chana Dal** (Split Chickpeas) - Various sizes
🔴 **Masoor Dal** (Red Lentils) - Whole and split
🟢 **Moong Dal** (Green Gram) - Polished and unpolished
⚪ **White Chickpeas** - Kabuli, 7mm+ size

All pulses are cleaned, sorted, and graded to international standards. FSSAI certified.`,
  },
  {
    keywords: ['tea', 'coffee', 'beverage', 'drink'],
    response: `We supply premium Indian teas and coffee:

☕ **Tea** - Assam CTC, Darjeeling Orthodox, Green Tea
🫘 **Coffee** - Arabica, Robusta, Cherry AA grade

India is the world's second-largest tea producer. Our teas are sourced directly from Assam and Darjeeling gardens. Bulk packaging available.`,
  },
  {
    keywords: ['flower', 'flowers', 'marigold', 'rose', 'jasmine'],
    response: `We export fresh and dried Indian flowers:

🌼 **Marigold** - Fresh and dried, various sizes
🌹 **Rose** - Edible roses for culinary use
🌸 **Jasmine** - Fresh garlands and loose flowers

Flowers are sourced from South Indian farms and shipped with cold chain logistics.`,
  },
  {
    keywords: ['product', 'catalog', 'catalogue', 'list', 'category', 'categories', 'offer', 'sell', 'export'],
    response: `**HeviNet Product Categories:**

1. 🌶️ **Spices** - Turmeric, Chili, Cumin, Coriander, etc.
2. 🍚 **Rice & Pulses** - Basmati, Non-Basmati, Lentils
3. 🌼 **Flowers** - Marigold, Rose, Jasmine
4. ☕ **Tea & Coffee** - Assam Tea, Darjeeling, Arabica
5. 👗 **Kids Dress** - Traditional Indian wear

Would you like to know more about any specific category?`,
  },
];

// ── Certification Responses ───────────────────────────────────────────────

export const certificationResponses: ChatbotResponse[] = [
  {
    keywords: ['certif', 'iso', 'haccp', 'fssai', 'standard', 'quality'],
    response: `**Our Certifications & Quality Standards:**

✅ **ISO 22000** - Food Safety Management System
✅ **HACCP** - Hazard Analysis Critical Control Points
✅ **FSSAI** - Food Safety and Standards Authority of India
✅ **Halal Certified** - All products are Halal compliant
✅ **Organic Certified** - For organic product lines

We maintain strict quality control at every stage - from sourcing to packaging to shipping. Quality certificates provided with every shipment.`,
  },
  {
    keywords: ['halal', 'halaal'],
    response: `Yes! **All our products are Halal certified** 🌙

We understand the importance of Halal compliance for our customers in Middle East,东南亚, and other markets. Our Halal certification is recognized internationally.`,
  },
  {
    keywords: ['organic', 'natural', 'chemical-free'],
    response: `We offer **organic certified** product lines:

🌱 Organic Turmeric
🌱 Organic Red Chili
🌱 Organic Cumin
🌱 Organic Basmati Rice

Our organic products are certified by recognized international bodies and come with organic certification documentation.`,
  },
];

// ── Shipping & Logistics Responses ────────────────────────────────────────

export const shippingResponses: ChatbotResponse[] = [
  {
    keywords: ['ship', 'deliver', 'export', 'countr', 'where', 'destin', 'logistic'],
    response: `**Global Shipping & Export:**

🌍 We export to **30+ countries** including:
- 🇬🇧 UK & Europe
- 🇺🇸 USA & Canada
- 🇦🇪 UAE & Middle East
- 🇸🇬 Singapore & Southeast Asia
- 🇦🇺 Australia
- 🇿🇦 Africa

📦 **Shipping Methods:**
- FCL (Full Container Load)
- LCL (Less than Container Load)
- Air freight for smaller orders

🚢 **Port:** Mundra, Chennai, Nhava Sheva
⏱️ **Delivery Time:** 15-45 days depending on destination`,
  },
  {
    keywords: ['moq', 'minimum', 'order', 'quantity', 'minimum order'],
    response: `**Minimum Order Quantities (MOQ):**

🌶️ Spices: **1-2 tons** per variety
🍚 Rice: **1-5 tons** depending on type
🫘 Pulses: **2-5 tons**
☕ Tea/Coffee: **500 kg - 1 ton**

For first-time buyers, we can discuss smaller trial orders. Contact our sales team for custom MOQ arrangements.`,
  },
  {
    keywords: ['pack', 'packing', 'package', 'bag', 'label'],
    response: `**Packaging Options:**

📦 **Standard:**
- 25 kg / 50 kg PP bags
- Laminated bags with inner liner

📦 **Retail:**
- 100g, 250g, 500g, 1kg pouches
- Private label/custom branding available

📦 **Bulk:**
- Jumbo bags (1 ton)
- Custom packaging for retail chains

All packaging is food-grade and designed for long-distance shipping.`,
  },
];

// ── Pricing Responses ─────────────────────────────────────────────────────

export const pricingResponses: ChatbotResponse[] = [
  {
    keywords: ['price', 'cost', 'rate', 'tariff', 'cheap', 'expensive', 'afford', 'budget'],
    response: `**Pricing Information:**

💰 Our prices are **competitive** and depend on:
- Product type and grade
- Order quantity
- Destination country
- Seasonal availability

📋 **For accurate pricing:**
1. Click "Get a Quote" below
2. Share your product & quantity requirements
3. Our team will respond within 24 hours

💡 **Tip:** Larger orders get better pricing. We offer volume discounts for contracts.`,
  },
  {
    keywords: ['payment', 'pay', 'invoice', 'bill', 'transaction'],
    response: `**Payment Terms:**

💳 We accept:
- T/T (Bank Transfer)
- L/C (Letter of Credit)
- LC at Sight

📝 **Standard Terms:**
- 30% advance, 70% against copy of B/L (for new customers)
- Flexible terms for repeat customers
- All prices in USD or as agreed

Contact our finance team for specific payment arrangements.`,
  },
];

// ── Contact & Company Responses ───────────────────────────────────────────

export const contactResponses: ChatbotResponse[] = [
  {
    keywords: ['contact', 'phone', 'call', 'email', 'reach', 'touch', 'number', 'talk', 'speak'],
    response: `**Contact HeviNet Trading:**

📞 **Phone:** +91-9876543210
📧 **Email:** info@hevinet.in
💬 **WhatsApp:** +91-9876543210
🌐 **Website:** hevinet.in

**Office Hours:**
Monday - Saturday: 9:00 AM - 6:00 PM IST
Sunday: Closed

For urgent inquiries, WhatsApp is the fastest way to reach us!`,
  },
  {
    keywords: ['location', 'address', 'office', 'headquart', 'where located', 'based'],
    response: `**HeviNet Office Location:**

📍 **Headquarters:** India
🌍 **Operations:** Global export from major Indian ports

We have a dedicated team ready to assist you worldwide. Contact us anytime!`,
  },
  {
    keywords: ['team', 'staff', 'employee', 'people', 'who'],
    response: `**About HeviNet Team:**

👥 We are a passionate team of:
- Export specialists
- Quality control experts
- Logistics coordinators
- Customer support representatives

Our team has 10+ years of experience in Indian agricultural exports. We're here to help you every step of the way!`,
  },
];

// ── General Responses ─────────────────────────────────────────────────────

export const generalResponses: ChatbotResponse[] = [
  {
    keywords: ['hello', 'hi', 'hey', 'good morning', 'good evening', 'greet'],
    response: `👋 **Hello! Welcome to HeviNet Trading!**

I'm here to help you with:
- 🌶️ Product information
- 📜 Certifications & quality
- 🚢 Shipping & logistics
- 💰 Pricing & quotes

How can I assist you today?`,
  },
  {
    keywords: ['thank', 'thanks', 'appreciate'],
    response: `You're welcome! 😊

If you have any more questions, feel free to ask. For detailed inquiries, you can also:

📞 Call us: +91-9876543210
💬 WhatsApp: +91-9876543210
📧 Email: info@hevinet.in

Have a great day!`,
  },
  {
    keywords: ['about', 'company', 'who are', 'what is hevinet', 'tell me about'],
    response: `**About HeviNet Trading:**

🏢 HeviNet Trading is a leading exporter of premium Indian agricultural products.

✨ **Key Highlights:**
- 📅 10+ years of experience
- 🌍 Exports to 30+ countries
- 👥 500+ happy clients worldwide
- 📜 ISO, HACCP, FSSAI certified
- 🎯 Quality-first approach

We source directly from Indian farms and deliver globally. Our mission is to bring India's finest products to the world!`,
  },
  {
    keywords: ['help', 'assist', 'support', 'how to', 'what can you'],
    response: `**I can help you with:**

1️⃣ **Products** - Learn about our spices, rice, pulses, tea, coffee
2️⃣ **Certifications** - ISO, HACCP, FSSAI, Halal info
3️⃣ **Shipping** - Export destinations, delivery times
4️⃣ **Pricing** - Get a quote for your requirements
5️⃣ **Contact** - Phone, email, WhatsApp details

Just ask me anything! For detailed support, connect with our team.`,
  },
];

// ── Quick Reply Options ───────────────────────────────────────────────────

export interface QuickReply {
  id: string;
  label: string;
  icon: string;
  message: string;
}

export const quickReplies: QuickReply[] = [
  { id: 'products', label: 'Products', icon: '🌶️', message: 'What products do you export?' },
  { id: 'certifications', label: 'Certifications', icon: '📜', message: 'What certifications do you have?' },
  { id: 'shipping', label: 'Shipping', icon: '🚢', message: 'Where do you export?' },
  { id: 'quote', label: 'Get a Quote', icon: '💰', message: 'I want to get a quote' },
  { id: 'contact', label: 'Contact Us', icon: '📞', message: 'How can I contact you?' },
];

// ── All Responses Combined ────────────────────────────────────────────────

export const allResponses: ChatbotResponse[] = [
  ...generalResponses,
  ...productResponses,
  ...certificationResponses,
  ...shippingResponses,
  ...pricingResponses,
  ...contactResponses,
];

/**
 * Find a matching response based on user input.
 * Returns the first matching response or a fallback.
 */
export function findResponse(userInput: string): string {
  const input = userInput.toLowerCase().trim();

  for (const item of allResponses) {
    const hasMatch = item.keywords.some((keyword) => input.includes(keyword));
    if (hasMatch) {
      return item.response;
    }
  }

  // Fallback response
  return `I'm not sure I understand that question. 🤔

I can help you with:
- 🌶️ **Products** - Spices, rice, pulses, tea, coffee
- 📜 **Certifications** - ISO, HACCP, FSSAI
- 🚢 **Shipping** - Export destinations, MOQ
- 💰 **Pricing** - Get a quote
- 📞 **Contact** - Phone, email, WhatsApp

Please try asking about one of these topics, or click a quick reply below!`;
}
