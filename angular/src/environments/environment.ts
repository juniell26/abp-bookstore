import { Environment } from '@abp/ng.core';

const baseUrl = 'https://stunning-beignet-b07c62.netlify.app';

export const environment = {
  production: true,
  application: {
    baseUrl,
    name: 'BookStore',
    logoUrl: '',
  },
  oAuthConfig: {
    issuer: 'https://readmebooks.com',
    redirectUri: baseUrl,
    clientId: 'BookStore_App',
    responseType: 'code',
    scope: 'offline_access BookStore',
    requireHttps: false,
  },
  apis: {
    default: {
      url: 'https://readmebooks.com',
      rootNamespace: 'Acme.BookStore',
    },
  },
} as Environment;
