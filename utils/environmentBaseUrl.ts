export default {
  ci: {
    prefix: 'https://dev-myapp-',
    suffix: '.mydomain.com',
  },
  local: {
    api: 'https://local-myapp.mydomain.com/api',
    home: 'https://local-myapp.mydomain.com',
  },
  production: {
    api: 'https://myapp.mydomain.com/api',
    home: 'https://myapp.mydomain.com',
  },
  staging: {
    api: 'https://staging-myapp.mydomain.com/api',
    home: 'https://staging-myapp.mydomain.com',
  },
};
