/**
 * Display weather for a city.
 */

/* @flow */

import React from 'react';

import { WeatherDayForcast } from '../weather-day-forcast/weather-day-forcast.js';

import { WeatherResults } from '../weather-models/weather-models.js';

type Props = { results: WeatherResults };


export function WeatherCity( { results }: Props ) {
  if ( results == undefined ) {
    return (
      <div>Weather not loaded yet</div>
    );
  }

  const items = results.items || [];
  return (
    <div>
      <h2>Weather for { results.cityName }</h2>
      <ol>
        {
          items.map( data =>
            <WeatherDayForcast { ...data } />
          )
        }
      </ol>
    </div>
  )
}
