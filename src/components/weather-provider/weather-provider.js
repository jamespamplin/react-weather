/* @flow */

import { updateWeatherForCityAction } from '../../actions/actions.js';

type WeatherProviderProps = {
  city: string,
  updateWeatherForCity: typeof updateWeatherForCityAction
};

export function WeatherProvider( { city, updateWeatherForCity }: WeatherProviderProps ) {

  // stubbed
  const results = [
    {
      date: '2016-09-05 03:00:00',
      tempMin: 13.97,
      tempMax: 14.11,
      desc: 'light rain'
    },
    {
      date: '2016-09-05 06:00:00',
      tempMin: 13.89,
      tempMax: 14.12,
      desc: 'light rain'
    }
  ];

  updateWeatherForCity( city, results );

  return null;
}
