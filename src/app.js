/*global document*/
/* @flow */

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { store } from './store/store.js';

const elem: HTMLElement = document.getElementById( 'app' );

function App() {
  return (
    <div>
      <p>Testing...</p>
    </div>
  );
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  elem
);
