import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../services/customer.service';
import { Router } from '@angular/router';
import { Customer } from '../models/customer.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  phone : string = '';
  password : string = '';
  
  constructor(private service : CustomerService, private router : Router) { }

  authenticate() {
    if(this.phone === '9999999999' && this.password === 'Admin123')
      this.router.navigate(['/admin']);
    else {
      this.service.authenticate(this.phone, this.password).subscribe(data => {
          localStorage.setItem("User", JSON.stringify(data));
          this.router.navigate(['/customer']);
      });
    }
  }

  ngOnInit(): void {
  }

}
