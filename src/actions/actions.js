/* @flow */

export const REQUEST_WEATHER_UPDATE = Symbol( 'REQUEST_WEATHER_UPDATE' );
export const UPDATE_WEATHER_FOR_CITY = Symbol( 'UPDATE_WEATHER_FOR_CITY' );

export const actionTypes: Array<Symbol> = [
  REQUEST_WEATHER_UPDATE,
  UPDATE_WEATHER_FOR_CITY
];

// Note: can't get flow to restrict ActionType to actual action types
type ActionType = Symbol;

export class Action {
  type: ActionType;
  payload: any;
  error: boolean;
}

export class RequestWeatherUpdateAction extends Action {
  static type: ActionType = REQUEST_WEATHER_UPDATE;

  constructor( city: string ) {
    super();
    this.type = RequestWeatherUpdateAction.type;
    this.payload = {
      city
    };
    this.error = false;
  }
}

export class UpdateWeatherForCityAction extends Action {
  static type: ActionType = UPDATE_WEATHER_FOR_CITY;

  type: ActionType;

  constructor( city: string, results: any ) {
    super();
    this.type = UpdateWeatherForCityAction.type;
    this.payload = {
      city,
      results
    };
    this.error = false;
  }

}

export function requestWeatherUpdateAction( city: string ): RequestWeatherUpdateAction {
  return new RequestWeatherUpdateAction( city );
}

// TODO: actions need to be plain objects
export function updateWeatherForCityAction( city: string, results: any ) {
  // return new UpdateWeatherForCityAction( city, results );
  return {
    type: UPDATE_WEATHER_FOR_CITY,
    payload: {
      city,
      results
    },
    error: false
  };
}
