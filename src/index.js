import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
import ReactGA from 'react-ga';

import 'bootstrap/dist/css/bootstrap.min.css';
import './css/thehawkans.css';

import App from './App';

ReactGA.initialize('UA-85188902-1');
ReactGA.pageview(window.location.pathname + window.location.search);

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);
