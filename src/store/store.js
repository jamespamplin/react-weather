/* @flow */

import { createStore } from 'redux';
import { Action, UpdateWeatherForCityAction } from '../actions/actions.js';

type State = { results: Array<any>, city?: string };

const initialState: State = { results: [] };

function reducers( state: State = initialState, action: Action ): State {
  switch ( action.type ) {
    case UpdateWeatherForCityAction.type:
      return {
        city: action.payload.city,
        results: action.payload.results
      };

    default:
      return state;
  }
}

export const store = createStore( reducers );
