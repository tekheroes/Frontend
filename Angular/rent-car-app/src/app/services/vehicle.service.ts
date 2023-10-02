import { Injectable } from '@angular/core';
import { Vehicle } from '../models/vehicle.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  constructor(private http : HttpClient) { }

  add(v : Vehicle) {
    this.http.post("http://localhost:8880/vehicle/add", v).subscribe(data => data = v);
  }

  find(regNo : string) {
    return this.http.get<Vehicle>("http://localhost:8880/vehicle/" + regNo);
  }

  list() {
    return this.http.get<Vehicle[]>("http://localhost:8880/vehicle/all");
  }

  listAvailable() {
    return this.http.get<Vehicle[]>("http://localhost:8880/vehicle/available");
  }

  remove(regNo : string) {
    this.http.delete("http://localhost:8880/vehicle/" + regNo).subscribe();
  }
}
