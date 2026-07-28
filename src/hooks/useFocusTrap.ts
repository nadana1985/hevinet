import { useEffect, type RefObject } from 'react';

/**
 * Custom hook to trap keyboard focus navigation within a container.
 * Also handles Escape key closure and restores focus on unmount.
 *
 * @param ref Ref containing the target modal container
 * @param isOpen Condition checking if the modal is currently open
 * @param onClose Callback triggered when Escape is pressed
 */
export function useFocusTrap(
  ref: RefObject<HTMLElement | null>,
  isOpen: boolean,
  onClose: () => void
) {
  useEffect(() => {
    if (!isOpen || !ref.current) return;

    const container = ref.current;
    const focusable = container.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    // Store original active element to return focus on close
    const previousActiveElement = document.activeElement as HTMLElement;

    // Focus the first element on modal mount
    if (first) {
      first.focus();
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last?.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first?.focus();
        }
      }
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      }
    };

    container.addEventListener('keydown', handleKeyDown);
    return () => {
      container.removeEventListener('keydown', handleKeyDown);
      // Return focus to the trigger button
      previousActiveElement?.focus();
    };
  }, [isOpen, ref, onClose]);
}
