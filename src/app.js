/*global document*/
/* @flow */

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { store } from './store/store.js';

import { App } from './containers/app.js';

const elem: HTMLElement = document.getElementById( 'app' );


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  elem
);
