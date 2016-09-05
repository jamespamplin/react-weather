/* @flow */

/**
 * Display weather for a single day.
 */

import React from 'react';
import moment from 'moment';

type Props = { date: Date, tempMin: string, tempMax: string, description: string };

export function WeatherDayForcast( { date, tempMin, tempMax, description }: Props ) {
  const time: string = moment( date ).format( 'HH:mm' );

  return (
    <td>
      <p>{ time }</p>
      <p>{ description }</p>
      <p>Min: { tempMin }</p>
      <p>Max: { tempMax }</p>
    </td>
  )
}
