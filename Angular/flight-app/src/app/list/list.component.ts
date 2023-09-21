import { Component, OnInit } from '@angular/core';
import { Flight } from '../flight.model';
import { FlightService } from '../services/flight.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  flights : Flight[] = [];

  constructor(private service : FlightService) { 
    this.service.list().subscribe(data => this.flights = data);
    // this.flights = this.service.list();
  }

  ngOnInit(): void {
  }

  sort() {
    this.flights.sort((a, b) => a.code - b.code);
  }

  remove(code : number) {
    if(confirm("Are you sure to delete?"))
      this.service.delete(code);
  }
}
