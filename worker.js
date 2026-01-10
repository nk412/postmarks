// Cloudflare Worker for serving dynamic postmark SVGs
// Deploy with: wrangler deploy

import { generatePostmark } from './postmark.js';

export default {
  async fetch(request) {
    const url = new URL(request.url);

    // Handle CORS preflight
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type',
        },
      });
    }

    // Parse query parameters
    const params = url.searchParams;
    // Parse and validate parameters
    const wear = Math.max(0, Math.min(100, parseInt(params.get('wear') || '50', 10)));
    const rotation = Math.max(-30, Math.min(30, parseInt(params.get('rotation') || '0', 10)));

    const style = params.get('style') || 'postmark';
    const validStyles = ['postmark', 'envelope', 'label'];

    const options = {
      city: params.get('city') || 'London',
      country: params.get('country') || 'United Kingdom',
      native: params.get('native') || '',
      symbol: params.get('symbol') || 'compass',
      palette: parseInt(params.get('palette') || '0', 10),
      wear: wear,
      sticker: params.get('sticker') === 'true' || params.get('sticker') === '1',
      style: validStyles.includes(style) ? style : 'postmark',
      rotation: rotation,
      viewBoxPadding: 80  // Smart padding: enough for 30° rotation without excessive whitespace
    };

    // Generate SVG
    const svg = generatePostmark(options);

    // Return SVG response
    return new Response(svg, {
      headers: {
        'Content-Type': 'image/svg+xml',
        'Cache-Control': 'public, max-age=31536000, immutable',
        'Access-Control-Allow-Origin': '*',
      },
    });
  },
};
