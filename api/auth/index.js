// api/auth/index.js
export default async function handler(req, res) {
  const clientId = process.env.OAUTH_CLIENT_ID;
  if (!clientId) {
    res.status(500).send('Missing OAUTH_CLIENT_ID');
    return;
  }

  const proto = req.headers['x-forwarded-proto'] || 'https';
  const host  = req.headers['x-forwarded-host'] || req.headers.host;
  const base  = process.env.SITE_URL || `${proto}://${host}`;

  const redirectUri = process.env.OAUTH_CALLBACK_URL || `${base}/api/auth/callback`;
  const scope = process.env.OAUTH_SCOPE || 'public_repo,read:user';

  // CSRF apsauga per state + HttpOnly slapuką
  const state = Math.random().toString(36).slice(2);
  res.setHeader('Set-Cookie',
    `gh_oauth_state=${state}; Path=/; HttpOnly; SameSite=Lax; Secure; Max-Age=600`
  );

  const url = new URL('https://github.com/login/oauth/authorize');
  url.searchParams.set('client_id', clientId);
  url.searchParams.set('redirect_uri', redirectUri);
  url.searchParams.set('scope', scope);
  url.searchParams.set('state', state);
  url.searchParams.set('allow_signup', 'false');

  res.writeHead(302, { Location: url.toString() });
  res.end();
}
