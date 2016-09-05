/* @flow */

import moment from 'moment';
import { groupBy } from 'lodash-es';

export class WeatherResults {
  cityId: number;
  cityName: string;
  country: string;

  items: Array<WeatherItem>;

  constructor( cityId: number, cityName: string, country: string, items: Array<WeatherItem> ) {
    this.cityId = cityId;
    this.cityName = cityName;
    this.country = country;
    this.items = items;
  }

  getItemsByDay() {
    return groupBy( this.items, i => moment( i.date ).format( 'YYYY-MM-DD' ) );
  }

  static fromOpenWeatherMapResponse( responseJSON: any ) {
    const { name, country, id } = responseJSON.city;
    const items = responseJSON.list.map( WeatherItem.fromOpenWeatherMapResponse.bind( null, id ) );

    return new WeatherResults( id, name, country, items );
  }
}

export class WeatherItem {
  key: string;
  date: Date;
  tempMin: string;
  tempMax: string;
  description: string;
  iconUrl: string;

  // TODO: ICON

  constructor( cityId: number, date: Date, tempMin: string, tempMax: string, description: string, iconUrl: string ) {
    this.key = `${cityId}_${date.getTime()}`;
    this.date = date;
    this.tempMin = tempMin;
    this.tempMax = tempMax;
    this.description = description;
    this.iconUrl = iconUrl;
  }

  static fromOpenWeatherMapResponse( cityId: number, itemJSON: any ) {
    const { temp_max, temp_min } = itemJSON.main;
    const date = new Date( itemJSON.dt * 1000 );
    const { description, icon } = itemJSON.weather[ 0 ];
    const iconUrl = getIconUrl( icon );

    return new WeatherItem( cityId, date, temp_min, temp_max, description, iconUrl );
  }
}

function getIconUrl( iconKey: string ) {
  return `http://openweathermap.org/img/w/${iconKey}.png`;
}
