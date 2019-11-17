import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './App';

import { store } from './store';

import 'react-notifications/lib/notifications.css';
import 'font-awesome/css/font-awesome.css';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
