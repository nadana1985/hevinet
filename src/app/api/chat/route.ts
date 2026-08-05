import { streamText } from 'ai';
import { defaultModel, systemPrompt } from '@/lib/ai';

export const runtime = 'edge';

/**
 * AI chat route processing user prompts and returning a text stream.
 */
export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    // Verify messages structure
    if (!messages || !Array.isArray(messages)) {
      return new Response(JSON.stringify({ error: 'Invalid messages list' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const result = streamText({
      model: defaultModel,
      messages,
      system: systemPrompt,
    });

    return result.toTextStreamResponse();
  } catch (error) {
    console.error('AI chat stream error:', error);
    return new Response(JSON.stringify({ error: 'Internal AI stream error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
