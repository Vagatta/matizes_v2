/**
 * Cloudflare Worker — Google Reviews proxy
 * Deploy: wrangler deploy
 *
 * Secrets (nunca en código):
 *   wrangler secret put GOOGLE_PLACES_API_KEY
 *
 * El PLACE_ID es público, lo hardcodeamos aquí.
 */

const PLACE_ID = 'ChIJV3xQEB4TRw0RIU86WohTnT4';
const ALLOWED_ORIGIN = 'https://tudominio.com'; // cambia por tu dominio real

const CORS = (origin) => ({
  'Access-Control-Allow-Origin': origin,
  'Access-Control-Allow-Methods': 'GET',
  'Content-Type': 'application/json',
  'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
});

export default {
  async fetch(request, env) {
    const origin = request.headers.get('Origin') || '';

    /* Rechaza orígenes no permitidos en producción */
    if (origin && !origin.includes('localhost') && origin !== ALLOWED_ORIGIN) {
      return new Response(JSON.stringify({ error: 'Forbidden' }), {
        status: 403,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    if (!env.GOOGLE_PLACES_API_KEY) {
      return new Response(JSON.stringify({ error: 'API key not configured', reviews: [] }), {
        status: 503,
        headers: CORS(origin),
      });
    }

    try {
      const url = `https://places.googleapis.com/v1/places/${PLACE_ID}?languageCode=es`;
      const res = await fetch(url, {
        headers: {
          'X-Goog-Api-Key': env.GOOGLE_PLACES_API_KEY,
          'X-Goog-FieldMask': 'reviews,rating,userRatingCount',
        },
      });

      if (!res.ok) {
        const err = await res.text();
        return new Response(JSON.stringify({ error: 'Google API error', detail: err, reviews: [] }), {
          status: res.status,
          headers: CORS(origin),
        });
      }

      const data = await res.json();

      const reviews = (data.reviews || []).map((r) => ({
        author: r.authorAttribution?.displayName ?? 'Cliente',
        profilePhoto: r.authorAttribution?.photoUri ?? null,
        rating: r.rating ?? 5,
        text: r.text?.text ?? '',
        relativeTime: r.relativePublishTimeDescription ?? '',
      }));

      return new Response(JSON.stringify({
        rating: data.rating ?? null,
        totalReviews: data.userRatingCount ?? null,
        reviews,
      }), {
        status: 200,
        headers: CORS(origin),
      });
    } catch (err) {
      return new Response(JSON.stringify({ error: 'Worker error', reviews: [] }), {
        status: 500,
        headers: CORS(origin),
      });
    }
  },
};
