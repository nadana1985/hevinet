'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

/**
 * PageTransitions component that progressively enhances route changes
 * using the native browser View Transitions API.
 */
export function PageTransitions({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  useEffect(() => {
    const handleLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      
      if (!anchor) return;
      
      const href = anchor.getAttribute('href');
      const isLocal = href && href.startsWith('/') && !href.startsWith('//');
      const isTargetSelf = !anchor.target || anchor.target === '_self';
      const isSpecialClick = e.metaKey || e.ctrlKey || e.shiftKey || e.altKey;
      
      if (isLocal && isTargetSelf && !isSpecialClick) {
        // Progressively enhance view transitions if supported in browser
        if (typeof document !== 'undefined' && 'startViewTransition' in document) {
          e.preventDefault();
          
          // Trigger browser transition callback
          document.startViewTransition(async () => {
            router.push(href);
          });
        }
      }
    };

    document.addEventListener('click', handleLinkClick);
    return () => {
      document.removeEventListener('click', handleLinkClick);
    };
  }, [router]);

  return <>{children}</>;
}

export default PageTransitions;
