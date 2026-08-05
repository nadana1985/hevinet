/**
 * Security & Compliance utilities for HIPAA, GDPR, and DPDP regulations.
 */

// Regex patterns for sensitive identifiers
const EMAIL_REGEX = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;
const PHONE_REGEX = /(\+?\d{1,3}[-.\s]?)?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}/g;

/**
 * Sanitizes a request payload by stripping direct PII (emails and phone numbers).
 * Replaces them with redacted tags prior to logging or transmission.
 */
export function sanitizePayload<T>(data: T): T {
  if (!data) return data;
  
  const serialized = JSON.stringify(data);
  const sanitized = serialized
    .replace(EMAIL_REGEX, '[REDACTED_EMAIL]')
    .replace(PHONE_REGEX, '[REDACTED_PHONE]');
    
  return JSON.parse(sanitized) as T;
}

/**
 * One-way SHA-256 hash helper for client-side hashing of sensitive identifiers.
 */
export async function hashSensitiveData(text: string): Promise<string> {
  if (typeof crypto === 'undefined' || !crypto.subtle) {
    // Simple fallback string hashing
    let hash = 0;
    for (let i = 0; i < text.length; i++) {
      const char = text.charCodeAt(i);
      hash = (hash << 5) - hash + char;
      hash |= 0;
    }
    return Math.abs(hash).toString(16);
  }
  const encoder = new TextEncoder();
  const data = encoder.encode(text);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map((b) => b.toString(16).padStart(2, '0')).join('');
}

/**
 * Helper to check and set GDPR/DPDP user data processing consent cookies.
 */
export const ConsentManager = {
  hasConsent(): boolean {
    if (typeof window === 'undefined') return false;
    return localStorage.getItem('hevinet_data_consent') === 'granted';
  },
  
  grantConsent(): void {
    if (typeof window === 'undefined') return;
    localStorage.setItem('hevinet_data_consent', 'granted');
  },
  
  revokeConsent(): void {
    if (typeof window === 'undefined') return;
    localStorage.removeItem('hevinet_data_consent');
  }
};
