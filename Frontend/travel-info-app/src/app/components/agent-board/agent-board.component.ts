import { Component, OnInit } from '@angular/core';
import { CalendarEvent } from 'angular-calendar';

@Component({
  selector: 'app-agent-board',
  templateUrl: './agent-board.component.html',
  styleUrl: './agent-board.component.css'
})
export class AgentBoardComponent implements OnInit{
  trips: CalendarEvent[] = [
    {
      title: 'Trip to France',
      start: new Date(2025, 6, 10),
      color: { primary: '#e74c3c', secondary: '#ffb6b9' },
      meta: { flag: 'https://flagcdn.com/w320/fr.png' }
    },
    {
      title: 'Trip to Spain',
      start: new Date(2025, 8, 15),
      color: { primary: '#3498db', secondary: '#aed6f1' },
      meta: { flag: 'https://flagcdn.com/w320/es.png' }
    },
    {
      title: 'Trip to Australia',
      start: new Date(2025, 11, 1),
      color: { primary: '#2ecc71', secondary: '#a9dfbf' },
      meta: { flag: 'https://flagcdn.com/w320/au.png' }
    }
  ];

  clients: any[] = [
    { id: 1, name: 'Alice', trip: 'Trip to France', bookingStatus: 'Confirmed' },
    { id: 2, name: 'Bob', trip: 'Trip to Spain', bookingStatus: 'Pending' },
    { id: 3, name: 'Charlie', trip: 'Trip to Australia', bookingStatus: 'Confirmed' }
  ];

  constructor() { }

  ngOnInit(): void { }

  // Update client booking status
  updateBookingStatus(client: any, newStatus: string): void {
    client.bookingStatus = newStatus;
  }

  // View trip details
  viewTripDetails(trip: CalendarEvent): void {
    alert(`Viewing details for: ${trip.title}`);
  }
}
