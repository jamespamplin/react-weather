/* @flow */

import { createStore } from 'redux';
import type { Action } from '../actions/actions.js';

type State = {};


function reducers( state: State = {}, action: Action ) {
  switch ( action.type ) {
    default:
      return state;
  }
}

export const store = createStore( reducers );
