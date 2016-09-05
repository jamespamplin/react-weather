/* @flow */

import React from 'react';
import { connect } from 'react-redux';

import { WeatherCity } from '../components/weather-city/weather-city.js';
import { WeatherProvider } from '../components/weather-provider/weather-provider.js';

import { updateWeatherForCityAction } from '../actions/actions.js';

function mapCityAndResultsFromStateToProps( state ) {
  return { city: state.city, results: state.results };
}

function mapCityFromStateToProps( state ) {
  return { city: state.city };
}

const ConnectedWeatherCity = connect( mapCityAndResultsFromStateToProps )( WeatherCity );
const ConnectedWeatherProvider = connect( mapCityFromStateToProps, { updateWeatherForCity: updateWeatherForCityAction } )( WeatherProvider );

export function App() {
  return (
    <div>
      <ConnectedWeatherCity />
      <ConnectedWeatherProvider />
    </div>
  );
}
