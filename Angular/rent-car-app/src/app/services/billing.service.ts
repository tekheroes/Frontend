import { Injectable } from '@angular/core';
import { Billing } from '../models/billing.model';
import { HttpClient } from '@angular/common/http';
import { Invoice } from '../models/invoice.model';

@Injectable({
  providedIn: 'root'
})
export class BillingService {

  constructor(private http : HttpClient) { }

  rentCar(billing : Billing) {
    this.http.post("http://localhost:8880/invoice/rent", billing).subscribe(data => data = billing);
  }

  returnCar(id : number) {
    this.http.post("http://localhost:8880/invoice/return/" + id, null).subscribe();
  }

  listByCustomer(custId : number) {
    return this.http.get<Invoice[]>("http://localhost:8880/invoice/customer/" + custId);
  }

  listByVehicle(regNo : string) {
    return this.http.get<Invoice[]>("http://localhost:8880/invoice/vehicle/" + regNo);
  }
}
