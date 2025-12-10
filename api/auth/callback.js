export default async function handler(req, res) {
  const clientId = process.env.OAUTH_CLIENT_ID;
  const clientSecret = process.env.OAUTH_CLIENT_SECRET;

  if (!clientId || !clientSecret) {
    res.status(500).send('Missing OAuth env vars');
    return;
  }

  const proto = req.headers['x-forwarded-proto'] || 'https';
  const host  = req.headers['x-forwarded-host'] || req.headers.host;
  const base  = process.env.SITE_URL || `${proto}://${host}`;

  const urlObj = new URL(req.url, base);
  const code  = urlObj.searchParams.get('code');
  const state = urlObj.searchParams.get('state');

  const cookies = (req.headers.cookie || '')
    .split(';')
    .map(v => v.trim().split('='))
    .reduce((acc, [k, v]) => (acc[k] = v, acc), {});
  if (!code || !state || !cookies.gh_oauth_state || cookies.gh_oauth_state !== state) {
    res.status(400).send('Invalid OAuth state');
    return;
  }

  const tokenResp = await fetch('https://github.com/login/oauth/access_token', {
    method: 'POST',
    headers: { 'Accept': 'application/json' },
    body: new URLSearchParams({
      client_id: clientId,
      client_secret: clientSecret,
      redirect_uri: process.env.OAUTH_CALLBACK_URL || `${base}/api/auth/callback`,
      code,
    })
  });

  const data = await tokenResp.json();
  if (!data.access_token) {
    res.status(400).send(`OAuth exchange failed: ${JSON.stringify(data)}`);
    return;
  }

  // išvalom state slapuką
  res.setHeader('Set-Cookie', 'gh_oauth_state=; Path=/; Max-Age=0; HttpOnly; SameSite=Lax; Secure');

  // Decap tikisi ?token=, ne ?access_token=
  res.writeHead(302, { Location: `${base}/admin/#/auth/callback?token=${data.access_token}` });
  res.end();
}
