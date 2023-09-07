import { Component, OnInit } from '@angular/core';
import { Flight } from '../flight.model';
import { FlightService } from '../services/flight.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  flight : Flight = new Flight();
  carriers : string[] = ["Delta", "AA", "Jet", "Virgin"];
  cities : string[] = ["New York", "Las Vegas", "Los Angeles", "Chicago", "Washington"];

  constructor(private service : FlightService, private router : Router) { }

  ngOnInit(): void {
  }

  save() {
    this.service.persist(this.flight);
    this.router.navigate(["/list"]);
  }
}
