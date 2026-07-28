import type { Metadata } from 'next';
import { getProductBySlug } from '@/data/products';

interface Props {
  params: Promise<{ category: string; product: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category, product } = await params;
  const productData = getProductBySlug(category, product);

  if (!productData) {
    return { title: 'Product Not Found' };
  }

  return {
    title: productData.name,
    description: productData.description,
    openGraph: {
      title: `${productData.name} | HeviNet Trading`,
      description: productData.description,
      url: `https://hevinet.in/products/${category}/${product}`,
    },
    alternates: {
      canonical: `https://hevinet.in/products/${category}/${product}`,
    },
  };
}

export default function ProductLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
