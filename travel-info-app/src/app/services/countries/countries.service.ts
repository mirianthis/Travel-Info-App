import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private apiUrl = 'https://restcountries.com/v3.1';

  constructor(private http: HttpClient) { }

  // Fetch all countries with selected fields
  getAllCountries(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/all?fields=name,flags,capital,population,region`);
  }

  // Fetch details of a single country by name
  getCountryByName(name: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/name/${name}?fullText=true`);
  }

  // Get countries that start with the given name (partial matching)
  getCountriesByPrefix(prefix: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/name/${prefix}?fullText=false`);
  }
}
