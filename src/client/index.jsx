/* eslint-disable import/extensions */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
// render the App
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './components/app.jsx';

const root = createRoot(document.getElementById('root'));

root.render(
  <Auth0Provider
    domain="dev-f1b4a5hmp63a60ox.us.auth0.com"
    clientId="0LjyQVXmSvkGpskx7M2cBNiokbT79a5F"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <App />
  </Auth0Provider>,
);
