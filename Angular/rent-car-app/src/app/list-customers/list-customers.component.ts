import { Component, OnInit } from '@angular/core';
import { Customer } from '../models/customer.model';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-list-customers',
  templateUrl: './list-customers.component.html',
  styleUrls: ['./list-customers.component.css']
})
export class ListCustomersComponent implements OnInit {
  customers : Customer[] = [];

  constructor(private service : CustomerService) { 
    this.service.list().subscribe(data => this.customers = data);
  }

  ngOnInit(): void {
  }

}
