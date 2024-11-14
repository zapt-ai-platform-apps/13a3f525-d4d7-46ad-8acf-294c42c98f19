import { render } from 'solid-js/web';
import App from './App';
import { Router } from '@solidjs/router';
import './index.css';
import * as Sentry from '@sentry/browser';

Sentry.init({
  dsn: import.meta.env.VITE_PUBLIC_SENTRY_DSN,
  environment: import.meta.env.VITE_PUBLIC_APP_ENV,
});

Sentry.configureScope((scope) => {
  scope.setTag('type', 'frontend');
  scope.setTag('projectId', import.meta.env.VITE_PUBLIC_APP_ID);
});

// Add PWA support
window.progressierAppRuntimeSettings = {
  uid: import.meta.env.VITE_PUBLIC_APP_ID,
  icon512: 'https://otebnzqfzytqyyjdfhzr.supabase.co/storage/v1/render/image/public/icons/13a3f525-d4d7-46ad-8acf-294c42c98f19/858a9c83-cd1e-43c7-abf5-ced64b8bb8c4.png?width=512&height=512',
  name: 'immerJ',
  shortName: 'immerJ',
};

let script = document.createElement('script');
script.setAttribute('src', 'https://progressier.app/z8yY3IKmfpDIw3mSncPh/script.js');
script.setAttribute('defer', 'true');
document.querySelector('head').appendChild(script);

render(
  () => (
    <Router>
      <App />
    </Router>
  ),
  document.getElementById('root')
);