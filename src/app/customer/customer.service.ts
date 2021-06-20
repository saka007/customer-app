import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  customerData: [];
  constructor() { }

  setCustomerData(data) {
    this.customerData = data;
  }

  getCustomerData() {
    return this.customerData;
  }
}
