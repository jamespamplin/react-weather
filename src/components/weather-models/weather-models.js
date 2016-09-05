/* @flow */

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

  static fromOpenWeatherMapResponse( responseJSON: any ) {
    const { name, country, id } = responseJSON.city;
    const items = responseJSON.list.map( WeatherItem.fromOpenWeatherMapResponse.bind( null, id ) );

    return new WeatherResults( id, name, country, items );
  }
}

export class WeatherItem {
  key: string;
  date: string;
  tempMin: string;
  tempMax: string;
  description: string;

  // TODO: ICON

  constructor( cityId: number, date: string, tempMin: string, tempMax: string, description: string ) {
    this.key = `${cityId}_${date}`;
    this.date = date;
    this.tempMin = tempMin;
    this.tempMax = tempMax;
    this.description = description;
  }

  static fromOpenWeatherMapResponse( cityId: number, itemJSON: any ) {
    const { temp_max, temp_min } = itemJSON.main;
    const date = itemJSON.dt_txt;
    const description = itemJSON.weather[ 0 ].description;

    return new WeatherItem( cityId, date, temp_min, temp_max, description );
  }
}
