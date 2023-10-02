import { Component, OnInit } from '@angular/core';
import { Vehicle } from '../models/vehicle.model';
import { VehicleService } from '../services/vehicle.service';

@Component({
  selector: 'app-list-vehicles',
  templateUrl: './list-vehicles.component.html',
  styleUrls: ['./list-vehicles.component.css']
})
export class ListVehiclesComponent implements OnInit {
  vehicles : Vehicle[] = [];

  constructor(private service : VehicleService) { 
    this.service.list().subscribe(data => this.vehicles = data);
  }

  remove(regNo : string) {
    if(confirm("Are you sure to delete!"))
      this.service.remove(regNo);
  }

  ngOnInit(): void {
  }

}
