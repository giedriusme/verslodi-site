import oauthProvider from 'netlify-cms-oauth-provider-node';

const { createVercelBeginHandler } = oauthProvider;

// Šitas handleris automatiškai:
// - pasiima OAUTH_CLIENT_ID ir OAUTH_CLIENT_SECRET iš env
// - naudoja ORIGIN ir COMPLETE_URL
// - nukreipia į GitHub OAuth puslapį
export default createVercelBeginHandler(
  {
    provider: 'github'
  },
  {
    useEnv: true
  }
);
