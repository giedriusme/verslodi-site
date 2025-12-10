// api/auth/callback.js
export default async function handler(req, res) {
  const code = req.query.code;
  const state = req.query.state;

  if (!code) return res.status(400).send('Missing code');

  // optional: state tikrinimas
  const cookieState = (req.headers.cookie || '')
    .split(';').map(v => v.trim())
    .find(v => v.startsWith('gh_oauth_state='))?.split('=')[1];

  if (cookieState && state && cookieState !== state) {
    return res.status(400).send('Invalid state');
  }

  const proto = req.headers['x-forwarded-proto'] || 'https';
  const host = req.headers['x-forwarded-host'] || req.headers.host;
  const base = process.env.SITE_URL || `${proto}://${host}`;

  const redirectUri =
    process.env.OAUTH_CALLBACK_URL || `${base}/api/auth/callback`;

  const params = new URLSearchParams({
    client_id: process.env.OAUTH_CLIENT_ID || '',
    client_secret: process.env.OAUTH_CLIENT_SECRET || '',
    code,
    redirect_uri: redirectUri
  });

  const r = await fetch('https://github.com/login/oauth/access_token', {
    method: 'POST',
    headers: { Accept: 'application/json' },
    body: params
  });

  const json = await r.json();
  const token = json.access_token;
  if (!token) return res.status(500).send('No access_token');

  // Decap tikisi grįžti į /admin/#/auth/callback?access_token=...
  const dest = `${base}/admin/#/auth/callback?access_token=${token}`;
  res.writeHead(302, { Location: dest });
  res.end();
}
