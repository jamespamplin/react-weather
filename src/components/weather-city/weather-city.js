/**
 * Display weather for a city.
 */

/* @flow */

import React from 'react';

import { WeatherDayForcast } from '../weather-day-forcast/weather-day-forcast.js';

type Props = { city: string, results: Array<any> };


export function WeatherCity( { city, results }: Props ) {
  return (
    <div>
      <h2>Weather for: { city }</h2>
      <ol>
        {
          results.map( data =>
            <WeatherDayForcast { ...data } />
          )
        }
      </ol>
    </div>
  )
}
