import { Component, OnInit } from '@angular/core';
import { Customer } from '../models/customer.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-dash',
  templateUrl: './customer-dash.component.html',
  styleUrls: ['./customer-dash.component.css']
})
export class CustomerDashComponent implements OnInit {
  c : Customer = new Customer();

  constructor(private router : Router) { 
    this.c = JSON.parse(localStorage.getItem("User")!);
  }

  logout() {
    localStorage.setItem("User", "");
    localStorage.clear();
    this.router.navigate(['/login']);
  }

  ngOnInit(): void {
  }

}
