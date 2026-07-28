export interface ProductData {
  id: string;
  name: string;
  slug: string;
  category: string;
  categorySlug: 'spices' | 'food' | 'toys';
  origin: string;
  price: string;
  priceValue: number;
  unit: string;
  currency: string;
  description: string;
  image: string;
  featured: boolean;
  inStock: boolean;
  tags: string[];
}

export const products: ProductData[] = [
  {
    id: 'spice-001',
    name: 'Premium Turmeric Powder',
    slug: 'turmeric',
    category: 'Spices',
    categorySlug: 'spices',
    origin: 'Erode, Tamil Nadu',
    price: '₹120 / 500g',
    priceValue: 120,
    unit: 'per 500g',
    currency: 'INR',
    description: 'Our premium turmeric powder is sourced directly from the finest farms of Erode, Tamil Nadu — the \'Turmeric City\' of India. Rich in curcumin, this bright golden spice adds vibrant color and earthy warmth to any dish. Cold-ground to preserve natural oils and medicinal properties. Ideal for curries, golden milk, and marinades.',
    image: '/products/turmeric_powder.png',
    featured: true,
    inStock: true,
    tags: ['organic', 'natural', 'bestseller'],
  },
  {
    id: 'spice-002',
    name: 'Kashmiri Red Chili Powder',
    slug: 'red-chili',
    category: 'Spices',
    categorySlug: 'spices',
    origin: 'Kashmir Valley',
    price: '₹180 / 500g',
    priceValue: 180,
    unit: 'per 500g',
    currency: 'INR',
    description: 'Authentic Kashmiri red chili powder, prized for its stunning deep-red color and mild heat. Grown in the pristine valleys of Kashmir at high altitude, these chilies impart a gorgeous scarlet hue to tandoori dishes, curries, and biryanis without overwhelming heat. A must-have for professional chefs.',
    image: '/products/red_chili_powder.png',
    featured: true,
    inStock: true,
    tags: ['kashmiri', 'mild', 'premium'],
  },
  {
    id: 'spice-003',
    name: 'Green Cardamom (Elaichi)',
    slug: 'cardamom',
    category: 'Spices',
    categorySlug: 'spices',
    origin: 'Idukki, Kerala',
    price: '₹650 / 250g',
    priceValue: 650,
    unit: 'per 250g',
    currency: 'INR',
    description: 'Premium Grade-A green cardamom pods from the lush hills of Idukki, Kerala — the global hub of cardamom production. These fragrant pods burst with sweet, floral aroma and cool menthol undertones. Perfect for chai, biryanis, desserts, and sweets. Also used in Ayurvedic preparations.',
    image: '/products/cardamom_spice.png',
    featured: false,
    inStock: true,
    tags: ['premium', 'Kerala', 'aromatic'],
  },
  {
    id: 'spice-004',
    name: 'Spices Mixed Collection',
    slug: 'mixed-collection',
    category: 'Spices',
    categorySlug: 'spices',
    origin: 'Pan India',
    price: '₹499 / set',
    priceValue: 499,
    unit: 'per gift set',
    currency: 'INR',
    description: 'A curated collection of 6 premium Indian spices — turmeric, red chili, coriander, cumin, garam masala, and mustard seeds. Beautifully packaged in our signature boxes, this collection makes an excellent corporate gift or kitchen essential starter pack. Each spice is sourced from its region of origin.',
    image: '/products/spices_collection.png',
    featured: true,
    inStock: true,
    tags: ['gift', 'collection', 'popular'],
  },
  {
    id: 'food-001',
    name: 'Aged Basmati Rice',
    slug: 'basmati',
    category: 'Food Products',
    categorySlug: 'food',
    origin: 'Karnal, Haryana',
    price: '₹380 / 5kg',
    priceValue: 380,
    unit: 'per 5kg',
    currency: 'INR',
    description: 'Our aged Pusa Basmati 1121 rice is the world\'s longest-grain basmati, sourced from the fertile fields of Haryana. Aged for 12–18 months in climate-controlled warehouses, it delivers an exquisite aroma, non-sticky texture, and elongated grains that stretch to nearly 25mm when cooked. The choice of 5-star hotels and biryani connoisseurs.',
    image: '/products/basmati_rice.png',
    featured: true,
    inStock: true,
    tags: ['aged', 'premium', 'long-grain'],
  },
  {
    id: 'food-002',
    name: 'Pure Cow Ghee (A2 Bilona)',
    slug: 'a2-bilona',
    category: 'Food Products',
    categorySlug: 'food',
    origin: 'Saurashtra, Gujarat',
    price: '₹850 / 500ml',
    priceValue: 850,
    unit: 'per 500ml',
    currency: 'INR',
    description: 'Traditional A2 bilona ghee made from the milk of indigenous Gir cows using the ancient Vedic bilona (churning) method. Hand-stirred, slow-cooked over wood fire to achieve the purest, most aromatic ghee with rich golden color and granular texture. Free from additives, preservatives, or vegetable oils. A superfood revered in Ayurveda.',
    image: '/products/pure_ghee.png',
    featured: true,
    inStock: true,
    tags: ['A2', 'organic', 'vedic', 'superfood'],
  },
  {
    id: 'food-003',
    name: 'Premium Food Products',
    slug: 'food-products',
    category: 'Food Products',
    categorySlug: 'food',
    origin: 'Madhya Pradesh',
    price: '₹299 / assorted pack',
    priceValue: 299,
    unit: 'per assorted pack',
    currency: 'INR',
    description: 'A premium assortment of traditional Indian food products including masoor dal, moong dal, chana dal, and mixed pulses. Stone-ground, unpolished, and free from chemical treatments. These protein-rich pulses are the backbone of Indian cuisine and packed with essential nutrients. Sourced from certified organic farms.',
    image: '/products/food_products_collection.png',
    featured: false,
    inStock: true,
    tags: ['pulses', 'organic', 'protein-rich'],
  },
  {
    id: 'toy-001',
    name: 'Handcrafted Wooden Toys Set',
    slug: 'wooden-set',
    category: 'Kids Toys',
    categorySlug: 'toys',
    origin: 'Channapatna, Karnataka',
    price: '₹599 / set',
    priceValue: 599,
    unit: 'per set',
    currency: 'INR',
    description: 'A delightful collection of traditional Indian handcrafted wooden toys — including a painted elephant, a spinning lattu (top), and interlocking puzzle blocks. Made by master artisans from Channapatna, Karnataka (famous for its 200-year toy-making heritage) using non-toxic natural lacquer paints safe for children. Promotes creativity and motor skills.',
    image: '/products/wooden_toys_set.png',
    featured: true,
    inStock: true,
    tags: ['handcrafted', 'educational', 'artisan', 'bestseller'],
  },
  {
    id: 'toy-002',
    name: 'Colorful Building Blocks',
    slug: 'building-blocks',
    category: 'Kids Toys',
    categorySlug: 'toys',
    origin: 'Rajkot, Gujarat',
    price: '₹449 / 60-piece set',
    priceValue: 449,
    unit: 'per 60-piece set',
    currency: 'INR',
    description: 'Premium quality 60-piece wooden building blocks in vibrant, child-safe colors. Smooth-sanded edges ensure safety, while the durable hardwood construction guarantees years of play. Includes squares, rectangles, triangles, cylinders, and arches. An internationally certified educational toy that develops spatial reasoning, creativity, and early engineering concepts.',
    image: '/products/building_blocks_toy.png',
    featured: true,
    inStock: true,
    tags: ['educational', 'STEM', 'safe', 'colorful'],
  },
  {
    id: 'toy-003',
    name: 'Kids Toys Collection',
    slug: 'kids-toys-collection',
    category: 'Kids Toys',
    categorySlug: 'toys',
    origin: 'India',
    price: '₹799 / collection box',
    priceValue: 799,
    unit: 'per collection box',
    currency: 'INR',
    description: 'An exciting multi-toy collection featuring a variety of developmental toys — toy cars, stuffed plush animals, shape sorters, and finger puppets. Each toy is selected for age-appropriate developmental benefits covering fine motor, sensory, and imaginative play. Made from BIS-certified, non-toxic materials. Perfect as a birthday gift set for kids aged 1–8.',
    image: '/products/kids_toys_collection.png',
    featured: false,
    inStock: true,
    tags: ['gift', 'multi-toy', 'BIS-certified'],
  },
];

export function getProductBySlug(category: string, product: string): ProductData | undefined {
  return products.find(
    (p) => p.categorySlug === category && p.slug === product
  );
}

export function getProductById(id: string): ProductData | undefined {
  return products.find((p) => p.id === id);
}

export function getProductsByCategory(categorySlug: string): ProductData[] {
  return products.filter((p) => p.categorySlug === categorySlug);
}

export function getRelatedProducts(categorySlug: string, excludeSlug: string): ProductData[] {
  return products.filter((p) => p.categorySlug === categorySlug && p.slug !== excludeSlug);
}
