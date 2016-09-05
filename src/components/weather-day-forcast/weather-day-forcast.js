/* @flow */

/**
 * Display weather for a single day.
 */



import React from 'react';

// type WeatherData = { date: Date, tempMin: number, tempMax: number, desc: string };
type Props = { date: string, tempMin: number, tempMax: number, description: string };

export function WeatherDayForcast( { date, tempMin, tempMax, description }: Props ) {
  return (
    <li>
      <p>Date: { date }</p>
      <p>Min: { tempMin }</p>
      <p>Max: { tempMax }</p>
      <p>Description: { description }</p>
    </li>
  )
}
