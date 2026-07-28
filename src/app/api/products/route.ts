import { NextRequest, NextResponse } from 'next/server';
import { products } from '@/data/products';

/**
 * API route to fetch and filter products.
 * Handles queries: category (spices | food | toys) and search (text filter).
 */
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');
    const search = searchParams.get('search')?.toLowerCase();

    let filtered = products;

    if (category && category !== 'all') {
      filtered = filtered.filter((p) => p.categorySlug === category);
    }

    if (search) {
      filtered = filtered.filter(
        (p) =>
          p.name.toLowerCase().includes(search) ||
          p.description.toLowerCase().includes(search) ||
          p.tags.some((t) => t.toLowerCase().includes(search)) ||
          p.origin.toLowerCase().includes(search)
      );
    }

    return NextResponse.json({
      success: true,
      products: filtered,
      total: filtered.length,
    });
  } catch {
    return NextResponse.json(
      { success: false, error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
