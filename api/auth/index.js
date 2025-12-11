// /api/auth/index.js
import crypto from 'node:crypto';

function normalizeBase(url) {
  if (!url) return null;
  // pašalinam galinį "/" ir verčiam į https://www....
  const u = url.replace(/\/+$/, '');
  return u;
}

export default async function handler(req, res) {
  const clientId = process.env.OAUTH_CLIENT_ID;
  if (!clientId) {
    res.status(500).send('Missing OAUTH_CLIENT_ID');
    return;
  }

  // 1) Bazė – pirmiausia iš ENV, kad visada būtų https://www.verslodi.lt
  const envBase = normalizeBase(process.env.SITE_URL);
  const host = req.headers['x-forwarded-host'] || req.headers.host;
  const base = envBase || `https://${host}`;

  const callbackEnv = process.env.OAUTH_CALLBACK_URL; // pvz. https://www.verslodi.lt/api/auth/callback
  const redirectUri = callbackEnv || `${base}/api/auth/callback`;

  const scope = process.env.OAUTH_SCOPE || 'public_repo,read:user';

  // 2) Tvirtesnis state
  const state = crypto.randomUUID();

  // 3) Cookie – jei norėsi, kad veiktų ir apex, ir www, pridėk Domain=.verslodi.lt
  const cookieParts = [
    `gh_oauth_state=${state}`,
    'Path=/',
    'HttpOnly',
    'SameSite=Lax',
    'Secure',
    'Max-Age=600'
    // 'Domain=.verslodi.lt' // <- atkomentuok, jei tikrai naudosi ir apex, ir www
  ];
  res.setHeader('Set-Cookie', cookieParts.join('; '));

  const url = new URL('https://github.com/login/oauth/authorize');
  url.searchParams.set('client_id', clientId);
  url.searchParams.set('redirect_uri', redirectUri);
  url.searchParams.set('scope', scope);
  url.searchParams.set('state', state);
  url.searchParams.set('allow_signup', 'false');

  res.writeHead(302, { Location: url.toString() });
  res.end();
}
