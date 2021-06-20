import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from "../../api.service";
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.scss']
})

export class CustomerDetailsComponent implements OnInit {

  city: string;
  getDetailList = [];
  failedToLoad: boolean;
  
  constructor(private route: ActivatedRoute,
    private router: Router,
    private apiService: ApiService,
    private customerService: CustomerService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(route => {
      const id = route.get('id');
      const getCustomerData = this.customerService.getCustomerData();
      this.getDetailList = getCustomerData.filter(val => val['id'] === id);
    });
  }

}
