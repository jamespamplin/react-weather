/* @flow */

export const REQUEST_WEATHER_UPDATE = Symbol( 'REQUEST_WEATHER_UPDATE' );
export const UPDATE_WEATHER_FOR_CITY = Symbol( 'UPDATE_WEATHER_FOR_CITY' );

export const actionTypes: Array<Symbol> = [
  REQUEST_WEATHER_UPDATE,
  UPDATE_WEATHER_FOR_CITY
];

// Note: can't get flow to restrict ActionType to actual action types
type ActionType = Symbol;

export type Action = {
  type: ActionType;
  payload: any;
  error: boolean;
}

export function requestWeatherUpdateAction( city: string ): Action {
  return {
    type: REQUEST_WEATHER_UPDATE,
    payload: {
      city
    },
    error: false
  };
}

export function updateWeatherForCityAction( city: string, results: any ): Action {
  return {
    type: UPDATE_WEATHER_FOR_CITY,
    payload: {
      city,
      results
    },
    error: false
  };
}
