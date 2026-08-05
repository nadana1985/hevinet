import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Simple in-memory rate-limiter for Edge runtime instances
const ipCache = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_WINDOW = 60000; // 1 minute window
const MAX_REQUESTS = 10; // Max 10 requests per minute

// Common prompt injection attack signatures to protect the LLM context
const INJECTION_SIGNATURES = [
  'ignore previous instructions',
  'ignore system instructions',
  'bypass safety guidelines',
  'you are now a',
  'override rules',
  'reveal system prompt',
  'disregard guidelines',
];

/**
 * Next.js Edge proxy protecting our chat API routes.
 */
export async function proxy(request: NextRequest) {
  // Only target the /api/chat endpoint
  if (request.nextUrl.pathname.startsWith('/api/chat')) {
    const ip = (request as { ip?: string }).ip || request.headers.get('x-forwarded-for') || '127.0.0.1';
    const now = Date.now();

    // 1. Rate Limiting Check
    const clientData = ipCache.get(ip);
    if (!clientData || now > clientData.resetTime) {
      ipCache.set(ip, {
        count: 1,
        resetTime: now + RATE_LIMIT_WINDOW,
      });
    } else {
      if (clientData.count >= MAX_REQUESTS) {
        return new NextResponse(
          JSON.stringify({ error: 'Too many requests. Please wait a minute.' }),
          {
            status: 429,
            headers: {
              'Content-Type': 'application/json',
              'Retry-After': Math.ceil((clientData.resetTime - now) / 1000).toString(),
            },
          }
        );
      }
      clientData.count += 1;
    }

    // 2. Prompt Injection Filtering (WAF)
    try {
      const clonedRequest = request.clone();
      const body = await clonedRequest.json();
      const messages = body.messages || [];

      for (const msg of messages) {
        if (msg.content && typeof msg.content === 'string') {
          const lowerContent = msg.content.toLowerCase();
          const hasViolation = INJECTION_SIGNATURES.some((sig) =>
            lowerContent.includes(sig)
          );

          if (hasViolation) {
            return new NextResponse(
              JSON.stringify({ error: 'Security warning: Input payload rejected.' }),
              {
                status: 400,
                headers: { 'Content-Type': 'application/json' },
              }
            );
          }
        }
      }
    } catch {
      // Allow request if JSON parsing fails to avoid breaking request stream
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/api/chat/:path*',
};
