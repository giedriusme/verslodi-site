// api/auth/callback.js
export default async function handler(req, res) {
  try {
    const code = req.query.code || req.body?.code;
    if (!code) return res.status(400).send('Missing ?code');

    const client_id = process.env.OAUTH_CLIENT_ID;
    const client_secret = process.env.OAUTH_CLIENT_SECRET;
    if (!client_id || !client_secret) {
      return res.status(500).send('Missing OAuth env vars');
    }

    const proto = req.headers['x-forwarded-proto'] || 'https';
    const host  = req.headers['x-forwarded-host'] || req.headers.host;
    const base  = process.env.SITE_URL || `${proto}://${host}`;
    const redirect_uri =
      process.env.OAUTH_CALLBACK_URL || `${base}/api/auth/callback`;

    // Exchange code -> access_token
    const resp = await fetch('https://github.com/login/oauth/access_token', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ client_id, client_secret, code, redirect_uri })
    });

    const data = await resp.json();
    const access_token = data.access_token;
    if (!access_token) {
      return res
        .status(400)
        .send('GitHub OAuth failed: ' + JSON.stringify(data));
    }

    // HTML, kuris perduoda tokeną Decap CMS ir uždaro popup'ą
    const html = `<!doctype html><html><body><script>
      (function () {
        var token = ${JSON.stringify(access_token)};
        try {
          if (window.opener) {
            // Pagrindinis kelias: Decap klausosi šios žinutės
            window.opener.postMessage(
              'authorization:github:success:' + JSON.stringify({ token: token }),
              '*'
            );
            window.close();
            return;
          }
        } catch (e) {}
        // Fallback kai postMessage nepasiekia
        location.replace('/admin/#/auth/callback?access_token=' + encodeURIComponent(token));
      })();
    </script></body></html>`;

    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.status(200).send(html);
  } catch (e) {
    res.status(500).send('OAuth callback error: ' + (e?.message || e));
  }
}
