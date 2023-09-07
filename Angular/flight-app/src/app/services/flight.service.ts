import { Injectable } from '@angular/core';
import { Flight } from '../flight.model';

@Injectable({
  providedIn: 'root'
})
export class FlightService {
  flights : Flight[] = [
    {"code":121, "carrier" : "Jet", "source" : "Washington", "destination" : "Los Angeles"},
    {"code":221, "carrier" : "Delta", "source" : "Chicago", "destination" : "Las Vegas"},
    {"code":122, "carrier" : "Jet", "source" : "Washington", "destination" : "New York"},
    {"code":231, "carrier" : "Delta", "source" : "Washington", "destination" : "Los Angeles"}
  ];

  constructor() { }

  persist(f : Flight) {
    this.flights.push(f);
  }

  list() {
    return this.flights;
  }

  byCarrier(car : string) {
    return this.flights.filter(f => f.carrier == car);
  }

  byRoute(src : string, dest : string) {
    return this.flights.filter(f => f.source == src && f.destination == dest);
  }

  delete(i : number) {
    this.flights.splice(i, 1);
  }
}
