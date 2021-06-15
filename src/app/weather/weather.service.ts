import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  weatherData: [];
  constructor() { }

  setWeatherData(data) {
    this.weatherData = data;
  }

  getWeatherData() {
    return this.weatherData;
  }
}
