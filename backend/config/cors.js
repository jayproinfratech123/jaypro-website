import cors from 'cors';

export function createCorsMiddleware(env = process.env) {
  // Public website origin, not a secret. Keep it available even when the
  // hosting environment has a missing or stale CLIENT_URL value.
  const origins = new Set(['https://jayproinfratech.com']);
  for (const value of (env.CLIENT_URL || '').split(',')) {
    const candidate = value.trim().replace(/\/+$/, '');
    if (!candidate) continue;
    const url = new URL(candidate);
    if (!['https:', 'http:'].includes(url.protocol) || url.origin !== candidate) {
      throw new Error('CLIENT_URL must contain HTTP(S) origins without paths.');
    }
    origins.add(url.origin);
  }
  if (env.NODE_ENV !== 'production') origins.add('http://localhost:5173');

  return cors({
    origin(origin, callback) {
      callback(null, Boolean(origin && origins.has(origin)));
    },
    credentials: true,
    methods: ['GET', 'HEAD', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  });
}
