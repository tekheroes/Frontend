import { Component, OnInit } from '@angular/core';
import { Customer } from '../models/customer.model';
import { CustomerService } from '../services/customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-customer',
  templateUrl: './new-customer.component.html',
  styleUrls: ['./new-customer.component.css']
})
export class NewCustomerComponent implements OnInit {
  c : Customer = new Customer();

  constructor(private service : CustomerService, private router : Router) { }

  save() {
    this.service.add(this.c);
    this.router.navigate(['/login']);
  }
  
  ngOnInit(): void {
  }

}
