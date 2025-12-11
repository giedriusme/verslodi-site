// /api/auth/callback.js
export default async function handler(req, res) {
  const { code, state } = req.query || {};
  const expected = req.cookies?.gh_oauth_state;

  if (!code || !state || !expected || state !== expected) {
    return res.status(400).send('Invalid OAuth state');
  }

  const client_id = process.env.OAUTH_CLIENT_ID;
  const client_secret = process.env.OAUTH_CLIENT_SECRET;

  try {
    const r = await fetch('https://github.com/login/oauth/access_token', {
      method: 'POST',
      headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
      body: JSON.stringify({ client_id, client_secret, code })
    });
    const data = await r.json();
    const accessToken = data.access_token;

    if (!accessToken) {
      return res.status(401).send('No access token from GitHub');
    }

    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.setHeader('Cache-Control', 'no-store');

    // PostMessage + hash fallback (Decap supranta abu)
    res.end(`<!doctype html><html><body>
<script>
  (function () {
    var token = ${JSON.stringify(accessToken)};
    try {
      if (window.opener) {
        window.opener.postMessage({ token: token, provider: 'github' }, '*');
      }
    } catch (e) {}
    // Fallback: nukreipiam į Decap callback su access_token parametru
    window.location.replace('/admin/#/auth/callback?access_token=' + encodeURIComponent(token));
    setTimeout(function(){ document.body.innerText = 'You can close this window.'; }, 1500);
  })();
</script>
</body></html>`);
  } catch (err) {
    res.status(500).send('OAuth exchange failed');
  }
}
