// Cloudflare Worker to serve static assets for VibeCamp (Tribe Camp) website
// This worker serves the index.html and any static assets

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    // Redirect tribecamp.org to coliven.com event page
    if (url.hostname === 'tribecamp.org' || url.hostname === 'www.tribecamp.org') {
      return Response.redirect('https://coliven.com/events/c25ab192e5ec', 301);
    }

    // Serve index.html for root path
    if (url.pathname === '/' || url.pathname === '/index.html') {
      return env.ASSETS.fetch(request);
    }

    // Try to serve static assets
    try {
      return await env.ASSETS.fetch(request);
    } catch (e) {
      // Fallback to index.html for SPA-style routing
      return env.ASSETS.fetch(new Request(`${url.origin}/index.html`, request));
    }
  }
};
