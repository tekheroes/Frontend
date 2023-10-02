import { Component, OnInit } from '@angular/core';
import { Invoice } from '../models/invoice.model';
import { BillingService } from '../services/billing.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-booking-history',
  templateUrl: './booking-history.component.html',
  styleUrls: ['./booking-history.component.css']
})
export class BookingHistoryComponent implements OnInit {
  invoices : Invoice[] = [];

  constructor(private service : BillingService, private router : Router) { 
    let cid = JSON.parse(localStorage.getItem("User")!).custId;
    this.service.listByCustomer(cid).subscribe(data => this.invoices = data);
  }

  returned(id : number) {
    this.service.returnCar(id);
    this.router.navigate(['/customer']);
  }

  ngOnInit(): void {
  }

}
