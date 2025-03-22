import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { CalendarEvent } from 'angular-calendar';
import { CountriesService } from '../../services/countries/countries.service';
import { debounceTime, distinctUntilChanged, Observable, Subscription, switchMap } from 'rxjs';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit, OnDestroy {
  viewDate: Date = new Date(); // Default to today
  events: CalendarEvent[] = [];
  selectedCountry: string = '';
  countries: any[] = [];
  filteredCountries: any[] = [];
  selectedCountryDetails: any;
  selectedDate: Date | null = null;


  private subscription: Subscription = new Subscription();

  constructor(private countriesService: CountriesService) { }


  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    // Fetch all countries to populate the initial list
    this.countriesService.getAllCountries().subscribe(
      (data) => {
        this.countries = data;
        this.filteredCountries = data;
      },
      (error) => {
        console.error('Error fetching countries:', error);
      }
    );
  }

  // On country select, update selected country details
  onCountrySelect(country: any) {
    this.selectedCountry = country.name.common;
    this.selectedCountryDetails = country;
    this.filteredCountries = [];
  }

  // Filter countries based on input
  onCountryChange() {
    if (this.selectedCountry) {
      this.filteredCountries = this.countries.filter(country =>
        country.name.common.toLowerCase().includes(this.selectedCountry.toLowerCase())
      );
    } else {
      this.filteredCountries = this.countries;  // Show all countries if input is empty
    }
  }

  addEvent(country: any, date: Date) {
    console.log('Adding event with:', country, date);

    if (country && date) {
      this.events.push({
        title: country.name.common, // Country name in title
        start: date,
      });

      // Force the calendar to refresh
      this.viewDate = new Date();
    } else {
      console.log('Error: Missing country or date.');
    }
  }

  // Remove event from calendar
  removeEvent(eventToRemove: CalendarEvent) {
    this.events = this.events.filter(event => event !== eventToRemove);
  }
}

