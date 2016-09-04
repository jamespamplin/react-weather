/*global document*/
/* @flow */

import React from 'react';
import ReactDOM from 'react-dom';

const elem: HTMLElement = document.getElementById( 'app' );

function App() {
  return (
    <div>
      <p>Testing...</p>
    </div>
  );
}

ReactDOM.render(
  <App />,
  elem
);
