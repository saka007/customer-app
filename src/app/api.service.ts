import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiWeatherUrl = environment.apiUrl;
  appId = environment.appId;
  unit = environment.unit;
  constructor(private http: HttpClient) { }

  getWeatherByMultipleCityId(cityId) {
    const apiCall = `${this.apiWeatherUrl}group?id=${cityId}&units=${this.unit}&APPID=${this.appId}`;
    return this.http.get(apiCall);
  }

  getWeatherByCityName(cityName) {
    const apiCall = `${this.apiWeatherUrl}forecast?q=${cityName}&units=${this.unit}&APPID=${this.appId}`;
    return this.http.get(apiCall);
  }
}
