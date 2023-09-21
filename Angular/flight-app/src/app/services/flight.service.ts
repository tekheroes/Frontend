import { Injectable } from '@angular/core';
import { Flight } from '../flight.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FlightService {
  // flights : Flight[] = [];

  constructor(private http : HttpClient) { 
    // this.http.get<Flight[]>('http://localhost:8880/flight/all').subscribe(data => this.flights = data);
  }

  persist(f : Flight) {
    this.http.post('http://localhost:8880/flight/add', f).subscribe(data => data = f);
    // this.flights.push(f);
  }

  list() {
    return this.http.get<Flight[]>('http://localhost:8880/flight/all');
    // return this.flights;
  }

  byCarrier(car : string) {
    return this.http.get<Flight[]>('http://localhost:8880/flight/carrier/' + car);
    // return this.flights.filter(f => f.carrier == car);
  }

  byRoute(src : string, dest : string) {
    return this.http.get<Flight[]>('http://localhost:8880/flight/route?source='+src+'&destination='+dest);
    // return this.flights.filter(f => f.source == src && f.destination == dest);
  }

  delete(code : number) {
    this.http.delete('http://localhost:8880/flight/'+code).subscribe();
    // this.flights.splice(i, 1);
  }
}
