import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from 'react-router-dom';

// Normalize
import 'normalize.css';

// Bulma
import 'bulma/css/bulma.css';

// Bootstrap essentials
import 'bootstrap/dist/css/bootstrap-grid.css';

// Main styling
import './index.css'

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);

serviceWorker.unregister();
