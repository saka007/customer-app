import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerDetailsComponent } from './customer/customer-details/customer-details.component';
import { CustomerComponent } from './customer/customer.component';
import { CustomerAddComponent } from './customer/customer-add/customer-add.component';

const routes: Routes = [
  { path: '', component: CustomerComponent },
  { path: 'customer/:id', component: CustomerDetailsComponent },
  { path: 'add', component: CustomerAddComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
