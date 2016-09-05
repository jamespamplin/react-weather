/**
 * Display weather for a city.
 */

/* @flow */

import React from 'react';
import moment from 'moment';

import { WeatherDayForcast } from '../weather-day-forcast/weather-day-forcast.js';

import { WeatherResults, WeatherItem } from '../weather-models/weather-models.js';

type Props = { results: WeatherResults };

const tableStyle = {
  width: '100%'
};

export function WeatherCity( { results }: Props ) {
  if ( results == undefined ) {
    return (
      <div>Weather not loaded yet</div>
    );
  }

  const items = results.items || [];
  const grouped = items ? results.getItemsByDay() : {};
  return (
    <div>
      <h2>Weather for { results.cityName }</h2>
      <table style={ tableStyle }>
        <tbody>
          {
            Object.keys( grouped ).map( key =>
              <WeatherRow key={ key } date={ key } items={ grouped[ key ] } />
            )
          }
        </tbody>
      </table>
    </div>
  )
}

function WeatherRow( { date, items }: { date: string, items: Array<WeatherItem> } ) {
  const formattedDate = moment( date ).format( 'dddd DD MMM YYYY' );
  return (
    <tr>
      <th>{ formattedDate }</th>
      {
        items.map( data =>
          <WeatherDayForcast { ...cloneForProps( data ) } />
        )
      }
    </tr>
  );
}

function cloneForProps( obj ) {
  return Object.assign( {}, obj );
}
