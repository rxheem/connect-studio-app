import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from 'react-router-dom';

// Bootstrap essentials
import 'bootstrap/dist/css/bootstrap-grid.css';

// Bulma
import 'bulma/css/bulma.css';

// CSS
import 'normalize.css';

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);

serviceWorker.unregister();
