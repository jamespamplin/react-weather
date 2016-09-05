/* @flow */

import { createStore } from 'redux';
import { UPDATE_WEATHER_FOR_CITY } from '../actions/actions.js';
import type { Action } from '../actions/actions.js';

type State = { results: Array<any>, city?: string };

const initialState: State = {
  city: 'london',
  results: []
};

function reducers( state: State = initialState, action: Action ): State {
  switch ( action.type ) {
    case UPDATE_WEATHER_FOR_CITY:
      return {
        city: action.payload.city,
        results: action.payload.results
      };

    default:
      return state;
  }
}

export const store = createStore( reducers );
