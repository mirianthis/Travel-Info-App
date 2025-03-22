import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries/countries.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrl: './countries.component.css'
})
export class CountriesComponent {
  countries: any[] = [];
  searchTerm: string = '';

  // Observables
  getAllCountries$: Observable<any> = this.countriesService.getAllCountries();

  constructor(private countriesService: CountriesService, private router: Router) {}

  ngOnInit(): void {
  }

  viewDetails(name: string) {
    this.router.navigate(['/country', name]);
  }
}
