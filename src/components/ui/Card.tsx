'use client';

import { useRef, useState, type CSSProperties } from 'react';
import { cn } from '@/lib/utils';
import type { CardProps } from '@/types';

const paddingStyles = {
  none: '',
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8',
} as const;

/**
 * Card component with padding options, hover translations, glassmorphism, 
 * and dynamic cursor-tracking radial glow effects.
 *
 * @example
 * <Card hover glow padding="lg">Content</Card>
 * <Card glass>Glassmorphic Card</Card>
 */
function Card({
  children,
  className,
  hover = false,
  glow = false,
  glass = false,
  padding = 'md',
}: CardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!glow || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setCoords({ x, y });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={
        glow && isHovered
          ? ({
              '--glow-x': `${coords.x}px`,
              '--glow-y': `${coords.y}px`,
            } as CSSProperties)
          : undefined
      }
      className={cn(
        // Base styles
        'relative overflow-hidden rounded-2xl border transition-all duration-300',
        
        // Glassmorphism vs standard bg
        glass 
          ? 'glass backdrop-blur-md border-white/20 dark:border-white/5'
          : 'bg-white border-neutral-100 dark:bg-neutral-800 dark:border-neutral-700',
        
        // Padding
        paddingStyles[padding],
        
        // Hover translation/shadow effect
        hover && [
          'motion-safe:hover:-translate-y-1 motion-safe:hover:shadow-lg',
          glass 
            ? 'hover:border-white/30 dark:hover:border-white/10' 
            : 'hover:border-neutral-200 dark:hover:border-neutral-600'
        ],
        className
      )}
    >
      {/* Glow Overlay layer */}
      {glow && isHovered && (
        <div
          className="pointer-events-none absolute inset-0 opacity-100 transition-opacity duration-300 motion-reduce:hidden"
          style={{
            background: `radial-gradient(400px circle at var(--glow-x) var(--glow-y), rgba(249, 115, 22, 0.08), transparent 80%)`,
          }}
        />
      )}
      
      {/* Content wrapper to ensure it renders above the glow overlay */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}

export { Card };
export default Card;
