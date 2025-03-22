import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountriesService } from '../../../services/countries/countries.service';
import { map, Observable } from 'rxjs';
import { FavoritesService } from '../../../services/favorites/favorites.service';

@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.css']
})
export class CountryDetailComponent implements OnInit {
  country$!: Observable<any>;
  isFavorite = false;

  constructor(
    private route: ActivatedRoute,
    private countriesService: CountriesService,
    private favoritesService: FavoritesService
  ) { }

  ngOnInit(): void {
    const name = this.route.snapshot.paramMap.get('name');
    if (name) {
      this.country$ = this.countriesService.getCountryByName(name)
        .pipe(map(data => {
          const country = data[0];
          this.isFavorite = this.favoritesService.isFavorite(country.name.common);
          return country;
        }
      ));
    }
  }

  toggleFavorite(countryName: string): void {
    if (this.isFavorite) {
      this.favoritesService.removeFavorite(countryName);
    } else {
      this.favoritesService.addFavorite(countryName);
    }
    this.isFavorite = !this.isFavorite;
  }
}

