'use client';

import { motion, type Variants, type HTMLMotionProps } from 'framer-motion';
import type { ReactNode } from 'react';

// ── Shared Viewport Options ───────────────────────────────────────────────

const defaultViewport = { once: true, margin: '-60px' as const };

// ── Animation Variants ────────────────────────────────────────────────────

const fadeInVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const slideUpVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const scaleInVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1 },
};

const staggerContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const staggerItemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

// ── Props ─────────────────────────────────────────────────────────────────

interface MotionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
}

interface StaggerContainerProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
}

// ── FadeIn ────────────────────────────────────────────────────────────────

/**
 * Fades in children when they scroll into view.
 *
 * @example
 * <FadeIn delay={0.2}>Content</FadeIn>
 */
export function FadeIn({
  children,
  className,
  delay = 0,
  duration = 0.5,
}: MotionProps) {
  return (
    <motion.div
      variants={fadeInVariants}
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
      transition={{ duration, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ── SlideUp ───────────────────────────────────────────────────────────────

/**
 * Slides children up from below while fading in, triggered on scroll.
 *
 * @example
 * <SlideUp delay={0.1}>Content</SlideUp>
 */
export function SlideUp({
  children,
  className,
  delay = 0,
  duration = 0.6,
}: MotionProps) {
  return (
    <motion.div
      variants={slideUpVariants}
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
      transition={{ duration, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ── ScaleIn ───────────────────────────────────────────────────────────────

/**
 * Scales children in from slightly smaller, triggered on scroll.
 *
 * @example
 * <ScaleIn delay={0.15}>Content</ScaleIn>
 */
export function ScaleIn({
  children,
  className,
  delay = 0,
  duration = 0.5,
}: MotionProps) {
  return (
    <motion.div
      variants={scaleInVariants}
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
      transition={{ duration, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ── StaggerContainer ──────────────────────────────────────────────────────

/**
 * Container that staggers the animation of its StaggerItem children.
 *
 * @example
 * <StaggerContainer>
 *   <StaggerItem>Item 1</StaggerItem>
 *   <StaggerItem>Item 2</StaggerItem>
 * </StaggerContainer>
 */
export function StaggerContainer({
  children,
  className,
  staggerDelay = 0.1,
}: StaggerContainerProps) {
  return (
    <motion.div
      variants={staggerContainerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
      className={className}
      // Override the stagger delay
      transition={{
        staggerChildren: staggerDelay,
      }}
    >
      {children}
    </motion.div>
  );
}

// ── StaggerItem ───────────────────────────────────────────────────────────

/**
 * Individual item within a StaggerContainer that animates with its parent's stagger.
 */
export function StaggerItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div variants={staggerItemVariants} className={className}>
      {children}
    </motion.div>
  );
}

// ── HoverCard ─────────────────────────────────────────────────────────────

/**
 * Card that lifts up on hover with a spring animation.
 *
 * @example
 * <HoverCard>Content</HoverCard>
 */
export function HoverCard({
  children,
  className,
  ...props
}: { children: ReactNode; className?: string } & HTMLMotionProps<'div'>) {
  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -5 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
