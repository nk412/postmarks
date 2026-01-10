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
    const options = {
      city: params.get('city') || 'City',
      country: params.get('country') || 'Country',
      native: params.get('native') || '',
      symbol: params.get('symbol') || 'compass',
      palette: parseInt(params.get('palette') || '0', 10),
      wear: parseInt(params.get('wear') || '50', 10),
      sticker: params.get('sticker') === 'true' || params.get('sticker') === '1',
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
