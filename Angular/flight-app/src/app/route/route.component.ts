import { Component, OnInit } from '@angular/core';
import { Flight } from '../flight.model';
import { FlightService } from '../services/flight.service';

@Component({
  selector: 'app-route',
  templateUrl: './route.component.html',
  styleUrls: ['./route.component.css']
})
export class RouteComponent implements OnInit {
  cities : string[] = ["New York", "Las Vegas", "Los Angeles", "Chicago", "Washington"];
  source : string = '';
  destination : string = '';

  flights : Flight[] = [];

  constructor(private service : FlightService) { }

  ngOnInit(): void {
  }

  search() {
    this.flights = this.service.byRoute(this.source, this.destination);
  }
}
