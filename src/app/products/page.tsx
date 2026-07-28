'use client';

import { useState, useEffect, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams, useRouter } from 'next/navigation';
import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { Card } from '@/components/ui/Card';
import { OptimizedImage } from '@/components/ui/OptimizedImage';
import { SlideUp, StaggerContainer, StaggerItem } from '@/components/motion';
import { Search } from 'lucide-react';
import type { ProductData } from '@/data/products';

const tabs = [
  { value: 'all', label: 'All Products', icon: '🛍️' },
  { value: 'spices', label: 'Spices', icon: '🌶️' },
  { value: 'food', label: 'Food Products', icon: '🌾' },
  { value: 'toys', label: 'Kids Toys', icon: '🧸' },
];

const categoryMetadata = {
  spices: { label: '🌶️ Spices', cls: 'badge-spices' },
  food: { label: '🌾 Food', cls: 'badge-food' },
  toys: { label: '🧸 Kids Toys', cls: 'badge-toys' },
};

function ProductsListContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  const [products, setProducts] = useState<ProductData[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchInput, setSearchInput] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState('');

  const activeCategory = searchParams.get('category') || 'all';

  // Debounce search input
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(searchInput);
    }, 300);
    return () => clearTimeout(timer);
  }, [searchInput]);

  // Fetch filtered products
  useEffect(() => {
    async function fetchProducts() {
      setLoading(true);
      try {
        const queryParams = new URLSearchParams();
        if (activeCategory !== 'all') {
          queryParams.set('category', activeCategory);
        }
        if (debouncedSearch) {
          queryParams.set('search', debouncedSearch);
        }

        const res = await fetch(`/api/products?${queryParams.toString()}`);
        const data = await res.json();
        if (data.success) {
          setProducts(data.products || []);
        } else {
          setProducts([]);
        }
      } catch {
        setProducts([]);
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, [activeCategory, debouncedSearch]);

  const handleCategoryChange = (val: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (val === 'all') {
      params.delete('category');
    } else {
      params.set('category', val);
    }
    router.push(`/products?${params.toString()}`);
  };

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900/10">
      {/* Page Header */}
      <section className="relative pt-32 pb-16 bg-gradient-to-b from-primary-50 to-white dark:from-neutral-900 dark:to-neutral-950 border-b border-neutral-100 dark:border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <SlideUp>
            <h1 className="text-4xl md:text-5xl font-extrabold text-neutral-900 dark:text-white tracking-tight">
              Our <span className="text-primary-500">Products</span>
            </h1>
            <p className="mt-4 text-base md:text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
              Explore our complete range of premium Indian products — authentic, quality-assured, and ready to order.
            </p>
          </SlideUp>
        </div>
      </section>

      {/* Main Listing Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          
          {/* Controls: Category Tabs & Search Bar */}
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center mb-8 pb-6 border-b border-neutral-200/60 dark:border-neutral-800">
            {/* Tabs */}
            <div className="flex flex-wrap gap-2" role="tablist" aria-label="Product categories">
              {tabs.map((tab) => (
                <button
                  key={tab.value}
                  role="tab"
                  aria-selected={activeCategory === tab.value}
                  onClick={() => handleCategoryChange(tab.value)}
                  className={`px-4 py-2 text-sm font-semibold rounded-xl transition-all flex items-center gap-2 border ${
                    activeCategory === tab.value
                      ? 'bg-primary-500 border-primary-500 text-white shadow-sm'
                      : 'bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-300 hover:border-neutral-300 dark:hover:border-neutral-700'
                  }`}
                >
                  <span>{tab.icon}</span>
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <span className="absolute inset-y-0 left-3 flex items-center text-neutral-400 dark:text-neutral-500 pointer-events-none">
                <Search className="h-4 w-4" />
              </span>
              <input
                type="text"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                placeholder="Search products..."
                className="w-full pl-9 pr-8 py-2 text-sm bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl focus:outline-none focus:ring-1 focus:ring-primary-500 dark:text-white"
              />
              {searchInput && (
                <button
                  onClick={() => setSearchInput('')}
                  className="absolute inset-y-0 right-3 flex items-center text-neutral-400 dark:text-neutral-500 hover:text-neutral-600"
                  aria-label="Clear search"
                >
                  ✕
                </button>
              )}
            </div>
          </div>

          {/* Results Info */}
          <div className="mb-6 text-sm text-neutral-500 dark:text-neutral-400" aria-live="polite">
            {loading ? (
              <span className="flex items-center gap-2">
                <span className="w-4 h-4 border-2 border-primary-500 border-t-transparent rounded-full animate-spin"></span>
                Loading products...
              </span>
            ) : (
              <span>{products.length} product{products.length !== 1 ? 's' : ''} found</span>
            )}
          </div>

          {/* Products Grid */}
          {loading ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="bg-white dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800 rounded-2xl p-4 animate-pulse">
                  <div className="bg-neutral-200 dark:bg-neutral-800 aspect-video rounded-xl mb-4" />
                  <div className="h-4 bg-neutral-200 dark:bg-neutral-800 rounded w-1/3 mb-3" />
                  <div className="h-6 bg-neutral-200 dark:bg-neutral-800 rounded w-3/4 mb-2" />
                  <div className="h-4 bg-neutral-200 dark:bg-neutral-800 rounded w-full mb-2" />
                  <div className="h-4 bg-neutral-200 dark:bg-neutral-800 rounded w-5/6" />
                </div>
              ))}
            </div>
          ) : products.length === 0 ? (
            <div className="text-center py-20 bg-white dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800 rounded-2xl">
              <span className="text-4xl block mb-4">🔍</span>
              <h3 className="text-lg font-bold text-neutral-900 dark:text-white mb-2">No products found</h3>
              <p className="text-neutral-500 dark:text-neutral-400 mb-6">Try adjusting your filters or search keyword.</p>
              <button
                onClick={() => {
                  setSearchInput('');
                  handleCategoryChange('all');
                }}
                className="bg-primary-500 text-white font-semibold px-6 py-2 rounded-xl hover:bg-primary-600 transition-colors"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => {
                const meta = categoryMetadata[product.categorySlug] || { label: product.category, cls: 'badge-spices' };
                const waMessage = `Hello HeviNet Trading! I'm interested in "${product.name}". Please share more details and pricing.`;
                const waLink = `https://wa.me/919876543210?text=${encodeURIComponent(waMessage)}`;

                return (
                  <StaggerItem key={product.id}>
                    <Card hover padding="none" className="overflow-hidden border border-neutral-100 dark:border-neutral-800 h-full flex flex-col justify-between">
                      <div>
                        {/* Image wrapper */}
                        <div className="relative h-48 overflow-hidden bg-neutral-100 dark:bg-neutral-800">
                          <OptimizedImage
                            src={product.image}
                            alt={product.name}
                            fill
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          {product.featured && (
                            <div className="absolute top-3 left-3 px-2 py-1 bg-amber-500 text-white text-[10px] font-bold rounded shadow-sm z-10">
                              ⭐ Featured
                            </div>
                          )}
                          <div className={`absolute top-3 right-3 px-2 py-1 text-[10px] font-bold rounded shadow-sm z-10 badge ${meta.cls}`}>
                            {meta.label}
                          </div>
                        </div>

                        {/* Card Content */}
                        <div className="p-5">
                          <h3 className="font-bold text-lg text-neutral-900 dark:text-white leading-tight group-hover:text-primary-500 transition-colors">
                            {product.name}
                          </h3>
                          <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1 flex items-center gap-1">
                            📍 {product.origin}
                          </p>
                          <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-3 line-clamp-2 leading-relaxed">
                            {product.description}
                          </p>
                          <div className="flex flex-wrap gap-1 mt-4">
                            {product.tags.slice(0, 3).map((tag) => (
                              <span key={tag} className="text-[10px] bg-neutral-100 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400 px-2 py-0.5 rounded-full">
                                #{tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Footer Actions */}
                      <div className="p-5 pt-0">
                        <div className="flex items-center justify-between border-t border-neutral-100 dark:border-neutral-800 pt-4 mt-2">
                          <div className="flex flex-col">
                            <span className="text-lg font-extrabold text-primary-600 dark:text-primary-400">
                              ₹{product.priceValue}
                            </span>
                            <span className="text-[10px] text-neutral-400 dark:text-neutral-500">
                              {product.unit}
                            </span>
                          </div>
                          
                          <div className="flex gap-2">
                            <Link href={`/products/${product.categorySlug}/${product.slug}`}>
                              <button className="bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 text-neutral-800 dark:text-neutral-200 text-xs font-semibold px-3 py-2 rounded-lg transition-colors">
                                Details
                              </button>
                            </Link>
                            <a
                              href={waLink}
                              target="_blank"
                              rel="noreferrer"
                              className="bg-primary-500 hover:bg-primary-600 text-white text-xs font-semibold px-3 py-2 rounded-lg transition-colors flex items-center justify-center"
                            >
                              Inquire
                            </a>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>
          )}

        </div>
      </section>
    </div>
  );
}

export default function ProductsPage() {
  return (
    <>
      <Navigation />
      <main id="main-content">
        <Suspense fallback={<div className="min-h-screen bg-neutral-50 dark:bg-neutral-900/50 flex items-center justify-center"><span className="w-8 h-8 border-4 border-primary-500 border-t-transparent rounded-full animate-spin"></span></div>}>
          <ProductsListContent />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
