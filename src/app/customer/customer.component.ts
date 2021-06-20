import { Component, OnInit } from '@angular/core';
import { ApiService } from "../api.service";
import { Router } from '@angular/router';
import { CustomerService } from './customer.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

  searchForm: FormGroup;
  customerList;
  getSearchableData;
  constructor(
    private apiService: ApiService,
    private router: Router,
    private CustomerService: CustomerService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.initializeForm();
    this.getCustomerList();
  }

  initializeForm() {
    this.searchForm = this.fb.group({
      search: ['']
    })
  }

  getCustomerList() {
    const getCustomerData = this.CustomerService.getCustomerData();
    console.log(this.searchForm);
    console.log(getCustomerData);
    if (getCustomerData) {
      this.customerList = getCustomerData;
    } else {
      this.apiService.getCustomerList().subscribe(data => {
        console.log(data);
        this.customerList = data;
        this.CustomerService.setCustomerData(this.customerList);
      });
    }
    if (this.searchForm.value.search) {
      this.customerList = this.customerList.filter(val => val['name'].toLowerCase() === this.searchForm.value.search.toLowerCase());
      
    }
  }

  navigateTodetailsPage(id) {
    this.router.navigate(['/customer/' + id]);
  }

  addCustomer() {
    this.router.navigate(['/add/']);
  }
}
