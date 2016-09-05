/*global document*/
/* @flow */

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';

import { store } from './store/store.js';

import { WeatherCity } from './components/weather-city/weather-city.js';
import { WeatherProvider } from './components/weather-provider/weather-provider.js';

import { updateWeatherForCityAction } from './actions/actions.js';

const elem: HTMLElement = document.getElementById( 'app' );

const stateMap1 = state => {
  return { city: state.city, results: state.results };
};

const stateMap2 = state => {
  return { city: state.city };
};

const ConnectedWeatherCity = connect( stateMap1 )( WeatherCity );
const ConnectedWeatherProvider = connect( stateMap2, { updateWeatherForCity: updateWeatherForCityAction } )( WeatherProvider );

function App() {
  return (
    <div>
      <ConnectedWeatherCity />
      <ConnectedWeatherProvider />
    </div>
  );
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  elem
);
