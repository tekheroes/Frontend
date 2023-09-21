import { Component, OnInit } from '@angular/core';
import { Flight } from '../flight.model';
import { FlightService } from '../services/flight.service';

@Component({
  selector: 'app-carrier',
  templateUrl: './carrier.component.html',
  styleUrls: ['./carrier.component.css']
})
export class CarrierComponent implements OnInit {
  carriers : string[] = ["Delta", "AA", "Jet", "Virgin"];
  carrier : string = '';
  flights : Flight[] = [];

  constructor(private service : FlightService) { }

  ngOnInit(): void {
  }

  search() {
    this.service.byCarrier(this.carrier).subscribe(data => this.flights = data);
    // this.flights = this.service.byCarrier(this.carrier);
  }
}
