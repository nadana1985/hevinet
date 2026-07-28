'use client';

import Image from 'next/image';

/**
 * Props for OptimizedImage component.
 */
interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  fill?: boolean;
  sizes?: string;
  quality?: number;
  style?: React.CSSProperties;
}

/**
 * Placeholder blur data URL for gradient effect while image loads.
 * This is a tiny 1x1 transparent pixel encoded in base64.
 */
const defaultBlurDataURL =
  'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMSIgaGVpZ2h0PSIxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiNlNWU3ZWIiLz48L3N2Zz4=';

/**
 * OptimizedImage component using Next.js Image with blur placeholders.
 * Automatically adds lazy loading, responsive sizing, and blur placeholder.
 *
 * @example
 * <OptimizedImage
 *   src="/products/turmeric.jpg"
 *   alt="Premium Turmeric Powder"
 *   width={400}
 *   height={300}
 * />
 *
 * @example
 * // Hero image with priority
 * <OptimizedImage
 *   src="/hero.jpg"
 *   alt="HeviNet Trading"
 *   width={1200}
 *   height={600}
 *   priority
 * />
 *
 * @example
 * // Fill mode for containers
 * <OptimizedImage
 *   src="/products/rice.jpg"
 *   alt="Basmati Rice"
 *   fill
 *   sizes="(max-width: 768px) 100vw, 50vw"
 * />
 */
export function OptimizedImage({
  src,
  alt,
  width = 800,
  height = 600,
  className = '',
  priority = false,
  fill = false,
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  quality = 75,
  style,
}: OptimizedImageProps) {
  if (fill) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        quality={quality}
        priority={priority}
        placeholder="blur"
        blurDataURL={defaultBlurDataURL}
        className={`object-cover ${className}`}
        style={style}
      />
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      sizes={sizes}
      quality={quality}
      priority={priority}
      placeholder="blur"
      blurDataURL={defaultBlurDataURL}
      className={className}
      style={style}
    />
  );
}

export default OptimizedImage;
