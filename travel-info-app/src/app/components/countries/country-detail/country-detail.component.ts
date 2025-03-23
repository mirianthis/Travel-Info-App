import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountriesService } from '../../../services/countries/countries.service';
import { map, Observable } from 'rxjs';
import { FavoritesService } from '../../../services/favorites/favorites.service';
import { Favorite } from '../../../models/favourites.model';

@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.css']
})
export class CountryDetailComponent implements OnInit {
  country$!: Observable<any>;
  isFavorite = false;
  countryName!: string;

  constructor(
    private route: ActivatedRoute,
    private countriesService: CountriesService,
    private favoritesService: FavoritesService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const name = this.route.snapshot.paramMap.get('name');
    if (name) {
      this.country$ = this.countriesService.getCountryByName(name)
        .pipe(map(data => {
          const country = data[0];
          this.countryName = country.name.common;
          this.isFavorite = this.favoritesService.isFavorite(this.countryName);
          return country;
        }
      ));
    }
  }

   // Toggle favorite status for the current country
   toggleFavorite(country: any): void {
    if (this.isFavorite) {
      this.favoritesService.removeFavorite(this.countryName);
    } else {
      const favoriteCountry = {
        countryName: country.name.common,
        flags: country.flags.svg,
        region: country.region,
        population: country.population
      };
      this.favoritesService.addFavorite(favoriteCountry);
    }
    this.isFavorite = !this.isFavorite; // Toggle the flag
  }

  back() {
    this.router.navigate(['/countries']);
  }
}

