/* @flow */
/*global fetch*/

import { updateWeatherForCityAction } from '../../actions/actions.js';

import { WeatherResults } from '../weather-models/weather-models.js';

type WeatherProviderProps = {
  city: string,
  updateWeatherForCity: typeof updateWeatherForCityAction
};

const API_KEY = '0866d63331508a2e8f111ab3e15f96ad';

function getEndpoint( city: string ) {
  return `http://api.openweathermap.org/data/2.5/forecast?q=${city},uk&mode=json&units=metric&appid=${API_KEY}`;
}


export function WeatherProvider( { city, updateWeatherForCity }: WeatherProviderProps ) {

  const url = getEndpoint( city );

  fetch( url )
    .then( validateOkResponse )
    .then( responseAsJSON )
    .then( adaptResponseToResult )
    .then( updateWeatherForCity.bind( null, city ) )
    .catch( error => console.error( 'Error retrieving Weather from API: ' + error, error ) );

  return null;
}


function validateOkResponse( response: Response ): Promise<Response> {
  if ( response.ok === true ) {
    return Promise.resolve( response );
  }

  return Promise.reject( new Error( 'Unexpected response status from API: ' + response.status ) );
}

function responseAsJSON( response: Response ) {
  return response.json();
}

function adaptResponseToResult( responseJSON ) {
  return WeatherResults.fromOpenWeatherMapResponse( responseJSON );
}
