import type { ReactNode } from 'react';

// ── UI Component Props ──────────────────────────────────────────────────────

export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  disabled?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  children: ReactNode;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
}

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label: string;
  error?: string;
  helperText?: string;
  id?: string;
}

export interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
  helperText?: string;
  id?: string;
}

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  error?: string;
  options: { value: string; label: string }[];
  placeholder?: string;
}

export interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  padding?: 'none' | 'sm' | 'md' | 'lg';
}

export interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}

export interface IconButtonProps {
  icon: ReactNode;
  label: string; // Used as aria-label
  onClick?: () => void;
  className?: string;
  variant?: 'ghost' | 'solid' | 'outline';
  size?: 'sm' | 'md' | 'lg';
}

// ── Navigation ─────────────────────────────────────────────────────────────

export interface NavigationItem {
  label: string;
  href: string;
  children?: NavigationItem[];
}

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface MegaMenuItem {
  category: string;
  items: { label: string; href: string }[];
}

// ── Data Models ────────────────────────────────────────────────────────────

export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
  category: string;
  origin?: string;
  certifications?: string[];
  minOrderQuantity?: string;
  price?: string;
  featured?: boolean;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  company: string;
  country: string;
  avatar: string;
  rating: number;
}

export interface Stat {
  value: number;
  suffix: string;
  label: string;
}

export interface Certification {
  name: string;
  image: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
}

export interface ClientLogo {
  name: string;
  logo: string;
}

// ── Layout ─────────────────────────────────────────────────────────────────

export interface FooterColumn {
  title: string;
  links: { label: string; href: string }[];
}

export interface SocialLink {
  label: string;
  href: string;
  icon: string;
}

// ── Form ───────────────────────────────────────────────────────────────────

export interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  interest?: string;
  message: string;
}

export interface FormState {
  isSubmitting: boolean;
  isSuccess: boolean;
  error: string | null;
}

// ── SEO ────────────────────────────────────────────────────────────────────

export interface SEOData {
  title: string;
  description: string;
  ogImage?: string;
  canonical?: string;
}

export interface StructuredData {
  '@context': 'https://schema.org';
  '@type': string;
  [key: string]: unknown;
}

// ── Theme ──────────────────────────────────────────────────────────────────

export type Theme = 'light' | 'dark' | 'system';
export type ResolvedTheme = 'light' | 'dark';

export interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  resolvedTheme: ResolvedTheme;
}

// ── Chat ───────────────────────────────────────────────────────────────────

export interface ChatMessage {
  role: 'user' | 'bot';
  content: string;
  timestamp?: number;
}

// ── API Response Types ─────────────────────────────────────────────────────

export interface APIResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: string;
}

export interface PaginatedResponse<T> extends APIResponse<T[]> {
  total: number;
  page: number;
  pageSize: number;
}
