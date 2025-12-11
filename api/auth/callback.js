// api/auth/callback.js
export default async function handler(req, res) {
  try {
    const clientId     = process.env.OAUTH_CLIENT_ID;
    const clientSecret = process.env.OAUTH_CLIENT_SECRET;
    if (!clientId || !clientSecret) {
      return res.status(500).send('Missing OAuth env vars');
    }

    const { code, state } = req.query || {};
    if (!code || !state) return res.status(400).send('Missing code/state');

    const cookieState = (req.headers.cookie || '')
      .split(';')
      .map(s => s.trim())
      .find(s => s.startsWith('gh_oauth_state='))
      ?.split('=')[1];

    if (!cookieState || cookieState !== state) {
      return res.status(400).send('Invalid state');
    }

    const proto = req.headers['x-forwarded-proto'] || 'https';
    const host  = req.headers['x-forwarded-host'] || req.headers.host || 'www.verslodi.lt';
    const base  = process.env.SITE_URL || `${proto}://${host}`;
    const redirectUri = process.env.OAUTH_CALLBACK_URL || `${base}/api/auth/callback`;

    const body = new URLSearchParams({
      client_id: clientId,
      client_secret: clientSecret,
      code,
      redirect_uri: redirectUri,
    });

    const resp = await fetch('https://github.com/login/oauth/access_token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded', 'Accept': 'application/json' },
      body
    });

    const data = await resp.json();
    if (!data.access_token) {
      return res.status(400).send(`OAuth error: ${data.error || 'no token'}`);
    }

    // Išvalom state slapuką (galiojo visam domenui)
    const bare = host.replace(/^www\./, '').split(':')[0];
    res.setHeader('Set-Cookie', `gh_oauth_state=; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=0; Domain=.${bare}`);

    // Grąžinam abu pavadinimus — kai kurioms CMS versijoms reikia vieno arba kito
    const admin = `${base}/admin/#/auth/callback?token=${data.access_token}&access_token=${data.access_token}`;

    res.writeHead(302, { Location: admin });
    res.end();
  } catch (e) {
    res.status(500).send('Callback failed');
  }
}
