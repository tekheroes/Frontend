import { Component, OnInit } from '@angular/core';
import { Vehicle } from '../models/vehicle.model';
import { VehicleService } from '../services/vehicle.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-vehicle',
  templateUrl: './add-vehicle.component.html',
  styleUrls: ['./add-vehicle.component.css']
})
export class AddVehicleComponent implements OnInit {
  v : Vehicle = new Vehicle();
  types : string[] = ["SUV","Sedan","Hatchback","MUV"];

  constructor(private service : VehicleService, private router : Router) { }

  save() {
    this.service.add(this.v);
    this.router.navigate(['/admin']);
  }

  ngOnInit(): void {
  }

}
