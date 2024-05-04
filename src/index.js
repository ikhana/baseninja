import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import 'fast-text-encoding';

import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './app/App';
import routes from './routes';

import './index.scss';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App routes={routes} />
  </React.StrictMode>
);
