import { Component, OnInit } from '@angular/core';
import { Vehicle } from '../models/vehicle.model';
import { Customer } from '../models/customer.model';
import { Billing } from '../models/billing.model';
import { BillingService } from '../services/billing.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rent-vehicle',
  templateUrl: './rent-vehicle.component.html',
  styleUrls: ['./rent-vehicle.component.css']
})
export class RentVehicleComponent implements OnInit {
  v : Vehicle = new Vehicle();
  c : Customer = new Customer();
  b : Billing = new Billing();
  amt : number = 0;

  constructor(private service : BillingService, private router : Router) { 
    this.c = JSON.parse(localStorage.getItem("User")!);
    this.v = JSON.parse(localStorage.getItem("Vehicle")!);
    this.b.custId = this.c.custId;
    this.b.regNo = this.v.regNo;
  }

  calAmt() {
    this.amt = this.b.days * this.v.rate;
  }

  save() {
    this.service.rentCar(this.b);
    this.router.navigate(['/customer/history']);
  }

  ngOnInit(): void {
  }

}
