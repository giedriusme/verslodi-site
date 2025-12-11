import oauthProvider from 'netlify-cms-oauth-provider-node';

const { createVercelCompleteHandler } = oauthProvider;

// Šitas handleris:
// - pasiima code iš GitHub
// - išsikeičia jį į access_token
// - per postMessage atsiunčia tokeną Decap CMS langui
// - ir uždaro popup'ą
export default createVercelCompleteHandler(
  {
    provider: 'github'
  },
  {
    useEnv: true
  }
);
