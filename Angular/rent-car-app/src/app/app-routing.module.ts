import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminDashComponent } from './admin-dash/admin-dash.component';
import { CustomerDashComponent } from './customer-dash/customer-dash.component';
import { NewCustomerComponent } from './new-customer/new-customer.component';
import { ListAvailableComponent } from './list-available/list-available.component';
import { BookingHistoryComponent } from './booking-history/booking-history.component';
import { AddVehicleComponent } from './add-vehicle/add-vehicle.component';
import { ListVehiclesComponent } from './list-vehicles/list-vehicles.component';
import { RentVehicleComponent } from './rent-vehicle/rent-vehicle.component';
import { ListCustomersComponent } from './list-customers/list-customers.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'admin', component: AdminDashComponent, children: [
    {path: 'add', component: AddVehicleComponent},
    {path: 'list', component: ListVehiclesComponent},
    {path: 'customers', component: ListCustomersComponent}
  ]},
  {path: 'customer', component: CustomerDashComponent, children: [
    {path: 'available', component: ListAvailableComponent},
    {path: 'history', component: BookingHistoryComponent},
    {path: 'rent', component: RentVehicleComponent} 
  ]},
  {path: 'register', component: NewCustomerComponent},
  {path: '**', redirectTo: '/login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
