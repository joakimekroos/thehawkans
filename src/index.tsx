import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from './router';
import ReactGA from 'react-ga';

import 'bootstrap/dist/css/bootstrap.min.css';
import './css/thehawkans.css';

import App from './App';

ReactGA.initialize('UA-85188902-1');
ReactGA.pageview(window.location.pathname + window.location.search);

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('Root element not found');
}

createRoot(rootElement).render(
  <Router>
    <App />
  </Router>
);
