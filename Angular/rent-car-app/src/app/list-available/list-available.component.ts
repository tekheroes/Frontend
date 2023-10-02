import { Component, OnInit } from '@angular/core';
import { Vehicle } from '../models/vehicle.model';
import { VehicleService } from '../services/vehicle.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-available',
  templateUrl: './list-available.component.html',
  styleUrls: ['./list-available.component.css']
})
export class ListAvailableComponent implements OnInit {
  vehicles : Vehicle[] = [];

  constructor(private service : VehicleService, private router : Router) { 
    this.service.listAvailable().subscribe(data => this.vehicles = data);
  }

  book(i : number) {
    localStorage.setItem("Vehicle", JSON.stringify(this.vehicles[i]));
    this.router.navigate(['/customer/rent']);
  }

  ngOnInit(): void {
  }

}
