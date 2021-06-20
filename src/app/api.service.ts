import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiCustomerUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }

  getCustomerList() {
    const apiCall = `${this.apiCustomerUrl}`;
    return this.http.get(apiCall);
  }

  sendCustomerData(requestBody) {
    const apiCall = `${this.apiCustomerUrl}`;
    return this.http.post(apiCall, requestBody);
  }
}
