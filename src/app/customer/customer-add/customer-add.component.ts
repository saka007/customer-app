import { Component, OnInit } from '@angular/core';
import { ApiService } from "../../api.service";
import { CustomerService } from '../customer.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.scss']
})
export class CustomerAddComponent implements OnInit {

  addForm: FormGroup;
  submitted = false;
  errorMessage;
  loading = false;
  successResponse = false;
  addData;
  name;
  constructor(
    private apiService: ApiService,
    private router: Router,
    private CustomerService: CustomerService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.initializeForm();
  }

  initializeForm() {
    this.addForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required]],
      address: ['']
    })
  }

  get add() { return this.addForm.controls; }

  addCustomerData() {
    this.submitted = true;
    this.errorMessage = '';
    if (this.addForm.invalid) {
      return;
    }
    console.log(this.addForm);
    const body = this.addForm.value
    this.apiService.sendCustomerData(body)
      .subscribe(
        (response) => {
          this.addData = response;
          this.successResponse = true;
          this.name = this.addData.name;
        },
        (error) => {
          
          this.successResponse = false;
          for (const key in error.error) {
           this.errorMessage += "   "+error.error[key];  
          }
          console.log(this.errorMessage);
          this.loading = false;

        }
      )
  }

  clear() {
    this.errorMessage = '';
    this.successResponse = false;
  }

  redirect() {
    this.router.navigate(['/']);
  }

}
