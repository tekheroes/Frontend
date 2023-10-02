import { Injectable } from '@angular/core';
import { Customer } from '../models/customer.model';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http : HttpClient) { }

  add(c : Customer) {
    this.http.post("http://localhost:8880/customer/add", c).subscribe(data => data = c);
  }

  find(custId : number) {
    return this.http.get<Customer>("http://localhost:8880/customer/" + custId);
  }

  list() {
    return this.http.get<Customer[]>("http://localhost:8880/customer/all");
  }

  authenticate(phone : string, password : string) {
    return this.http.get<Customer>("http://localhost:8880/customer/auth",{params:
      new HttpParams().append("phone", phone).append("password", password)});
  }
}
