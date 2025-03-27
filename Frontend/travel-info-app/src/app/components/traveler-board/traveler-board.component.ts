import { Component, OnInit } from '@angular/core';
import { CalendarEvent } from 'angular-calendar';

@Component({
  selector: 'app-traveler-board',
  templateUrl: './traveler-board.component.html',
  styleUrl: './traveler-board.component.css'
})
export class TravelerBoardComponent implements OnInit{
  trips: CalendarEvent[] = [
    {
      title: 'Trip to Italy',
      start: new Date(2025, 5, 12),
      color: { primary: '#e74c3c', secondary: '#ffb6b9' },
      meta: { flag: 'https://flagcdn.com/w320/it.png' }
    },
    {
      title: 'Trip to Japan',
      start: new Date(2025, 7, 18),
      color: { primary: '#3498db', secondary: '#aed6f1' },
      meta: { flag: 'https://flagcdn.com/w320/jp.png' }
    },
    {
      title: 'Trip to Brazil',
      start: new Date(2025, 3, 5),
      color: { primary: '#2ecc71', secondary: '#a9dfbf' },
      meta: { flag: 'https://flagcdn.com/w320/br.png' }
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  removeTrip(trip: CalendarEvent): void {
    this.trips = this.trips.filter(event => event !== trip);
  }
}
