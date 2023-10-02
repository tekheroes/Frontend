import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
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

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminDashComponent,
    CustomerDashComponent,
    NewCustomerComponent,
    ListAvailableComponent,
    BookingHistoryComponent,
    AddVehicleComponent,
    ListVehiclesComponent,
    RentVehicleComponent,
    ListCustomersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
