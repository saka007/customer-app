import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiWeatherUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }

  getCustomerList() {
    const apiCall = `${this.apiWeatherUrl}`;
    return this.http.get(apiCall);
  }

  sendCustomerData(requestBody) {
    const apiCall = `${this.apiWeatherUrl}`;
    return this.http.post(apiCall, requestBody);
  }
}
